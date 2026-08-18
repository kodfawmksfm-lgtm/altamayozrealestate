import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listLeads from "./tools/list-leads";
import listFinancingRequests from "./tools/list-financing-requests";
import getStats from "./tools/get-stats";
import getServiceInfo from "./tools/get-service-info";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "tamkeen-mcp",
  title: "Tamkeen Financing MCP",
  version: "0.1.0",
  instructions:
    "Tools for شركة سيولة البناء والسداد (a financing broker in Saudi Arabia). Use `get_service_info` for public service, contact and compliance details. Use `list_leads`, `list_financing_requests` and `get_pipeline_stats` to review submissions — these require an admin or staff account and return sensitive applicant data, so handle it confidentially.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getServiceInfo, listLeads, listFinancingRequests, getStats],
});
