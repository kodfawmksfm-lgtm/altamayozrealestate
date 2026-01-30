import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, FileText, Calculator, Shield, Banknote, 
  ArrowLeft, Clock, Users, Award, Star, MessageCircle,
  Phone, Sparkles, TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import financingImage from "@/assets/financing.png";

const processSteps = [
  {
    icon: FileText,
    title: "تقديم الطلب",
    description: "تقديم المستندات المطلوبة وتعبئة نموذج الطلب الإلكتروني",
    time: "5 دقائق",
  },
  {
    icon: Calculator,
    title: "الدراسة والتقييم",
    description: "دراسة ائتمانية شاملة وتقييم العقار من جهات معتمدة",
    time: "3-5 أيام",
  },
  {
    icon: Shield,
    title: "الموافقة والتوثيق",
    description: "إصدار الموافقة المبدئية وتوثيق العقود لدى الجهات الرسمية",
    time: "2-3 أيام",
  },
  {
    icon: Banknote,
    title: "صرف المبلغ",
    description: "تحويل المبلغ النقدي مباشرة بعد إتمام جميع الإجراءات",
    time: "24 ساعة",
  },
];

const benefits = [
  {
    icon: Banknote,
    title: "سيولة نقدية فورية",
    description: "احصل على سيولة نقدية مقابل عقارك بأسرع وقت",
  },
  {
    icon: Clock,
    title: "إجراءات سريعة",
    description: "نختصر عليك الوقت والجهد في جميع الإجراءات",
  },
  {
    icon: Shield,
    title: "شفافية تامة",
    description: "جميع الرسوم والشروط واضحة من البداية",
  },
  {
    icon: Users,
    title: "فريق متخصص",
    description: "خبراء متخصصون يتابعون طلبك حتى الإنجاز",
  },
  {
    icon: Award,
    title: "توثيق رسمي",
    description: "جميع العقود موثقة لدى الجهات الرسمية",
  },
  {
    icon: TrendingUp,
    title: "أفضل تقييم",
    description: "نضمن لك أفضل تقييم عقاري ممكن",
  },
];

const stats = [
  { value: "+500", label: "عميل راضٍ" },
  { value: "2-4", label: "أسابيع للإنجاز" },
  { value: "100%", label: "شفافية" },
  { value: "24/7", label: "دعم متواصل" },
];

const testimonials = [
  {
    name: "أحمد السعود",
    role: "رجل أعمال",
    content: "تعاملت مع شركة عالم التميز وكانت التجربة ممتازة. إجراءات سريعة وشفافية تامة.",
    rating: 5,
  },
  {
    name: "محمد الراشد",
    role: "موظف حكومي",
    content: "خدمة احترافية من البداية حتى النهاية. أنصح بالتعامل معهم.",
    rating: 5,
  },
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
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدمة التمويل العقاري الكاش");
  const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

  return (
    <Layout>
      <HeroSection
        title="تمويل عقاري كاش"
        subtitle="حوّل عقارك إلى سيولة نقدية"
        description="نقدم لك حلولاً مالية مرنة لتحويل قرضك العقاري إلى سيولة نقدية فورية، مع إجراءات سريعة وشفافية تامة، وكل ذلك وفقاً للأنظمة السعودية المعتمدة."
        image={financingImage}
        primaryCTA={{ text: "احصل على استشارة مجانية", href: "#contact-form" }}
        secondaryCTA={{ text: "اتصل بنا الآن", href: "tel:+966550857533" }}
        variant="service"
      />

      {/* Quick Action Bar */}
      <section className="py-4 bg-gold sticky top-20 z-40 shadow-lg">
        <div className="container-rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gold-foreground">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">استشارة مجانية</span>
              <span className="hidden sm:inline">- تواصل الآن واحصل على عرض خاص</span>
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

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-rtl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-destructive/10 text-destructive">المشكلة</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                هل تحتاج سيولة نقدية عاجلة؟
              </h2>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>لديك عقار مرهون للبنك وتحتاج سيولة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>إجراءات بنكية معقدة وتستغرق وقتاً طويلاً</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>لا تعرف كيف تحصل على أفضل قيمة لعقارك</span>
                </li>
              </ul>

              <Badge className="mb-4 bg-trust/10 text-trust">الحل</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                نحن نوفر لك الحل الأمثل
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>سيولة نقدية فورية خلال أسابيع قليلة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>إجراءات مبسطة ومتابعة شخصية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>تقييم عادل من جهات معتمدة</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src={financingImage} 
                alt="تمويل عقاري كاش" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-gold-foreground p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">متوافق مع ساما</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-rtl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">المميزات</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">لماذا تختار خدمتنا؟</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم لك تجربة استثنائية تجمع بين السرعة والشفافية والامتثال التام للأنظمة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gold/10 text-gold">آلية العمل</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">خطوات بسيطة وواضحة</h2>
            <p className="text-lg text-muted-foreground">احصل على التمويل في 4 خطوات سهلة</p>
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
                    <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 ml-1" />
                      {step.time}
                    </Badge>
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

      {/* Testimonials */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-rtl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ماذا يقول عملاؤنا؟</h2>
            <p className="text-primary-foreground/70">آراء حقيقية من عملاء استفادوا من خدماتنا</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-primary-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-primary-foreground/70">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <TrustBadges variant="grid" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-rtl">
          <FAQSection
            items={faqItems}
            title="الأسئلة الشائعة عن التمويل العقاري الكاش"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمة التمويل العقاري الكاش"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gold/10 text-gold">تواصل معنا</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">احصل على استشارة مجانية</h2>
              <p className="text-muted-foreground">
                املأ النموذج التالي وسيتواصل معك أحد مستشارينا في أقرب وقت
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-6 md:p-8">
                <ContactForm preSelectedService="cash-financing" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gold">
        <div className="container-rtl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold text-gold-foreground mb-2">
                جاهز للبدء؟ تواصل معنا الآن!
              </h3>
              <p className="text-gold-foreground/80">
                فريقنا متاح للرد على استفساراتك على مدار الساعة
              </p>
            </div>
            <div className="flex gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-trust hover:bg-trust/90 text-white gap-2">
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                  <span className="animate-pulse">⚡</span>
                </Button>
              </a>
              <a href="tel:+966550857533">
                <Button size="lg" variant="outline" className="border-gold-foreground text-gold-foreground hover:bg-gold-foreground/10">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
