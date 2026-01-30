import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const phoneNumber = "966550857533";
  const message = "مرحباً، أرغب في الاستفسار عن خدماتكم العقارية.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="تواصل عبر واتساب"
    >
      {/* Pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* Main button */}
      <div className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold text-sm hidden sm:inline">تواصل معنا</span>
        <span className="text-lg animate-pulse">⚡</span>
      </div>
      
      {/* Tooltip on hover */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        رد فوري خلال دقائق!
      </div>
    </a>
  );
}
