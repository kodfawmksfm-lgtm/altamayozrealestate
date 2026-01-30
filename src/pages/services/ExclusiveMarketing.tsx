import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, Camera, Megaphone, Users, HandshakeIcon, ArrowLeft, 
  Clock, Award, Star, MessageCircle, Phone, Sparkles, Eye, Target, Shield
} from "lucide-react";
import serviceImage from "@/assets/service-10.png";

const processSteps = [
  {
    icon: Camera,
    title: "التصوير الاحترافي",
    description: "تصوير عقارك بجودة عالية وإعداد جولات افتراضية",
    time: "1-2 يوم",
  },
  {
    icon: Megaphone,
    title: "الحملة التسويقية",
    description: "إطلاق حملة تسويقية متكاملة على القنوات المناسبة",
    time: "مستمرة",
  },
  {
    icon: Users,
    title: "إدارة العملاء",
    description: "استقبال الاستفسارات وترتيب المعاينات مع العملاء المهتمين",
    time: "يومياً",
  },
  {
    icon: HandshakeIcon,
    title: "إتمام الصفقة",
    description: "التفاوض وإتمام البيع بأفضل الشروط",
    time: "حسب السوق",
  },
];

const benefits = [
  {
    icon: Camera,
    title: "تصوير احترافي",
    description: "تصوير بجودة عالية وجولات افتراضية 3D",
  },
  {
    icon: Target,
    title: "تسويق مستهدف",
    description: "حملات على منصات متعددة ومؤثرة",
  },
  {
    icon: Users,
    title: "قاعدة عملاء",
    description: "قاعدة بيانات واسعة من المشترين المهتمين",
  },
  {
    icon: Eye,
    title: "تقارير دورية",
    description: "متابعة وتحليل أداء الحملة التسويقية",
  },
  {
    icon: HandshakeIcon,
    title: "تفاوض محترف",
    description: "فريق متخصص في التفاوض لأفضل سعر",
  },
  {
    icon: Shield,
    title: "سرية تامة",
    description: "حماية كاملة لمعلومات عقارك",
  },
];

const stats = [
  { value: "+100", label: "عقار تم بيعه" },
  { value: "95%", label: "نسبة النجاح" },
  { value: "30", label: "يوم متوسط البيع" },
  { value: "+50K", label: "متابع نشط" },
];

const testimonials = [
  {
    name: "تركي العنزي",
    role: "بائع عقار",
    content: "باعوا عقاري في وقت قياسي وبسعر أعلى من المتوقع. خدمة ممتازة.",
    rating: 5,
  },
  {
    name: "سارة الفهد",
    role: "مستثمرة عقارية",
    content: "التسويق كان احترافياً جداً. التصوير والعرض جذب الكثير من العملاء.",
    rating: 5,
  },
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
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدمة التسويق العقاري الحصري");
  const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

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

      {/* Quick Action Bar */}
      <section className="py-4 bg-gold sticky top-20 z-40 shadow-lg">
        <div className="container-rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gold-foreground">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">تسويق احترافي</span>
              <span className="hidden sm:inline">- وصّل عقارك لآلاف المشترين المهتمين</span>
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
                هل تريد بيع عقارك بأفضل سعر؟
              </h2>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>صعوبة في الوصول للمشترين المهتمين</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>إعلانات تقليدية لا تحقق النتائج المطلوبة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>تفاوض غير احترافي يضيع قيمة العقار</span>
                </li>
              </ul>

              <Badge className="mb-4 bg-trust/10 text-trust">الحل</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                تسويق احترافي يحقق أفضل نتيجة
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>تصوير احترافي وجولات افتراضية 3D</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>حملات إعلانية مستهدفة على منصات متعددة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>فريق متخصص في التفاوض لأفضل سعر</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src={serviceImage} 
                alt="التسويق العقاري" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-trust text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">نسبة نجاح</div>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">لماذا تسوّق معنا؟</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم لك خدمة تسويق متكاملة تضمن وصول عقارك لأكبر شريحة من المشترين
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
            <h2 className="text-3xl font-bold text-foreground mb-4">كيف نسوّق عقارك</h2>
            <p className="text-lg text-muted-foreground">خطوات واضحة نحو بيع ناجح</p>
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
            <p className="text-primary-foreground/70">آراء حقيقية من عملاء باعوا عقاراتهم معنا</p>
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
            title="الأسئلة الشائعة عن التسويق الحصري"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمات التسويق العقاري"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gold/10 text-gold">تواصل معنا</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">سوّق عقارك معنا</h2>
              <p className="text-muted-foreground">
                شاركنا تفاصيل عقارك وسنتواصل معك لإعداد خطة تسويقية مخصصة
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-6 md:p-8">
                <ContactForm preSelectedService="marketing" />
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
                جاهز لبيع عقارك؟ تواصل معنا الآن!
              </h3>
              <p className="text-gold-foreground/80">
                فريقنا متاح لمساعدتك في تسويق عقارك باحترافية
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
