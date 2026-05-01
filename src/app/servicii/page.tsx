import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/SiteFrame";
import { Reveal, RevealText } from "@/components/Reveal";
import { faqs, sectors, serviceInclusions, servicePackages } from "@/data/site";

export const metadata: Metadata = {
  title: "Servicii — Pachet social media 299 EUR/lună",
  description:
    "Detalii complete despre pachetul unic Simply Social: 20 postări pe lună, design, copy și publicare pe Facebook și Instagram.",
};

export default function ServicesPage() {
  const pack = servicePackages[0];

  return (
    <SiteFrame pathname="/servicii">
      {/* Hero */}
      <section className="relative overflow-hidden pt-40">
        <div
          aria-hidden
          className="blob left-[-10%] top-[20%] h-[340px] w-[340px] bg-[var(--accent)]/10"
        />
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">02 · Servicii</p>
          <h1 className="mt-8 font-display text-[clamp(3rem,10vw,10rem)]">
            <span className="block">
              <RevealText text="un pachet." />
            </span>
            <span className="block font-serif-italic text-[var(--fg-muted)]">
              <RevealText text="tot ce ai nevoie." delay={0.15} />
            </span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--fg-muted)]">
            Am păstrat un singur pachet, lunar, fără nivele sau surprize. Așa
            știm amândoi ce livrăm și tu știi exact ce plătești.
          </p>
        </div>
      </section>

      {/* Price card */}
      <section className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 lg:px-12">
        <Reveal className="overflow-hidden rounded-3xl border border-[var(--line-strong)] bg-[var(--bg-elevated)]">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="border-b border-[var(--line)] p-8 lg:border-b-0 lg:border-r lg:p-14">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[var(--fg-muted)]">
                  01
                </span>
                <span className="eyebrow">{pack.name}</span>
              </div>
              <p className="mt-8 font-serif-italic text-[clamp(5rem,14vw,11rem)] leading-none">
                299<span className="text-[var(--fg-muted)]">€</span>
              </p>
              <p className="mt-2 font-mono text-xs text-[var(--fg-muted)]">
                per lună · fără TVA · fără contract pe termen lung
              </p>
              <p className="mt-8 max-w-md text-base leading-7 text-[var(--fg-muted)]">
                {pack.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Solicită pachetul →
                </Link>
                <Link href="/proces" className="btn-ghost">
                  Vezi cum lucrăm
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

      {/* Inclusions */}
      <section className="border-y border-[var(--line)] bg-[var(--bg-elevated)]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Ce primești lunar</p>
              <h2 className="mt-6 font-display text-5xl sm:text-6xl">
                <RevealText text="șase livrabile," />{" "}
                <span className="font-serif-italic">
                  <RevealText text="un singur preț." delay={0.1} />
                </span>
              </h2>
            </div>
          </div>

          <div className="mt-20 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {serviceInclusions.map((item, i) => (
              <Reveal
                key={item.index}
                delay={i * 0.05}
                className="bg-[var(--bg-elevated)] p-8 transition-colors hover:bg-[var(--bg)] sm:p-10"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--fg-dim)]">
                    {item.index}
                  </span>
                  <span className="h-px flex-1 bg-[var(--line)]" />
                </div>
                <h3 className="mt-8 font-display text-2xl text-[var(--fg)] sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.5fr_1fr]">
          <div>
            <p className="eyebrow">Pentru cine</p>
            <h2 className="mt-6 font-display text-5xl">
              <span className="font-serif-italic">afaceri</span> care{" "}
              <span className="font-serif-italic">vor să fie văzute</span>.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[var(--fg-muted)]">
              Pachetul este construit pentru business-uri locale care au un
              serviciu clar și un public definit, dar nu au timp să gestioneze
              săptămânal prezența online.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[var(--line-strong)] px-4 py-2 text-xs text-[var(--fg)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
          <p className="eyebrow">Întrebări frecvente</p>
          <h2 className="mt-6 font-display text-5xl sm:text-6xl">
            <span className="font-serif-italic">răspunsuri</span>, direct.
          </h2>

          <ul className="mt-16 space-y-0 lg:max-w-4xl">
            {faqs.map((f, i) => (
              <Reveal
                key={f.q}
                as="li"
                delay={i * 0.05}
                className="group border-t border-[var(--line)] last:border-b"
              >
                <details className="group/details">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-6 text-lg text-[var(--fg)] transition-colors hover:text-[var(--accent)] [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <span className="ml-4 font-mono text-2xl text-[var(--fg-dim)] transition-transform group-open/details:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-6 text-base leading-7 text-[var(--fg-muted)] lg:max-w-3xl">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </SiteFrame>
  );
}
