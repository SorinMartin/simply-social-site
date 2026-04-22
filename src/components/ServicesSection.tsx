"use client";

import Link from "next/link";
import { Reveal, RevealText } from "@/components/Reveal";
import { servicePackages } from "@/data/site";

export function ServicesSection() {
  const pack = servicePackages[0];

  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
      <div className="flex flex-col gap-4">
        <p className="eyebrow">Oferta</p>
        <h2 className="font-display text-5xl sm:text-7xl">
          <RevealText text="un pachet." />{" "}
          <span className="font-serif-italic text-[var(--fg-muted)]">
            <RevealText text="simplu." delay={0.12} />
          </span>
        </h2>
      </div>

      <Reveal
        delay={0.1}
        className="mt-16 overflow-hidden rounded-3xl border border-[var(--line-strong)] bg-[var(--bg-elevated)]"
      >
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="border-b border-[var(--line)] p-8 lg:border-b-0 lg:border-r lg:p-14">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-[var(--fg-muted)]">01</span>
              <span className="eyebrow">{pack.name}</span>
            </div>
            <p className="mt-8 font-serif-italic text-[clamp(5rem,14vw,11rem)] leading-none text-[var(--fg)]">
              299<span className="text-[var(--fg-muted)]">€</span>
            </p>
            <p className="mt-2 font-mono text-xs text-[var(--fg-muted)]">
              per luna · fara TVA · fara contract pe termen lung
            </p>
            <p className="mt-8 max-w-md text-base leading-7 text-[var(--fg-muted)]">
              {pack.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Activeaza pachetul →
              </Link>
              <Link href="/servicii" className="btn-ghost">
                Vezi detaliile
              </Link>
            </div>
          </div>

          <div className="p-8 lg:p-14">
            <p className="eyebrow">Include</p>
            <ul className="mt-8 space-y-0">
              {pack.features.map((f, i) => (
                <li
                  key={f}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t border-[var(--line)] py-4 last:border-b"
                >
                  <span className="font-mono text-[10px] text-[var(--fg-dim)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-[var(--fg)]">{f}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
