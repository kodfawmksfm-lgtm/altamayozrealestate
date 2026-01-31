import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "+966 55 085 7533",
    href: "tel:+966550857533",
    description: "متاحون للرد على استفساراتك",
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "+966 55 085 7533",
    href: "https://wa.me/966550857533",
    description: "تواصل سريع عبر واتساب",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "alm312464@gmail.com",
    href: "mailto:alm312464@gmail.com",
    description: "راسلنا في أي وقت",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "السبت - الخميس",
    description: "9:00 صباحاً - 6:00 مساءً",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="تواصل معنا"
        description="نحن هنا لمساعدتك. تواصل معنا عبر الوسيلة المناسبة لك، وسيقوم فريقنا المتخصص بالرد على استفساراتك في أقرب وقت."
        showTrustBadges={false}
        variant="service"
      />

      {/* Contact Info Cards */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => (
              <Card key={info.title} className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-primary hover:text-gold transition-colors font-medium"
                      dir="ltr"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{info.value}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">أرسل لنا رسالة</h2>
              <Card>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">موقعنا</h2>
              <Card className="overflow-hidden h-[400px] lg:h-full">
                <div className="w-full h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.0000000000005!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع شركة عالم التميز للعقارات"
                  />
                </div>
              </Card>
              <div className="mt-4 flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">العنوان</p>
                  <p className="text-sm text-muted-foreground">
                    3061 – 8091 شارع بحر العرب، حي الخليج، الرياض 13224
                  </p>
                  <a
                    href="https://maps.app.goo.gl/zo52jCNMphSZkUqC8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-gold transition-colors mt-2 inline-block"
                  >
                    فتح في خرائط جوجل ←
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
