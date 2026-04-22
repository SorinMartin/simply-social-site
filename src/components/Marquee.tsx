import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
};

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={`marquee relative flex w-full overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track flex min-w-max shrink-0 items-center gap-16 pr-16">
        {children}
      </div>
      <div
        aria-hidden
        className="marquee-track flex min-w-max shrink-0 items-center gap-16 pr-16"
      >
        {children}
      </div>
    </div>
  );
}
