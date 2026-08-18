import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Award, Users, TrendingUp, MessageCircle, Phone, ArrowLeft,
  Building2, Home, Briefcase, BarChart3, Hammer, Megaphone, FileSearch,
  CheckCircle2, Star, Sparkles, ClipboardList, FileCheck, Eye, FileSignature, Repeat,
} from "lucide-react";
import heroImg from "@/assets/hero-skyline.jpg";

const whatsapp = `https://wa.me/966553558587?text=${encodeURIComponent("مرحباً، أرغب باستشارة تمويلية مجانية من شركة سيولة البناء والسداد")}`;

const services = [
  { icon: Hammer, title: "تمويل البناء الذاتي", desc: "حلول تمويل لبناء منزلك على أرضك، بدراسة تكاليف واقعية ومتابعة الطلب مع الجهات التمويلية.", href: "/services/development" },
  { icon: Home, title: "تمويل عقاري لشراء مسكن", desc: "خيارات تمويل لشراء الوحدات الجاهزة أو تحت الإنشاء، بمقارنة شفافة للبدائل المتاحة.", href: "/services/ready-properties" },
  { icon: Briefcase, title: "سيولة مرتبطة بالعقار", desc: "استفد من قيمة عقارك للحصول على سيولة نظامية، وفق ضوابط الجهات التمويلية والدراسة الائتمانية.", href: "/services/cash-financing" },
  { icon: Repeat, title: "سداد المتعثرات والالتزامات", desc: "خطة عملية لتسوية المتعثرات وإعادة تنظيم الالتزامات بما يتناسب مع الدخل والقدرة على السداد.", href: "/services/investment" },
  { icon: BarChart3, title: "استشارات تمويلية", desc: "استشارة متخصصة قبل اتخاذ قرارك التمويلي، مع توضيح المتطلبات والمخاطر بشفافية كاملة.", href: "/services/marketing" },
  { icon: FileSearch, title: "دراسة الأهلية", desc: "تحليل مبدئي لأهليتك التمويلية قبل تقديم الطلب لتوفير الوقت ورفع جودة الملف.", href: "/services/design" },
];

const whyUs = [
  { icon: ShieldCheck, title: "شركة مسجّلة نظاماً", desc: "الرقم الوطني الموحد 7054954552 — نشاط تمويل عقاري" },
  { icon: Award, title: "خبرة متخصصة", desc: "في تمويل البناء الذاتي والسيولة المرتبطة بالعقار" },
  { icon: FileCheck, title: "التزام نظامي", desc: "توافق كامل مع الأنظمة التمويلية المعتمدة في المملكة" },
  { icon: Users, title: "متابعة احترافية", desc: "فريق مرافق لك من الطلب حتى صدور القرار" },
  { icon: TrendingUp, title: "حلول مخصصة", desc: "مصممة وفق وضعك المالي وقدرتك على السداد" },
  { icon: Eye, title: "شفافية كاملة", desc: "لا وعود مضمونة قبل الدراسة الائتمانية" },
];

const steps = [
  { icon: ClipboardList, t: "تقديم الطلب", d: "املأ النموذج أو تواصل عبر واتساب" },
  { icon: FileSearch, t: "دراسة الأهلية", d: "تحليل وضعك المالي وفق المعايير" },
  { icon: Eye, t: "عرض الخيارات", d: "نعرض عليك الحلول المناسبة بشفافية" },
  { icon: FileSignature, t: "استكمال الإجراءات", d: "توثيق الطلب مع الجهة التمويلية" },
  { icon: Repeat, t: "المتابعة والتنفيذ", d: "متابعة الطلب حتى صدور القرار" },
];

const values = [
  { t: "الشفافية", d: "إفصاح كامل في كل تفصيلة" },
  { t: "المصداقية", d: "ما نَعِد به نلتزم به" },
  { t: "الاحترافية", d: "معايير عمل مدروسة" },
  { t: "الامتثال التنظيمي", d: "التزام بأنظمة المملكة" },
  { t: "خدمة العميل", d: "العميل في قلب كل قرار" },
];

const testimonials = [
  { name: "محمد ع.", role: "عميل تمويل شخصي", text: "خدمة راقية وسريعة. شرحوا لي كل الخيارات بوضوح واخترت ما يناسب دخلي فعلاً." },
  { name: "نورة س.", role: "إعادة هيكلة", text: "ساعدوني في تنظيم التزاماتي الشهرية بخطة واقعية. متابعة ممتازة وشفافية تامة." },
  { name: "عبدالله م.", role: "تسوية متعثرات", text: "درسوا حالتي بعناية وقدّموا لي خيارات نظامية أعادت لي الاستقرار المالي." },
];


const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-secondary/95 via-secondary/85 to-secondary/70" />
        </div>
        <div className="relative container-rtl py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-gold/20 text-gold border-gold/30 hover:bg-gold/25">
              <Sparkles className="w-3.5 h-3.5 ml-1" /> مكتب متخصص في الحلول التمويلية
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 text-balance">
              حلول تمويلية ذكية
              <span className="block text-gold mt-2">تناسب احتياجاتك</span>
            </h1>
            <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-2xl">
              تمويل شخصي، إعادة هيكلة الالتزامات، وحلول عملية للمتعثرين — بمرونة في السداد وخيارات متعددة ومتابعة احترافية حتى الحصول على القرار المناسب.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground gap-2 font-bold">
                  <MessageCircle className="w-5 h-5" /> احجز استشارة مجانية <span className="animate-pulse">⚡</span>
                </Button>
              </a>
              <Link to="/financing-request">
                <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-secondary gap-2">
                  قدّم طلب تمويل <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-xl">
              {[
                { n: "+500", l: "عميل سعيد" },
                { n: "+10", l: "سنوات خبرة" },
                { n: "100%", l: "شفافية" },
              ].map((s) => (
                <div key={s.l} className="text-center md:text-right">
                  <div className="text-2xl md:text-3xl font-bold text-gold">{s.n}</div>
                  <div className="text-xs md:text-sm text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA bar */}
      <section className="py-3 bg-gold sticky top-20 z-40 shadow-md">
        <div className="container-rtl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-gold-foreground text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>استشارة تمويلية مجانية الآن</span>
            <span className="animate-pulse">⚡</span>
          </div>
          <div className="flex gap-2">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-1.5">
                <MessageCircle className="w-4 h-4" /> واتساب
              </Button>
            </a>
            <a href="tel:+966553558587">
              <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent gap-1.5">
                <Phone className="w-4 h-4" /> اتصل الآن
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About / Vision-Mission */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-accent text-secondary">من نحن</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">شركة سيولة البناء والسداد</h2>
            <p className="text-muted-foreground leading-relaxed">
              تأسست شركة سيولة البناء والسداد انطلاقاً من رؤية تؤمن بأن التخطيط المالي والاستثمار المدروس
              يمثلان حجر الأساس لبناء الأصول وتحقيق الاستقرار المالي على المدى الطويل.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card className="border-2 border-gold/20 card-hover">
              <CardContent className="p-7">
                <div className="w-12 h-12 rounded-md bg-gold/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">رؤيتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  أن نكون من الشركات الرائدة في تقديم الحلول التمويلية والاستشارية المتكاملة في المملكة العربية السعودية.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-secondary/10 card-hover">
              <CardContent className="p-7">
                <div className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center mb-4">
                  <FileSignature className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">رسالتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تمكين العملاء من الوصول إلى حلول تمويلية متكاملة مناسبة لأهدافهم السكنية والاستثمارية،
                  من خلال خدمات احترافية قائمة على الشفافية والخبرة والالتزام.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {values.map((v) => (
              <div key={v.t} className="text-center p-4 rounded-md bg-accent border border-border">
                <div className="text-gold font-bold mb-1">{v.t}</div>
                <div className="text-xs text-muted-foreground">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-accent">
        <div className="container-rtl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-gold/15 text-gold border-gold/30">خدماتنا</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">خدمات تمويلية متكاملة باحترافية</h2>
            <p className="text-muted-foreground">منظومة خدمات متخصصة تغطي كل احتياجاتك التمويلية</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link to={s.href} key={s.title} className="group">
                <Card className="h-full card-hover border-border hover:border-gold transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-md bg-gold/10 group-hover:bg-gold group-hover:text-gold-foreground flex items-center justify-center mb-4 transition-colors">
                      <s.icon className="w-6 h-6 text-gold group-hover:text-gold-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                    <span className="text-sm font-semibold text-gold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      اعرف المزيد <ArrowLeft className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">لماذا سيولة البناء والسداد</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">ست أسباب تجعلنا خيارك الأول</h2>
            <p className="text-muted-foreground">نتعامل بمصداقية مؤسسية وشفافية كاملة في كل خطوة</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4 p-5 rounded-md border border-border hover:border-gold transition-colors bg-accent/30">
                <div className="w-11 h-11 rounded-md bg-gold/10 flex items-center justify-center shrink-0">
                  <w.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{w.title}</h3>
                  <p className="text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & compliance */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-rtl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold/30">الموثوقية والامتثال</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">خاضعون لرقابة الجهات المختصة</h2>
            <p className="text-secondary-foreground/75">نعمل تحت مظلة الأنظمة المعتمدة في المملكة العربية السعودية</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "تحقّق من الأهلية", d: "دراسة كل حالة على حدة وفق الشروط والأحكام المنظّمة" },
              { t: "شفافية كاملة", d: "لا وعود مضمونة بالتمويل أو معدلات فائدة قبل الدراسة" },
              { t: "رقابة ومراجعة", d: "الخدمات تخضع لرقابة الجهات المختصة في المملكة" },
            ].map((l) => (
              <div key={l.t} className="bg-secondary-foreground/5 border border-gold/20 rounded-md p-6 text-center backdrop-blur-sm">
                <ShieldCheck className="w-10 h-10 text-gold mx-auto mb-3" />
                <div className="text-lg font-bold text-gold mb-2">{l.t}</div>
                <div className="text-xs text-secondary-foreground/70 leading-relaxed">{l.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How it works */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-accent text-secondary">خطوات العمل</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">مسار واضح من الطلب إلى التنفيذ</h2>
            <p className="text-muted-foreground">خمس خطوات منظمة تضمن لك تجربة احترافية وشفافة</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={s.t} className="text-center">
                <div className="relative inline-block mb-3">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto">
                    <s.icon className="w-7 h-7 text-gold-foreground" />
                  </div>
                  <span className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <h4 className="font-bold text-foreground mb-1 text-sm md:text-base">{s.t}</h4>
                <p className="text-xs text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-accent">
        <div className="container-rtl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge className="mb-4 bg-gold/15 text-gold border-gold/30">آراء عملائنا</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">قصص نجاح من عملائنا</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <Card key={t.name} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                  </div>
                  <p className="text-foreground/85 leading-relaxed mb-4 text-sm">«{t.text}»</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center font-bold text-gold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 bg-gradient-to-l from-secondary to-secondary/90 text-secondary-foreground">
        <div className="container-rtl text-center">
          <Sparkles className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">خطوتك القادمة تبدأ من هنا</h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-7">
            تواصل معنا الآن للحصول على استشارة تمويلية مجانية من خبرائنا المعتمدين، أو قدّم طلب تمويل ونتولى دراستك بشكل احترافي.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground gap-2 font-bold">
                <MessageCircle className="w-5 h-5" /> تواصل عبر واتساب <span className="animate-pulse">⚡</span>
              </Button>
            </a>
            <Link to="/financing-request">
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-gold-foreground bg-transparent gap-2">
                قدّم طلب تمويل
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Legal disclaimer (Snapchat/Meta ads compliance) */}
      <section className="py-5 bg-background border-t border-border">
        <div className="container-rtl">
          <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            <ShieldCheck className="w-3.5 h-3.5 inline-block ml-1 text-gold" />
            جميع الطلبات المقدَّمة إلى شركة سيولة البناء والسداد تخضع للتحقق من الأهلية، ولا يُعدّ قبول الطلب أو استلامه موافقةً على الإقراض أو التمويل. تُدرَس كل حالة على حدة وفق معايير ووضع كل متقدّم طبقاً للشروط والأحكام المنظّمة. الخدمات تخضع لرقابة ومراجعة الجهات المختصة في المملكة العربية السعودية، ولا يُقدَّم أي وعد بمعدلات فائدة أو مبالغ أو فترات سداد مضمونة قبل الدراسة الائتمانية.
          </p>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
