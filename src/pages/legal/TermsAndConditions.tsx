import { Layout } from "@/components/layout/Layout";

export default function TermsAndConditions() {
  return (
    <Layout>
      <div className="gradient-primary py-16">
        <div className="container-rtl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">الشروط والأحكام</h1>
          <p className="text-primary-foreground/80 mt-4">آخر تحديث: يناير 2024</p>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. مقدمة</h2>
            <p className="text-muted-foreground mb-4">
              مرحباً بكم في الموقع الإلكتروني لشركة عالم التميز للعقارات. باستخدامك لهذا الموقع، 
              فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، 
              يرجى عدم استخدام الموقع.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. تعريفات</h2>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>"الشركة"</strong> تشير إلى شركة عالم التميز للعقارات.</li>
              <li><strong>"الموقع"</strong> يشير إلى هذا الموقع الإلكتروني وجميع صفحاته.</li>
              <li><strong>"المستخدم"</strong> يشير إلى أي شخص يستخدم الموقع أو خدماته.</li>
              <li><strong>"الخدمات"</strong> تشير إلى جميع الخدمات العقارية والتمويلية التي تقدمها الشركة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. طبيعة الخدمات</h2>
            <p className="text-muted-foreground mb-4">
              تقدم الشركة خدمات عقارية ووساطة تمويلية متنوعة تشمل التمويل العقاري، التطوير العقاري، 
              الاستثمار العقاري، توفير العقارات، التصميم والترميم، والتسويق العقاري.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>يُقر المستخدم ويفهم أن:</strong>
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>جميع الخدمات تخضع للدراسة والموافقة وفقاً للأنظمة السعودية المعتمدة.</li>
              <li>المحتوى المعروض على الموقع هو لأغراض تعريفية ولا يُعد التزاماً بالتمويل أو الموافقة.</li>
              <li>الخدمات التمويلية تخضع للدراسة الائتمانية والتقييم العقاري.</li>
              <li>الأسعار والعروض قابلة للتغيير دون إشعار مسبق.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. الامتثال التنظيمي</h2>
            <p className="text-muted-foreground mb-4">
              تلتزم الشركة بجميع الأنظمة واللوائح المعتمدة في المملكة العربية السعودية، بما في ذلك:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>أنظمة ولوائح البنك المركزي السعودي (ساما).</li>
              <li>أنظمة هيئة السوق المالية.</li>
              <li>نظام الإيجار التمويلي.</li>
              <li>نظام التمويل العقاري.</li>
              <li>نظام حماية البيانات الشخصية (PDPL).</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. استخدام الموقع</h2>
            <p className="text-muted-foreground mb-4">
              يوافق المستخدم على استخدام الموقع بطريقة قانونية ومسؤولة، ويلتزم بعدم:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>تقديم معلومات كاذبة أو مضللة.</li>
              <li>انتهاك حقوق الملكية الفكرية للشركة.</li>
              <li>محاولة الوصول غير المصرح به إلى أي جزء من الموقع.</li>
              <li>استخدام الموقع لأي غرض غير قانوني.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. الملكية الفكرية</h2>
            <p className="text-muted-foreground mb-4">
              جميع المحتويات المعروضة على الموقع، بما في ذلك النصوص والصور والشعارات والتصاميم، 
              هي ملك للشركة ومحمية بموجب قوانين الملكية الفكرية. لا يجوز نسخها أو إعادة إنتاجها 
              دون إذن كتابي مسبق.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. إخلاء المسؤولية</h2>
            <p className="text-muted-foreground mb-4">
              الشركة غير مسؤولة عن:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>أي قرارات يتخذها المستخدم بناءً على المعلومات المعروضة على الموقع.</li>
              <li>أي خسائر مباشرة أو غير مباشرة ناتجة عن استخدام الموقع.</li>
              <li>أي انقطاع أو خلل تقني في الموقع.</li>
              <li>دقة المعلومات المقدمة من أطراف ثالثة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. العقود والالتزامات</h2>
            <p className="text-muted-foreground mb-4">
              أي التزامات أو اتفاقيات بين الشركة والعميل تكون ملزمة فقط عند توقيع عقود رسمية 
              موثقة وفقاً للأنظمة السعودية. المحتوى المعروض على الموقع لا يُشكل عرضاً ملزماً.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. التعديلات</h2>
            <p className="text-muted-foreground mb-4">
              تحتفظ الشركة بحق تعديل هذه الشروط والأحكام في أي وقت. ستكون التعديلات سارية 
              من تاريخ نشرها على الموقع. ننصح بمراجعة هذه الصفحة بشكل دوري.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. القانون الحاكم</h2>
            <p className="text-muted-foreground mb-4">
              تخضع هذه الشروط والأحكام لأنظمة المملكة العربية السعودية. أي نزاع ينشأ عن 
              استخدام الموقع أو الخدمات يخضع للجهات القضائية المختصة في المملكة.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. التواصل</h2>
            <p className="text-muted-foreground mb-4">
              لأي استفسارات حول هذه الشروط والأحكام، يرجى التواصل معنا عبر:
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
