import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "get_pipeline_stats",
  title: "Get pipeline stats",
  description:
    "Summarize how many leads and financing requests were received in the last N days. Requires an admin or staff account.",
  inputSchema: {
    days: z.number().int().describe("Look-back window in days (default 30)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ days }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const window = Math.min(Math.max(days ?? 30, 1), 365);
    const since = new Date(Date.now() - window * 86400000).toISOString();
    const db = supabaseForUser(ctx);
    const [leads, requests] = await Promise.all([
      db.from("leads").select("id", { count: "exact", head: true }).gte("created_at", since),
      db
        .from("financing_requests")
        .select("id", { count: "exact", head: true })
        .gte("created_at", since),
    ]);
    const error = leads.error ?? requests.error;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    const stats = {
      days: window,
      leads: leads.count ?? 0,
      financing_requests: requests.count ?? 0,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(stats) }],
      structuredContent: stats,
    };
  },
});
