import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection, FAQItem } from "@/components/ui/FAQSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Sparkles, HelpCircle } from "lucide-react";

const generalFAQs: FAQItem[] = [
  {
    question: "ما هي شركة عالم التميز للعقارات؟",
    answer: "شركة عالم التميز للعقارات هي شركة سعودية متخصصة في تقديم الحلول العقارية المتكاملة في مدينة الرياض. نقدم خدمات التمويل العقاري، التطوير العقاري، الاستثمار، توفير العقارات الجاهزة، التصميم والترميم، والتسويق العقاري الحصري. جميع خدماتنا تتم وفق الأنظمة السعودية المعتمدة.",
  },
  {
    question: "هل خدماتكم متوافقة مع الأنظمة السعودية؟",
    answer: "نعم، جميع خدماتنا متوافقة تماماً مع أنظمة البنك المركزي السعودي (ساما) وهيئة السوق المالية. نعمل وفق عقود رسمية موثقة ونلتزم بأعلى معايير الشفافية والامتثال القانوني في جميع تعاملاتنا.",
  },
  {
    question: "كيف يمكنني التواصل معكم؟",
    answer: "يمكنك التواصل معنا عبر عدة وسائل: الاتصال المباشر أو واتساب على الرقم 0550857533، أو زيارة مقرنا في حي الخليج بالرياض، أو تعبئة نموذج الاتصال في موقعنا. فريقنا متاح للرد على استفساراتك خلال أوقات العمل من السبت إلى الخميس (9 صباحاً - 6 مساءً).",
  },
  {
    question: "ما هي أوقات العمل لديكم؟",
    answer: "نعمل من السبت إلى الخميس، من الساعة 9:00 صباحاً حتى 6:00 مساءً. يمكنك أيضاً التواصل معنا عبر واتساب في أي وقت وسنرد عليك في أقرب فرصة ممكنة.",
  },
];

const financingFAQs: FAQItem[] = [
  {
    question: "ما هي خدمة التمويل العقاري كاش؟",
    answer: "خدمة التمويل العقاري كاش تمكنك من تحويل قرضك العقاري الحالي إلى سيولة نقدية. نقوم بشراء عقار مناسب عن طريق جهة التمويل الخاصة بك، ثم نقوم بشرائه منك بسعر عادل يتيح لك الحصول على المبلغ النقدي الذي تحتاجه. جميع العمليات تتم بعقود رسمية موثقة.",
  },
  {
    question: "هل يوجد ضمان للموافقة على طلب التمويل؟",
    answer: "جميع طلبات التمويل تخضع للدراسة الائتمانية والتقييم العقاري وفقاً للأنظمة المعتمدة في المملكة. لا نستطيع ضمان الموافقة المسبقة، لكننا نعمل على تقديم أفضل الحلول الممكنة بناءً على وضع كل عميل والمعطيات المتاحة.",
  },
  {
    question: "كم من الوقت تستغرق عملية التمويل؟",
    answer: "تختلف المدة حسب كل حالة ومتطلبات جهة التمويل. عادةً ما تستغرق العملية من أسبوعين إلى شهر، وذلك يعتمد على استكمال المستندات المطلوبة ومدى سرعة إجراءات جهة التمويل.",
  },
  {
    question: "ما هي المستندات المطلوبة للتمويل العقاري؟",
    answer: "المستندات الأساسية تشمل: الهوية الوطنية، تعريف بالراتب من جهة العمل، كشف حساب بنكي لآخر 3-6 أشهر، ومستندات القرض العقاري الحالي إن وجد. قد تُطلب مستندات إضافية حسب متطلبات جهة التمويل.",
  },
];

const investmentFAQs: FAQItem[] = [
  {
    question: "ما نوع الفرص الاستثمارية التي تقدمونها؟",
    answer: "نقدم فرصاً استثمارية متنوعة في القطاع العقاري السعودي تشمل: الاستثمار في المشاريع السكنية، التجارية، والأراضي. جميع الفرص تخضع لدراسة شاملة ويتم تقديم تقارير واضحة عن المخاطر والعوائد المتوقعة.",
  },
  {
    question: "هل الاستثمار العقاري يضمن عوائد مالية؟",
    answer: "أي استثمار يحمل درجة من المخاطر. نحن نقدم دراسات جدوى شاملة وتحليلات للسوق، لكننا لا نضمن عوائد محددة. القرار الاستثماري يعود للعميل بناءً على المعلومات المتاحة ومستوى المخاطرة المقبول لديه.",
  },
  {
    question: "ما هو الحد الأدنى للاستثمار؟",
    answer: "يختلف الحد الأدنى حسب نوع الفرصة الاستثمارية. نقدم خيارات متنوعة تناسب مختلف الميزانيات. للحصول على تفاصيل محددة، يرجى التواصل معنا لمناقشة الخيارات المتاحة.",
  },
];

const legalFAQs: FAQItem[] = [
  {
    question: "كيف تحمون بياناتي الشخصية؟",
    answer: "نلتزم بنظام حماية البيانات الشخصية (PDPL) المعتمد في المملكة العربية السعودية. نستخدم أنظمة أمان متقدمة لحماية بياناتك ولا نشاركها مع أي طرف ثالث إلا وفقاً للقانون أو بموافقتك الصريحة.",
  },
  {
    question: "هل العقود التي توقعونها قانونية ومعتمدة؟",
    answer: "نعم، جميع عقودنا رسمية وموثقة وفقاً للأنظمة السعودية. نحرص على أن تكون جميع الشروط واضحة ومفهومة للعميل قبل التوقيع، ونوفر نسخة من جميع الوثائق للعميل.",
  },
  {
    question: "كيف يمكنني تقديم شكوى أو اقتراح؟",
    answer: "نرحب بملاحظاتكم واقتراحاتكم. يمكنك تقديم شكوى أو اقتراح عبر صفحة الشكاوى والاقتراحات في موقعنا، أو التواصل مع مسؤول الشكاوى مباشرة على الرقم 0530311224. نلتزم بالرد على جميع الشكاوى خلال 5 أيام عمل.",
  },
];

const whatsappMessage = encodeURIComponent("مرحباً، لدي سؤال أرغب في الاستفسار عنه");
const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="الأسئلة الشائعة"
        description="إجابات شاملة على أكثر الأسئلة شيوعاً حول خدماتنا. إذا لم تجد إجابة لسؤالك، لا تتردد في التواصل معنا."
        showTrustBadges={false}
        variant="service"
      />

      {/* Quick CTA */}
      <section className="py-4 bg-gold sticky top-20 z-40 shadow-lg">
        <div className="container-rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gold-foreground">
              <HelpCircle className="w-5 h-5" />
              <span className="font-bold">لم تجد إجابتك؟</span>
              <span className="hidden sm:inline">- تواصل معنا مباشرة</span>
            </div>
            <div className="flex gap-3">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-trust hover:bg-trust/90 text-white gap-2">
                  <MessageCircle className="w-4 h-4" />
                  واتساب
                  <span className="animate-pulse">⚡</span>
                </Button>
              </a>
              <a href="tel:+966550857533">
                <Button size="sm" variant="outline" className="border-gold-foreground text-gold-foreground hover:bg-gold-foreground/10 gap-2">
                  <Phone className="w-4 h-4" />
                  اتصل الآن
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding bg-background">
        <div className="container-rtl space-y-16">
          {/* General */}
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary">أسئلة عامة</Badge>
            <FAQSection items={generalFAQs} />
          </div>

          {/* Financing */}
          <div>
            <Badge className="mb-4 bg-gold/10 text-gold">التمويل العقاري</Badge>
            <FAQSection items={financingFAQs} />
          </div>

          {/* Investment */}
          <div>
            <Badge className="mb-4 bg-trust/10 text-trust">الاستثمار العقاري</Badge>
            <FAQSection items={investmentFAQs} />
          </div>

          {/* Legal */}
          <div>
            <Badge className="mb-4 bg-muted text-foreground">الأسئلة القانونية</Badge>
            <FAQSection items={legalFAQs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-rtl">
          <Card className="border-gold/20 bg-gradient-to-l from-gold/5 to-transparent">
            <CardContent className="p-8 text-center">
              <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                لم تجد إجابة لسؤالك؟
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                فريقنا المتخصص جاهز للإجابة على جميع استفساراتك. تواصل معنا الآن وسنرد عليك في أقرب وقت.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-trust hover:bg-trust/90 text-white gap-2">
                    <MessageCircle className="w-5 h-5" />
                    تواصل عبر واتساب
                    <span className="animate-pulse">⚡</span>
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline">
                    صفحة التواصل
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-4 bg-primary/90">
        <div className="container-rtl">
          <p className="text-xs text-primary-foreground/60 text-center">
            جميع الخدمات المقدمة تخضع للدراسة والموافقة وفقاً للأنظمة المعتمدة ولا يُعد أي محتوى التزامًا بالتمويل أو الموافقة النهائية.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
