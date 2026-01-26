import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Camera, Megaphone, Users, HandshakeIcon, ArrowLeft } from "lucide-react";
import serviceImage from "@/assets/service-10.png";

const processSteps = [
  {
    icon: Camera,
    title: "التصوير الاحترافي",
    description: "تصوير عقارك بجودة عالية وإعداد جولات افتراضية",
  },
  {
    icon: Megaphone,
    title: "الحملة التسويقية",
    description: "إطلاق حملة تسويقية متكاملة على القنوات المناسبة",
  },
  {
    icon: Users,
    title: "إدارة العملاء",
    description: "استقبال الاستفسارات وترتيب المعاينات مع العملاء المهتمين",
  },
  {
    icon: HandshakeIcon,
    title: "إتمام الصفقة",
    description: "التفاوض وإتمام البيع بأفضل الشروط",
  },
];

const benefits = [
  "تصوير احترافي وجولات افتراضية ثلاثية الأبعاد",
  "تسويق على منصات متعددة ومؤثرة",
  "قاعدة بيانات واسعة من العملاء المهتمين",
  "تقارير دورية عن أداء الحملة",
  "فريق متخصص في التفاوض",
  "سرية تامة في التعامل مع المعلومات",
];

const faqItems = [
  {
    question: "ما المقصود بالتسويق الحصري؟",
    answer: "التسويق الحصري يعني أننا نتولى تسويق عقارك بشكل كامل ومنفرد، مع خطة تسويقية مخصصة وجهود مركزة لتحقيق أفضل نتيجة ممكنة.",
  },
  {
    question: "كيف تتم عملية التسويق؟",
    answer: "نبدأ بتصوير العقار احترافياً، ثم ننشر إعلانات على المنصات العقارية ووسائل التواصل الاجتماعي، بالإضافة إلى التواصل المباشر مع قاعدة عملائنا المهتمين.",
  },
  {
    question: "كم تستغرق عملية البيع؟",
    answer: "تختلف المدة حسب نوع العقار والسعر وظروف السوق. نعمل على تسريع العملية من خلال التسويق المكثف والوصول لأكبر شريحة من العملاء المستهدفين.",
  },
  {
    question: "هل معلومات عقاري سرية؟",
    answer: "نعم، نلتزم بسرية تامة في التعامل مع جميع المعلومات. لا يتم مشاركة تفاصيل الملكية إلا مع العملاء الجادين وبعد موافقتك.",
  },
  {
    question: "ما هي تكلفة خدمة التسويق الحصري؟",
    answer: "تعتمد التكلفة على نوع العقار ونطاق الحملة التسويقية. نقدم عرضاً مفصلاً يوضح جميع التكاليف قبل بدء العمل، وغالباً ما تكون العمولة نسبة من قيمة البيع.",
  },
];

export default function ExclusiveMarketing() {
  return (
    <Layout>
      <HeroSection
        title="التسويق العقاري الحصري"
        subtitle="نوصل عقارك للمشتري المناسب"
        description="نقدم خدمات تسويق عقاري احترافية ومتكاملة، مع تصوير عالي الجودة وحملات مستهدفة للوصول إلى العملاء المهتمين وتحقيق أفضل قيمة لعقارك."
        image={serviceImage}
        primaryCTA={{ text: "سوّق عقارك الآن", href: "#contact-form" }}
        secondaryCTA={{ text: "اتصل بنا الآن", href: "tel:+966550857533" }}
        variant="service"
      />

      {/* شرح الخدمة */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">خدمات التسويق العقاري</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نقدم خدمات تسويق عقاري متكاملة تبدأ من التصوير الاحترافي وإعداد المحتوى الجذاب، 
              إلى إدارة الحملات التسويقية على المنصات المناسبة. هدفنا هو إيصال عقارك إلى 
              أكبر شريحة من العملاء المستهدفين وتحقيق أفضل نتيجة ممكنة.
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
            <p className="text-lg text-muted-foreground">كيف نسوّق عقارك باحترافية</p>
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
            title="الأسئلة الشائعة عن التسويق الحصري"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمات التسويق العقاري"
          />
        </div>
      </section>

      {/* نموذج التواصل */}
      <section id="contact-form" className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">سوّق عقارك معنا</h2>
              <p className="text-muted-foreground">
                شاركنا تفاصيل عقارك وسنتواصل معك لإعداد خطة تسويقية مخصصة
              </p>
            </div>
            <Card>
              <CardContent className="p-6 md:p-8">
                <ContactForm preSelectedService="marketing" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
