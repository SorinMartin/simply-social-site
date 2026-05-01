"use client";

import { Reveal, RevealText } from "@/components/Reveal";
import { solutionPoints } from "@/data/site";

export function SolutionSection() {
  return (
    <section className="relative border-t border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Soluția</p>
            <h2 className="mt-6 font-display text-5xl sm:text-7xl">
              <RevealText text="un ritm" />
              <br />
              <span className="font-serif-italic">
                <RevealText text="care se vede." delay={0.12} />
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[var(--fg-muted)]">
            Nu inventăm formule. Livrăm lunar același lucru, bine făcut:
            conținut planificat, publicat la timp, aliniat cu brandul tău.
          </p>
        </div>

        <div className="mt-20 grid gap-px bg-[var(--line)] sm:grid-cols-2">
          {solutionPoints.map((p, i) => (
            <Reveal
              key={p.index}
              delay={i * 0.08}
              className="group relative overflow-hidden bg-[var(--bg-elevated)] p-8 transition-colors hover:bg-[var(--bg)] sm:p-12"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[var(--fg-dim)]">
                  {p.index}
                </span>
                <span className="h-px flex-1 bg-[var(--line)]" />
              </div>
              <h3 className="mt-8 font-display text-3xl text-[var(--fg)] sm:text-4xl">
                {p.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-[var(--fg-muted)]">
                {p.copy}
              </p>
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-[var(--accent)]/0 transition-all duration-700 group-hover:bg-[var(--accent)]/10 group-hover:blur-3xl"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
