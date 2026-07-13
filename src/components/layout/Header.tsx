import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/tamkeen-logo.jpg.asset.json";

const services = [
  { name: "التمويل الشخصي", href: "/services/ready-properties" },
  { name: "متابعة الطلبات", href: "/services/marketing" },
  { name: "الاستشارات المالية", href: "/services/cash-financing" },
  { name: "إعادة هيكلة الالتزامات", href: "/services/development" },
  { name: "حلول للمتعثرين", href: "/services/investment" },
  { name: "دراسة الأهلية", href: "/services/design" },
];

const navigation = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "خدماتنا", href: "/services", hasDropdown: true },
  { name: "طلب تمويل", href: "/financing-request", highlight: true },
  { name: "المدونة", href: "/blog" },
  { name: "الأسئلة الشائعة", href: "/faq" },
  { name: "تواصل", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container-rtl">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="تمكين للحلول التمويلية">
            <img
              src={logo.url}
              alt="شعار تمكين للحلول التمويلية"
              width={56}
              height={56}
              className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-md transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-base md:text-lg font-bold text-foreground leading-tight">تمكين</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground">للحلول التمويلية</p>
            </div>
          </Link>


          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1 ${
                        isActive(item.href)
                          ? "bg-secondary text-secondary-foreground"
                          : "text-foreground/80 hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link to="/services" className="w-full cursor-pointer font-semibold">
                        جميع الخدمات
                      </Link>
                    </DropdownMenuItem>
                    <div className="h-px bg-border my-1" />
                    {services.map((s) => (
                      <DropdownMenuItem key={s.name} asChild>
                        <Link to={s.href} className="w-full cursor-pointer">
                          {s.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    item.highlight
                      ? "bg-gold text-gold-foreground hover:bg-gold/90 shadow-sm"
                      : isActive(item.href)
                      ? "bg-secondary text-secondary-foreground"
                      : "text-foreground/80 hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+966567597514"
              className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline" dir="ltr">056 759 7514</span>
            </a>
            <a
              href="https://wa.me/966567597514?text=مرحباً،%20أرغب%20في%20استشارة%20عقارية"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-1.5">
                <MessageCircle className="w-4 h-4" />
                استشارة مجانية
              </Button>
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1.5">
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full px-4 py-3 rounded-md text-base font-medium flex items-center justify-between text-foreground/80 hover:bg-accent"
                    >
                      {item.name}
                      <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesOpen && (
                      <div className="mt-1 mr-4 space-y-1 animate-fade-in">
                        <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-semibold bg-accent">
                          جميع الخدمات
                        </Link>
                        {services.map((s) => (
                          <Link key={s.name} to={s.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm text-foreground/80 hover:bg-accent">
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-md text-base font-medium ${
                      item.highlight
                        ? "bg-gold text-gold-foreground"
                        : isActive(item.href)
                        ? "bg-secondary text-secondary-foreground"
                        : "text-foreground/80 hover:bg-accent"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-3 mt-2 border-t border-border space-y-2">
                <a href="tel:+966567597514" className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-accent text-foreground font-medium">
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">056 759 7514</span>
                </a>
                <a href="https://wa.me/966567597514" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                    <MessageCircle className="w-5 h-5" />
                    استشارة مجانية واتساب
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
