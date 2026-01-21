import { Shield, FileCheck, Scale, Award, Building, CheckCircle } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "عقود موثقة",
    description: "جميع التعاملات بعقود رسمية",
  },
  {
    icon: Scale,
    title: "متوافق مع الأنظمة",
    description: "نظام ساما وهيئة السوق المالية",
  },
  {
    icon: FileCheck,
    title: "دراسة ائتمانية",
    description: "تقييم شامل لكل طلب",
  },
  {
    icon: Award,
    title: "خبرة موثوقة",
    description: "سنوات من الخبرة في السوق",
  },
  {
    icon: Building,
    title: "شركة سعودية",
    description: "مرخصة ومسجلة رسمياً",
  },
  {
    icon: CheckCircle,
    title: "ضمان الجودة",
    description: "معايير عالية في التنفيذ",
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
            className="trust-badge"
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
            className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border"
          >
            <div className="w-12 h-12 rounded-full bg-trust/10 flex items-center justify-center mb-3">
              <badge.icon className="w-6 h-6 text-trust" />
            </div>
            <h4 className="font-semibold text-sm text-foreground mb-1">{badge.title}</h4>
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
          className="flex items-center gap-3 p-4 rounded-xl bg-trust/5 border border-trust/20"
        >
          <div className="w-10 h-10 rounded-lg bg-trust/10 flex items-center justify-center shrink-0">
            <badge.icon className="w-5 h-5 text-trust" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground">{badge.title}</h4>
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
