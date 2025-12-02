// Generic Notion CRUD Proxy Server
// Universal CRUD operations for any Notion database

export const config = {
  method: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};

// Constants
const NOTION_API_VERSION = "2022-06-28";
const NOTION_BASE_URL = "https://api.notion.com/v1";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Admin-Code",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

// Helper function to verify admin code
function verifyAdminCode(request) {
  const adminCode = process.env.ADMIN_CODE;
  
  // If no admin code is configured, allow access (backward compatibility)
  if (!adminCode) {
    return true;
  }

  // Get admin code from header
  const providedCode = request.headers.get("X-Admin-Code");
  
  // For modifying operations, require admin code
  const isModifyingOperation = ["POST", "PUT", "DELETE", "PATCH"].includes(request.method);
  
  if (isModifyingOperation) {
    if (!providedCode) {
      return false;
    }
    return providedCode === adminCode;
  }

  // For read operations (GET), allow without admin code
  return true;
}

export default async function handler(request, context) {
  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  // Verify admin code for modifying operations
  if (!verifyAdminCode(request)) {
    return createErrorResponse("Admin authentication required", 401);
  }

  const notionApiKey = process.env.NOTION_API_KEY;

  let url;
  try {
    url = new URL(request.url);
  } catch (error) {
    console.error("Error parsing request URL:", request.url, error);
    return createErrorResponse(`Invalid request URL: ${request.url}`, 400);
  }

  const method = request.method;
  const recordId = url.searchParams.get("id");
  const pageId = url.searchParams.get("page_id");
  const databaseId =
    url.searchParams.get("database_id") || process.env.NOTION_DATABASE_ID;

  if (!notionApiKey) {
    return createErrorResponse("Notion API key missing", 500);
  }

  try {
    switch (method) {
      case "GET":
        // Get parent page ID from environment
        if (url.searchParams.get("parent_page_id") === "true") {
          const parentPageId = process.env.NOTION_PARENT_PAGE_ID;
          return createSuccessResponse({
            success: true,
            parentPageId: parentPageId || null,
          });
        }
        // Get child databases from a page
        if (url.searchParams.get("child_databases") === "true" && pageId) {
          const includePageInfo = url.searchParams.get("include_page_info") === "true";
          return await getChildDatabases(pageId, notionApiKey, includePageInfo);
        }
        // Get aggregations/stats
        if (url.searchParams.get("aggregate") === "true") {
          const aggregateType = url.searchParams.get("type");
          const targetDatabaseId = url.searchParams.get("database_id") || databaseId;
          if (!targetDatabaseId) {
            return createErrorResponse("Database ID required for aggregations", 400);
          }
          return await getAggregations(targetDatabaseId, aggregateType, notionApiKey, url.searchParams);
        }
        // Get page details
        if (url.searchParams.get("page_info") === "true" && pageId) {
          return await getPageInfo(pageId, notionApiKey);
        }
        // Get record by ID
        if (recordId) {
          return await getRecord(recordId, notionApiKey);
        }
        // Get database info
        if (url.searchParams.get("info") === "true") {
          if (!databaseId) {
            return createErrorResponse("Database ID missing", 400);
          }
          return await getDatabaseInfo(databaseId, notionApiKey);
        }
        // Get all records
        if (!databaseId) {
          return createErrorResponse("Database ID missing", 400);
        }
        return await getAllRecords(
          databaseId,
          notionApiKey,
          url.searchParams
        );

      case "POST":
        if (!databaseId) {
          return createErrorResponse("Database ID missing", 400);
        }
        const createData = await request.json();
        return await createRecord(databaseId, createData, notionApiKey);

      case "PUT":
        if (!recordId) {
          throw new Error("Record ID is required for updates");
        }
        const updateData = await request.json();
        return await updateRecord(recordId, updateData, notionApiKey);

      case "DELETE":
        if (!recordId) {
          throw new Error("Record ID is required for deletion");
        }
        return await deleteRecord(recordId, notionApiKey);

      default:
        throw new Error(`Method ${method} not allowed`);
    }
  } catch (error) {
    return createErrorResponse(error.message || "Operation failed", 500);
  }
}

// Helper function to create error responses
function createErrorResponse(message, status = 500) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// Helper function to create success responses
function createSuccessResponse(data, status = 200) {
  // Mask private fields before sending response
  const maskedData = maskPrivateFields(data);
  return new Response(JSON.stringify(maskedData), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// Helper function to mask private fields marked with (Private)
function maskPrivateFields(data) {
  if (!data || typeof data !== "object") {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => maskPrivateFields(item));
  }

  const masked = {};
  for (const [key, value] of Object.entries(data)) {
    if (key === "properties" && value && typeof value === "object") {
      // Handle Notion properties specifically
      masked[key] = maskNotionProperties(value);
    } else if (typeof value === "object" && value !== null) {
      masked[key] = maskPrivateFields(value);
    } else {
      masked[key] = value;
    }
  }
  return masked;
}

// Helper function to mask Notion properties marked as (Private)
function maskNotionProperties(properties) {
  const masked = {};
  for (const [propName, propValue] of Object.entries(properties)) {
    if (propName.includes("(Private)")) {
      // Mask private fields based on their type
      masked[propName] = maskPrivateValue(propValue);
    } else {
      masked[propName] = propValue;
    }
  }
  return masked;
}

// Helper function to mask private values based on type
function maskPrivateValue(propValue) {
  if (!propValue || typeof propValue !== "object") {
    return propValue;
  }

  // Handle different Notion property types
  if (propValue.type === "email" && propValue.email) {
    return {
      ...propValue,
      email: "******@****.***",
    };
  }

  if (propValue.type === "phone_number" && propValue.phone_number) {
    return {
      ...propValue,
      phone_number: "+**-****-******",
    };
  }

  if (propValue.type === "number" && propValue.number !== null) {
    return {
      ...propValue,
      number: "+**-****-******",
    };
  }

  if (propValue.type === "rich_text" && propValue.rich_text) {
    return {
      ...propValue,
      rich_text: [{ text: { content: "***" } }],
    };
  }

  if (propValue.type === "title" && propValue.title) {
    return {
      ...propValue,
      title: [{ text: { content: "***" } }],
    };
  }

  if (propValue.type === "url" && propValue.url) {
    return {
      ...propValue,
      url: "https://***",
    };
  }

  // For other types, just mask the content
  return {
    ...propValue,
    content: "***",
  };
}

// Helper function to make Notion API calls
async function makeNotionRequest(endpoint, options = {}, notionApiKey) {
  // Build request options properly
  const requestOptions = {
    method: options.method || "GET",
    headers: {
      Authorization: `Bearer ${notionApiKey}`,
      "Notion-Version": NOTION_API_VERSION,
      ...options.headers,
    },
  };

  // Only add body for POST/PUT/PATCH requests
  if (
    options.body &&
    ["POST", "PUT", "PATCH"].includes(requestOptions.method)
  ) {
    requestOptions.body = options.body;
  }

  // Ensure endpoint doesn't have leading slash (base URL already has it)
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${NOTION_BASE_URL}${cleanEndpoint}`;

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText, error: errorText };
      }
      const errorMessage = errorData.message || errorData.error || `HTTP ${response.status}`;
      console.error(`Notion API error for ${url}:`, {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Re-throw with more context if it's a fetch error
    if (error.message.includes("fetch") || error.message.includes("Invalid request URL")) {
      console.error(`Fetch error for ${url}:`, error);
      throw new Error(`Failed to connect to Notion API: ${error.message} (URL: ${url})`);
    }
    throw error;
  }
}

// Get database information
async function getDatabaseInfo(databaseId, notionApiKey) {
  const database = await makeNotionRequest(
    `/databases/${databaseId}`,
    {},
    notionApiKey
  );

  return createSuccessResponse({
    success: true,
    database: database,
  });
}

// Get all records from database
// Cache for database schema checks (to avoid redundant GET requests)
const schemaCache = new Map();
const SCHEMA_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Cache for database search results (databases don't change often)
const databaseSearchCache = new Map();
const DATABASE_SEARCH_CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

async function getAllRecords(databaseId, notionApiKey, searchParams) {
  const page_size = parseInt(searchParams.get("page_size")) || 100;
  const start_cursor = searchParams.get("start_cursor");
  const approvedOnly = searchParams.get("approved_only") === "true";

  const body = { page_size };
  if (start_cursor) {
    body.start_cursor = start_cursor;
  }

  // Check for archived property and add filter if it exists
  // Use cache or frontend-provided info to avoid redundant GET requests
  let hasArchivedProperty = false;
  const hasArchivedParam = searchParams.get("has_archived");

  // First, check if frontend provided the info (most efficient - avoids GET request)
  if (hasArchivedParam !== null) {
    hasArchivedProperty = hasArchivedParam === "true";
  } else {
    // Fallback to cache
    const cacheKey = `schema_${databaseId}`;
    const cached = schemaCache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < SCHEMA_CACHE_DURATION) {
      // Use cached result
      hasArchivedProperty = cached.hasArchived;
    } else {
      // Fetch schema only if not cached or cache expired (last resort)
      try {
        const schema = await makeNotionRequest(
          `/databases/${databaseId}`,
          {},
          notionApiKey
        );
        hasArchivedProperty = !!schema.properties?.archived;

        // Cache the result
        schemaCache.set(cacheKey, {
          hasArchived: hasArchivedProperty,
          timestamp: Date.now()
        });
      } catch (error) {
        // Silently proceed without filter if archived property check fails
        // Cache negative result to avoid repeated failed requests
        schemaCache.set(cacheKey, {
          hasArchived: false,
          timestamp: Date.now()
        });
      }
    }
  }

  // Build filters array for compound filters
  const filters = [];

  if (hasArchivedProperty) {
    filters.push({
      property: "archived",
      checkbox: { equals: false },
    });
  }

  // Add approved filter if requested (for customer-facing pages)
  if (approvedOnly) {
    filters.push({
      property: "Approved",
      checkbox: { equals: true },
    });
  }

  // Apply filters
  if (filters.length === 1) {
    body.filter = filters[0];
  } else if (filters.length > 1) {
    body.filter = {
      and: filters,
    };
  }

  const data = await makeNotionRequest(
    `/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
    notionApiKey
  );

  return createSuccessResponse({
    success: true,
    results: data.results,
    has_more: data.has_more,
    next_cursor: data.next_cursor,
  });
}

// Get specific record
async function getRecord(recordId, notionApiKey) {
  const page = await makeNotionRequest(`/pages/${recordId}`, {}, notionApiKey);

  return createSuccessResponse({
    success: true,
    result: page,
  });
}

// Create new record
async function createRecord(databaseId, properties, notionApiKey) {
  const page = await makeNotionRequest(
    "/pages",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties,
      }),
    },
    notionApiKey
  );

  return createSuccessResponse(
    {
      success: true,
      result: page,
      message: "Record created successfully",
    },
    201
  );
}

// Update record
async function updateRecord(recordId, properties, notionApiKey) {
  const page = await makeNotionRequest(
    `/pages/${recordId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ properties }),
    },
    notionApiKey
  );

  return createSuccessResponse({
    success: true,
    result: page,
    message: "Record updated successfully",
  });
}

// Delete (archive) record
async function deleteRecord(recordId, notionApiKey) {
  await makeNotionRequest(
    `/pages/${recordId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ archived: true }),
    },
    notionApiKey
  );

  return createSuccessResponse({
    success: true,
    message: "Record deleted successfully",
  });
}

// Helper function to format Notion ID (remove dashes - Notion API requires IDs without dashes)
function formatNotionId(id) {
  if (!id) return id;
  // Remove any dashes - Notion API expects 32-character strings without hyphens
  return id.replace(/-/g, '');
}

// Helper function to format Notion ID with dashes for URLs (Notion URLs use dashes)
function formatNotionIdForUrl(id) {
  if (!id) return id;
  // Remove any existing dashes
  const cleanId = id.replace(/-/g, '');
  // Add dashes in the format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  if (cleanId.length === 32) {
    return `${cleanId.slice(0, 8)}-${cleanId.slice(8, 12)}-${cleanId.slice(12, 16)}-${cleanId.slice(16, 20)}-${cleanId.slice(20)}`;
  }
  return id;
}

// Get page information
async function getPageInfo(pageId, notionApiKey) {
  // Format the page ID to remove dashes (Notion API requires IDs without dashes)
  const formattedPageId = formatNotionId(pageId);
  const page = await makeNotionRequest(`/pages/${formattedPageId}`, {}, notionApiKey);

  // Log the response for debugging
  return createSuccessResponse({
    success: true,
    page: page,
  });
}

// Get child databases from a page
async function getChildDatabases(pageId, notionApiKey, includePageInfo = true) {
  try {
    if (!pageId) {
      return createErrorResponse("Page ID is required", 400);
    }

    // Format the page ID to remove dashes (Notion API requires IDs without dashes)
    const formattedPageId = formatNotionId(pageId);

    // Optionally fetch page info (only if needed - e.g., for AdminDashboard to get workspace URL)
    // Note: The search API doesn't actually filter by parent page, so page verification is not required
    let pageInfo = null;
    if (includePageInfo) {
      try {
        pageInfo = await makeNotionRequest(`/pages/${formattedPageId}`, {}, notionApiKey);
      } catch (error) {
        // Don't fail if page info can't be fetched - search API will still work
        console.warn(`Could not fetch page info for ${formattedPageId}:`, error.message);
        // Continue without page info - search API doesn't need it
      }
    }

    // Check cache first (databases don't change often)
    const cacheKey = `database_search_${notionApiKey?.substring(0, 10)}`; // Use API key prefix as cache key
    const cached = databaseSearchCache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < DATABASE_SEARCH_CACHE_DURATION) {
      return createSuccessResponse({
        success: true,
        databases: cached.databases,
        page: pageInfo, // Return page info if available
      });
    }

    const databases = [];
    let startCursor = null;
    let hasMore = true;

    // Use search API directly - more reliable than blocks/children endpoint
    // The blocks/children endpoint requires the page to have child blocks,
    // but search API works for finding all databases accessible to the integration
    // Note: This returns ALL databases, not filtered by parent page
    while (hasMore) {
      const searchBody = {
        filter: {
          property: "object",
          value: "database"
        },
        page_size: 100
      };
      if (startCursor) {
        searchBody.start_cursor = startCursor;
      }

      const response = await makeNotionRequest(
        `/search`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(searchBody),
        },
        notionApiKey
      );

      // Handle response from search API - results are databases
      let itemsToProcess = [];

      if (response.results && response.results.length > 0) {
        // Results from search API are databases directly
        itemsToProcess = response.results.filter(
          (item) => item.object === "database"
        );
      }

      for (const item of itemsToProcess) {
        try {
          // Results from search API are already database objects
          const database = item;

          // Format database ID with dashes for URL
          const dbIdWithDashes = formatNotionIdForUrl(database.id);

          // Construct Notion database URL
          // Try to use public_url if available, otherwise construct from ID
          let dbUrl = database.public_url || database.url;
          if (!dbUrl) {
            // Construct URL: https://www.notion.so/{database_id}
            dbUrl = `https://www.notion.so/${dbIdWithDashes}`;
          }

          databases.push({
            id: database.id,
            title: database.title?.[0]?.plain_text || "Untitled Database",
            description: database.description?.[0]?.plain_text || "",
            properties: database.properties,
            created_time: database.created_time,
            last_edited_time: database.last_edited_time,
            url: dbUrl,
          });
        } catch (error) {
          console.error(`Error processing database ${item.id}:`, error);
          // Continue with other databases even if one fails
        }
      }

      hasMore = response.has_more;
      startCursor = response.next_cursor;
    }

    // Cache the results
    databaseSearchCache.set(cacheKey, {
      databases: databases,
      timestamp: Date.now()
    });

    return createSuccessResponse({
      success: true,
      databases: databases,
      page: pageInfo, // Return page info to avoid duplicate API call
    });
  } catch (error) {
    console.error("Error in getChildDatabases:", error);
    return createErrorResponse(
      error.message || "Failed to get child databases",
      500
    );
  }
}

// Get aggregations/stats for a database
async function getAggregations(databaseId, aggregateType, notionApiKey, searchParams = null) {
  const formattedDatabaseId = formatNotionId(databaseId);

  // Use cache or frontend-provided info to avoid redundant GET requests
  let database = null;
  let hasArchivedProperty = false;

  // Check if frontend provided has_archived flag
  const hasArchivedParam = searchParams?.get("has_archived");
  const cacheKey = `schema_${formattedDatabaseId}`;

  if (hasArchivedParam !== null) {
    hasArchivedProperty = hasArchivedParam === "true";
    // Still need database for property structure, but can use cache
    const cached = schemaCache.get(cacheKey);
    if (cached && cached.database && Date.now() - cached.timestamp < SCHEMA_CACHE_DURATION) {
      database = cached.database;
    } else {
      database = await makeNotionRequest(
        `/databases/${formattedDatabaseId}`,
        {},
        notionApiKey
      );
      // Cache the full database object
      schemaCache.set(cacheKey, {
        hasArchived: hasArchivedProperty,
        database: database,
        timestamp: Date.now()
      });
    }
  } else {
    // Check cache first
    const cached = schemaCache.get(cacheKey);
    if (cached && cached.database && Date.now() - cached.timestamp < SCHEMA_CACHE_DURATION) {
      database = cached.database;
      hasArchivedProperty = cached.hasArchived;
    } else {
      database = await makeNotionRequest(
        `/databases/${formattedDatabaseId}`,
        {},
        notionApiKey
      );
      hasArchivedProperty = !!database.properties?.archived;
      // Cache the full database object
      schemaCache.set(cacheKey, {
        hasArchived: hasArchivedProperty,
        database: database,
        timestamp: Date.now()
      });
    }
  }

  // Get all records (we'll need to paginate through all)
  let allResults = [];
  let startCursor = null;
  let hasMore = true;

  while (hasMore) {
    const body = { page_size: 100 };
    if (startCursor) {
      body.start_cursor = startCursor;
    }

    // Filter out archived items if archived property exists
    if (hasArchivedProperty) {
      body.filter = {
        property: "archived",
        checkbox: { equals: false },
      };
    }

    const response = await makeNotionRequest(
      `/databases/${formattedDatabaseId}/query`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
      notionApiKey
    );

    allResults = allResults.concat(response.results);
    hasMore = response.has_more;
    startCursor = response.next_cursor;
  }

  // Calculate aggregations based on type
  let result = {};

  switch (aggregateType) {
    case "total":
      // Total count of all records
      result = {
        success: true,
        count: allResults.length,
        type: "total",
      };
      break;

    case "categories":
      // Count unique categories
      const categoryProperty = findPropertyByName(database.properties, [
        "category",
        "categories",
        "type",
        "Type",
        "Category",
      ]);

      if (categoryProperty) {
        const categories = new Set();
        allResults.forEach((page) => {
          const prop = page.properties[categoryProperty];
          if (prop) {
            if (prop.type === "select" && prop.select) {
              categories.add(prop.select.name);
            } else if (prop.type === "multi_select" && prop.multi_select) {
              prop.multi_select.forEach((item) => categories.add(item.name));
            }
          }
        });
        result = {
          success: true,
          count: categories.size,
          categories: Array.from(categories),
          type: "categories",
        };
      } else {
        result = {
          success: true,
          count: 0,
          categories: [],
          type: "categories",
          message: "No category property found",
        };
      }
      break;

    case "available":
      // Count available items
      const statusProperty = findPropertyByName(database.properties, [
        "status",
        "Status",
        "available",
        "Available",
        "state",
        "State",
      ]);

      if (statusProperty) {
        const availableCount = allResults.filter((page) => {
          const prop = page.properties[statusProperty];
          if (prop) {
            if (prop.type === "select" && prop.select) {
              return (
                prop.select.name.toLowerCase() === "available" ||
                prop.select.name.toLowerCase() === "active"
              );
            } else if (prop.type === "status" && prop.status) {
              return (
                prop.status.name.toLowerCase() === "available" ||
                prop.status.name.toLowerCase() === "active"
              );
            } else if (prop.type === "checkbox") {
              return prop.checkbox === true;
            }
          }
          return false;
        }).length;

        result = {
          success: true,
          count: availableCount,
          type: "available",
        };
      } else {
        result = {
          success: true,
          count: 0,
          type: "available",
          message: "No status property found",
        };
      }
      break;

    default:
      result = {
        success: false,
        error: `Unknown aggregation type: ${aggregateType}`,
      };
  }

  return createSuccessResponse(result);
}

// Helper function to find property by name (case-insensitive)
function findPropertyByName(properties, possibleNames) {
  const lowerNames = possibleNames.map((n) => n.toLowerCase());
  for (const [key, value] of Object.entries(properties)) {
    if (lowerNames.includes(key.toLowerCase())) {
      return key;
    }
  }
  return null;
}
