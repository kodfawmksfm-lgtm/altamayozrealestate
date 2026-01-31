import { Shield, FileCheck, Scale, Award, Building, CheckCircle, LucideIcon } from "lucide-react";

interface Badge {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: boolean;
}

const badges: Badge[] = [
  {
    icon: Shield,
    title: "عقود موثقة",
    description: "جميع التعاملات بعقود رسمية",
    highlight: true,
  },
  {
    icon: Scale,
    title: "متوافق مع الأنظمة",
    description: "نظام ساما وهيئة السوق المالية",
    highlight: true,
  },
  {
    icon: FileCheck,
    title: "دراسة ائتمانية",
    description: "تقييم شامل لكل طلب",
    highlight: true,
  },
  {
    icon: Award,
    title: "خبرة موثوقة",
    description: "سنوات من الخبرة في السوق",
    highlight: true,
  },
  {
    icon: Building,
    title: "شركة سعودية",
    description: "مرخصة ومسجلة رسمياً",
    highlight: false,
  },
  {
    icon: CheckCircle,
    title: "ضمان الجودة",
    description: "معايير عالية في التنفيذ",
    highlight: false,
  },
];

interface TrustBadgesProps {
  variant?: "default" | "compact" | "grid";
  showAll?: boolean;
}

export function TrustBadges({ variant = "default", showAll = false }: TrustBadgesProps) {
  const displayBadges = showAll ? badges : badges.slice(0, 4);

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3">
        {displayBadges.map((badge) => (
          <div
            key={badge.title}
            className={`trust-badge ${badge.highlight ? "text-gold border-gold/30" : ""}`}
          >
            <badge.icon className="w-4 h-4" />
            <span>{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className={`flex flex-col items-center text-center p-4 rounded-xl border ${
              badge.highlight 
                ? "bg-gold/5 border-gold/30" 
                : "bg-card border-border"
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
              badge.highlight ? "bg-gold/10" : "bg-trust/10"
            }`}>
              <badge.icon className={`w-6 h-6 ${badge.highlight ? "text-gold" : "text-trust"}`} />
            </div>
            <h4 className={`font-semibold text-sm mb-1 ${
              badge.highlight ? "text-gold" : "text-foreground"
            }`}>{badge.title}</h4>
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {displayBadges.map((badge) => (
        <div
          key={badge.title}
          className={`flex items-center gap-3 p-4 rounded-xl border ${
            badge.highlight 
              ? "bg-gold/5 border-gold/30" 
              : "bg-trust/5 border-trust/20"
          }`}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
            badge.highlight ? "bg-gold/10" : "bg-trust/10"
          }`}>
            <badge.icon className={`w-5 h-5 ${badge.highlight ? "text-gold" : "text-trust"}`} />
          </div>
          <div>
            <h4 className={`font-semibold text-sm ${
              badge.highlight ? "text-gold" : "text-foreground"
            }`}>{badge.title}</h4>
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
