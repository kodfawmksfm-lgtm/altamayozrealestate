import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image?: string;
  featured?: boolean;
}

export function ServiceCard({ title, description, icon: Icon, href, image, featured }: ServiceCardProps) {
  return (
    <Card className={`card-hover overflow-hidden group ${featured ? "ring-2 ring-gold" : ""}`}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          {featured && (
            <div className="absolute top-4 right-4 bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-bold">
              الأكثر طلباً
            </div>
          )}
        </div>
      )}
      <CardContent className={`${image ? "pt-4" : "pt-6"} pb-6`}>
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            featured ? "gradient-gold" : "gradient-primary"
          }`}>
            <Icon className={`w-6 h-6 ${featured ? "text-gold-foreground" : "text-primary-foreground"}`} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </div>
        <Link to={href}>
          <Button variant="ghost" className="w-full justify-between group/btn hover:bg-muted">
            <span>اكتشف المزيد</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
