// Snap Pixel helper — safe no-op when the pixel script is unavailable
declare global {
  interface Window {
    snaptr?: (...args: unknown[]) => void;
  }
}

export function snapTrack(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.snaptr !== "function") return;
  try {
    window.snaptr("track", event, params);
  } catch {
    // تجاهل أي خطأ في التتبع حتى لا يؤثر على تجربة المستخدم
  }
}

export {};
