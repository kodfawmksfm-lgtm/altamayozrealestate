import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Building2,
  Users,
  Award,
  Shield,
  CheckCircle,
  MessageCircle,
  Phone,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "الأمانة والشفافية",
    description: "نلتزم بأعلى معايير الشفافية في جميع تعاملاتنا، ونقدم معلومات واضحة ودقيقة",
  },
  {
    icon: Award,
    title: "التميز والجودة",
    description: "نسعى دائماً لتقديم أفضل الخدمات بجودة عالية تتجاوز توقعات عملائنا",
  },
  {
    icon: Users,
    title: "العميل أولاً",
    description: "نضع احتياجات عملائنا في مقدمة أولوياتنا ونعمل على تحقيق أهدافهم العقارية",
  },
  {
    icon: CheckCircle,
    title: "الالتزام النظامي",
    description: "نعمل وفق الأنظمة السعودية المعتمدة ونلتزم بمتطلبات الجهات الرقابية",
  },
];

const milestones = [
  { year: "2015", title: "تأسيس الشركة", description: "بدأنا رحلتنا في سوق العقارات السعودي" },
  { year: "2018", title: "توسع الخدمات", description: "أضفنا خدمات التمويل والاستثمار العقاري" },
  { year: "2021", title: "نمو مستمر", description: "تجاوزنا 300 عميل راضٍ عن خدماتنا" },
  { year: "2024", title: "ريادة السوق", description: "أصبحنا من الشركات الرائدة في الرياض" },
];

const stats = [
  { value: "+500", label: "عميل راضٍ" },
  { value: "+10", label: "سنوات خبرة" },
  { value: "100%", label: "شفافية" },
  { value: "6", label: "خدمات متكاملة" },
];

const whatsappMessage = encodeURIComponent("مرحباً، أرغب في معرفة المزيد عن خدماتكم");
const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="من نحن"
        subtitle="شركة عالم التميز للعقارات"
        description="شركة سعودية رائدة متخصصة في تقديم الحلول العقارية المتكاملة. نجمع بين الخبرة العميقة والالتزام التام بالأنظمة السعودية لنكون شريكك الموثوق في رحلتك العقارية."
        showTrustBadges={false}
        variant="service"
      />

      {/* Quick CTA Bar */}
      <section className="py-4 bg-gold sticky top-20 z-40 shadow-lg">
        <div className="container-rtl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gold-foreground">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">استشارة مجانية</span>
              <span className="hidden sm:inline">- تعرف على خدماتنا المتكاملة</span>
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

      {/* Stats */}
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

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-gold-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">رؤيتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  أن نكون الشركة الرائدة والموثوقة في تقديم الحلول العقارية المتكاملة في المملكة العربية السعودية، 
                  من خلال تقديم خدمات مبتكرة تلبي تطلعات عملائنا وتتوافق مع أعلى المعايير المهنية والنظامية.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">رسالتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تقديم حلول عقارية شاملة ومتميزة تساعد عملاءنا على تحقيق أهدافهم، 
                  مع الالتزام الكامل بالأنظمة السعودية والشفافية التامة في جميع التعاملات، 
                  وبناء علاقات طويلة الأمد مبنية على الثقة والاحترام المتبادل.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-muted/30">
        <div className="container-rtl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">قصتنا</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                رحلة من الخبرة والتميز
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                بدأت شركة عالم التميز للعقارات رحلتها في سوق العقارات السعودي بهدف واضح: 
                تقديم خدمات عقارية استثنائية تجمع بين المهنية العالية والالتزام الكامل بالأنظمة المعتمدة.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                على مر السنين، نجحنا في بناء سمعة طيبة كشريك موثوق لمئات العملاء الذين وثقوا بنا 
                في رحلاتهم العقارية، سواء في التمويل أو التطوير أو الاستثمار.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                اليوم، نفخر بأن نكون من الشركات الرائدة في مجال الحلول العقارية المتكاملة في الرياض، 
                ونواصل السعي نحو التميز في كل خدمة نقدمها.
              </p>
            </div>

            <div className="space-y-4">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex gap-4 items-start">
                  <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                    <span className="text-gold-foreground font-bold">{milestone.year}</span>
                  </div>
                  <div className="pt-2">
                    <h4 className="font-bold text-foreground mb-1">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-trust/10 text-trust">قيمنا</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              القيم التي تقودنا
            </h2>
            <p className="text-muted-foreground">
              نؤمن بأن النجاح الحقيقي يُبنى على قيم راسخة تحكم جميع تعاملاتنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-trust/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-trust" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-muted/30">
        <div className="container-rtl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              لماذا تختارنا؟
            </h2>
            <p className="text-muted-foreground">
              نقدم ضمانات حقيقية تجعل تجربتك معنا آمنة وموثوقة
            </p>
          </div>
          <TrustBadges variant="grid" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gold">
        <div className="container-rtl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold text-gold-foreground mb-2">
                هل أنت مستعد للبدء؟
              </h3>
              <p className="text-gold-foreground/80">
                تواصل معنا اليوم واحصل على استشارة مجانية
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
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold-foreground text-gold-foreground hover:bg-gold-foreground/10">
                  تواصل معنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-4 bg-primary/90">
        <div className="container-rtl">
          <p className="text-xs text-primary-foreground/60 text-center">
            جميع الخدمات المقدمة تخضع للأنظمة المعتمدة في المملكة العربية السعودية ولا يُعد أي محتوى التزامًا بالتمويل أو الموافقة النهائية.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
