"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RevealText } from "@/components/Reveal";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--line)] py-40">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <p className="eyebrow">Urmatorul pas</p>

        <h2 className="mt-8 font-display text-[clamp(3.5rem,13vw,13rem)] leading-[0.88]">
          <span className="block">
            <RevealText text="hai sa" />
          </span>
          <span className="block font-serif-italic text-[var(--accent)]">
            <RevealText text="incepem." delay={0.15} />
          </span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid gap-10 border-t border-[var(--line)] pt-12 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <p className="max-w-xl text-lg leading-8 text-[var(--fg-muted)]">
            Spune-ne ce faci si de cand vrei sa publicam. Iti trimitem
            calendarul lunar in 3 zile lucratoare si pornim.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Programeaza o discutie →
            </Link>
            <a href="mailto:contact@simplysocial.ro" className="btn-ghost">
              contact@simplysocial.ro
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
