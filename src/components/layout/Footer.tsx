import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUp, Sparkles, ShieldCheck } from "lucide-react";
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
                <p className="text-xs text-secondary-foreground/70">للحلول التمويلية</p>
              </div>
            </Link>

            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-5">
              شركة سيولة البناء والسداد — نقدّم استشارات وحلول تمويل شخصي، وإعادة هيكلة الالتزامات، وحلولاً للمتعثرين مالياً، وفق الشروط والأحكام المعتمدة من الجهات التنظيمية في المملكة العربية السعودية.
            </p>

            <div className="space-y-1.5 text-xs text-secondary-foreground/70">
              <p className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-gold" /> مرخّص وخاضع لرقابة الجهات المختصة في المملكة</p>
            </div>
            <div className="flex gap-2 mt-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#25D366] rounded-md flex items-center justify-center hover:opacity-90 transition" aria-label="واتساب">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a href="tel:+966553558587" className="w-10 h-10 bg-gold rounded-md flex items-center justify-center hover:opacity-90 transition" aria-label="اتصال">
                <Phone className="w-5 h-5 text-gold-foreground" />
              </a>
              <a href="https://syolabuild.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-md flex items-center justify-center hover:opacity-90 transition" aria-label="إنستغرام">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://syolabuild.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#FFFC00] rounded-md flex items-center justify-center hover:opacity-90 transition" aria-label="سناب شات">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12.166 22c-.526 0-.83-.078-1.108-.14-.264-.058-.502-.11-.816-.163-.394-.066-.812-.115-1.242-.128-.402-.012-.804.008-1.203.06-.184.024-.35-.083-.44-.253-.157-.294-.235-.632-.31-.958-.06-.263-.126-.548-.226-.83-.024-.068-.06-.13-.108-.185-.05-.055-.11-.096-.178-.12-.44-.156-.836-.316-1.19-.487-.36-.174-.688-.36-.987-.564-.51-.35-.762-.65-.788-.933-.02-.223.11-.42.318-.482.05-.015.104-.026.16-.033.05-.007.098-.017.146-.034 1.05-.362 1.86-.845 2.475-1.47.615-.628 1.036-1.404 1.286-2.363.036-.14.056-.283.06-.428.005-.146-.014-.29-.056-.43-.077-.256-.19-.463-.34-.62-.147-.155-.323-.253-.535-.294-.24-.048-.474-.113-.7-.196-.213-.077-.42-.17-.622-.28-.286-.155-.5-.317-.65-.487-.126-.144-.207-.288-.24-.432-.032-.144-.017-.284.045-.42.075-.164.196-.298.362-.4.166-.104.36-.174.582-.213.222-.038.462-.045.716-.02.253.025.5.083.735.176.14.056.28.11.42.164.14.055.276.107.408.156.132.049.256.088.373.117.117.03.223.045.318.048.05.001.096-.008.14-.025.043-.017.083-.043.117-.075.034-.033.061-.073.08-.117.02-.045.03-.093.03-.144.004-.078.007-.156.01-.234.003-.078.005-.156.006-.234.002-.078.002-.156.002-.234 0-.078-.001-.156-.003-.234-.002-.078-.005-.156-.008-.234-.003-.078-.007-.156-.012-.234-.005-.078-.01-.156-.017-.234-.007-.078-.015-.156-.025-.234-.01-.078-.02-.156-.033-.234-.013-.078-.028-.156-.045-.234-.017-.078-.036-.156-.058-.234-.022-.078-.046-.156-.073-.234-.027-.078-.056-.156-.088-.234C7.28 4.15 8.71 3.5 12 3.5c3.29 0 4.72.65 5.62 1.85-.032.078-.061.156-.088.234-.027.078-.051.156-.073.234-.022.078-.041.156-.058.234-.017.078-.032.156-.045.234-.013.078-.023.156-.033.234-.01.078-.018.156-.025.234-.007.078-.012.156-.017.234-.005.078-.009.156-.012.234-.003.078-.006.156-.008.234-.002.078-.003.156-.003.234 0 .078 0 .156.002.234.001.078.003.156.006.234.003.078.006.156.01.234 0 .05.01.099.03.144.02.044.046.084.08.117.034.032.074.058.117.075.044.017.09.026.14.025.095-.003.201-.019.318-.048.117-.029.241-.068.373-.117.132-.049.268-.101.408-.156.14-.054.28-.108.42-.164.235-.093.482-.151.735-.176.254-.025.494-.018.716.02.222.039.416.11.582.213.166.102.287.236.362.4.062.136.077.276.045.42-.033.144-.114.288-.24.432-.15.17-.364.332-.65.487-.202.11-.409.203-.622.28-.226.083-.46.148-.7.196-.212.041-.388.139-.535.294-.15.157-.263.364-.34.62-.042.14-.061.284-.056.43.004.145.024.288.06.428.25.959.671 1.735 1.286 2.363.615.625 1.425 1.108 2.475 1.47.048.017.096.027.146.034.056.007.11.018.16.033.208.062.338.259.318.482-.026.283-.278.583-.788.933-.299.204-.627.39-.987.564-.354.171-.75.331-1.19.487-.068.024-.128.065-.178.12-.048.055-.084.117-.108.185-.1.282-.166.567-.226.83-.075.326-.153.664-.31.958-.09.17-.256.277-.44.253-.399-.052-.801-.072-1.203-.06-.43.013-.848.062-1.242.128-.314.053-.552.105-.816.163-.278.062-.582.14-1.108.14z"/></svg>
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
