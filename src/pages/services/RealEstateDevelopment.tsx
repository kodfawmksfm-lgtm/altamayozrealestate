import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Ruler, HardHat, Home, ArrowLeft, Shield, Hammer } from "lucide-react";
import developmentImage from "@/assets/service-development.png";

const processSteps = [
  {
    icon: FileText,
    title: "دراسة المشروع",
    description: "تحليل شامل للموقع ودراسة الجدوى الاقتصادية والفنية",
  },
  {
    icon: Ruler,
    title: "التصميم والتخطيط",
    description: "إعداد المخططات الهندسية والتصاميم المعمارية المعتمدة",
  },
  {
    icon: HardHat,
    title: "التنفيذ والبناء",
    description: "تنفيذ المشروع بإشراف هندسي متخصص ومواد عالية الجودة",
  },
  {
    icon: Home,
    title: "التسليم",
    description: "تسليم المشروع مكتملاً مع جميع الضمانات والمستندات",
  },
];

const benefits = [
  "خبرة واسعة في مشاريع البناء الذاتي",
  "فريق هندسي متخصص ومعتمد",
  "استخدام أحدث تقنيات البناء",
  "ضمانات شاملة على الأعمال",
  "التزام صارم بالجداول الزمنية",
  "شفافية في التكاليف والميزانيات",
];

const faqItems = [
  {
    question: "ما هي خدمات التطوير العقاري التي تقدمونها؟",
    answer: "نقدم خدمات شاملة تشمل: البناء الذاتي، تطوير الأراضي، بناء الفلل والمجمعات السكنية، وإعادة تطوير العقارات القائمة. كل مشروع يُدار بإشراف هندسي متخصص.",
  },
  {
    question: "كيف يتم تحديد تكلفة مشروع البناء؟",
    answer: "يتم إعداد دراسة تفصيلية للمشروع تشمل تكاليف المواد والعمالة والتصاميم والتراخيص. نقدم عرض سعر شامل وشفاف قبل البدء، مع إمكانية التعديل حسب المواصفات المطلوبة.",
  },
  {
    question: "ما هي مدة تنفيذ مشروع البناء؟",
    answer: "تختلف المدة حسب حجم ونوع المشروع. عادةً تتراوح بين 6-18 شهراً للفلل، ويتم تحديد جدول زمني دقيق في العقد مع التزام كامل بالمواعيد.",
  },
  {
    question: "هل تقدمون ضمانات على الأعمال؟",
    answer: "نعم، نقدم ضمانات شاملة على جميع الأعمال الإنشائية والتشطيبات. تشمل الضمانات الهيكل الإنشائي والعزل والأعمال الكهربائية والسباكة.",
  },
  {
    question: "هل يمكنني متابعة سير العمل في المشروع؟",
    answer: "بالتأكيد، نوفر تقارير دورية مصورة عن سير العمل، بالإضافة إلى إمكانية الزيارة الميدانية في أي وقت بالتنسيق مع مدير المشروع.",
  },
];

export default function RealEstateDevelopment() {
  return (
    <Layout>
      <HeroSection
        title="التطوير العقاري"
        subtitle="نبني أحلامك بأيدٍ أمينة"
        description="نقدم خدمات تطوير عقاري متكاملة من التصميم إلى التسليم، مع التزام تام بالجودة والمواعيد، وإشراف هندسي متخصص على جميع مراحل المشروع."
        image={developmentImage}
        primaryCTA={{ text: "احصل على استشارة مجانية", href: "#contact-form" }}
        secondaryCTA={{ text: "اتصل بنا الآن", href: "tel:+966550857533" }}
        variant="service"
      />

      {/* شرح الخدمة */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">خدمات التطوير العقاري</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نقدم حلولاً متكاملة للتطوير العقاري تشمل البناء الذاتي وتطوير المشاريع السكنية والتجارية.
              فريقنا الهندسي المتخصص يضمن تنفيذ مشروعك بأعلى معايير الجودة، مع الالتزام الكامل 
              بالجداول الزمنية والميزانيات المحددة.
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
            <p className="text-lg text-muted-foreground">مراحل تنفيذ مشروعك العقاري</p>
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
            title="الأسئلة الشائعة عن التطوير العقاري"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمات التطوير العقاري"
          />
        </div>
      </section>

      {/* نموذج التواصل */}
      <section id="contact-form" className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">احصل على استشارة مجانية</h2>
              <p className="text-muted-foreground">
                املأ النموذج التالي وسيتواصل معك أحد مستشارينا في أقرب وقت
              </p>
            </div>
            <Card>
              <CardContent className="p-6 md:p-8">
                <ContactForm preSelectedService="development" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
