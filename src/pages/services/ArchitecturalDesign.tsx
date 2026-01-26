import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageSquare, Palette, Ruler, Hammer, ArrowLeft } from "lucide-react";
import serviceImage from "@/assets/ad-design.png";

const processSteps = [
  {
    icon: MessageSquare,
    title: "الاستشارة الأولية",
    description: "فهم رؤيتك ومتطلباتك وتحديد نطاق المشروع",
  },
  {
    icon: Palette,
    title: "التصميم المبدئي",
    description: "إعداد التصاميم والمخططات المبدئية للمراجعة",
  },
  {
    icon: Ruler,
    title: "التصميم التفصيلي",
    description: "إعداد المخططات التنفيذية والتفاصيل الفنية",
  },
  {
    icon: Hammer,
    title: "الإشراف على التنفيذ",
    description: "متابعة تنفيذ التصميم وضمان مطابقته للمخططات",
  },
];

const benefits = [
  "فريق من المهندسين والمصممين المحترفين",
  "تصاميم عصرية تلبي احتياجاتك",
  "استخدام أحدث برامج التصميم ثلاثية الأبعاد",
  "مراعاة معايير البناء السعودية",
  "تسليم في المواعيد المتفق عليها",
  "دعم فني مستمر خلال مراحل التنفيذ",
];

const faqItems = [
  {
    question: "ما هي خدمات التصميم والترميم التي تقدمونها؟",
    answer: "نقدم خدمات شاملة تشمل: التصميم المعماري للفلل والمباني، التصميم الداخلي، تصميم المناظر الطبيعية، وخدمات الترميم والتجديد للعقارات القائمة.",
  },
  {
    question: "كم تستغرق مرحلة التصميم؟",
    answer: "تختلف المدة حسب حجم وتعقيد المشروع. عادةً تستغرق مرحلة التصميم من 2-8 أسابيع للفلل السكنية. نلتزم بجدول زمني واضح يتم الاتفاق عليه مسبقاً.",
  },
  {
    question: "هل يمكنني رؤية نماذج من أعمالكم السابقة؟",
    answer: "نعم، نوفر ملفاً شاملاً لأعمالنا السابقة يتضمن صوراً ومخططات لمشاريع منفذة. يمكنك طلب الاطلاع عليه خلال الاستشارة المجانية.",
  },
  {
    question: "هل تقدمون خدمات الترميم للعقارات القديمة؟",
    answer: "نعم، نقدم خدمات ترميم وتجديد شاملة تشمل: إعادة التصميم الداخلي، تحديث الواجهات، تجديد الأنظمة الكهربائية والسباكة، وإضافة ملحقات جديدة.",
  },
  {
    question: "كيف يتم تحديد تكلفة التصميم؟",
    answer: "تعتمد التكلفة على عدة عوامل: مساحة المشروع، نوع التصميم المطلوب، ومستوى التفاصيل. نقدم عرض سعر شفاف ومفصل بعد الاستشارة الأولية.",
  },
];

export default function ArchitecturalDesign() {
  return (
    <Layout>
      <HeroSection
        title="التصميم المعماري والترميم"
        subtitle="نصمم مساحتك المثالية"
        description="نقدم خدمات تصميم معماري وداخلي متكاملة، مع فريق من المهندسين والمصممين المحترفين لتحويل رؤيتك إلى واقع يلبي تطلعاتك."
        image={serviceImage}
        primaryCTA={{ text: "احصل على استشارة مجانية", href: "#contact-form" }}
        secondaryCTA={{ text: "اتصل بنا الآن", href: "tel:+966550857533" }}
        variant="service"
      />

      {/* شرح الخدمة */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">خدمات التصميم والترميم</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نحول أفكارك إلى تصاميم احترافية تجمع بين الجمال والوظيفية. فريقنا من المهندسين 
              والمصممين يعمل معك خطوة بخطوة لفهم رؤيتك وتحويلها إلى مخططات تنفيذية متكاملة، 
              مع الالتزام بمعايير البناء السعودية وأحدث اتجاهات التصميم.
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
            <p className="text-lg text-muted-foreground">مراحل مشروع التصميم</p>
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
            title="الأسئلة الشائعة عن التصميم والترميم"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمات التصميم والترميم"
          />
        </div>
      </section>

      {/* نموذج التواصل */}
      <section id="contact-form" className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">شاركنا رؤيتك</h2>
              <p className="text-muted-foreground">
                أخبرنا عن مشروعك وسنساعدك في تحويله إلى واقع
              </p>
            </div>
            <Card>
              <CardContent className="p-6 md:p-8">
                <ContactForm preSelectedService="design" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
