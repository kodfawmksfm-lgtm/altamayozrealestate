import { defineTool } from "@lovable.dev/mcp-js";

const INFO = {
  company: "مكتب تمكين للحلول التمويلية",
  role: "وسيط تمويلي وليس جهة تمويل أو إقراض مباشرة",
  whatsapp: "+966567597514",
  phone: "+966567597514",
  instagram: "https://www.instagram.com/tamkeen_saudi",
  snapchat: "https://www.snapchat.com/add/tamkeen_sa",
  financing_range_sar: { min: 18000, max: 300000 },
  max_tenor_months: 60,
  apr_from_percent: 1.5,
  services: [
    "التمويل الشخصي",
    "سداد القروض القائمة",
    "معالجة التعثرات",
    "إنهاء إيقاف الخدمات",
    "إعادة هيكلة الالتزامات",
  ],
  disclaimer:
    "جميع الطلبات تخضع للتحقق من الأهلية، ولا يُعد قبول الطلب موافقة على الإقراض أو التمويل. تُدرس كل حالة على حدة وفق الشروط والأحكام المنظمة، والخدمات تخضع لرقابة ومراجعة الجهات المختصة في المملكة العربية السعودية.",
};

export default defineTool({
  name: "get_service_info",
  title: "Get service info",
  description:
    "Return public information about Tamkeen's financing services, contact channels, and the regulatory disclaimer.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(INFO) }],
    structuredContent: INFO,
  }),
});
