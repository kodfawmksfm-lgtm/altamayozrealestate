import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, Search, Eye, FileCheck, Key, ArrowLeft, 
  Clock, Users, Award, Star, MessageCircle, Phone, Sparkles, Home, Shield
} from "lucide-react";
import serviceImage from "@/assets/service-6.png";

const processSteps = [
  {
    icon: Search,
    title: "تحديد المتطلبات",
    description: "فهم احتياجاتك وتحديد المواصفات والميزانية المناسبة",
    time: "استشارة مجانية",
  },
  {
    icon: Eye,
    title: "عرض العقارات",
    description: "تقديم مجموعة من العقارات المطابقة لمتطلباتك",
    time: "1-3 أيام",
  },
  {
    icon: FileCheck,
    title: "الفحص والتوثيق",
    description: "فحص العقار والتحقق من جميع الأوراق القانونية",
    time: "3-5 أيام",
  },
  {
    icon: Key,
    title: "التسليم",
    description: "إتمام عملية الشراء وتسليم مفاتيح عقارك الجديد",
    time: "حسب الاتفاق",
  },
];

const benefits = [
  {
    icon: Home,
    title: "تشكيلة واسعة",
    description: "مجموعة متنوعة من العقارات الجاهزة للتملك",
  },
  {
    icon: Shield,
    title: "فحص شامل",
    description: "فحص كامل لجميع العقارات المعروضة",
  },
  {
    icon: Search,
    title: "مواقع متميزة",
    description: "عقارات في أفضل المناطق والأحياء",
  },
  {
    icon: Award,
    title: "أسعار تنافسية",
    description: "أسعار مدروسة تناسب ميزانيتك",
  },
  {
    icon: Users,
    title: "دعم متكامل",
    description: "مساعدة في جميع إجراءات التملك",
  },
  {
    icon: Clock,
    title: "متابعة مستمرة",
    description: "خدمة ما بعد البيع والدعم المتواصل",
  },
];

const stats = [
  { value: "+150", label: "عقار متاح" },
  { value: "+300", label: "عميل سعيد" },
  { value: "100%", label: "فحص قانوني" },
  { value: "24h", label: "رد سريع" },
];

const testimonials = [
  {
    name: "ناصر القحطاني",
    role: "مالك فيلا",
    content: "وجدت منزل أحلامي من خلال عالم التميز. خدمة ممتازة ومتابعة رائعة.",
    rating: 5,
  },
  {
    name: "عبدالرحمن الدوسري",
    role: "مستثمر",
    content: "العقارات التي يعرضونها جميعها مفحوصة وموثوقة. تجربة آمنة ومريحة.",
    rating: 5,
  },
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
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن العقارات الجاهزة للتملك");
  const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

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

      {/* Quick Action Bar */}
      <section className="py-4 bg-gold sticky top-20 z-40 shadow-lg">
        <div className="container-rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gold-foreground">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">عقارات حصرية</span>
              <span className="hidden sm:inline">- اكتشف العقارات المتاحة الآن</span>
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
              <Badge className="mb-4 bg-destructive/10 text-destructive">التحدي</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                هل تبحث عن عقار جاهز؟
              </h2>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>صعوبة في إيجاد عقار مناسب في الموقع المطلوب</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>قلق من الوضع القانوني للعقار</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>عدم معرفة القيمة الحقيقية للعقار</span>
                </li>
              </ul>

              <Badge className="mb-4 bg-trust/10 text-trust">الحل</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                نوفر لك عقارات مفحوصة وموثوقة
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>تشكيلة متنوعة من العقارات في أفضل المواقع</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>فحص قانوني كامل لكل عقار</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>تقييم عادل ومعاينة ميدانية</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src={serviceImage} 
                alt="عقارات جاهزة" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-trust text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">+150</div>
                <div className="text-sm">عقار متاح</div>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">لماذا تختار عقاراتنا؟</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم لك تجربة تملك آمنة ومريحة
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
            <h2 className="text-3xl font-bold text-foreground mb-4">خطوات بسيطة لامتلاك عقارك</h2>
            <p className="text-lg text-muted-foreground">من البحث إلى التسليم في خطوات واضحة</p>
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
            <p className="text-primary-foreground/70">آراء حقيقية من عملاء امتلكوا عقاراتهم معنا</p>
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
            title="الأسئلة الشائعة عن العقارات الجاهزة"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمة العقارات الجاهزة"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gold/10 text-gold">تواصل معنا</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">أخبرنا عن عقارك المثالي</h2>
              <p className="text-muted-foreground">
                شاركنا متطلباتك وسنساعدك في إيجاد العقار المناسب
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-6 md:p-8">
                <ContactForm preSelectedService="ready-properties" />
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
                جاهز لامتلاك عقارك؟ تواصل معنا الآن!
              </h3>
              <p className="text-gold-foreground/80">
                فريقنا متاح لمساعدتك في إيجاد عقار أحلامك
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
