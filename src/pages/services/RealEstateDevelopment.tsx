import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, FileText, Ruler, HardHat, Home, ArrowLeft, Shield, 
  Clock, Users, Award, Star, MessageCircle, Phone, Sparkles, Hammer
} from "lucide-react";
import { Link } from "react-router-dom";
import developmentImage from "@/assets/service-development.png";

const processSteps = [
  {
    icon: FileText,
    title: "دراسة المشروع",
    description: "تحليل شامل للموقع ودراسة الجدوى الاقتصادية والفنية",
    time: "أسبوع واحد",
  },
  {
    icon: Ruler,
    title: "التصميم والتخطيط",
    description: "إعداد المخططات الهندسية والتصاميم المعمارية المعتمدة",
    time: "2-4 أسابيع",
  },
  {
    icon: HardHat,
    title: "التنفيذ والبناء",
    description: "تنفيذ المشروع بإشراف هندسي متخصص ومواد عالية الجودة",
    time: "6-12 شهر",
  },
  {
    icon: Home,
    title: "التسليم",
    description: "تسليم المشروع مكتملاً مع جميع الضمانات والمستندات",
    time: "حسب الاتفاق",
  },
];

const benefits = [
  {
    icon: Hammer,
    title: "خبرة واسعة",
    description: "خبرة تزيد عن 10 سنوات في مشاريع البناء",
  },
  {
    icon: Users,
    title: "فريق متخصص",
    description: "مهندسون ومقاولون معتمدون ومحترفون",
  },
  {
    icon: Shield,
    title: "ضمانات شاملة",
    description: "ضمان على جميع الأعمال الإنشائية",
  },
  {
    icon: Clock,
    title: "التزام بالمواعيد",
    description: "التزام صارم بالجداول الزمنية المتفق عليها",
  },
  {
    icon: Award,
    title: "جودة عالية",
    description: "استخدام أفضل المواد ومعايير البناء",
  },
  {
    icon: FileText,
    title: "شفافية كاملة",
    description: "تقارير دورية ومتابعة مستمرة للمشروع",
  },
];

const stats = [
  { value: "+100", label: "مشروع منجز" },
  { value: "+10", label: "سنوات خبرة" },
  { value: "100%", label: "رضا العملاء" },
  { value: "5", label: "سنوات ضمان" },
];

const testimonials = [
  {
    name: "عبدالله المطيري",
    role: "صاحب فيلا",
    content: "بنوا لي فيلتي بأعلى المواصفات والتزموا بالموعد. أنصح بالتعامل معهم.",
    rating: 5,
  },
  {
    name: "سعود الغامدي",
    role: "مستثمر عقاري",
    content: "تعاونت معهم في عدة مشاريع وكانت النتائج دائماً ممتازة.",
    rating: 5,
  },
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
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدمة التطوير العقاري");
  const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

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

      {/* Quick Action Bar */}
      <section className="py-4 bg-gold sticky top-20 z-40 shadow-lg">
        <div className="container-rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gold-foreground">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">استشارة مجانية</span>
              <span className="hidden sm:inline">- احصل على تقدير تكلفة مشروعك الآن</span>
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
                هل تحلم ببناء منزل أحلامك؟
              </h2>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>صعوبة في إيجاد مقاول موثوق وملتزم</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>خوف من تجاوز الميزانية أو التأخير في التسليم</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>قلق من جودة المواد والتنفيذ</span>
                </li>
              </ul>

              <Badge className="mb-4 bg-trust/10 text-trust">الحل</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                نحن شريكك في تحقيق حلمك
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>فريق هندسي متخصص ومقاولون معتمدون</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>عقود شفافة وميزانيات محددة مسبقاً</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>ضمانات شاملة على جميع الأعمال</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src={developmentImage} 
                alt="التطوير العقاري" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-trust text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">5 سنوات</div>
                <div className="text-sm">ضمان شامل</div>
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
              نقدم لك تجربة بناء متميزة من البداية حتى التسليم
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
            <h2 className="text-3xl font-bold text-foreground mb-4">مراحل تنفيذ مشروعك</h2>
            <p className="text-lg text-muted-foreground">من الفكرة إلى التسليم في خطوات واضحة</p>
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
            <p className="text-primary-foreground/70">آراء حقيقية من عملاء بنوا معنا</p>
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
            title="الأسئلة الشائعة عن التطوير العقاري"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمات التطوير العقاري"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gold/10 text-gold">تواصل معنا</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">احصل على تقدير تكلفة مشروعك</h2>
              <p className="text-muted-foreground">
                املأ النموذج التالي وسيتواصل معك أحد مستشارينا في أقرب وقت
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-6 md:p-8">
                <ContactForm preSelectedService="development" />
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
                جاهز لبدء مشروعك؟ تواصل معنا الآن!
              </h3>
              <p className="text-gold-foreground/80">
                فريقنا متاح للرد على استفساراتك
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
