import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Search, Eye, FileCheck, Key, ArrowLeft } from "lucide-react";
import serviceImage from "@/assets/service-6.png";

const processSteps = [
  {
    icon: Search,
    title: "تحديد المتطلبات",
    description: "فهم احتياجاتك وتحديد المواصفات والميزانية المناسبة",
  },
  {
    icon: Eye,
    title: "عرض العقارات",
    description: "تقديم مجموعة من العقارات المطابقة لمتطلباتك",
  },
  {
    icon: FileCheck,
    title: "الفحص والتوثيق",
    description: "فحص العقار والتحقق من جميع الأوراق القانونية",
  },
  {
    icon: Key,
    title: "التسليم",
    description: "إتمام عملية الشراء وتسليم مفاتيح عقارك الجديد",
  },
];

const benefits = [
  "تشكيلة واسعة من العقارات الجاهزة",
  "فحص كامل لجميع العقارات المعروضة",
  "مواقع متميزة في أفضل الأحياء",
  "أسعار تنافسية ومدروسة",
  "مساعدة في إجراءات التملك",
  "متابعة ما بعد البيع",
];

const faqItems = [
  {
    question: "ما أنواع العقارات الجاهزة المتوفرة لديكم؟",
    answer: "نوفر تشكيلة متنوعة تشمل: الفلل، الشقق، الدوبلكسات، العقارات التجارية، والأراضي. جميع العقارات تخضع لفحص شامل قبل عرضها.",
  },
  {
    question: "كيف أتأكد من سلامة العقار قانونياً؟",
    answer: "نقوم بفحص قانوني شامل لكل عقار يشمل: التحقق من الصك، خلو العقار من الرهون والقيود، ومطابقة المخططات. كما نوفر تقريراً مفصلاً للمشتري.",
  },
  {
    question: "هل يمكنني معاينة العقار قبل الشراء؟",
    answer: "بالتأكيد، نرتب زيارات ميدانية لمعاينة العقارات التي تناسب متطلباتك. يمكنك معاينة العقار عدة مرات قبل اتخاذ قرار الشراء.",
  },
  {
    question: "هل تساعدون في التمويل العقاري؟",
    answer: "نعم، نقدم خدمات استشارية للتمويل العقاري ونساعدك في التواصل مع جهات التمويل المعتمدة. جميع الخدمات تخضع للدراسة الائتمانية.",
  },
  {
    question: "ما هي رسوم خدماتكم؟",
    answer: "رسومنا شفافة ومحددة مسبقاً. يتم الاتفاق على جميع الرسوم والتكاليف بشكل واضح قبل البدء في أي إجراءات.",
  },
];

export default function ReadyProperties() {
  return (
    <Layout>
      <HeroSection
        title="عقارات جاهزة للتملك"
        subtitle="منزل أحلامك ينتظرك"
        description="نوفر لك تشكيلة واسعة من العقارات الجاهزة للتملك في أفضل المواقع، مع فحص شامل وضمان سلامة جميع الإجراءات القانونية."
        image={serviceImage}
        primaryCTA={{ text: "تصفح العقارات المتاحة", href: "#contact-form" }}
        secondaryCTA={{ text: "اتصل بنا الآن", href: "tel:+966550857533" }}
        variant="service"
      />

      {/* شرح الخدمة */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">عقارات مختارة بعناية</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نسهّل عليك رحلة البحث عن عقارك المثالي من خلال توفير مجموعة مختارة من العقارات 
              الجاهزة للتملك. كل عقار يخضع لفحص شامل يشمل الحالة الإنشائية والوضع القانوني، 
              لنضمن لك تجربة تملك آمنة وموثوقة.
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
            <p className="text-lg text-muted-foreground">خطوات بسيطة لامتلاك عقارك</p>
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
            title="الأسئلة الشائعة عن العقارات الجاهزة"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمة العقارات الجاهزة"
          />
        </div>
      </section>

      {/* نموذج التواصل */}
      <section id="contact-form" className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">أخبرنا عن عقارك المثالي</h2>
              <p className="text-muted-foreground">
                شاركنا متطلباتك وسنساعدك في إيجاد العقار المناسب
              </p>
            </div>
            <Card>
              <CardContent className="p-6 md:p-8">
                <ContactForm preSelectedService="ready-properties" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
