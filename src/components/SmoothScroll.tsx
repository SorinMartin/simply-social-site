"use client";

import { useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

// Lazy-load Lenis only when we decide we want it. This keeps ~25kB of JS
// out of the initial bundle on touch devices, which is where LCP hurts.
const Lenis = dynamic(
  () => import("lenis/react").then((m) => ({ default: m.ReactLenis })),
  { ssr: false },
);

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduce) return;
    // Defer enabling Lenis until the browser is idle so it never blocks
    // first paint or LCP.
    const idle =
      "requestIdleCallback" in window
        ? window.requestIdleCallback
        : (cb: IdleRequestCallback) => window.setTimeout(cb as TimerHandler, 200);
    const handle = idle(() => setEnabled(true));
    return () => {
      if ("cancelIdleCallback" in window && typeof handle === "number") {
        window.cancelIdleCallback(handle);
      }
    };
  }, []);

  if (!enabled) return <>{children}</>;

  return (
    <Lenis
      root
      options={{ lerp: 0.085, duration: 1.2, smoothWheel: true, wheelMultiplier: 1 }}
    >
      {children}
    </Lenis>
  );
}
