"use client";

import Link from "next/link";
import { Reveal, RevealText } from "@/components/Reveal";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section className="relative border-t border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Proces</p>
            <h2 className="mt-6 font-display text-5xl sm:text-7xl">
              <RevealText text="patru pași," />
              <br />
              <span className="font-serif-italic">
                <RevealText text="zero haos." delay={0.12} />
              </span>
            </h2>
          </div>
          <Link href="/proces" className="btn-ghost">
            Vezi procesul complet →
          </Link>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.index}
              delay={i * 0.08}
              className="group relative flex flex-col border-t border-[var(--line-strong)] pt-8"
            >
              <div className="absolute -top-px left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
              <span className="font-mono text-xs text-[var(--fg-dim)]">
                {step.index}
              </span>
              <h3 className="mt-8 font-serif-italic text-4xl text-[var(--fg)]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
