import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { snapTrack } from "@/lib/snap";

/** يرسل حدث PAGE_VIEW عند كل تغيير في المسار (تطبيق صفحة واحدة) */
export function SnapPixel() {
  const location = useLocation();

  useEffect(() => {
    snapTrack("PAGE_VIEW");
  }, [location.pathname]);

  return null;
}
