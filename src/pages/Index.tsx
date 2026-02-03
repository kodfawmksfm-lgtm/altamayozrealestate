import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { FAQSection, FAQItem } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Banknote, 
  Building2, 
  TrendingUp, 
  Home, 
  Paintbrush, 
  Megaphone,
  ArrowLeft,
  CheckCircle,
  Users,
  Award,
  Clock,
  Star,
  MessageCircle,
  Phone,
  Sparkles,
  Shield,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-main.png";
import service1 from "@/assets/financing.png";
import service2 from "@/assets/service-development.png";

const services = [
  {
    title: "تمويل عقاري كاش",
    description: "تحويل قرضك العقاري إلى سيولة نقدية بإجراءات نظامية وموثقة",
    icon: Banknote,
    href: "/services/cash-financing",
    image: service1,
    featured: true,
  },
  {
    title: "تطوير عقاري",
    description: "خدمات البناء الذاتي والتطوير العقاري المتكامل",
    icon: Building2,
    href: "/services/development",
    image: service2,
  },
  {
    title: "استثمار عقاري",
    description: "فرص استثمارية مدروسة في القطاع العقاري السعودي",
    icon: TrendingUp,
    href: "/services/investment",
  },
  {
    title: "عقارات جاهزة",
    description: "توفير عقارات جاهزة للتملك بمواصفات عالية",
    icon: Home,
    href: "/services/ready-properties",
  },
  {
    title: "تصميم وترميم",
    description: "خدمات التصميم المعماري والترميم الاحترافي",
    icon: Paintbrush,
    href: "/services/design",
  },
  {
    title: "تسويق حصري",
    description: "خدمات تسويق عقاري متخصصة ومستهدفة",
    icon: Megaphone,
    href: "/services/marketing",
  },
];

const stats = [
  { value: "+500", label: "عميل راضٍ", icon: Users },
  { value: "+10", label: "سنوات خبرة", icon: Award },
  { value: "100%", label: "شفافية", icon: Shield },
  { value: "24/7", label: "دعم متواصل", icon: Clock },
];

const testimonials = [
  {
    name: "أحمد السعود",
    role: "رجل أعمال",
    content: "تجربة ممتازة مع شركة عالم التميز. إجراءات سريعة وشفافية تامة في التعامل.",
    rating: 5,
  },
  {
    name: "محمد الراشد",
    role: "موظف حكومي",
    content: "خدمة احترافية من البداية حتى النهاية. أنصح بالتعامل معهم بشدة.",
    rating: 5,
  },
  {
    name: "عبدالله المطيري",
    role: "مستثمر عقاري",
    content: "فريق متخصص ومحترف. ساعدوني في إتمام صفقات عقارية ناجحة.",
    rating: 5,
  },
];

const generalFAQs: FAQItem[] = [
  {
    question: "ما هي الخدمات التي تقدمها شركة عالم التميز للعقارات؟",
    answer: "نقدم حلولاً عقارية متكاملة تشمل: التمويل العقاري (تحويل القرض إلى كاش)، التطوير العقاري والبناء الذاتي، الاستثمار العقاري، توفير العقارات الجاهزة، خدمات التصميم والترميم، والتسويق العقاري الحصري. جميع خدماتنا تخضع للأنظمة السعودية المعتمدة.",
  },
  {
    question: "هل خدماتكم متوافقة مع الأنظمة السعودية؟",
    answer: "نعم، جميع خدماتنا متوافقة تماماً مع أنظمة البنك المركزي السعودي (ساما) وهيئة السوق المالية، وتُنفذ بموجب عقود رسمية موثقة. نلتزم بأعلى معايير الشفافية والامتثال القانوني.",
  },
  {
    question: "كيف يمكنني التواصل معكم للحصول على استشارة؟",
    answer: "يمكنك التواصل معنا عبر واتساب على الرقم 0550857533، أو زيارة مقرنا في حي الخليج بالرياض، أو تعبئة نموذج الاتصال في موقعنا. فريقنا متاح للرد على استفساراتك خلال أوقات العمل من السبت إلى الخميس.",
  },
  {
    question: "هل يوجد ضمان للموافقة على طلبات التمويل؟",
    answer: "جميع طلبات التمويل تخضع للدراسة الائتمانية والتقييم العقاري وفقاً للأنظمة المعتمدة. لا نضمن الموافقة المسبقة، لكننا نعمل على تقديم أفضل الحلول الممكنة وفقاً لوضع كل عميل.",
  },
];

const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدماتكم العقارية");
const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="حلول عقارية متكاملة تصنع الفرق"
        subtitle="شركة عالم التميز للعقارات"
        description="نقدم خدمات عقارية احترافية متوافقة مع الأنظمة السعودية. من التمويل العقاري إلى التطوير والاستثمار، نحن شريكك الموثوق في رحلتك العقارية."
        image={heroImage}
        primaryCTA={{ text: "استكشف خدماتنا", href: "/services" }}
        secondaryCTA={{ text: "اتصل الآن", href: "tel:+966550857533" }}
      />

      {/* Quick Action Bar */}
      <section className="py-4 bg-gold sticky top-20 z-40 shadow-lg">
        <div className="container-rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gold-foreground">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">استشارة مجانية</span>
              <span className="hidden sm:inline">- تواصل الآن واحصل على استشارة عقارية مجانية</span>
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
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/20 mb-4">
                  <stat.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">خدماتنا المتميزة</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              حلول عقارية شاملة لكل احتياجاتك
            </h2>
            <p className="text-muted-foreground">
              نقدم مجموعة متكاملة من الخدمات العقارية المصممة لتلبية تطلعاتك، مع الالتزام التام بالأنظمة السعودية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="btn-primary">
                عرض جميع الخدمات
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div className="container-rtl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-trust/10 text-trust">لماذا نحن؟</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                شريكك الموثوق في عالم العقارات
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                نفخر بتقديم خدمات عقارية متكاملة تجمع بين الخبرة العميقة والالتزام التام بالأنظمة السعودية. 
                نعمل وفق أعلى معايير الشفافية والمهنية لضمان تحقيق أهدافك العقارية.
              </p>

              <div className="space-y-4">
                {[
                  "عقود رسمية موثقة وشفافة",
                  "التزام كامل بأنظمة ساما وهيئة السوق المالية",
                  "فريق متخصص بخبرة واسعة في السوق السعودي",
                  "دراسة شاملة لكل طلب وحلول مخصصة",
                  "متابعة مستمرة حتى إتمام الخدمة",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-trust shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-trust hover:bg-trust/90 text-white gap-2">
                    <MessageCircle className="w-5 h-5" />
                    تواصل عبر واتساب
                    <span className="animate-pulse">⚡</span>
                  </Button>
                </a>
                <Link to="/about">
                  <Button variant="outline" className="group">
                    اعرف المزيد عنا
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <TrustBadges variant="grid" />
            </div>
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

          <div className="grid md:grid-cols-3 gap-6">
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

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <FAQSection
            title="الأسئلة الشائعة"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدماتنا"
            items={generalFAQs}
          />
          
          <div className="text-center mt-10">
            <Link to="/faq">
              <Button variant="outline">
                عرض جميع الأسئلة
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="section-padding bg-muted/30">
        <div className="container-rtl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gold/10 text-gold">تواصل معنا</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                جاهز لبدء رحلتك العقارية؟
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                تواصل معنا اليوم للحصول على استشارة مجانية. فريقنا المتخصص جاهز لمساعدتك في تحقيق أهدافك العقارية.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-trust/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-trust" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">واتساب</div>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-trust">
                      رد فوري خلال دقائق ⚡
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">اتصال مباشر</div>
                    <a href="tel:+966550857533" dir="ltr" className="text-muted-foreground hover:text-gold">
                      +966 55 085 7533
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                جميع الخدمات تخضع للدراسة والموافقة وفقاً للأنظمة المعتمدة
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">احصل على استشارة مجانية</h3>
                <ContactForm variant="compact" />
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
                لا تتردد! تواصل معنا الآن
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

      {/* Legal Disclaimer for Snapchat Compliance */}
      <section className="py-4 bg-primary/90">
        <div className="container-rtl">
          <p className="text-xs text-primary-foreground/60 text-center max-w-4xl mx-auto">
            جميع الخدمات المقدمة تخضع للأنظمة المعتمدة في المملكة العربية السعودية، وتُنفذ بموجب عقود رسمية موثقة، 
            وتخضع للدراسة الائتمانية والتقييم العقاري، ولا يُعد أي محتوى أو عرض التزامًا بالتمويل أو الموافقة النهائية.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
