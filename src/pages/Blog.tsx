import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Wallet, Repeat, ShieldCheck, FileSearch } from "lucide-react";
import hero from "@/assets/financing.png";
import img1 from "@/assets/service-development.png";
import img2 from "@/assets/service-1.png";
import img3 from "@/assets/service-4.png";
import img4 from "@/assets/service-10.png";
import img5 from "@/assets/ad-design.png";

const categories = [
  { name: "الكل", value: "all", count: 6 },
  { name: "التمويل الشخصي", value: "financing", count: 2 },
  { name: "سداد القروض", value: "repayment", count: 2 },
  { name: "حلول المتعثرين", value: "distressed", count: 1 },
  { name: "دراسة الأهلية", value: "eligibility", count: 1 },
];

const featuredPost = {
  title: "دليلك العملي لطلب تمويل شخصي عبر وسيط مرخّص في 2026",
  excerpt:
    "كيف يعمل الوسيط التمويلي، وما الفرق بينه وبين جهة الإقراض؟ خطوات تقديم الطلب، المستندات المطلوبة، ومعايير التحقق من الأهلية وفق أنظمة البنك المركزي السعودي.",
  category: "التمويل الشخصي",
  image: hero,
  date: "10 يوليو 2026",
  readTime: "8 دقائق",
  author: "فريق سيولة البناء والسداد",
};

const posts = [
  {
    title: "سداد القروض القائمة: متى تكون إعادة الهيكلة قراراً صائباً؟",
    excerpt:
      "مؤشرات عملية لتقييم قرارك بشأن سداد قرضك القائم أو إعادة جدولته، مع شرح تأثير كل خيار على التزامك الشهري ومعدل النسبة السنوية (APR).",
    category: "سداد القروض",
    image: img1,
    date: "5 يوليو 2026",
    readTime: "6 دقائق",
    author: "فريق سيولة البناء والسداد",
    icon: Repeat,
  },
  {
    title: "كيف تُحسب أهليتك التمويلية؟ العوامل الأربعة الأهم",
    excerpt:
      "الدخل الشهري، نسبة الاستقطاع، السجل الائتماني (سمة)، ونوع القطاع — نشرح كل عامل وكيف يؤثر على قرار الجهة الممولة.",
    category: "دراسة الأهلية",
    image: img2,
    date: "28 يونيو 2026",
    readTime: "7 دقائق",
    author: "مستشارون ماليون",
    icon: FileSearch,
  },
  {
    title: "المتعثرات وإيقاف الخدمات: خيارات نظامية لاستعادة استقرارك المالي",
    excerpt:
      "دور الوسيط في دراسة حالتك وترتيب حلول تسوية مع الجهات الممولة المرخّصة، ضمن الأنظمة السعودية ودون وعود مضمونة قبل التحقق.",
    category: "حلول المتعثرين",
    image: img3,
    date: "20 يونيو 2026",
    readTime: "6 دقائق",
    author: "فريق سيولة البناء والسداد",
    icon: ShieldCheck,
  },
  {
    title: "قرض جديد بعد سداد القرض القائم: ما الذي يجب أن تعرفه؟",
    excerpt:
      "متى يمكن تقديم طلب تمويل جديد بعد إغلاق قرض سابق، وما شروط الاستقطاع من الدخل، وكيف تُقيّم الجهة الممولة القدرة على السداد.",
    category: "التمويل الشخصي",
    image: img4,
    date: "12 يونيو 2026",
    readTime: "5 دقائق",
    author: "فريق سيولة البناء والسداد",
    icon: Wallet,
  },
  {
    title: "الفرق بين معدل النسبة السنوي (APR) وهامش الربح الشهري",
    excerpt:
      "لماذا تعتمد جهات التمويل على مؤشر APR للإفصاح؟ وكيف يساعدك على مقارنة العروض التمويلية بشفافية قبل التوقيع.",
    category: "سداد القروض",
    image: img5,
    date: "3 يونيو 2026",
    readTime: "5 دقائق",
    author: "مستشارون ماليون",
    icon: Repeat,
  },
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container-rtl">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              المدونة التمويلية
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              مقالات ونصائح حول التمويل وسداد القروض
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              محتوى عملي حول التمويل الشخصي، سداد القروض القائمة، حلول المتعثرين ودراسة الأهلية — بأسلوب واضح ومتوافق مع أنظمة البنك المركزي السعودي.
              <br />
              <span className="text-xs text-muted-foreground/80">سيولة البناء والسداد وسيط تمويلي، ولا يُقدّم إقراضاً مباشراً.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border bg-card sticky top-16 z-10">
        <div className="container-rtl">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                  category.value === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category.name}
                <span className="mr-1.5 text-[10px] opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <Card className="overflow-hidden card-hover">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-gold/10 text-gold">{featuredPost.category}</Badge>
                <h2 className="text-xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" />{featuredPost.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featuredPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featuredPost.readTime}</span>
                </div>
                <Link to="/financing-request">
                  <Button className="btn-primary w-fit group">
                    اطلب دراسة أهليتك مجاناً
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-rtl">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">أحدث المقالات</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {posts.map((post) => (
              <Card key={post.title} className="overflow-hidden card-hover group flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 bg-card/90 text-foreground text-[11px]">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                  <Link to="/financing-request" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    ابدأ طلبك الآن
                    <ArrowLeft className="w-4 h-4 mr-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-rtl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">جاهز لتقديم طلبك؟</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
            ابدأ بدراسة أهليتك مجاناً عبر سيولة البناء والسداد — وسيط تمويلي يعمل ضمن الأنظمة السعودية. لا وعود مضمونة قبل التحقق، وموافقة الجهة الممولة هي القرار النهائي.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/financing-request"><Button className="btn-gold w-full sm:w-auto">اطلب دراسة أهليتك</Button></Link>
            <Link to="/contact">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
