import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/SiteFrame";
import { Reveal, RevealText } from "@/components/Reveal";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Proces — Cum lucram impreuna",
  description:
    "Procesul Simply Social in patru pasi: discutie initiala, plan lunar, creare continut, publicare programata.",
};

const timeline = [
  { day: "Ziua 1", note: "apel scurt, 30 min" },
  { day: "Ziua 2-3", note: "brief si calendar editorial" },
  { day: "Ziua 4-10", note: "design + copy + review" },
  { day: "Ziua 10-30", note: "publicare programata" },
] as const;

const commitments = [
  {
    title: "Transparenta",
    body: "Vezi calendarul inainte sa publicam. Fara surprize, fara texte pe care nu le-ai aprobat.",
  },
  {
    title: "Ritm constant",
    body: "20 postari, livrate lunar, la intervale regulate. Algoritmul rasplateste consistenta.",
  },
  {
    title: "O voce clara",
    body: "Scriem in limbajul clientilor tai. Fara cliseu, fara jargon, fara emoji-uri inutile.",
  },
  {
    title: "Feedback simplu",
    body: "O runda la jumatatea lunii. Schimbam ce nu merge, mentinem ce functioneaza.",
  },
] as const;

export default function ProcessPage() {
  return (
    <SiteFrame pathname="/proces">
      {/* Hero */}
      <section className="relative overflow-hidden pt-40">
        <div
          aria-hidden
          className="blob right-[-10%] top-[10%] h-[340px] w-[340px] bg-[var(--warm)]/10"
        />
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">03 · Proces</p>
          <h1 className="mt-8 font-display text-[clamp(3rem,10vw,10rem)]">
            <span className="block">
              <RevealText text="patru pasi," />
            </span>
            <span className="block font-serif-italic text-[var(--accent)]">
              <RevealText text="o luna, un ritm." delay={0.15} />
            </span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--fg-muted)]">
            Am construit procesul astfel incat sa iti ocupe minimum de timp si
            sa iti ofere maxim de vizibilitate pe partea noastra.
          </p>
        </div>
      </section>

      {/* Big steps */}
      <section className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 lg:px-12">
        <ul className="space-y-0">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.index}
              as="li"
              delay={i * 0.06}
              className="group grid gap-8 border-t border-[var(--line)] py-12 last:border-b sm:grid-cols-[120px_1fr_1fr] sm:gap-14 sm:py-20"
            >
              <span className="font-mono text-sm text-[var(--fg-dim)]">
                {step.index}
              </span>
              <h2 className="font-display text-4xl text-[var(--fg)] sm:text-6xl">
                {step.title}
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-base leading-7 text-[var(--fg)]">
                  {step.description}
                </p>
                <p className="text-sm leading-7 text-[var(--fg-muted)]">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Timeline */}
      <section className="border-y border-[var(--line)] bg-[var(--bg-elevated)]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
          <p className="eyebrow">Cronologie</p>
          <h2 className="mt-6 font-display text-5xl sm:text-6xl">
            prima luna,{" "}
            <span className="font-serif-italic">pas cu pas</span>.
          </h2>

          <div className="mt-20 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal
                key={t.day}
                delay={i * 0.05}
                className="bg-[var(--bg-elevated)] p-8 sm:p-10"
              >
                <span className="font-mono text-xs text-[var(--fg-dim)]">
                  0{i + 1}
                </span>
                <p className="mt-8 font-serif-italic text-4xl text-[var(--fg)]">
                  {t.day}
                </p>
                <p className="mt-3 text-sm text-[var(--fg-muted)]">{t.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.5fr_1fr]">
          <div>
            <p className="eyebrow">Angajamente</p>
            <h2 className="mt-6 font-display text-5xl">
              <span className="font-serif-italic">ce iti promitem</span>.
            </h2>
          </div>
          <ul className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
            {commitments.map((c, i) => (
              <Reveal
                key={c.title}
                as="li"
                delay={i * 0.05}
                className="bg-[var(--bg)] p-8 sm:p-10"
              >
                <p className="font-mono text-xs text-[var(--fg-dim)]">
                  0{i + 1}
                </p>
                <h3 className="mt-6 font-display text-2xl text-[var(--fg)]">
                  {c.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
                  {c.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
          <h2 className="font-display text-[clamp(3rem,10vw,9rem)]">
            <span className="block">ready?</span>
            <span className="block font-serif-italic text-[var(--accent)]">
              hai sa pornim.
            </span>
          </h2>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Programeaza discutia →
            </Link>
            <Link href="/servicii" className="btn-ghost">
              Vezi pachetul
            </Link>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
