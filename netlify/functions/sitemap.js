// Sitemap Generator
// Generates sitemap.xml with all public (non-admin) URLs including dynamic product pages

export const config = {
    method: ["GET", "OPTIONS"],
};

const NOTION_API_VERSION = "2022-06-28";
const NOTION_BASE_URL = "https://api.notion.com/v1";

// CORS headers
const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/xml",
};

// Helper to get Notion API token
function getNotionToken() {
    return process.env.NOTION_API_KEY || process.env.NOTION_TOKEN;
}

// Helper to get products database ID
async function getProductsDatabaseId(token) {
    // First try environment variable
    if (process.env.PRODUCTS_DATABASE_ID || process.env.NOTION_DATABASE_ID) {
        return process.env.PRODUCTS_DATABASE_ID || process.env.NOTION_DATABASE_ID;
    }

    // Otherwise, try to discover it from parent page
    const parentPageId = process.env.NOTION_PARENT_PAGE_ID;
    if (!parentPageId || !token) {
        return null;
    }

    try {
        // Get child databases from parent page
        const response = await fetch(`${NOTION_BASE_URL}/blocks/${parentPageId}/children`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Notion-Version": NOTION_API_VERSION,
            },
        });

        if (!response.ok) {
            throw new Error(`Notion API error: ${response.statusText}`);
        }

        const data = await response.json();
        const databases = data.results.filter(block => block.type === 'child_database');

        // Find products database (look for "product" in title, case-insensitive)
        const productsDb = databases.find(db => {
            const title = db.child_database?.title || '';
            return title.toLowerCase().includes('product');
        });

        return productsDb?.id || null;
    } catch (error) {
        console.error("Error discovering products database:", error);
        return null;
    }
}

// Fetch all products from Notion
async function fetchAllProducts() {
    const token = getNotionToken();

    if (!token) {
        console.warn("Notion token not configured");
        return [];
    }

    // Get products database ID
    const databaseId = await getProductsDatabaseId(token);

    if (!databaseId) {
        console.warn("Products database ID not found");
        return [];
    }

    try {
        // Fetch all products (handle pagination)
        let allProducts = [];
        let hasMore = true;
        let startCursor = null;

        while (hasMore) {
            const response = await fetch(`${NOTION_BASE_URL}/databases/${databaseId}/query`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Notion-Version": NOTION_API_VERSION,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    page_size: 100,
                    start_cursor: startCursor || undefined,
                }),
            });

            if (!response.ok) {
                throw new Error(`Notion API error: ${response.statusText}`);
            }

            const data = await response.json();
            allProducts = allProducts.concat(data.results || []);

            hasMore = data.has_more || false;
            startCursor = data.next_cursor || null;
        }

        return allProducts;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

// Generate slug from product data
function generateSlug(product) {
    // Try to get slug from product properties
    const slugField = product.properties?.Slug || product.properties?.slug;
    if (slugField) {
        if (slugField.type === 'rich_text' && slugField.rich_text?.[0]?.plain_text) {
            return slugField.rich_text[0].plain_text;
        }
        if (slugField.type === 'title' && slugField.title?.[0]?.plain_text) {
            return slugField.title[0].plain_text;
        }
        if (typeof slugField === 'string') {
            return slugField;
        }
    }

    // Fallback: generate from title
    const titleField = product.properties?.Title || product.properties?.title || product.properties?.Name || product.properties?.name;
    let title = '';

    if (titleField) {
        if (titleField.type === 'title' && titleField.title?.[0]?.plain_text) {
            title = titleField.title[0].plain_text;
        } else if (titleField.type === 'rich_text' && titleField.rich_text?.[0]?.plain_text) {
            title = titleField.rich_text[0].plain_text;
        } else if (typeof titleField === 'string') {
            title = titleField;
        }
    }

    if (title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }

    return null;
}

// Generate sitemap XML
function generateSitemap(urls) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq || 'weekly'}</changefreq>
    <priority>${url.priority || '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    return xml;
}

export default async function handler(request, context) {
    // Handle preflight requests
    if (request.method === "OPTIONS") {
        return new Response("", { status: 200, headers: corsHeaders });
    }

    try {
        // Get site URL from context or environment
        const siteUrl = context.site?.url || process.env.SITE_URL || process.env.URL || 'https://your-site.netlify.app';
        const baseUrl = siteUrl.replace(/\/$/, ''); // Remove trailing slash

        // Get current date in ISO format
        const lastmod = new Date().toISOString().split('T')[0];

        // Static public routes
        const staticRoutes = [
            { path: '/', changefreq: 'daily', priority: '1.0' },
            { path: '/products', changefreq: 'weekly', priority: '0.9' },
            { path: '/about', changefreq: 'monthly', priority: '0.7' },
            { path: '/contact', changefreq: 'monthly', priority: '0.7' },
            { path: '/privacy', changefreq: 'yearly', priority: '0.5' },
            { path: '/terms', changefreq: 'yearly', priority: '0.5' },
        ];

        // Fetch products from Notion
        const products = await fetchAllProducts();

        // Generate URLs for all routes
        const urls = [
            // Static routes
            ...staticRoutes.map(route => ({
                loc: `${baseUrl}${route.path}`,
                lastmod,
                changefreq: route.changefreq,
                priority: route.priority,
            })),
            // Product detail pages
            ...products
                .map(product => {
                    const slug = generateSlug(product);
                    return slug ? {
                        loc: `${baseUrl}/products/${slug}`,
                        lastmod,
                        changefreq: 'weekly',
                        priority: '0.8',
                    } : null;
                })
                .filter(Boolean), // Remove null entries
        ];

        // Generate sitemap XML
        const sitemapXml = generateSitemap(urls);

        // Return XML response
        return new Response(sitemapXml, {
            status: 200,
            headers: {
                ...corsHeaders,
                "Content-Type": "application/xml; charset=utf-8",
            },
        });
    } catch (error) {
        console.error("Error generating sitemap:", error);

        // Return a basic sitemap with static routes only
        const siteUrl = process.env.URL || 'https://your-site.netlify.app';
        const baseUrl = siteUrl.replace(/\/$/, '');
        const lastmod = new Date().toISOString().split('T')[0];

        const staticUrls = [
            { loc: `${baseUrl}/`, lastmod, changefreq: 'daily', priority: '1.0' },
            { loc: `${baseUrl}/products`, lastmod, changefreq: 'weekly', priority: '0.9' },
            { loc: `${baseUrl}/about`, lastmod, changefreq: 'monthly', priority: '0.7' },
            { loc: `${baseUrl}/contact`, lastmod, changefreq: 'monthly', priority: '0.7' },
            { loc: `${baseUrl}/privacy`, lastmod, changefreq: 'yearly', priority: '0.5' },
            { loc: `${baseUrl}/terms`, lastmod, changefreq: 'yearly', priority: '0.5' },
        ];

        const fallbackSitemap = generateSitemap(staticUrls);

        return new Response(fallbackSitemap, {
            status: 200,
            headers: {
                ...corsHeaders,
                "Content-Type": "application/xml; charset=utf-8",
            },
        });
    }
}

