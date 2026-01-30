import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, MessageSquare, Palette, Ruler, Hammer, ArrowLeft, 
  Clock, Users, Award, Star, MessageCircle, Phone, Sparkles, Paintbrush, Home
} from "lucide-react";
import serviceImage from "@/assets/ad-design.png";

const processSteps = [
  {
    icon: MessageSquare,
    title: "الاستشارة الأولية",
    description: "فهم رؤيتك ومتطلباتك وتحديد نطاق المشروع",
    time: "1-2 يوم",
  },
  {
    icon: Palette,
    title: "التصميم المبدئي",
    description: "إعداد التصاميم والمخططات المبدئية للمراجعة",
    time: "1-2 أسبوع",
  },
  {
    icon: Ruler,
    title: "التصميم التفصيلي",
    description: "إعداد المخططات التنفيذية والتفاصيل الفنية",
    time: "2-4 أسابيع",
  },
  {
    icon: Hammer,
    title: "الإشراف على التنفيذ",
    description: "متابعة تنفيذ التصميم وضمان مطابقته للمخططات",
    time: "حسب المشروع",
  },
];

const benefits = [
  {
    icon: Users,
    title: "فريق متخصص",
    description: "مهندسون ومصممون محترفون ومعتمدون",
  },
  {
    icon: Palette,
    title: "تصاميم عصرية",
    description: "تصاميم حديثة تلبي احتياجاتك وذوقك",
  },
  {
    icon: Paintbrush,
    title: "تقنيات متطورة",
    description: "استخدام أحدث برامج التصميم 3D",
  },
  {
    icon: Award,
    title: "معايير سعودية",
    description: "مراعاة كود البناء السعودي",
  },
  {
    icon: Clock,
    title: "التزام بالمواعيد",
    description: "تسليم في المواعيد المتفق عليها",
  },
  {
    icon: Home,
    title: "ترميم متكامل",
    description: "خدمات ترميم وتجديد شاملة",
  },
];

const stats = [
  { value: "+200", label: "تصميم منجز" },
  { value: "+50", label: "ترميم كامل" },
  { value: "100%", label: "رضا العملاء" },
  { value: "3D", label: "تصميم ثلاثي الأبعاد" },
];

const testimonials = [
  {
    name: "يوسف الحربي",
    role: "صاحب فيلا",
    content: "صمموا لي فيلتي بطريقة رائعة. التصميم الداخلي مذهل وعملي.",
    rating: 5,
  },
  {
    name: "هند السعيد",
    role: "صاحبة شقة",
    content: "رممت شقتي بالكامل معهم. أصبحت مثل الجديدة تماماً.",
    rating: 5,
  },
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
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدمات التصميم والترميم");
  const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

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

      {/* Quick Action Bar */}
      <section className="py-4 bg-gold sticky top-20 z-40 shadow-lg">
        <div className="container-rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gold-foreground">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">استشارة مجانية</span>
              <span className="hidden sm:inline">- شاركنا رؤيتك ونحولها لتصميم رائع</span>
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
                هل تحتاج تصميماً يعكس ذوقك؟
              </h2>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>صعوبة في تحويل أفكارك إلى تصميم عملي</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>قلق من عدم توافق التصميم مع معايير البناء</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0"></span>
                  <span>حاجة لترميم عقارك القديم بشكل احترافي</span>
                </li>
              </ul>

              <Badge className="mb-4 bg-trust/10 text-trust">الحل</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                نحول رؤيتك إلى واقع
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>فريق من المهندسين والمصممين المحترفين</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>تصاميم ثلاثية الأبعاد لتصور النتيجة النهائية</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust mt-0.5 shrink-0" />
                  <span>التزام بمعايير البناء السعودية</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src={serviceImage} 
                alt="التصميم المعماري" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-trust text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">+200</div>
                <div className="text-sm">تصميم منجز</div>
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
              نقدم لك تجربة تصميم متميزة من الفكرة إلى التنفيذ
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
            <h2 className="text-3xl font-bold text-foreground mb-4">مراحل مشروع التصميم</h2>
            <p className="text-lg text-muted-foreground">من الفكرة إلى التنفيذ في خطوات واضحة</p>
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
            <p className="text-primary-foreground/70">آراء حقيقية من عملاء صمموا معنا</p>
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
            title="الأسئلة الشائعة عن التصميم والترميم"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدمات التصميم والترميم"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-background">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gold/10 text-gold">تواصل معنا</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">شاركنا رؤيتك</h2>
              <p className="text-muted-foreground">
                أخبرنا عن مشروعك وسنساعدك في تحويله إلى واقع
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-6 md:p-8">
                <ContactForm preSelectedService="design" />
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
                جاهز لتصميم حلمك؟ تواصل معنا الآن!
              </h3>
              <p className="text-gold-foreground/80">
                فريقنا متاح لمساعدتك في تحويل أفكارك إلى تصميم رائع
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
