import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, TrendingUp, Home, Building2, Banknote } from "lucide-react";
import heroImage from "@/assets/hero-main.png";
import service1 from "@/assets/financing.png";
import service2 from "@/assets/service-development.png";

const categories = [
  { name: "الكل", value: "all", count: 12 },
  { name: "التمويل العقاري", value: "financing", count: 4 },
  { name: "الاستثمار", value: "investment", count: 3 },
  { name: "نصائح عقارية", value: "tips", count: 3 },
  { name: "أخبار السوق", value: "news", count: 2 },
];

const featuredPost = {
  id: 1,
  title: "دليلك الشامل للتمويل العقاري الكاش في السعودية 2024",
  excerpt: "تعرف على كيفية تحويل قرضك العقاري إلى سيولة نقدية بطريقة نظامية ومتوافقة مع أنظمة البنك المركزي السعودي (ساما). نشرح لك الخطوات والشروط والمستندات المطلوبة.",
  category: "التمويل العقاري",
  image: service1,
  date: "15 يناير 2024",
  readTime: "8 دقائق",
  author: "فريق عالم التميز",
  slug: "complete-guide-cash-financing-2024",
};

const posts = [
  {
    id: 2,
    title: "أفضل 5 مناطق للاستثمار العقاري في الرياض",
    excerpt: "اكتشف المناطق الأكثر نمواً في الرياض والتي توفر فرصاً استثمارية واعدة مع عوائد مجزية.",
    category: "الاستثمار",
    image: heroImage,
    date: "10 يناير 2024",
    readTime: "6 دقائق",
    author: "خبراء العقار",
    slug: "best-investment-areas-riyadh",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "خطوات شراء عقار جاهز بنجاح",
    excerpt: "نصائح عملية ومهمة يجب مراعاتها قبل شراء عقارك الجديد لتجنب الأخطاء الشائعة.",
    category: "نصائح عقارية",
    image: service2,
    date: "5 يناير 2024",
    readTime: "5 دقائق",
    author: "فريق عالم التميز",
    slug: "steps-buying-property",
    icon: Home,
  },
  {
    id: 4,
    title: "مستقبل السوق العقاري السعودي في 2024",
    excerpt: "تحليل شامل لتوقعات السوق العقاري وأهم المؤشرات والفرص المتاحة للمستثمرين.",
    category: "أخبار السوق",
    image: heroImage,
    date: "1 يناير 2024",
    readTime: "7 دقائق",
    author: "محللون اقتصاديون",
    slug: "saudi-real-estate-market-2024",
    icon: Building2,
  },
  {
    id: 5,
    title: "كيف تختار التمويل العقاري المناسب؟",
    excerpt: "مقارنة شاملة بين خيارات التمويل المتاحة في السوق السعودي وكيفية اختيار الأنسب لك.",
    category: "التمويل العقاري",
    image: service1,
    date: "28 ديسمبر 2023",
    readTime: "6 دقائق",
    author: "مستشارون ماليون",
    slug: "choosing-right-financing",
    icon: Banknote,
  },
  {
    id: 6,
    title: "أخطاء شائعة عند الاستثمار العقاري وكيف تتجنبها",
    excerpt: "تعلم من أخطاء الآخرين واحمِ استثمارك من المخاطر الشائعة في السوق العقاري.",
    category: "الاستثمار",
    image: service2,
    date: "20 ديسمبر 2023",
    readTime: "5 دقائق",
    author: "خبراء العقار",
    slug: "common-investment-mistakes",
    icon: TrendingUp,
  },
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container-rtl">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              المدونة العقارية
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              أحدث المقالات والنصائح العقارية
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              استكشف مقالاتنا المتخصصة في عالم العقارات السعودية. نقدم لك أحدث الأخبار، النصائح المهنية، 
              وتحليلات السوق لمساعدتك في اتخاذ قرارات استثمارية ذكية.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border bg-card">
        <div className="container-rtl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category.value === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category.name}
                <span className="mr-2 text-xs opacity-70">({category.count})</span>
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
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-gold/10 text-gold">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Button className="btn-primary w-fit group">
                  اقرأ المقال كاملاً
                  <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-rtl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">أحدث المقالات</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden card-hover group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 right-4 bg-card/90 text-foreground">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    اقرأ المزيد
                    <ArrowLeft className="w-4 h-4 mr-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              عرض المزيد من المقالات
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-rtl text-center">
          <h2 className="text-3xl font-bold mb-4">هل لديك سؤال عقاري؟</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            فريقنا من الخبراء جاهز للإجابة على جميع استفساراتك وتقديم المشورة المهنية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-gold">
                تواصل معنا الآن
              </Button>
            </Link>
            <Link to="/faq">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                الأسئلة الشائعة
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
