import { MessageCircle, Phone } from "lucide-react";

export function FloatingWhatsApp() {
  const phoneNumber = "966553558587";
  const message = "مرحباً، أرغب في الاستفسار عن حلول تمكين التمويلية.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 group"
        aria-label="تواصل عبر واتساب"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <div className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold text-sm hidden sm:inline">واتساب</span>
          <span className="text-lg animate-pulse">⚡</span>
        </div>
      </a>

      {/* Call floating button */}
      <a
        href={`tel:+${phoneNumber}`}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="اتصل بنا الآن"
      >
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
        <div className="relative flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Phone className="w-6 h-6" />
          <span className="font-semibold text-sm hidden sm:inline">اتصل الآن</span>
        </div>
      </a>
    </>
  );
}
