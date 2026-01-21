import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Heart, 
  Building2,
  Users,
  Award,
  Clock,
  Shield,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "الأمانة والشفافية",
    description: "نلتزم بأعلى معايير الشفافية في جميع تعاملاتنا، ونقدم معلومات واضحة ودقيقة لعملائنا",
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
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                قصتنا
              </span>
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
              {milestones.map((milestone, index) => (
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
            <span className="inline-block bg-trust/10 text-trust px-4 py-2 rounded-full text-sm font-semibold mb-4">
              قيمنا
            </span>
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

      {/* CTA */}
      <section className="section-padding gradient-primary text-center">
        <div className="container-rtl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            هل أنت مستعد للبدء؟
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص
          </p>
          <Link to="/contact">
            <Button className="btn-gold text-lg px-8 py-6">
              تواصل معنا الآن
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
