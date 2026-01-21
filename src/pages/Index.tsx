import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { FAQSection, FAQItem } from "@/components/ui/FAQSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
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
  Clock
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
  { value: "24/7", label: "دعم متواصل", icon: Clock },
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

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-rtl">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 mb-4">
                  <stat.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              خدماتنا المتميزة
            </span>
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
              <span className="inline-block bg-trust/10 text-trust px-4 py-2 rounded-full text-sm font-semibold mb-4">
                لماذا نحن؟
              </span>
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

              <div className="mt-8">
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
      <section className="section-padding gradient-primary">
        <div className="container-rtl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                جاهز لبدء رحلتك العقارية؟
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-6">
                تواصل معنا اليوم للحصول على استشارة مجانية. فريقنا المتخصص جاهز لمساعدتك في تحقيق أهدافك العقارية.
              </p>
              <p className="text-sm text-primary-foreground/60">
                جميع الخدمات تخضع للدراسة والموافقة وفقاً للأنظمة المعتمدة
              </p>
            </div>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">احصل على استشارة مجانية</h3>
                <ContactForm variant="compact" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
