import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFrame } from "@/components/SiteFrame";
import { company, lastUpdated, legalPages } from "@/data/legal";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description:
    "Politica de cookies Simply Social: ce cookies folosim, categoriile lor, durata de viață și cum îți retragi consimțământul.",
};

type CookieRow = {
  name: string;
  provider: string;
  category: "Esențial" | "Analytics" | "Marketing";
  purpose: string;
  duration: string;
};

const rows: CookieRow[] = [
  {
    name: "ss-consent",
    provider: "simplysocial.ro",
    category: "Esențial",
    purpose: "Păstrează preferințele tale privind cookies pe acest website.",
    duration: "12 luni",
  },
  {
    name: "__host-session",
    provider: "simplysocial.ro",
    category: "Esențial",
    purpose: "Menține sesiunea funcțională pe durata vizitei.",
    duration: "sesiune",
  },
  {
    name: "_vercel_analytics",
    provider: "Vercel Analytics",
    category: "Analytics",
    purpose: "Numără vizitele și sursele de trafic, fără identificare personală.",
    duration: "14 luni",
  },
  {
    name: "_plausible",
    provider: "Plausible Analytics",
    category: "Analytics",
    purpose: "Analiză agregată a traficului, fără cookies persistente.",
    duration: "sesiune",
  },
  {
    name: "_fbp",
    provider: "Meta Platforms",
    category: "Marketing",
    purpose: "Măsurarea campaniilor Meta și retargeting, când acesta este activ.",
    duration: "90 zile",
  },
];

const sections = [
  {
    id: "ce-sunt",
    title: "Ce sunt cookies",
    body: [
      "Cookies sunt fișiere text mici pe care un website le salvează în browserul tău pentru a-și aminti informații între vizite: preferințe, sesiune de navigare sau statistici agregate.",
      "Folosim cookies proprii (generate direct de simplysocial.ro) și cookies ale unor furnizori terți (analytics, platforme publicitare). Pe toate le tratăm unitar conform prezentei politici.",
    ],
  },
  {
    id: "categorii",
    title: "Categoriile pe care le folosim",
    body: [
      "Gestionăm cookies în trei categorii. Numai cele esențiale sunt active automat; pentru celelalte îți cerem acordul explicit.",
    ],
    list: [
      { label: "Esențiale", value: "necesare — fără consimțământ" },
      { label: "Analytics", value: "cu consimțământ" },
      { label: "Marketing", value: "cu consimțământ" },
    ],
  },
  {
    id: "detaliu",
    title: "Cookies specifice",
    body: [
      "Mai jos sunt cookies pe care le putem seta pe dispozitivul tău. Unele sunt setate doar dacă activezi respectiva categorie.",
    ],
  },
  {
    id: "consimtamant",
    title: "Cum îți dai sau retragi consimțământul",
    body: [
      "Prima dată când accesezi website-ul, afișăm un banner de cookies. Poți alege Accept toate, Refuz toate sau să configurezi categoriile individual.",
      "Îți poți schimba preferințele oricând apăsând pe butonul Cookies din subsolul paginii. De asemenea, îți poți retrage consimțământul ștergând cookies-urile din browser.",
    ],
  },
  {
    id: "browser",
    title: "Control prin setările browserului",
    body: [
      "Majoritatea browserelor îți permit să blochezi sau să ștergi cookies prin setări. Iată pagini oficiale cu instrucțiuni:",
    ],
    list: [
      { label: "Google Chrome", value: "support.google.com/chrome" },
      { label: "Mozilla Firefox", value: "support.mozilla.org" },
      { label: "Safari", value: "support.apple.com/safari" },
      { label: "Microsoft Edge", value: "support.microsoft.com/edge" },
    ],
  },
  {
    id: "terti",
    title: "Furnizori terți",
    body: [
      "Anumite cookies sunt setate de furnizori terți care au propria lor politică de confidențialitate și cookies. Îți recomandăm să le consulți înainte de a activa respectivele categorii.",
    ],
    list: [
      { label: "Vercel Analytics", value: "vercel.com/legal" },
      { label: "Plausible Analytics", value: "plausible.io/privacy" },
      { label: "Meta Platforms", value: "www.facebook.com/privacy" },
    ],
  },
  {
    id: "modificari-cookies",
    title: "Modificări ale politicii",
    body: [
      "Putem actualiza această politică pentru a reflecta schimbări în instrumentele pe care le folosim sau în cerințele legale. Versiunea curentă este afișată în partea de sus a paginii.",
    ],
  },
  {
    id: "contact-cookies",
    title: "Contact",
    body: [
      `Pentru orice întrebare legată de această politică ne poți scrie la ${company.privacyEmail}.`,
    ],
  },
];

const intro =
  "Acest document explică ce cookies folosește simplysocial.ro, de ce sunt necesare și cum îți controlezi consimțământul. Este complementar Politicii de confidențialitate.";

export default function CookiesPage() {
  return (
    <SiteFrame pathname="/politica-de-cookies">
      <section className="mx-auto w-full max-w-[1400px] px-5 pb-8 pt-40 sm:px-8 lg:px-12">
        <p className="eyebrow">Legal · Cookies</p>
        <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.6rem,7vw,7rem)]">
          politica de <span className="font-serif-italic">cookies</span>.
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--fg-muted)]">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-dim)]">
            Versiunea curentă · {lastUpdated}
          </span>
        </div>
        <p className="mt-10 max-w-3xl text-base leading-8 text-[var(--fg)] sm:text-lg">
          {intro}
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 lg:px-12">
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
                        p.href === "/politica-de-cookies"
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
            {sections.map((s, i) => {
              const idx = String(i + 1).padStart(2, "0");
              return (
                <Reveal
                  key={s.id}
                  as="article"
                  delay={i * 0.03}
                  className="grid gap-6 border-t border-[var(--line)] py-10 last:border-b sm:grid-cols-[120px_1fr] sm:gap-14 sm:py-14"
                >
                  <div
                    id={s.id}
                    className="flex scroll-mt-32 flex-col gap-1 sm:scroll-mt-28"
                  >
                    <span className="font-mono text-[11px] text-[var(--fg-dim)]">
                      {idx}
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

                    {s.id === "detaliu" && (
                      <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--line-strong)]">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-[var(--bg-elevated)]">
                            <tr className="text-[var(--fg-muted)]">
                              <Th>Nume</Th>
                              <Th>Furnizor</Th>
                              <Th>Categorie</Th>
                              <Th>Durată</Th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((r) => (
                              <tr
                                key={r.name}
                                className="border-t border-[var(--line)] align-top"
                              >
                                <Td>
                                  <span className="font-mono text-[13px] text-[var(--fg)]">
                                    {r.name}
                                  </span>
                                  <p className="mt-2 text-xs leading-6 text-[var(--fg-muted)]">
                                    {r.purpose}
                                  </p>
                                </Td>
                                <Td>{r.provider}</Td>
                                <Td>
                                  <span
                                    className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] ${
                                      r.category === "Esențial"
                                        ? "border-[var(--line-strong)] text-[var(--fg)]"
                                        : r.category === "Analytics"
                                          ? "border-[var(--accent)]/40 text-[var(--accent)]"
                                          : "border-[var(--warm)]/40 text-[var(--warm)]"
                                    }`}
                                  >
                                    {r.category}
                                  </span>
                                </Td>
                                <Td>
                                  <span className="font-mono text-[13px]">
                                    {r.duration}
                                  </span>
                                </Td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

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
              );
            })}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-muted)] sm:px-6">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-4 text-[var(--fg)] sm:px-6">{children}</td>;
}
