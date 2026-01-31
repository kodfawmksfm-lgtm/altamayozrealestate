import { Link } from "react-router-dom";
import { Building2, Phone, Mail, MapPin, Clock, MessageCircle, ArrowUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "تمويل عقاري كاش", href: "/services/cash-financing" },
  { name: "تطوير عقاري", href: "/services/development" },
  { name: "استثمار عقاري", href: "/services/investment" },
  { name: "عقارات جاهزة", href: "/services/ready-properties" },
  { name: "تصميم وترميم", href: "/services/design" },
  { name: "تسويق حصري", href: "/services/marketing" },
];

const quickLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "المدونة", href: "/blog" },
  { name: "الأسئلة الشائعة", href: "/faq" },
  { name: "تواصل معنا", href: "/contact" },
  { name: "الشكاوى والاقتراحات", href: "/complaints" },
];

const legalLinks = [
  { name: "الشروط والأحكام", href: "/legal/terms" },
  { name: "سياسة الخصوصية", href: "/legal/privacy" },
  { name: "إخلاء المسؤولية", href: "/legal/disclaimer" },
  { name: "بيان الامتثال", href: "/legal/compliance" },
  { name: "سياسة الكوكيز", href: "/legal/cookies" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدماتكم العقارية");
  const whatsappLink = `https://wa.me/966550857533?text=${whatsappMessage}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* CTA Section */}
      <div className="bg-gradient-to-l from-gold/20 to-gold/5 border-b border-primary-foreground/10">
        <div className="container-rtl py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-gold" />
                <span className="text-gold font-bold">استشارة مجانية</span>
              </div>
              <h3 className="text-xl font-bold mb-1">جاهز لبدء رحلتك العقارية؟</h3>
              <p className="text-primary-foreground/70 text-sm">تواصل معنا الآن واحصل على استشارة مجانية من خبرائنا</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-trust hover:bg-trust/90 text-white gap-2">
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                  <span className="animate-pulse">⚡</span>
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-gold-foreground">
                  نموذج التواصل
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-rtl section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                <Building2 className="w-7 h-7 text-gold-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">عالم التميز</h3>
                <p className="text-xs text-primary-foreground/70">للعقارات</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              شركة سعودية رائدة في تقديم الحلول العقارية المتكاملة. نجمع بين الخبرة العميقة والالتزام بالأنظمة السعودية لنقدم لك تجربة عقارية استثنائية.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-trust rounded-lg flex items-center justify-center hover:bg-trust/80 transition-colors"
                aria-label="تواصل عبر واتساب"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+966550857533"
                className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center hover:bg-gold/80 transition-colors"
                aria-label="اتصل بنا"
              >
                <Phone className="w-5 h-5 text-gold-foreground" />
              </a>
              <a
                href="mailto:alm312464@gmail.com"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="راسلنا بالبريد"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gold rounded-full"></span>
              خدماتنا
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm inline-block hover:translate-x-1 transform"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gold rounded-full"></span>
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gold rounded-full"></span>
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  3061 – 8091 شارع بحر العرب<br />
                  حي الخليج – الرياض 13224
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a
                  href="tel:+966550857533"
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  dir="ltr"
                >
                  +966 55 085 7533
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a
                  href="mailto:alm312464@gmail.com"
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                >
                  alm312464@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  السبت - الخميس: 9 ص - 6 م
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-primary/80 border-t border-primary-foreground/10">
        <div className="container-rtl py-6">
          <p className="text-xs text-primary-foreground/70 leading-relaxed text-center max-w-4xl mx-auto">
            جميع الخدمات المقدمة تخضع للأنظمة المعتمدة في المملكة العربية السعودية، وتُنفذ بموجب عقود رسمية موثقة، 
            وتخضع للدراسة الائتمانية والتقييم العقاري، ولا يُعد أي محتوى أو عرض التزامًا بالتمويل أو الموافقة النهائية.
          </p>
        </div>
      </div>

      {/* Copyright & Legal Links */}
      <div className="bg-primary border-t border-primary-foreground/10">
        <div className="container-rtl py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-foreground/60">
              © {currentYear} شركة عالم التميز للعقارات. جميع الحقوق محفوظة.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center gap-4">
                  <Link
                    to={link.href}
                    className="text-xs text-primary-foreground/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-primary-foreground/30">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute left-6 bottom-20 w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold/80 transition-all hover:scale-110 shadow-lg"
        aria-label="العودة لأعلى"
      >
        <ArrowUp className="w-5 h-5 text-gold-foreground" />
      </button>
    </footer>
  );
}
