"use client";

import { Reveal, RevealText } from "@/components/Reveal";
import { deliverables } from "@/data/site";

export function DeliverablesSection() {
  return (
    <section className="relative border-t border-[var(--line)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Ce primesti efectiv</p>
            <h2 className="mt-6 font-display text-5xl sm:text-7xl">
              <RevealText text="cifre" />{" "}
              <span className="font-serif-italic text-[var(--fg-muted)]">
                <RevealText text="clare," delay={0.1} />
              </span>
              <br />
              <RevealText text="livrabile" delay={0.18} />{" "}
              <span className="font-serif-italic text-[var(--fg-muted)]">
                <RevealText text="concrete." delay={0.26} />
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[var(--fg-muted)]">
            Fara estimari, fara &quot;eventual&quot;. Tot ce iti promitem este
            cuantificat din start si livrat lunar in aceleasi conditii.
          </p>
        </div>

        <div className="mt-20 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 0.06}
              className="group relative bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg-elevated)] sm:p-10"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif-italic text-6xl leading-none text-[var(--accent)] sm:text-7xl">
                  {d.metric}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">
                  {d.unit}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl text-[var(--fg)] sm:text-3xl">
                {d.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--fg-muted)]">
                {d.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
