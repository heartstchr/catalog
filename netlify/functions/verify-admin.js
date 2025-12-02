// Admin Code Verification
// Verifies admin access code

export const config = {
  method: ["POST", "OPTIONS"],
};

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

export default async function handler(request, context) {
  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return createErrorResponse("Method not allowed", 405);
  }

  try {
    const { code } = await request.json();

    if (!code) {
      return createErrorResponse("Admin code is required", 400);
    }

    const adminCode = process.env.ADMIN_CODE;

    if (!adminCode) {
      console.error("ADMIN_CODE environment variable is not set");
      return createErrorResponse("Admin authentication is not configured", 500);
    }

    // Compare codes (case-sensitive)
    if (code === adminCode) {
      return createSuccessResponse({
        success: true,
        message: "Admin code verified",
      });
    } else {
      return createErrorResponse("Invalid admin code", 401);
    }
  } catch (error) {
    console.error("Error verifying admin code:", error);
    return createErrorResponse("Failed to verify admin code", 500);
  }
}

// Helper function to create error responses
function createErrorResponse(message, status = 500) {
  return new Response(
    JSON.stringify({ success: false, error: message }),
    {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    }
  );
}

// Helper function to create success responses
function createSuccessResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

