import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Politica de confidentialitate",
  description:
    "Politica de confidentialitate Simply Social privind colectarea si prelucrarea datelor.",
};

const sections = [
  {
    title: "01 — Date colectate",
    body: "Colectam date de contact (nume, email, companie, mesaj) exclusiv atunci cand ne trimiti o solicitare prin formularul de contact sau email.",
  },
  {
    title: "02 — Scopul prelucrarii",
    body: "Folosim datele pentru a raspunde solicitarilor, pentru a pregati oferte comerciale si pentru a comunica in legatura cu serviciile Simply Social.",
  },
  {
    title: "03 — Temeiul legal",
    body: "Prelucrarea are la baza consimtamantul tau, interesul legitim de a raspunde solicitarilor comerciale si obligatiile legale aplicabile.",
  },
  {
    title: "04 — Stocare si securitate",
    body: "Datele sunt stocate in sisteme securizate si pastrate doar pe durata necesara pentru scopurile mentionate sau conform obligatiilor legale.",
  },
  {
    title: "05 — Drepturile tale",
    body: "Ai dreptul la acces, rectificare, stergere, restrictionare, opozitie si portabilitate. Pentru exercitarea drepturilor, ne poti scrie la contact@simplysocial.ro.",
  },
  {
    title: "06 — Contact",
    body: "Pentru orice intrebare privind protectia datelor, ne poti contacta la contact@simplysocial.ro.",
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <SiteFrame pathname="/politica-de-confidentialitate">
      <section className="mx-auto w-full max-w-[1000px] px-5 pb-20 pt-40 sm:px-8 lg:px-12">
        <p className="eyebrow">Actualizat: 20 februarie 2026</p>
        <h1 className="mt-8 font-display text-5xl sm:text-7xl">
          politica de{" "}
          <span className="font-serif-italic">confidentialitate</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--fg-muted)]">
          Aceasta politica explica modul in care Simply Social colecteaza,
          foloseste si protejeaza datele cu caracter personal.
        </p>

        <div className="mt-16 space-y-0">
          {sections.map((s) => (
            <article
              key={s.title}
              className="grid gap-6 border-t border-[var(--line)] py-8 last:border-b sm:grid-cols-[220px_1fr] sm:gap-14 sm:py-10"
            >
              <h2 className="font-mono text-sm uppercase tracking-[0.12em] text-[var(--fg-muted)]">
                {s.title}
              </h2>
              <p className="text-base leading-8 text-[var(--fg)]">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
