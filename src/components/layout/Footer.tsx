import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUp, Sparkles, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/syolabuild-logo.png.asset.json";

const services = [
  { name: "التمويل الشخصي", href: "/services/ready-properties" },
  { name: "متابعة الطلبات", href: "/services/marketing" },
  { name: "الاستشارات المالية", href: "/services/cash-financing" },
  { name: "إعادة هيكلة الالتزامات", href: "/services/development" },
  { name: "حلول للمتعثرين", href: "/services/investment" },
  { name: "دراسة الأهلية", href: "/services/design" },
];

const quickLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "طلب تمويل", href: "/financing-request" },
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

const whatsappLink = `https://wa.me/966553558587?text=${encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدماتكم العقارية")}`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground relative">
      {/* CTA */}
      <div className="bg-gradient-to-l from-gold/15 via-gold/5 to-transparent border-b border-secondary-foreground/10">
        <div className="container-rtl py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-gold" />
                <span className="text-gold font-bold">استشارة مجانية</span>
              </div>
              <h3 className="text-xl font-bold mb-1">جاهز لخطوتك القادمة نحو الاستقرار المالي؟</h3>
              <p className="text-secondary-foreground/70 text-sm">تواصل معنا الآن واحصل على استشارة مجانية من خبرائنا المعتمدين</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#20BA5C] text-white gap-2">
                  <MessageCircle className="w-5 h-5" /> واتساب <span className="animate-pulse">⚡</span>
                </Button>
              </a>
              <Link to="/financing-request">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-gold-foreground bg-transparent">
                  قدّم طلب تمويل
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container-rtl section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-14 h-14 bg-background/10 rounded-lg p-1.5 flex items-center justify-center">
                <img src={logo.url} alt="شعار سيولة البناء والسداد" width={48} height={48} className="w-full h-full object-contain rounded" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">سيولة البناء والسداد</h3>
                <p className="text-xs text-secondary-foreground/70">للتمويل العقاري</p>
              </div>
            </Link>

            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-5">
              شركة سيولة البناء والسداد — نقدّم استشارات وحلول تمويل شخصي، وإعادة هيكلة الالتزامات، وحلولاً للمتعثرين مالياً، وفق الشروط والأحكام المعتمدة من الجهات التنظيمية في المملكة العربية السعودية.
            </p>

            <div className="space-y-1.5 text-xs text-secondary-foreground/70">
              <p className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-gold" /> شركة ذات مسؤولية محدودة — سجل تجاري نشط</p>
              <p className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-gold" /> الرقم الوطني الموحد: 7054954552</p>
            </div>
            <div className="flex gap-2 mt-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#25D366] rounded-md flex items-center justify-center hover:opacity-90 transition" aria-label="واتساب">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a href="tel:+966553558587" className="w-10 h-10 bg-gold rounded-md flex items-center justify-center hover:opacity-90 transition" aria-label="اتصال">
                <Phone className="w-5 h-5 text-gold-foreground" />
              </a>
              <a href="https://syolabuild.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary-foreground/10 rounded-md flex items-center justify-center hover:bg-secondary-foreground/20 transition" aria-label="الموقع الإلكتروني">
                <Globe className="w-5 h-5" />
              </a>
              <a href="mailto:ahqha2020@gmail.com" className="w-10 h-10 bg-secondary-foreground/10 rounded-md flex items-center justify-center hover:bg-secondary-foreground/20 transition" aria-label="بريد">
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          <div>
            <h4 className="text-base font-bold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-gold rounded-full" /> خدماتنا
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.name}>
                  <Link to={s.href} className="text-secondary-foreground/75 hover:text-gold transition-colors text-sm">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-gold rounded-full" /> روابط سريعة
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-secondary-foreground/75 hover:text-gold transition-colors text-sm">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-gold rounded-full" /> تواصل معنا
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span className="text-secondary-foreground/75 text-sm leading-relaxed">
                  المملكة العربية السعودية<br />الرياض
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+966553558587" className="text-secondary-foreground/75 hover:text-gold text-sm" dir="ltr">
                  +966 55 355 8587
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:ahqha2020@gmail.com" className="text-secondary-foreground/75 hover:text-gold text-sm break-all">
                  ahqha2020@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-secondary-foreground/75 text-sm">السبت - الخميس: 9ص - 6م</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-secondary/80 border-t border-secondary-foreground/10">
        <div className="container-rtl py-5">
          <p className="text-[11px] md:text-xs text-secondary-foreground/65 leading-relaxed text-center max-w-4xl mx-auto">
            جميع الطلبات المقدّمة إلى شركة سيولة البناء والسداد تخضع للتحقق من الأهلية، ولا يُعدّ قبول الطلب أو استلامه موافقةً على الإقراض أو التمويل. تُدرَس كل حالة على حدة وفق معايير ووضع كل متقدّم، وطبقاً للشروط والأحكام المنظّمة والمعتمدة من الجهات المرخِّصة. الخدمات المقدَّمة تخضع لرقابة ومراجعة الجهات المختصة في المملكة العربية السعودية، ولا تتضمّن أي وعود بمعدلات فائدة أو مبالغ أو فترات سداد مضمونة قبل الدراسة الائتمانية.
          </p>
        </div>
      </div>


      {/* Copyright */}
      <div className="bg-secondary border-t border-secondary-foreground/10">
        <div className="container-rtl py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            <p className="text-xs text-secondary-foreground/55">
              © {currentYear} شركة سيولة البناء والسداد — جميع الحقوق محفوظة.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {legalLinks.map((link, i) => (
                <span key={link.name} className="flex items-center gap-4">
                  <Link to={link.href} className="text-xs text-secondary-foreground/55 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                  {i < legalLinks.length - 1 && <span className="text-secondary-foreground/30">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute left-6 bottom-20 w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg"
        aria-label="العودة لأعلى"
      >
        <ArrowUp className="w-5 h-5 text-gold-foreground" />
      </button>
    </footer>
  );
}
