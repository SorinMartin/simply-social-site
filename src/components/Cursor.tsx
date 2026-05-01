"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 300, mass: 0.5 });
  const sy = useSpring(y, { damping: 28, stiffness: 300, mass: 0.5 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduce) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, [role=button], [data-cursor=hover]")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y, visible]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[90] h-1.5 w-1.5 rounded-full bg-[var(--accent)] mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[89] rounded-full border border-[var(--fg)] mix-blend-difference"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          opacity: visible ? (hovering ? 0.9 : 0.45) : 0,
          transition: "width 0.25s ease, height 0.25s ease, opacity 0.2s ease",
        }}
      />
    </>
  );
}
