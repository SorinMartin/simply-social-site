"use client";

import dynamic from "next/dynamic";

// Lazy-load Cursor (framer-motion + pointer tracking) outside the initial
// bundle. Cursor.tsx bails early on touch / reduced-motion anyway.
const Cursor = dynamic(() => import("./Cursor").then((m) => m.Cursor), {
  ssr: false,
});

export function CursorMount() {
  return <Cursor />;
}
