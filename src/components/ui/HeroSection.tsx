import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { ArrowLeft, Phone } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  showTrustBadges?: boolean;
  children?: ReactNode;
  variant?: "default" | "service";
}

export function HeroSection({
  title,
  subtitle,
  description,
  image,
  primaryCTA,
  secondaryCTA,
  showTrustBadges = true,
  children,
  variant = "default",
}: HeroSectionProps) {
  const isService = variant === "service";

  return (
    <section className={`relative overflow-hidden ${isService ? "py-16 md:py-24" : "min-h-[85vh] flex items-center"}`}>
      {/* Background */}
      {image ? (
        <>
          <div className="absolute inset-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/80 to-primary/60" />
          </div>
        </>
      ) : (
        <div className="absolute inset-0 gradient-primary" />
      )}

      {/* Content */}
      <div className="container-rtl relative z-10 py-12 md:py-20">
        <div className={`max-w-3xl ${isService ? "" : "mx-auto text-center"}`}>
          {subtitle && (
            <span className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              {subtitle}
            </span>
          )}
          
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in ${isService ? "" : "text-balance"}`}>
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {description}
          </p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className={`flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in ${isService ? "" : "justify-center"}`} style={{ animationDelay: "0.2s" }}>
              {primaryCTA && (
                <Link to={primaryCTA.href}>
                  <Button className="btn-gold text-lg px-8 py-6 w-full sm:w-auto">
                    {primaryCTA.text}
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <a href={`tel:+966550857533`}>
                  <Button variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                    <Phone className="w-5 h-5 ml-2" />
                    {secondaryCTA.text}
                  </Button>
                </a>
              )}
            </div>
          )}

          {children}

          {/* Trust Badges */}
          {showTrustBadges && (
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <TrustBadges variant="compact" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
