import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowRight, MessageCircle, Phone, Search } from "lucide-react";

const NotFound = () => {
  const whatsappMessage = encodeURIComponent("مرحباً، أحتاج مساعدة في إيجاد ما أبحث عنه");
  const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background min-h-[70vh] flex items-center">
        <div className="container-rtl">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <span className="text-8xl md:text-9xl font-bold text-gradient-gold">404</span>
            </div>

            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>

            {/* Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              الصفحة غير موجودة
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              عذراً، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها. 
              دعنا نساعدك في الوصول لما تحتاجه.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/">
                <Button className="btn-gold gap-2 w-full sm:w-auto">
                  <Home className="w-5 h-5" />
                  العودة للرئيسية
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  تصفح خدماتنا
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-foreground font-medium mb-4">هل تحتاج مساعدة؟ تواصل معنا</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-trust hover:bg-trust/90 text-white gap-2 w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4" />
                    واتساب
                    <span className="animate-pulse">⚡</span>
                  </Button>
                </a>
                <a href="tel:+966550857533">
                  <Button size="sm" variant="outline" className="gap-2 w-full sm:w-auto">
                    <Phone className="w-4 h-4" />
                    <span dir="ltr">055 085 7533</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
