import { Info } from "lucide-react";

export function BrokerNotice() {
  return (
    <div className="w-full bg-secondary/95 text-white text-[11px] md:text-xs border-b border-gold/20">
      <div className="container-rtl py-1.5 md:py-2 flex items-center justify-center gap-2 text-center">
        <Info className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />
        <p className="leading-snug">
          <span className="font-semibold text-gold">تنويه:</span>{" "}
          شركة <span className="font-semibold">سيولة البناء والسداد</span> يعمل بصفة <span className="font-semibold">وسيط تمويلي</span> ولا يُقدّم إقراضاً مباشراً.
          جميع الطلبات تخضع للتحقق من الأهلية وموافقة الجهات الممولة المرخّصة من البنك المركزي السعودي.
        </p>
      </div>
    </div>
  );
}
