import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFrame } from "@/components/SiteFrame";
import { lastUpdated, legalPages } from "@/data/legal";
import type { LegalSection } from "@/data/legal";

type LegalPageProps = {
  pathname: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({
  pathname,
  eyebrow,
  title,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <SiteFrame pathname={pathname}>
      <section className="mx-auto w-full max-w-[1400px] px-5 pb-8 pt-40 sm:px-8 lg:px-12">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.6rem,7vw,7rem)]">
          {title}
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--fg-muted)]">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">
            Versiunea curenta · {lastUpdated}
          </span>
        </div>
        <p className="mt-10 max-w-3xl text-base leading-8 text-[var(--fg)] sm:text-lg">
          {intro}
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-5 pb-32 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[260px_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">Cuprins</p>
            <ol className="mt-6 space-y-3">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-3 text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
                  >
                    <span className="font-mono text-[10px] text-[var(--fg-dim)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="link-sweep">{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-[var(--line)] pt-8">
              <p className="eyebrow">Documente conexe</p>
              <ul className="mt-5 space-y-2">
                {legalPages.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className={`link-sweep text-sm ${
                        p.href === pathname
                          ? "text-[var(--accent)]"
                          : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                      }`}
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-0">
            {sections.map((s, i) => (
              <Reveal
                key={s.id}
                as="article"
                delay={i * 0.03}
                className="group grid gap-6 border-t border-[var(--line)] py-10 last:border-b sm:grid-cols-[120px_1fr] sm:gap-14 sm:py-14"
              >
                <div
                  id={s.id}
                  className="flex scroll-mt-32 flex-col gap-1 sm:scroll-mt-28"
                >
                  <span className="font-mono text-[11px] text-[var(--fg-dim)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-muted)] sm:hidden">
                    sectiune
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-[var(--fg)] sm:text-3xl">
                    {s.title}
                  </h2>
                  <div className="mt-6 space-y-4">
                    {s.body.map((p, j) => (
                      <p
                        key={j}
                        className="text-base leading-8 text-[var(--fg-muted)]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  {s.list && s.list.length > 0 && (
                    <ul className="mt-6 space-y-0 border-t border-[var(--line)]">
                      {s.list.map((item) => (
                        <li
                          key={item.label}
                          className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-[var(--line)] py-3 text-sm"
                        >
                          <span className="text-[var(--fg-muted)]">
                            {item.label}
                          </span>
                          {item.value && (
                            <span className="font-mono text-[var(--fg)]">
                              {item.value}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
