import { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ShieldCheck, Lock, FileCheck, Sparkles, Phone, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const schema = z.object({
  full_name: z.string().trim().min(2, "الاسم قصير").max(100),
  national_id: z.string().trim().regex(/^[0-9]{8,15}$/, "رقم الهوية غير صحيح"),
  phone: z.string().trim().regex(/^[+0-9\s-]{8,20}$/, "رقم الجوال غير صحيح"),
  email: z.string().trim().email("بريد غير صحيح").max(255).optional().or(z.literal("")),
  city: z.string().trim().min(2).max(60),
  age: z.coerce.number().int().min(18).max(75).optional(),
  monthly_salary: z.coerce.number().positive().optional(),
  employer: z.string().trim().max(120).optional(),
  service_years: z.coerce.number().min(0).max(50).optional(),
  monthly_obligations: z.coerce.number().min(0).optional(),
  has_existing_financing: z.boolean(),
  has_defaults: z.boolean(),
  property_type: z.string().max(60).optional(),
  owns_land: z.boolean(),
  additional_details: z.string().max(1000).optional(),
  consent_given: z.literal(true, { errorMap: () => ({ message: "يجب الموافقة على الإقرار" }) }),
});

const propertyTypes = ["فيلا سكنية", "شقة", "أرض", "عقار تجاري", "مشروع استثماري", "أخرى"];
const cities = ["الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام", "الخبر", "الظهران", "تبوك", "أبها", "الطائف", "بريدة", "حائل", "نجران", "جازان", "أخرى"];

export default function FinancingRequest() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const [f, setF] = useState({
    full_name: "", national_id: "", phone: "", email: "", city: "",
    age: "", monthly_salary: "", employer: "", service_years: "", monthly_obligations: "",
    has_existing_financing: false, has_defaults: false,
    property_type: "", owns_land: false, additional_details: "",
    consent_given: false,
  });

  const update = (k: string, v: any) => setF((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({
      ...f,
      email: f.email || undefined,
      age: f.age || undefined,
      monthly_salary: f.monthly_salary || undefined,
      service_years: f.service_years || undefined,
      monthly_obligations: f.monthly_obligations || undefined,
      employer: f.employer || undefined,
      property_type: f.property_type || undefined,
      additional_details: f.additional_details || undefined,
    });
    if (!parsed.success) {
      toast({ title: "بيانات غير مكتملة", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const d = parsed.data;
    const { error } = await supabase.from("financing_requests").insert([{
      full_name: d.full_name,
      national_id: d.national_id,
      phone: d.phone,
      email: d.email || null,
      city: d.city,
      age: d.age ?? null,
      monthly_salary: d.monthly_salary ?? null,
      employer: d.employer || null,
      service_years: d.service_years ?? null,
      monthly_obligations: d.monthly_obligations ?? null,
      has_existing_financing: d.has_existing_financing,
      has_defaults: d.has_defaults,
      property_type: d.property_type || null,
      owns_land: d.owns_land,
      additional_details: d.additional_details || null,
      consent_given: d.consent_given,
    }]);
    setSubmitting(false);
    if (error) {
      toast({ title: "تعذر إرسال الطلب", description: error.message, variant: "destructive" });
      return;
    }
    setDone(true);
    toast({ title: "تم استلام طلبك", description: "سنتواصل معك خلال 24 ساعة عمل" });
    const msg = `طلب تمويل عقاري جديد:\nالاسم: ${f.full_name}\nالجوال: ${f.phone}\nالمدينة: ${f.city}\nنوع العقار: ${f.property_type || "غير محدد"}`;
    window.open(`https://wa.me/966553558587?text=${encodeURIComponent(msg)}`, "_blank");
  };

  if (done) {
    return (
      <Layout>
        <section className="min-h-[60vh] flex items-center bg-accent">
          <div className="container-rtl text-center max-w-xl">
            <div className="w-20 h-20 rounded-full bg-trust/15 mx-auto mb-5 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-trust" />
            </div>
            <h1 className="text-3xl font-bold mb-3">تم استلام طلبك بنجاح</h1>
            <p className="text-muted-foreground mb-6">
              شكراً لثقتك بشركة سيولة البناء والسداد. سيتواصل معك أحد مستشارينا خلال 24 ساعة عمل لمناقشة الخيارات المتاحة.
            </p>
            <a href="https://wa.me/966553558587" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90 gap-2">
                <MessageCircle className="w-5 h-5" /> تواصل واتساب فوري
              </Button>
            </a>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>قدّم طلب تمويل عقاري | سيولة البناء والسداد</title>
        <meta name="description" content="قدّم طلب تمويل عقاري إلكترونياً مع شركة سيولة البناء والسداد. دراسة احترافية، شفافية كاملة، وحلول مخصصة وفق الأنظمة السعودية." />
        <link rel="canonical" href="https://syolabuild.com/financing-request" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-l from-secondary to-secondary/90 text-secondary-foreground py-14 md:py-20">
        <div className="container-rtl text-center max-w-3xl mx-auto">
          <Badge className="mb-4 bg-gold/20 text-gold border-gold/30">
            <Sparkles className="w-3.5 h-3.5 ml-1" /> نموذج طلب تمويل
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">قدّم طلب تمويل عقاري</h1>
          <p className="text-secondary-foreground/80 text-base md:text-lg">
            املأ النموذج التالي وسيتولى مستشارونا دراسة طلبك بشكل احترافي وسري تام، وتقديم الخيارات الأنسب لك.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-gold" /> بياناتك مشفّرة وسرية</span>
            <span className="flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-gold" /> متوافق مع PDPL</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-gold" /> رد خلال 24 ساعة</span>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-accent">
        <div className="container-rtl max-w-4xl">
          <Card>
            <CardContent className="p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Personal */}
                <div>
                  <h2 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">البيانات الشخصية</h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="full_name">الاسم الكامل *</Label>
                      <Input id="full_name" required value={f.full_name} onChange={(e) => update("full_name", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="national_id">رقم الهوية الوطنية *</Label>
                      <Input id="national_id" required value={f.national_id} onChange={(e) => update("national_id", e.target.value)} dir="ltr" inputMode="numeric" />
                    </div>
                    <div>
                      <Label htmlFor="phone">رقم الجوال *</Label>
                      <Input id="phone" required value={f.phone} onChange={(e) => update("phone", e.target.value)} dir="ltr" placeholder="05xxxxxxxx" />
                    </div>
                    <div>
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" value={f.email} onChange={(e) => update("email", e.target.value)} dir="ltr" />
                    </div>
                    <div>
                      <Label htmlFor="city">المدينة *</Label>
                      <Select value={f.city} onValueChange={(v) => update("city", v)} required>
                        <SelectTrigger><SelectValue placeholder="اختر المدينة" /></SelectTrigger>
                        <SelectContent>{cities.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="age">العمر</Label>
                      <Input id="age" type="number" min={18} max={75} value={f.age} onChange={(e) => update("age", e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* Financial */}
                <div>
                  <h2 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">البيانات المالية والوظيفية</h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="monthly_salary">الراتب الشهري (ر.س)</Label>
                      <Input id="monthly_salary" type="number" value={f.monthly_salary} onChange={(e) => update("monthly_salary", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="employer">جهة العمل</Label>
                      <Input id="employer" value={f.employer} onChange={(e) => update("employer", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="service_years">مدة الخدمة (سنوات)</Label>
                      <Input id="service_years" type="number" step="0.5" value={f.service_years} onChange={(e) => update("service_years", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="monthly_obligations">الالتزامات الشهرية (ر.س)</Label>
                      <Input id="monthly_obligations" type="number" value={f.monthly_obligations} onChange={(e) => update("monthly_obligations", e.target.value)} />
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-md border border-border bg-background">
                      <Checkbox id="has_existing_financing" checked={f.has_existing_financing} onCheckedChange={(v) => update("has_existing_financing", v)} />
                      <Label htmlFor="has_existing_financing" className="cursor-pointer text-sm">يوجد تمويل قائم</Label>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-md border border-border bg-background">
                      <Checkbox id="has_defaults" checked={f.has_defaults} onCheckedChange={(v) => update("has_defaults", v)} />
                      <Label htmlFor="has_defaults" className="cursor-pointer text-sm">يوجد تعثرات سابقة</Label>
                    </div>
                  </div>
                </div>

                {/* Property */}
                <div>
                  <h2 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">تفاصيل العقار المطلوب</h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="property_type">نوع العقار المطلوب</Label>
                      <Select value={f.property_type} onValueChange={(v) => update("property_type", v)}>
                        <SelectTrigger><SelectValue placeholder="اختر نوع العقار" /></SelectTrigger>
                        <SelectContent>{propertyTypes.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-md border border-border bg-background self-end">
                      <Checkbox id="owns_land" checked={f.owns_land} onCheckedChange={(v) => update("owns_land", v)} />
                      <Label htmlFor="owns_land" className="cursor-pointer text-sm">أملك أرضاً وأرغب في البناء</Label>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="additional_details">تفاصيل إضافية</Label>
                      <Textarea id="additional_details" rows={4} value={f.additional_details} onChange={(e) => update("additional_details", e.target.value)} placeholder="اذكر أي تفاصيل أو متطلبات خاصة..." />
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div className="p-4 rounded-md bg-accent border border-gold/30">
                  <div className="flex items-start gap-3">
                    <Checkbox id="consent_given" checked={f.consent_given} onCheckedChange={(v) => update("consent_given", v)} className="mt-1" />
                    <Label htmlFor="consent_given" className="cursor-pointer text-sm leading-relaxed text-foreground">
                      أُقرّ بصحة البيانات المُدخلة، وأوافق على{" "}
                      <a href="/legal/terms" className="text-gold underline">الشروط والأحكام</a>{" و "}
                      <a href="/legal/privacy" className="text-gold underline">سياسة الخصوصية</a>.
                      وأعلم أن جميع الطلبات تخضع للتحقق من الأهلية، وأن قبول الطلب أو استلامه لا يُعدّ موافقة على الإقراض أو التمويل، وأن كل حالة تُدرَس على حدة وفق معايير ووضع كل متقدّم طبقاً للشروط والأحكام المنظّمة. وأن الخدمات تخضع لرقابة ومراجعة الجهات المختصة في المملكة العربية السعودية.
                    </Label>
                  </div>
                </div>


                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" size="lg" disabled={submitting} className="bg-gold text-gold-foreground hover:bg-gold/90 gap-2 flex-1 font-bold">
                    {submitting ? "جاري الإرسال..." : <>إرسال الطلب <Sparkles className="w-4 h-4" /></>}
                  </Button>
                  <a href="https://wa.me/966553558587" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button type="button" variant="outline" size="lg" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground gap-2">
                      <MessageCircle className="w-5 h-5" /> أرسل عبر واتساب بدلاً من ذلك
                    </Button>
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Trust */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { i: Lock, t: "تشفير كامل", d: "بياناتك محمية وفق أعلى المعايير" },
              { i: ShieldCheck, t: "سرية تامة", d: "لا تتم مشاركة بياناتك مع طرف ثالث" },
              { i: Phone, t: "رد سريع", d: "نتواصل معك خلال 24 ساعة عمل" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-3 p-4 bg-background rounded-md border border-border">
                <x.i className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <div className="font-bold text-foreground text-sm">{x.t}</div>
                  <div className="text-xs text-muted-foreground">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
