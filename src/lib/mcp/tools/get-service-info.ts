import { defineTool } from "@lovable.dev/mcp-js";

const INFO = {
  company: "شركة سيولة البناء والسداد",
  role: "وسيط تمويلي وليس جهة تمويل أو إقراض مباشرة",
  whatsapp: "+966553558587",
  phone: "+966553558587",
  instagram: "https://syolabuild.com",
  snapchat: "https://syolabuild.com",
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
    "Return public information about Syola Build's real-estate financing services, contact channels, and the regulatory disclaimer.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(INFO) }],
    structuredContent: INFO,
  }),
});
