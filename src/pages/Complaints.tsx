import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Send, AlertCircle } from "lucide-react";

const complaintTypes = [
  { value: "service", label: "شكوى على خدمة" },
  { value: "employee", label: "شكوى على موظف" },
  { value: "delay", label: "تأخر في الإجراءات" },
  { value: "communication", label: "مشكلة في التواصل" },
  { value: "suggestion", label: "اقتراح تحسين" },
  { value: "other", label: "أخرى" },
];

const Complaints = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    subject: "",
    details: "",
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreed) {
      toast({
        title: "يرجى الموافقة على الإقرار",
        variant: "destructive",
      });
      return;
    }

    const typeName = complaintTypes.find(t => t.value === formData.type)?.label || "غير محدد";
    const message = `
شكوى/اقتراح جديد

الاسم: ${formData.name}
الجوال: ${formData.phone}
البريد: ${formData.email || "غير محدد"}
نوع الرسالة: ${typeName}
الموضوع: ${formData.subject}

التفاصيل:
${formData.details}
    `.trim();

    const whatsappUrl = `https://wa.me/966530311224?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "تم فتح واتساب",
      description: "سيتم التواصل معك قريباً من قبل مسؤول الشكاوى",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="الشكاوى والاقتراحات"
        description="نحرص على تحسين خدماتنا باستمرار. شاركنا ملاحظاتك أو اقتراحاتك وسنعمل على معالجتها بأسرع وقت."
        showTrustBadges={false}
        variant="service"
      />

      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">نموذج الشكاوى والاقتراحات</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">الاسم الكامل *</Label>
                        <Input
                          id="name"
                          required
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
                          dir="ltr"
                          className="text-right"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">نوع الرسالة *</Label>
                        <Select
                          value={formData.type}
                          onValueChange={(value) => setFormData({ ...formData, type: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="اختر النوع" />
                          </SelectTrigger>
                          <SelectContent>
                            {complaintTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">الموضوع *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="details">تفاصيل الشكوى/الاقتراح *</Label>
                      <Textarea
                        id="details"
                        required
                        rows={6}
                        placeholder="اكتب تفاصيل شكواك أو اقتراحك هنا..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      />
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                      <Checkbox
                        id="agreed"
                        checked={formData.agreed}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
                      />
                      <Label htmlFor="agreed" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        أقر بأن المعلومات المقدمة صحيحة وأوافق على سياسة الخصوصية والشروط والأحكام
                      </Label>
                    </div>

                    <Button type="submit" className="btn-gold w-full">
                      <Send className="w-5 h-5 ml-2" />
                      إرسال الشكوى/الاقتراح
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-trust/5 border-trust/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">التزامنا تجاهك</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>• الرد على جميع الشكاوى خلال 5 أيام عمل</li>
                    <li>• التعامل بسرية تامة مع جميع المعلومات</li>
                    <li>• إشعارك بمراحل معالجة شكواك</li>
                    <li>• العمل على حل المشكلة بشكل عادل</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">تواصل مباشر</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    للحالات العاجلة، يمكنك التواصل مباشرة مع مسؤول الشكاوى:
                  </p>
                  <a
                    href="tel:+966530311224"
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-medium text-foreground">مسؤول الشكاوى</p>
                      <p className="text-sm text-muted-foreground" dir="ltr">+966 53 031 1224</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-gold/20 bg-gold/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">ملاحظة مهمة</h4>
                      <p className="text-sm text-muted-foreground">
                        في حال عدم رضاك عن الرد، يحق لك التصعيد للجهات الرقابية المختصة وفقاً للأنظمة السعودية.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Complaints;
