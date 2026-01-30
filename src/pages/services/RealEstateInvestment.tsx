import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, Search, BarChart3, FileCheck, TrendingUp, ArrowLeft, 
  Clock, Users, Award, Star, MessageCircle, Phone, Sparkles, Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import serviceImage from "@/assets/service-4.png";

const processSteps = [
  {
    icon: Search,
    title: "تحليل السوق",
    description: "دراسة شاملة للسوق العقاري وتحديد الفرص الاستثمارية المناسبة",
    time: "أسبوع واحد",
  },
  {
    icon: BarChart3,
    title: "دراسة الجدوى",
    description: "إعداد دراسة جدوى تفصيلية للفرصة الاستثمارية",
    time: "1-2 أسبوع",
  },
  {
    icon: FileCheck,
    title: "الفحص القانوني",
    description: "التحقق من جميع الجوانب القانونية والتنظيمية للعقار",
    time: "3-5 أيام",
  },
  {
    icon: TrendingUp,
    title: "إتمام الصفقة",
    description: "إتمام عملية الاستثمار وتوثيق جميع العقود رسمياً",
    time: "حسب الاتفاق",
  },
];

const benefits = [
  {
    icon: Search,
    title: "فرص مدروسة",
    description: "فرص استثمارية تم تحليلها ودراستها بعناية",
  },
  {
    icon: BarChart3,
    title: "دراسات جدوى",
    description: "دراسات جدوى شاملة ودقيقة لكل فرصة",
  },
  {
    icon: Shield,
    title: "فحص قانوني",
    description: "فحص قانوني كامل للعقارات والمستندات",
  },
  {
    icon: Users,
    title: "فريق متخصص",
    description: "خبراء في السوق العقاري السعودي",
  },
  {
    icon: Clock,
    title: "متابعة مستمرة",
    description: "متابعة دورية لأداء الاستثمارات",
  },
  {
    icon: Award,
    title: "خبرة واسعة",
    description: "سنوات من الخبرة في الاستثمار العقاري",
  },
];

const stats = [
  { value: "+200", label: "فرصة استثمارية" },
  { value: "+50", label: "مستثمر" },
  { value: "15%", label: "متوسط العائد" },
  { value: "100%", label: "شفافية" },
];

const testimonials = [
  {
    name: "خالد العتيبي",
    role: "مستثمر",
    content: "استثمرت في عدة فرص عقارية مع عالم التميز وكانت العوائد ممتازة.",
    rating: 5,
  },
  {
    name: "فهد الشمري",
    role: "رجل أعمال",
    content: "دراسات الجدوى التي يقدمونها دقيقة ومفصلة. أنصح بالتعامل معهم.",
    rating: 5,
  },
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
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن فرص الاستثمار العقاري");
  const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

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

      {/* Quick Action Bar */}
      <section className="py-4 bg-gold sticky top-20 z-40 shadow-lg">
        <div className="container-rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gold-foreground">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">فرص حصرية</span>
              <span className="hidden sm:inline">- اكتشف فرص الاستثمار المتاحة الآن</span>
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

      {/* Disclaimer */}
      <section className="py-6 bg-accent/50">
        <div className="container-rtl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground text-sm">
              <strong>تنويه هام:</strong> جميع الفرص الاستثمارية تخضع للدراسة والتقييم، والعوائد المتوقعة غير مضمونة 
              وتعتمد على عوامل السوق المتغيرة. ننصح بالاستشارة المالية قبل اتخاذ أي قرار استثماري.
            </p>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-destructive/10 text-destructive">التحدي</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                هل تبحث عن فرص استثمارية موثوقة؟
              </h2>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>صعوبة في إيجاد فرص استثمارية حقيقية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>خوف من المخاطر والخسائر المحتملة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>نقص المعلومات والتحليلات الدقيقة</span>
                </li>
              </ul>

              <Badge className="mb-4 bg-trust/10 text-trust">الحل</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                نوفر لك فرصاً مدروسة بعناية
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>فرص استثمارية تم فحصها وتحليلها</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>دراسات جدوى شاملة ودقيقة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>فحص قانوني كامل للعقارات</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src={serviceImage} 
                alt="الاستثمار العقاري" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-trust text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">+200</div>
                <div className="text-sm">فرصة استثمارية</div>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">لماذا تستثمر معنا؟</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم لك الأدوات والمعلومات اللازمة لاتخاذ قرارات استثمارية مدروسة
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
            <h2 className="text-3xl font-bold text-foreground mb-4">كيف نساعدك في الاستثمار</h2>
            <p className="text-lg text-muted-foreground">خطوات واضحة نحو استثمار ناجح</p>
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
            <h2 className="text-3xl font-bold mb-4">ماذا يقول مستثمرونا؟</h2>
            <p className="text-primary-foreground/70">آراء حقيقية من مستثمرين نجحوا معنا</p>
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
            title="الأسئلة الشائعة عن الاستثمار العقاري"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمات الاستثمار العقاري"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gold/10 text-gold">تواصل معنا</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">اكتشف الفرص المتاحة</h2>
              <p className="text-muted-foreground">
                تواصل معنا للتعرف على الفرص الاستثمارية المتاحة حالياً
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-6 md:p-8">
                <ContactForm preSelectedService="investment" />
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
                جاهز للاستثمار؟ تواصل معنا الآن!
              </h3>
              <p className="text-gold-foreground/80">
                فريقنا متاح لمساعدتك في اختيار الفرصة المناسبة
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
