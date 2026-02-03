import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "./button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const closeBanner = () => {
    localStorage.setItem("cookie-consent", "dismissed");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
        <div className="container-rtl py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Cookie className="w-5 h-5 text-gold shrink-0" />
              <p>
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بالاستمرار، أنت توافق على{" "}
                <Link to="/legal/cookies" className="text-primary hover:underline">
                  سياسة الكوكيز
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                size="sm"
                onClick={acceptCookies}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                موافق
              </Button>
              <button
                onClick={closeBanner}
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
