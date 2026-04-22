"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/Marquee";
import { RevealText } from "@/components/Reveal";
import { sectors } from "@/data/site";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-32 sm:pt-40">
      <div
        aria-hidden
        className="blob left-[-10%] top-[10%] h-[360px] w-[360px] bg-[var(--accent)]/15"
      />
      <div
        aria-hidden
        className="blob right-[-8%] top-[40%] h-[320px] w-[320px] bg-[var(--warm)]/10"
        style={{ animationDelay: "-6s" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12"
      >
        <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span className="eyebrow">Agentie social media · Bucuresti</span>
            </motion.div>

            <h1 className="mt-10 font-display text-[clamp(2.8rem,7.6vw,8rem)]">
              <span className="block">
                <RevealText text="social media," />
              </span>
              <span className="block">
                <span className="font-serif-italic text-[var(--fg-muted)]">
                  <RevealText text="fara" delay={0.15} />
                </span>{" "}
                <RevealText text="complicatii." delay={0.25} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-10 max-w-xl text-lg leading-8 text-[var(--fg-muted)] sm:text-xl"
            >
              Un singur pachet, 20 de postari pe luna, publicate pe Facebook si
              Instagram. Fara abonamente stufoase, fara haos, fara improvizatii.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link href="/contact" className="btn-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)]" />
                Vreau pachetul
                <span aria-hidden>→</span>
              </Link>
              <Link href="/servicii" className="btn-ghost">
                Vezi ce contine
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex h-full flex-col justify-end"
          >
            <div className="relative w-full lg:w-[300px]">
              <div className="rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-elevated)] p-6">
                <p className="eyebrow">Pachet unic</p>
                <p className="mt-4 font-serif-italic text-6xl leading-none text-[var(--fg)]">
                  299<span className="text-[var(--fg-muted)]">€</span>
                </p>
                <p className="mt-1 font-mono text-[11px] text-[var(--fg-muted)]">
                  per luna / fara TVA
                </p>
                <div className="mt-6 space-y-2.5 border-t border-[var(--line)] pt-5">
                  {[
                    "20 postari pe luna",
                    "Design + copy inclus",
                    "Facebook + Instagram",
                    "Calendar editorial lunar",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-[var(--fg-muted)]">
                      <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div
                aria-hidden
                className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 to-transparent blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-28 border-y border-[var(--line)] py-5">
        <Marquee>
          {[...sectors, "design · copy · publicare", ...sectors].map((s, i) => (
            <div key={`${s}-${i}`} className="flex items-center gap-8">
              <span className="font-serif-italic text-3xl text-[var(--fg)] sm:text-4xl">
                {s}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
