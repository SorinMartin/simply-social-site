"use client";

import { Reveal, RevealText } from "@/components/Reveal";

// Stylized "what your feed looks like" mockup — purely illustrative, no
// real client data. Three sample single-image posts to reflect the actual
// package (20 single image posts / month).

type SamplePost = {
  caption: string;
  meta: string;
  accent: "lime" | "warm" | "ivory";
};

const samples: SamplePost[] = [
  {
    caption: "Lansăm meniul de toamnă. Cinci farfurii noi, fotografie naturală.",
    meta: "luni · 19:00",
    accent: "lime",
  },
  {
    caption: "Înainte de programare: cum te pregătești pentru ședință.",
    meta: "miercuri · 09:30",
    accent: "ivory",
  },
  {
    caption: "Echipa noastră, în câteva cuvinte — cine te primește la ușă.",
    meta: "vineri · 18:00",
    accent: "warm",
  },
];

const accentMap = {
  lime: "from-[var(--accent)]/20 to-[var(--accent)]/0 text-[var(--accent)] border-[var(--accent)]/30",
  warm: "from-[var(--warm)]/20 to-[var(--warm)]/0 text-[var(--warm)] border-[var(--warm)]/30",
  ivory: "from-[var(--fg)]/10 to-[var(--fg)]/0 text-[var(--fg)] border-[var(--line-strong)]",
} as const;

export function FeedMockup() {
  return (
    <section className="relative border-t border-[var(--line)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-24">
          <div>
            <p className="eyebrow">Cum arată în feed</p>
            <h2 className="mt-6 font-display text-5xl sm:text-6xl">
              <RevealText text="exemple" />{" "}
              <span className="font-serif-italic text-[var(--fg-muted)]">
                <RevealText text="vizuale," delay={0.1} />
              </span>
              <br />
              <RevealText text="format" delay={0.2} />{" "}
              <span className="font-serif-italic text-[var(--fg-muted)]">
                <RevealText text="real." delay={0.28} />
              </span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-7 text-[var(--fg-muted)]">
              Așa arată o lună tipică de conținut: postări single image,
              livrate într-un calendar predictibil, cu un look coerent
              vizibil de la prima publicare.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <p className="font-serif-italic text-4xl text-[var(--accent)]">
                  20
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">
                  postări / lună
                </p>
              </div>
              <div>
                <p className="font-serif-italic text-4xl text-[var(--fg)]">
                  2
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">
                  canale active
                </p>
              </div>
              <div>
                <p className="font-serif-italic text-4xl text-[var(--warm)]">
                  1
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">
                  calendar editorial
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--warm)]/10 blur-3xl"
            />

            <Reveal as="div" className="grid gap-5 sm:grid-cols-3">
              {samples.map((p, i) => (
                <Reveal
                  as="article"
                  key={p.caption}
                  delay={i * 0.08}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-elevated)]"
                >
                  {/* Visual block (gradient stand-in for image) */}
                  <div
                    className={`relative aspect-[4/5] bg-gradient-to-br ${accentMap[p.accent]}`}
                  >
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                        Single image
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-serif-italic text-3xl leading-tight text-[var(--fg)]">
                        Postare {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                    {/* Frame ring */}
                    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[var(--line)]" />
                  </div>
                  <div className="border-t border-[var(--line)] p-4">
                    <p className="line-clamp-2 text-[13px] leading-6 text-[var(--fg)]">
                      {p.caption}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">
                      {p.meta}
                    </p>
                  </div>
                </Reveal>
              ))}
            </Reveal>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">
              Mockup ilustrativ · pachetul livrează 20 de astfel de postări pe
              lună
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
