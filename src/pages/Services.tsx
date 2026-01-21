import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { 
  Banknote, 
  Building2, 
  TrendingUp, 
  Home, 
  Paintbrush, 
  Megaphone
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

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
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
