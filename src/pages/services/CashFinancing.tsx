import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Calculator, Home, ArrowLeft, Shield, Clock, Banknote } from "lucide-react";
import financingImage from "@/assets/financing.png";

const processSteps = [
  {
    icon: FileText,
    title: "تقديم الطلب",
    description: "تقديم المستندات المطلوبة وتعبئة نموذج الطلب الإلكتروني",
  },
  {
    icon: Calculator,
    title: "الدراسة والتقييم",
    description: "دراسة ائتمانية شاملة وتقييم العقار من جهات معتمدة",
  },
  {
    icon: Shield,
    title: "الموافقة والتوثيق",
    description: "إصدار الموافقة المبدئية وتوثيق العقود لدى الجهات الرسمية",
  },
  {
    icon: Banknote,
    title: "صرف المبلغ",
    description: "تحويل المبلغ النقدي مباشرة بعد إتمام جميع الإجراءات",
  },
];

const benefits = [
  "تحويل قرضك العقاري إلى سيولة نقدية فورية",
  "إجراءات سريعة ومبسطة",
  "فريق متخصص لمتابعة طلبك",
  "شفافية تامة في جميع المراحل",
  "توثيق رسمي لجميع العقود",
  "دعم متواصل حتى إتمام العملية",
];

const faqItems = [
  {
    question: "ما هو التمويل العقاري الكاش؟",
    answer: "هو خدمة تتيح لك تحويل قرضك العقاري الحالي إلى سيولة نقدية، حيث نقوم بشراء عقارك بناءً على تقييم معتمد، مما يمنحك حرية التصرف في المبلغ النقدي وفقاً لاحتياجاتك.",
  },
  {
    question: "ما هي المستندات المطلوبة للتقديم؟",
    answer: "المستندات الأساسية تشمل: صورة الهوية الوطنية، صك العقار، كشف حساب بنكي لآخر 3 أشهر، وخطاب تعريف من جهة العمل. قد تُطلب مستندات إضافية حسب الحالة.",
  },
  {
    question: "كم المدة المتوقعة لإتمام العملية؟",
    answer: "تختلف المدة حسب اكتمال المستندات وسرعة التقييم، لكن عادةً تتراوح بين 2-4 أسابيع من تاريخ تقديم الطلب الكامل. نحرص على تسريع الإجراءات قدر الإمكان.",
  },
  {
    question: "هل هناك رسوم خفية؟",
    answer: "لا، نلتزم بالشفافية التامة. جميع الرسوم والتكاليف يتم توضيحها مسبقاً قبل التوقيع على أي عقد، ولا توجد أي رسوم خفية أو إضافية.",
  },
  {
    question: "هل الخدمة متوافقة مع الأنظمة السعودية؟",
    answer: "نعم، جميع خدماتنا تتوافق تماماً مع أنظمة البنك المركزي السعودي (ساما) وهيئة السوق المالية، ويتم توثيق جميع العقود لدى الجهات الرسمية المعتمدة.",
  },
];

export default function CashFinancing() {
  return (
    <Layout>
      <HeroSection
        title="تمويل عقاري كاش"
        subtitle="حوّل عقارك إلى سيولة"
        description="نقدم لك حلولاً مالية مرنة لتحويل قرضك العقاري إلى سيولة نقدية، مع إجراءات سريعة وشفافية تامة، وكل ذلك وفقاً للأنظمة السعودية المعتمدة."
        image={financingImage}
        primaryCTA={{ text: "احصل على استشارة مجانية", href: "#contact-form" }}
        secondaryCTA={{ text: "اتصل بنا الآن", href: "tel:+966550857533" }}
        variant="service"
      />

      {/* شرح الخدمة */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">ما هو التمويل العقاري الكاش؟</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              التمويل العقاري الكاش هو حل مالي يتيح لك الحصول على سيولة نقدية مقابل عقارك الحالي. 
              نقوم بدراسة وضعك المالي وتقييم عقارك من خلال جهات تقييم معتمدة، ثم نقدم لك عرضاً 
              يناسب احتياجاتك. جميع العمليات تتم وفقاً للأنظمة واللوائح المعتمدة في المملكة العربية السعودية.
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
            <p className="text-lg text-muted-foreground">خطوات بسيطة وواضحة للحصول على التمويل</p>
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
            title="الأسئلة الشائعة عن التمويل العقاري الكاش"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمة التمويل العقاري الكاش"
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
                <ContactForm preSelectedService="cash-financing" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
