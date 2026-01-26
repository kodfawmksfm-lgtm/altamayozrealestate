import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Scale, Building2, FileCheck } from "lucide-react";

const complianceAreas = [
  {
    icon: Building2,
    title: "البنك المركزي السعودي (ساما)",
    description: "نلتزم بجميع أنظمة ولوائح البنك المركزي السعودي المتعلقة بالتمويل العقاري والوساطة المالية.",
  },
  {
    icon: Scale,
    title: "هيئة السوق المالية",
    description: "نتبع إرشادات هيئة السوق المالية في جميع الأنشطة المتعلقة بالاستثمار العقاري.",
  },
  {
    icon: Shield,
    title: "نظام حماية البيانات (PDPL)",
    description: "نطبق أعلى معايير حماية البيانات الشخصية وفقاً للنظام السعودي.",
  },
  {
    icon: FileCheck,
    title: "الهيئة العامة للعقار",
    description: "نعمل وفق اللوائح والأنظمة الصادرة من الهيئة العامة للعقار.",
  },
];

export default function Compliance() {
  return (
    <Layout>
      <div className="gradient-primary py-16">
        <div className="container-rtl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">بيان الامتثال</h1>
          <p className="text-primary-foreground/80 mt-4">التزامنا بالأنظمة واللوائح السعودية</p>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-trust/10 rounded-xl p-6 mb-12">
              <p className="text-foreground text-center">
                تلتزم شركة عالم التميز للعقارات بأعلى معايير الامتثال التنظيمي، وتعمل وفقاً 
                لجميع الأنظمة واللوائح المعتمدة في المملكة العربية السعودية.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {complianceAreas.map((area, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                        <area.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{area.title}</h3>
                        <p className="text-muted-foreground text-sm">{area.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. التزاماتنا التنظيمية</h2>
            <p className="text-muted-foreground mb-4">
              نلتزم في شركة عالم التميز للعقارات بـ:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>الحصول على جميع التراخيص والتصاريح اللازمة لممارسة أنشطتنا.</li>
              <li>اتباع الإجراءات المعتمدة في جميع المعاملات العقارية والتمويلية.</li>
              <li>توثيق جميع العقود والاتفاقيات لدى الجهات الرسمية المختصة.</li>
              <li>تدريب موظفينا على أنظمة الامتثال والالتزام.</li>
              <li>التعاون الكامل مع الجهات الرقابية عند الطلب.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. مكافحة غسل الأموال</h2>
            <p className="text-muted-foreground mb-4">
              نطبق سياسات صارمة لمكافحة غسل الأموال وتمويل الإرهاب تشمل:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>التحقق من هوية العملاء (اعرف عميلك - KYC).</li>
              <li>مراقبة المعاملات المشبوهة والإبلاغ عنها.</li>
              <li>الاحتفاظ بسجلات المعاملات للمدة المحددة نظاماً.</li>
              <li>تدريب الموظفين على اكتشاف الأنشطة المشبوهة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. حماية المستهلك</h2>
            <p className="text-muted-foreground mb-4">
              نحرص على حماية حقوق عملائنا من خلال:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>الشفافية الكاملة في عرض الخدمات والأسعار.</li>
              <li>توضيح جميع الشروط والالتزامات قبل التعاقد.</li>
              <li>توفير آليات واضحة للشكاوى والاعتراضات.</li>
              <li>عدم استخدام ممارسات تسويقية مضللة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. حماية البيانات</h2>
            <p className="text-muted-foreground mb-4">
              نطبق نظام حماية البيانات الشخصية (PDPL) من خلال:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>جمع البيانات بموافقة صريحة ولأغراض محددة فقط.</li>
              <li>تطبيق إجراءات أمنية متقدمة لحماية البيانات.</li>
              <li>عدم مشاركة البيانات دون إذن أو مسوغ قانوني.</li>
              <li>احترام حقوق أصحاب البيانات في الوصول والتصحيح والحذف.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. الإفصاح والشفافية</h2>
            <p className="text-muted-foreground mb-4">
              نلتزم بالإفصاح الكامل عن:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>طبيعة خدماتنا والرسوم المترتبة عليها.</li>
              <li>المخاطر المحتملة المرتبطة بالخدمات التمويلية والاستثمارية.</li>
              <li>أي تضارب في المصالح قد ينشأ.</li>
              <li>حقوق والتزامات جميع الأطراف.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. التدقيق والمراجعة</h2>
            <p className="text-muted-foreground mb-4">
              نخضع لتدقيق ومراجعة دورية تشمل:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>مراجعة داخلية لإجراءات الامتثال.</li>
              <li>تحديث السياسات وفقاً للمستجدات التنظيمية.</li>
              <li>تقييم المخاطر واتخاذ الإجراءات التصحيحية.</li>
              <li>الاستجابة لملاحظات الجهات الرقابية.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. الإبلاغ عن المخالفات</h2>
            <p className="text-muted-foreground mb-4">
              نشجع الإبلاغ عن أي مخالفات أو سلوكيات غير أخلاقية عبر:
            </p>
            <ul className="list-none text-muted-foreground mb-4 space-y-2">
              <li>مسؤول الشكاوى: +966 53 031 1224</li>
              <li>جميع البلاغات تُعامل بسرية تامة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. التواصل</h2>
            <p className="text-muted-foreground mb-4">
              لأي استفسارات حول سياسات الامتثال:
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
