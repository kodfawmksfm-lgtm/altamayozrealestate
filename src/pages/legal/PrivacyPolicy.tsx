import { Layout } from "@/components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="gradient-primary py-16">
        <div className="container-rtl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">سياسة الخصوصية</h1>
          <p className="text-primary-foreground/80 mt-4">متوافقة مع نظام حماية البيانات الشخصية (PDPL)</p>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-4xl mx-auto">
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. مقدمة</h2>
            <p className="text-muted-foreground mb-4">
              تلتزم شركة عالم التميز للعقارات بحماية خصوصية بياناتك الشخصية وفقاً لنظام حماية 
              البيانات الشخصية (PDPL) في المملكة العربية السعودية. توضح هذه السياسة كيفية جمع 
              واستخدام وحماية بياناتك.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. البيانات التي نجمعها</h2>
            <p className="text-muted-foreground mb-4">قد نجمع الأنواع التالية من البيانات:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>بيانات التعريف:</strong> الاسم الكامل، رقم الهوية الوطنية، تاريخ الميلاد.</li>
              <li><strong>بيانات الاتصال:</strong> رقم الهاتف، البريد الإلكتروني، العنوان.</li>
              <li><strong>البيانات المالية:</strong> معلومات الدخل، كشوف الحساب البنكية (عند طلب خدمات التمويل).</li>
              <li><strong>بيانات العقار:</strong> معلومات العقارات المملوكة أو المطلوبة.</li>
              <li><strong>بيانات التصفح:</strong> معلومات الجهاز، عنوان IP، نوع المتصفح.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. أغراض استخدام البيانات</h2>
            <p className="text-muted-foreground mb-4">نستخدم بياناتك للأغراض التالية:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>تقديم الخدمات العقارية والتمويلية المطلوبة.</li>
              <li>التواصل معك بشأن طلباتك واستفساراتك.</li>
              <li>إجراء الدراسات الائتمانية اللازمة (بموافقتك).</li>
              <li>الامتثال للمتطلبات القانونية والتنظيمية.</li>
              <li>تحسين خدماتنا وتجربة المستخدم.</li>
              <li>إرسال إشعارات تسويقية (بموافقتك المسبقة).</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. الأساس القانوني للمعالجة</h2>
            <p className="text-muted-foreground mb-4">نعالج بياناتك بناءً على:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>موافقتك الصريحة عند تقديم بياناتك.</li>
              <li>ضرورة تنفيذ عقد أو اتفاق معك.</li>
              <li>الامتثال للالتزامات القانونية والتنظيمية.</li>
              <li>المصلحة المشروعة للشركة (مع مراعاة حقوقك).</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. مشاركة البيانات</h2>
            <p className="text-muted-foreground mb-4">قد نشارك بياناتك مع:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>جهات التمويل:</strong> البنوك وشركات التمويل المرخصة (لطلبات التمويل).</li>
              <li><strong>الجهات الحكومية:</strong> عند الطلب القانوني أو التنظيمي.</li>
              <li><strong>مقدمي الخدمات:</strong> شركات التقييم العقاري، المحامين (لإتمام المعاملات).</li>
              <li><strong>شركاء العمل:</strong> بموافقتك المسبقة فقط.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              لا نبيع بياناتك الشخصية لأي طرف ثالث تحت أي ظرف.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. حماية البيانات</h2>
            <p className="text-muted-foreground mb-4">نطبق إجراءات أمنية صارمة تشمل:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>تشفير البيانات أثناء النقل والتخزين.</li>
              <li>التحكم في الوصول وتقييده على الموظفين المصرح لهم.</li>
              <li>المراقبة المستمرة للأنظمة.</li>
              <li>التدريب الدوري للموظفين على حماية البيانات.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. حقوقك</h2>
            <p className="text-muted-foreground mb-4">وفقاً لنظام PDPL، يحق لك:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>حق الوصول:</strong> طلب نسخة من بياناتك الشخصية.</li>
              <li><strong>حق التصحيح:</strong> تصحيح أي بيانات غير دقيقة.</li>
              <li><strong>حق الحذف:</strong> طلب حذف بياناتك (مع مراعاة الاستثناءات القانونية).</li>
              <li><strong>حق الاعتراض:</strong> الاعتراض على معالجة بياناتك لأغراض معينة.</li>
              <li><strong>حق سحب الموافقة:</strong> سحب موافقتك في أي وقت.</li>
              <li><strong>حق الشكوى:</strong> تقديم شكوى للجهات المختصة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. فترة الاحتفاظ</h2>
            <p className="text-muted-foreground mb-4">
              نحتفظ ببياناتك للمدة اللازمة لتحقيق الأغراض المذكورة، أو حسب المتطلبات القانونية. 
              بعد انتهاء الحاجة، يتم حذف البيانات أو إخفاء هويتها بشكل آمن.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. ملفات تعريف الارتباط</h2>
            <p className="text-muted-foreground mb-4">
              يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك. لمزيد من المعلومات، يرجى 
              مراجعة <a href="/legal/cookies" className="text-primary hover:underline">سياسة ملفات تعريف الارتباط</a>.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. التعديلات</h2>
            <p className="text-muted-foreground mb-4">
              قد نقوم بتحديث هذه السياسة من وقت لآخر. سنُعلمك بأي تغييرات جوهرية عبر البريد 
              الإلكتروني أو إشعار على الموقع.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. التواصل معنا</h2>
            <p className="text-muted-foreground mb-4">
              لممارسة حقوقك أو الاستفسار عن هذه السياسة:
            </p>
            <ul className="list-none text-muted-foreground mb-4 space-y-2">
              <li>الهاتف: +966 55 085 7533</li>
              <li>مسؤول الشكاوى: +966 53 031 1224</li>
              <li>العنوان: 3061 – 8091 شارع بحر العرب – حي الخليج – الرياض 13224</li>
            </ul>

          </div>
        </div>
      </section>
    </Layout>
  );
}
