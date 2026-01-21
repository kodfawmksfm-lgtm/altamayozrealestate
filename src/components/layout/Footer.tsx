import { Link } from "react-router-dom";
import { Building2, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

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

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-rtl section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-gold-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">عالم التميز</h3>
                <p className="text-xs text-primary-foreground/70">للعقارات</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              شركة سعودية رائدة في تقديم الحلول العقارية المتكاملة، نعمل وفق الأنظمة المعتمدة في المملكة العربية السعودية.
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
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
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
                  href="mailto:info@excellence-realestate.sa"
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                >
                  info@excellence-realestate.sa
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
    </footer>
  );
}
