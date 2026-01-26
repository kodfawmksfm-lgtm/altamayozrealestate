import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Search, BarChart3, FileCheck, TrendingUp, ArrowLeft } from "lucide-react";
import serviceImage from "@/assets/service-4.png";

const processSteps = [
  {
    icon: Search,
    title: "تحليل السوق",
    description: "دراسة شاملة للسوق العقاري وتحديد الفرص الاستثمارية المناسبة",
  },
  {
    icon: BarChart3,
    title: "دراسة الجدوى",
    description: "إعداد دراسة جدوى تفصيلية للفرصة الاستثمارية",
  },
  {
    icon: FileCheck,
    title: "الفحص القانوني",
    description: "التحقق من جميع الجوانب القانونية والتنظيمية للعقار",
  },
  {
    icon: TrendingUp,
    title: "إتمام الصفقة",
    description: "إتمام عملية الاستثمار وتوثيق جميع العقود رسمياً",
  },
];

const benefits = [
  "فرص استثمارية مدروسة بعناية",
  "دراسات جدوى شاملة ودقيقة",
  "فحص قانوني كامل للعقارات",
  "متابعة مستمرة للاستثمارات",
  "شفافية تامة في جميع العمليات",
  "خبرة واسعة في السوق السعودي",
];

const faqItems = [
  {
    question: "ما نوع الفرص الاستثمارية التي تقدمونها؟",
    answer: "نقدم فرصاً استثمارية متنوعة تشمل: الأراضي ذات النمو المتوقع، العقارات التجارية، المجمعات السكنية، والمشاريع العقارية المشتركة. كل فرصة تخضع لدراسة جدوى دقيقة.",
  },
  {
    question: "كيف يتم اختيار الفرص الاستثمارية؟",
    answer: "نعتمد على معايير صارمة تشمل: موقع العقار، إمكانية النمو، العائد المتوقع، والوضع القانوني. فريقنا المتخصص يحلل كل فرصة قبل عرضها على المستثمرين.",
  },
  {
    question: "هل هناك حد أدنى للاستثمار؟",
    answer: "يختلف الحد الأدنى حسب نوع الفرصة الاستثمارية. نوفر خيارات متنوعة تناسب مختلف الميزانيات، ويمكنك التواصل معنا لمعرفة الفرص المتاحة حالياً.",
  },
  {
    question: "كيف أضمن سلامة استثماري؟",
    answer: "نحرص على الفحص القانوني الكامل لكل عقار، والتحقق من جميع الأوراق والتراخيص. كما نوفر استشارات قانونية متخصصة ونوثق جميع العقود لدى الجهات الرسمية.",
  },
  {
    question: "هل الاستثمار العقاري مناسب لي؟",
    answer: "الاستثمار العقاري يناسب من يبحث عن استثمار طويل الأمد. ننصح بالتواصل مع مستشارينا لتقييم وضعك المالي وتحديد الخيار الأنسب لأهدافك الاستثمارية.",
  },
];

export default function RealEstateInvestment() {
  return (
    <Layout>
      <HeroSection
        title="الاستثمار العقاري"
        subtitle="استثمر بثقة وأمان"
        description="نقدم فرصاً استثمارية عقارية مدروسة بعناية، مع دراسات جدوى شاملة وفحص قانوني كامل، لمساعدتك في اتخاذ قرارات استثمارية واعية."
        image={serviceImage}
        primaryCTA={{ text: "اكتشف الفرص المتاحة", href: "#contact-form" }}
        secondaryCTA={{ text: "اتصل بنا الآن", href: "tel:+966550857533" }}
        variant="service"
      />

      {/* شرح الخدمة */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">خدمات الاستثمار العقاري</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نساعدك في اكتشاف فرص استثمارية عقارية واعدة في السوق السعودي. فريقنا المتخصص 
              يقوم بدراسة وتحليل كل فرصة بعناية، مع التأكد من جميع الجوانب القانونية والتنظيمية 
              قبل عرضها. نحرص على تقديم معلومات شفافة تساعدك في اتخاذ قرارات مدروسة.
            </p>
          </div>

          <div className="bg-accent/50 rounded-xl p-6 mb-12 max-w-3xl mx-auto">
            <p className="text-center text-foreground">
              <strong>تنويه هام:</strong> جميع الفرص الاستثمارية تخضع للدراسة والتقييم، والعوائد المتوقعة غير مضمونة 
              وتعتمد على عوامل السوق المتغيرة. ننصح بالاستشارة المالية قبل اتخاذ أي قرار استثماري.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-trust shrink-0 mt-1" />
                  <p className="text-foreground font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* آلية العمل */}
      <section className="section-padding bg-muted/30">
        <div className="container-rtl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">آلية العمل</h2>
            <p className="text-lg text-muted-foreground">كيف نساعدك في اتخاذ قرارات استثمارية مدروسة</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="card-hover h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-3 right-4 w-8 h-8 rounded-full bg-gold text-gold-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2">
                    <ArrowLeft className="w-8 h-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* شارات الثقة */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <TrustBadges variant="grid" />
        </div>
      </section>

      {/* الأسئلة الشائعة */}
      <section className="section-padding bg-muted/30">
        <div className="container-rtl">
          <FAQSection
            items={faqItems}
            title="الأسئلة الشائعة عن الاستثمار العقاري"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمات الاستثمار العقاري"
          />
        </div>
      </section>

      {/* نموذج التواصل */}
      <section id="contact-form" className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">اكتشف الفرص المتاحة</h2>
              <p className="text-muted-foreground">
                تواصل معنا للتعرف على الفرص الاستثمارية المتاحة حالياً
              </p>
            </div>
            <Card>
              <CardContent className="p-6 md:p-8">
                <ContactForm preSelectedService="investment" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
