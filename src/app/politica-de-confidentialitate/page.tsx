import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Politica de confidentialitate",
  description:
    "Politica de confidentialitate Simply Social privind colectarea si prelucrarea datelor.",
};

const sections = [
  {
    title: "1. Date colectate",
    body: "Colectam date de contact (nume, email, companie, mesaj) exclusiv atunci cand ne trimiti o solicitare prin formularul de contact sau email.",
  },
  {
    title: "2. Scopul prelucrarii",
    body: "Folosim datele pentru a raspunde solicitarilor, pentru a pregati oferte comerciale si pentru a comunica in legatura cu serviciile Simply Social.",
  },
  {
    title: "3. Temeiul legal",
    body: "Prelucrarea are la baza consimtamantul tau, interesul legitim de a raspunde solicitarilor comerciale si obligatiile legale aplicabile.",
  },
  {
    title: "4. Stocare si securitate",
    body: "Datele sunt stocate in sisteme securizate si sunt pastrate doar pe durata necesara pentru scopurile mentionate sau conform obligatiilor legale.",
  },
  {
    title: "5. Drepturile tale",
    body: "Ai dreptul la acces, rectificare, stergere, restrictionare, opozitie si portabilitate. Pentru exercitarea drepturilor, ne poti scrie la contact@simplysocial.ro.",
  },
  {
    title: "6. Contact",
    body: "Pentru orice intrebare privind protectia datelor, ne poti contacta la contact@simplysocial.ro.",
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <SiteFrame pathname="/politica-de-confidentialitate">
      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Actualizat: 20 februarie 2026
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Politica de confidentialitate
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Aceasta politica explica modul in care Simply Social colecteaza,
            foloseste si protejeaza datele cu caracter personal.
          </p>

          <div className="mt-8 space-y-7">
            {sections.map((section) => (
              <article key={section.title} className="space-y-2">
                <h2 className="text-xl font-semibold text-slate-900">
                  {section.title}
                </h2>
                <p className="text-sm leading-7 text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
