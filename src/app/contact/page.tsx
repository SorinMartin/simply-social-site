import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { Reveal, RevealText } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — Hai să vorbim",
  description:
    "Programează o discuție cu Simply Social. Activăm pachetul unic de 299 EUR/lună pentru Facebook și Instagram.",
};

type Detail = { label: string; value: string; href?: string };

const details: Detail[] = [
  {
    label: "Email",
    value: "contact@simplysocial.ro",
    href: "mailto:contact@simplysocial.ro",
  },
  { label: "Program", value: "Luni — Vineri, 09:00 — 18:00" },
  { label: "Răspuns", value: "În maximum 24h lucrătoare" },
  { label: "Pachet", value: "299 EUR / lună · 20 postări · FB + IG" },
];

export default function ContactPage() {
  return (
    <SiteFrame pathname="/contact">
      <section className="relative overflow-hidden pt-40">
        <div
          aria-hidden
          className="blob left-[30%] top-[20%] h-[360px] w-[360px] bg-[var(--accent)]/10"
        />
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <p className="eyebrow">04 · Contact</p>
          <h1 className="mt-8 font-display text-[clamp(3rem,10vw,10rem)]">
            <span className="block">
              <RevealText text="hai să" />
            </span>
            <span className="block font-serif-italic text-[var(--fg-muted)]">
              <RevealText text="vorbim." delay={0.15} />
            </span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--fg-muted)]">
            Spune-ne ce faci și de când vrei să publicăm. Răspundem în maximum
            24h și trimitem întrebările care contează.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.6fr_1fr]">
          <Reveal className="flex flex-col gap-10">
            <div>
              <p className="eyebrow">Detalii</p>
              <ul className="mt-6 space-y-6">
                {details.map((d) => (
                  <li
                    key={d.label}
                    className="border-t border-[var(--line)] pt-4"
                  >
                    <p className="font-mono text-[11px] text-[var(--fg-dim)]">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="link-sweep mt-2 inline-block font-serif-italic text-2xl text-[var(--fg)]"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-2 font-serif-italic text-2xl text-[var(--fg)]">
                        {d.value}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="rounded-3xl border border-[var(--line-strong)] bg-[var(--bg-elevated)] p-8 sm:p-10">
              <p className="eyebrow">Formular</p>
              <h2 className="mt-4 font-display text-3xl text-[var(--fg)] sm:text-4xl">
                scrie-ne câteva rânduri
              </h2>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <Field name="name" label="Nume" placeholder="Numele tău" />
                <Field
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="email@business.ro"
                />
                <Field
                  name="company"
                  label="Companie"
                  placeholder="Ce business ai"
                  span
                />
                <div className="sm:col-span-2">
                  <label className="block">
                    <span className="font-mono text-[11px] text-[var(--fg-dim)]">
                      Mesaj
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Spune-ne ce faci și de când vrei să publicăm."
                      className="mt-3 w-full resize-none border-b border-[var(--line-strong)] bg-transparent pb-2 text-base text-[var(--fg)] outline-none transition-colors placeholder:text-[var(--fg-dim)] focus:border-[var(--accent)]"
                    />
                  </label>
                </div>
              </div>

              <button type="submit" className="btn-primary mt-10">
                Trimite mesajul →
              </button>

              <p className="mt-6 text-xs text-[var(--fg-dim)]">
                Prin trimitere ești de acord cu{" "}
                <a
                  href="/politica-de-confidentialitate"
                  className="link-sweep text-[var(--fg-muted)]"
                >
                  politica de confidențialitate
                </a>
                .
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </SiteFrame>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  span = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  span?: boolean;
}) {
  return (
    <label className={`block ${span ? "sm:col-span-2" : ""}`}>
      <span className="font-mono text-[11px] text-[var(--fg-dim)]">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-[var(--line-strong)] bg-transparent pb-2 text-base text-[var(--fg)] outline-none transition-colors placeholder:text-[var(--fg-dim)] focus:border-[var(--accent)]"
      />
    </label>
  );
}
