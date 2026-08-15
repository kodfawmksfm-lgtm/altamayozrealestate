import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "./list-leads";

export default defineTool({
  name: "list_financing_requests",
  title: "List financing requests",
  description:
    "List submitted financing requests (applicant, city, salary, obligations, status). Sensitive data: requires an admin or staff account.",
  inputSchema: {
    limit: z.number().int().describe("Maximum number of requests to return (default 20)."),
    status: z.string().describe("Optional status filter, e.g. 'new'. Use an empty string for all."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit, status }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const take = Math.min(Math.max(limit ?? 20, 1), 100);
    let query = supabaseForUser(ctx)
      .from("financing_requests")
      .select(
        "id, full_name, phone, email, city, age, monthly_salary, employer, service_years, monthly_obligations, has_existing_financing, has_defaults, property_type, owns_land, status, created_at",
      )
      .order("created_at", { ascending: false })
      .limit(take);
    if (status) query = query.eq("status", status);
    const { data, error } = await query;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data ?? []) }],
      structuredContent: { requests: data ?? [] },
    };
  },
});
