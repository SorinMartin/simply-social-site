"use client";

import { Reveal, RevealText } from "@/components/Reveal";
import { faqs } from "@/data/site";

export function FaqSection() {
  return (
    <section className="relative border-t border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <div>
            <p className="eyebrow">Intrebari frecvente</p>
            <h2 className="mt-6 font-display text-5xl sm:text-6xl">
              <RevealText text="raspunsuri" />
              <br />
              <span className="font-serif-italic text-[var(--fg-muted)]">
                <RevealText text="directe." delay={0.1} />
              </span>
            </h2>
            <p className="mt-8 max-w-xs text-sm leading-7 text-[var(--fg-muted)]">
              Daca ai o intrebare in plus, scrie-ne pe email — raspundem in
              aceeasi zi lucratoare.
            </p>
          </div>

          <ul className="space-y-0">
            {faqs.map((f, i) => (
              <Reveal
                as="li"
                key={f.q}
                delay={i * 0.05}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-[var(--line)] py-7 last:border-b sm:gap-10 sm:py-9"
              >
                <span className="font-mono text-[10px] text-[var(--fg-dim)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl text-[var(--fg)] sm:text-2xl">
                    {f.q}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--fg-muted)] sm:text-base">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
