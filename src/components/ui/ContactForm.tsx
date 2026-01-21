import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  { value: "cash-financing", label: "تمويل عقاري كاش" },
  { value: "development", label: "تطوير عقاري" },
  { value: "investment", label: "استثمار عقاري" },
  { value: "ready-properties", label: "عقارات جاهزة" },
  { value: "design", label: "تصميم وترميم" },
  { value: "marketing", label: "تسويق حصري" },
];

interface ContactFormProps {
  preSelectedService?: string;
  variant?: "default" | "compact";
}

export function ContactForm({ preSelectedService, variant = "default" }: ContactFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: preSelectedService || "",
    message: "",
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreed) {
      toast({
        title: "يرجى الموافقة على الإقرار",
        description: "يجب الموافقة على الإقرار القانوني للمتابعة",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Construct WhatsApp message
    const serviceName = services.find(s => s.value === formData.service)?.label || "غير محدد";
    const message = `
مرحباً، أرغب في الاستفسار عن خدماتكم.

الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
الخدمة المطلوبة: ${serviceName}
${formData.message ? `الرسالة: ${formData.message}` : ""}

أقر بأنني اطلعت على الشروط والأحكام وأوافق عليها.
    `.trim();

    const whatsappUrl = `https://wa.me/966550857533?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    toast({
      title: "تم فتح واتساب",
      description: "سيتم التواصل معك في أقرب وقت ممكن",
    });

    setIsSubmitting(false);
  };

  const isCompact = variant === "compact";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className={`grid gap-6 ${isCompact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <div className="space-y-2">
          <Label htmlFor="name">الاسم الكامل *</Label>
          <Input
            id="name"
            required
            placeholder="أدخل اسمك الكامل"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">رقم الجوال *</Label>
          <Input
            id="phone"
            type="tel"
            required
            placeholder="05xxxxxxxx"
            dir="ltr"
            className="text-right"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">الخدمة المطلوبة *</Label>
        <Select
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="اختر الخدمة" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.value} value={service.value}>
                {service.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {!isCompact && (
        <div className="space-y-2">
          <Label htmlFor="message">رسالتك (اختياري)</Label>
          <Textarea
            id="message"
            placeholder="اكتب رسالتك أو استفسارك هنا..."
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
      )}

      <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
        <Checkbox
          id="agreed"
          checked={formData.agreed}
          onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
        />
        <Label htmlFor="agreed" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
          أقر بأنني اطلعت على{" "}
          <a href="/legal/terms" className="text-primary hover:underline">الشروط والأحكام</a>
          {" "}و{" "}
          <a href="/legal/privacy" className="text-primary hover:underline">سياسة الخصوصية</a>
          ، وأفهم أن جميع الخدمات تخضع للدراسة والموافقة وفقاً للأنظمة السعودية المعتمدة.
        </Label>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          className="btn-gold flex-1"
          disabled={isSubmitting}
        >
          <MessageCircle className="w-5 h-5 ml-2" />
          تواصل عبر واتساب
        </Button>
        {!isCompact && (
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => {
              const mailtoUrl = `mailto:info@excellence-realestate.sa?subject=استفسار عن ${services.find(s => s.value === formData.service)?.label || "الخدمات"}&body=${encodeURIComponent(`الاسم: ${formData.name}\nرقم الجوال: ${formData.phone}\n\n${formData.message}`)}`;
              window.location.href = mailtoUrl;
            }}
          >
            <Send className="w-5 h-5 ml-2" />
            إرسال بريد إلكتروني
          </Button>
        )}
      </div>
    </form>
  );
}
