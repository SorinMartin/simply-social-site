"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealText } from "@/components/Reveal";
import { problemPoints } from "@/data/site";

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const labelY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className="relative mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12"
    >
      <div className="grid gap-20 lg:grid-cols-[0.4fr_1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <motion.div style={{ y: labelY }}>
            <p className="eyebrow">Problema</p>
            <h2 className="mt-6 font-display text-5xl sm:text-6xl">
              <RevealText text="ce opreste" />
              <br />
              <span className="font-serif-italic text-[var(--fg-muted)]">
                <RevealText text="un brand local?" delay={0.1} />
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-[var(--fg-muted)]">
              Trei lucruri se repeta in conversatiile cu clienti. Le rezolvam direct,
              fara detururi.
            </p>
          </motion.div>
        </div>

        <ul className="space-y-0">
          {problemPoints.map((p, i) => (
            <Reveal
              key={p.title}
              as="li"
              delay={i * 0.08}
              className="group grid grid-cols-[auto_1fr] gap-8 border-t border-[var(--line)] py-10 last:border-b sm:gap-14 sm:py-14"
            >
              <span className="font-mono text-xs text-[var(--fg-dim)]">{p.index}</span>
              <div>
                <h3 className="font-display text-3xl text-[var(--fg)] transition-colors sm:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-8 text-[var(--fg-muted)]">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
