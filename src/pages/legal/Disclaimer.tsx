import { Layout } from "@/components/layout/Layout";

export default function Disclaimer() {
  return (
    <Layout>
      <div className="gradient-primary py-16">
        <div className="container-rtl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">إخلاء المسؤولية</h1>
          <p className="text-primary-foreground/80 mt-4">آخر تحديث: يناير 2024</p>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-accent/50 rounded-xl p-6 mb-8">
              <p className="text-foreground font-semibold text-center">
                جميع الخدمات المقدمة تخضع للأنظمة المعتمدة في المملكة العربية السعودية، وتُنفذ بموجب 
                عقود رسمية موثقة، وتخضع للدراسة الائتمانية والتقييم العقاري، ولا يُعد أي محتوى أو 
                عرض التزامًا بالتمويل أو الموافقة النهائية.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. طبيعة المحتوى</h2>
            <p className="text-muted-foreground mb-4">
              المعلومات المعروضة على هذا الموقع هي لأغراض تعريفية وتوعوية فقط، ولا تُشكل:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>عرضاً ملزماً للتمويل أو أي خدمة أخرى.</li>
              <li>ضماناً للحصول على التمويل أو الموافقة.</li>
              <li>استشارة مالية أو قانونية أو استثمارية.</li>
              <li>التزاماً بأسعار أو عوائد محددة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. الخدمات التمويلية</h2>
            <p className="text-muted-foreground mb-4">
              فيما يتعلق بخدمات التمويل العقاري والخدمات المالية الأخرى:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>جميع طلبات التمويل تخضع للدراسة الائتمانية من قبل الجهات المختصة.</li>
              <li>الموافقة على التمويل ليست مضمونة وتعتمد على عدة عوامل.</li>
              <li>الأرقام والنسب المعروضة هي تقديرية وقابلة للتغيير.</li>
              <li>العقود النهائية هي التي تحدد الشروط الملزمة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. الاستثمار العقاري</h2>
            <p className="text-muted-foreground mb-4">
              فيما يتعلق بفرص الاستثمار العقاري:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>العوائد الاستثمارية المتوقعة غير مضمونة.</li>
              <li>قيمة العقارات قد ترتفع أو تنخفض.</li>
              <li>الأداء السابق لا يضمن نتائج مستقبلية.</li>
              <li>ننصح بالاستشارة المالية المتخصصة قبل اتخاذ أي قرار استثماري.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. دقة المعلومات</h2>
            <p className="text-muted-foreground mb-4">
              رغم حرصنا على دقة المعلومات المعروضة:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>لا نضمن خلو الموقع من الأخطاء.</li>
              <li>المعلومات قابلة للتغيير دون إشعار مسبق.</li>
              <li>يجب التحقق من المعلومات قبل اتخاذ أي قرار.</li>
              <li>المستندات والعقود الرسمية هي المرجع النهائي.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. الروابط الخارجية</h2>
            <p className="text-muted-foreground mb-4">
              قد يحتوي الموقع على روابط لمواقع خارجية. الشركة غير مسؤولة عن محتوى أو 
              سياسات الخصوصية لهذه المواقع، واستخدامها يكون على مسؤولية المستخدم.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. حدود المسؤولية</h2>
            <p className="text-muted-foreground mb-4">
              الشركة غير مسؤولة عن:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>أي خسائر مباشرة أو غير مباشرة ناتجة عن استخدام الموقع.</li>
              <li>القرارات المتخذة بناءً على معلومات الموقع.</li>
              <li>انقطاع الخدمة أو الأعطال التقنية.</li>
              <li>أي أضرار ناتجة عن الفيروسات أو البرمجيات الضارة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. الصور والمحتوى المرئي</h2>
            <p className="text-muted-foreground mb-4">
              الصور والرسوم التوضيحية المستخدمة في الموقع قد تكون للأغراض التوضيحية فقط 
              وقد لا تمثل بدقة العقارات أو الخدمات الفعلية. يجب الاعتماد على المعاينة الميدانية 
              والمستندات الرسمية.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. الامتثال التنظيمي</h2>
            <p className="text-muted-foreground mb-4">
              تعمل الشركة وفقاً لأنظمة ولوائح:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>البنك المركزي السعودي (ساما).</li>
              <li>هيئة السوق المالية.</li>
              <li>الهيئة العامة للعقار.</li>
              <li>الجهات الحكومية المختصة الأخرى.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. التواصل</h2>
            <p className="text-muted-foreground mb-4">
              لأي استفسارات أو توضيحات:
            </p>
            <ul className="list-none text-muted-foreground mb-4 space-y-2">
              <li>الهاتف: +966 55 085 7533</li>
              <li>العنوان: 3061 – 8091 شارع بحر العرب – حي الخليج – الرياض 13224</li>
            </ul>

          </div>
        </div>
      </section>
    </Layout>
  );
}
