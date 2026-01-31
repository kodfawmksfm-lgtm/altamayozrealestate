import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Banknote, 
  Building2, 
  TrendingUp, 
  Home, 
  Paintbrush, 
  Megaphone,
  MessageCircle,
  Phone,
  Sparkles
} from "lucide-react";

import service1 from "@/assets/financing.png";
import service2 from "@/assets/service-development.png";
import service4 from "@/assets/service-4.png";
import service6 from "@/assets/service-6.png";

const services = [
  {
    title: "تمويل عقاري كاش",
    description: "تحويل قرضك العقاري إلى سيولة نقدية بإجراءات نظامية وموثقة. نساعدك في الحصول على المبلغ الذي تحتاجه مع الالتزام الكامل بالأنظمة السعودية.",
    icon: Banknote,
    href: "/services/cash-financing",
    image: service1,
    featured: true,
  },
  {
    title: "تطوير عقاري",
    description: "خدمات البناء الذاتي والتطوير العقاري المتكامل. من التخطيط إلى التنفيذ، نرافقك في كل خطوة لتحقيق مشروعك العقاري.",
    icon: Building2,
    href: "/services/development",
    image: service2,
  },
  {
    title: "استثمار عقاري",
    description: "فرص استثمارية مدروسة في القطاع العقاري السعودي. نقدم تحليلات شاملة ودراسات جدوى لمساعدتك في اتخاذ قرارات استثمارية مبنية على معلومات دقيقة.",
    icon: TrendingUp,
    href: "/services/investment",
    image: service4,
  },
  {
    title: "عقارات جاهزة",
    description: "توفير عقارات جاهزة للتملك بمواصفات عالية في مواقع متميزة. نختار لك أفضل الخيارات التي تناسب احتياجاتك وميزانيتك.",
    icon: Home,
    href: "/services/ready-properties",
    image: service6,
  },
  {
    title: "تصميم وترميم",
    description: "خدمات التصميم المعماري والترميم الاحترافي. فريق من المهندسين والمصممين المحترفين لتحويل رؤيتك إلى واقع.",
    icon: Paintbrush,
    href: "/services/design",
  },
  {
    title: "تسويق حصري",
    description: "خدمات تسويق عقاري متخصصة ومستهدفة. نساعدك في الوصول إلى المشترين أو المستأجرين المناسبين بأفضل الطرق التسويقية.",
    icon: Megaphone,
    href: "/services/marketing",
  },
];

const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدماتكم العقارية");
const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="خدماتنا المتميزة"
        subtitle="حلول عقارية شاملة"
        description="نقدم مجموعة متكاملة من الخدمات العقارية المصممة لتلبية جميع احتياجاتك. جميع خدماتنا تتم وفق الأنظمة السعودية المعتمدة وبأعلى معايير الجودة والشفافية."
        showTrustBadges
        variant="service"
      />

      {/* Quick Action Bar */}
      <section className="py-4 bg-gold sticky top-20 z-40 shadow-lg">
        <div className="container-rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gold-foreground">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">استشارة مجانية</span>
              <span className="hidden sm:inline">- اختر الخدمة المناسبة وتواصل معنا</span>
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

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">اختر خدمتك</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              6 خدمات عقارية متكاملة
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              اضغط على الخدمة التي تناسبك للتعرف على التفاصيل والتواصل معنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-rtl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-trust/10 text-trust">ثقة وأمان</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              لماذا تختار خدماتنا؟
            </h2>
            <p className="text-muted-foreground">
              نلتزم بأعلى معايير الجودة والشفافية في جميع خدماتنا
            </p>
          </div>
          <TrustBadges variant="grid" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gold">
        <div className="container-rtl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold text-gold-foreground mb-2">
                لم تجد ما تبحث عنه؟ تواصل معنا!
              </h3>
              <p className="text-gold-foreground/80">
                فريقنا متاح لمساعدتك في إيجاد الحل المناسب
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

      {/* Disclaimer */}
      <section className="py-8 bg-muted/50 border-t border-border">
        <div className="container-rtl">
          <p className="text-sm text-muted-foreground text-center max-w-4xl mx-auto">
            جميع الخدمات المقدمة تخضع للأنظمة المعتمدة في المملكة العربية السعودية، وتُنفذ بموجب عقود رسمية موثقة، 
            وتخضع للدراسة الائتمانية والتقييم العقاري، ولا يُعد أي محتوى أو عرض التزامًا بالتمويل أو الموافقة النهائية.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
