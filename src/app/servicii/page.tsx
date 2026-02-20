import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/SiteFrame";
import { sectors, servicePackages } from "@/data/site";

export const metadata: Metadata = {
  title: "Pachet Social Media 299 EUR/luna",
  description:
    "Pachet unic Simply Social: 20 postari/luna pe Facebook si Instagram, la 299 EUR/luna.",
};

const includedItems = [
  "20 postari/luna (design + copy)",
  "Publicare pe Facebook si Instagram",
  "Calendar lunar stabilit din timp",
  "Continut care reflecta activitatea reala a afacerii",
  "Prezenta constanta care inspira incredere",
] as const;

export default function ServicesPage() {
  const pack = servicePackages[0];

  return (
    <SiteFrame pathname="/servicii">
      <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Servicii Simply Social
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Pachet unic. 299 EUR/luna.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Nu oferim 5 variante care te incurca. Avem un singur pachet prin
            care facem paginile tale sa para active, actuale si profesioniste.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <article className="rounded-3xl border border-emerald-300 bg-gradient-to-b from-emerald-50 to-white p-7 shadow-sm sm:p-10">
          <p className="text-sm font-semibold tracking-[0.18em] text-slate-500">
            {pack.name}
          </p>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            {pack.price}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            {pack.description}
          </p>

          <ul className="mt-7 grid gap-3 text-slate-700 sm:grid-cols-2">
            {pack.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex w-fit rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
          >
            Solicita pachetul de 299 EUR
          </Link>
        </article>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm md:grid-cols-[1.1fr_0.9fr] sm:p-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Ce obtii concret in fiecare luna
            </h2>
            <ul className="mt-6 space-y-3">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Pentru cine este
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {sector}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              Daca vrei ca oamenii sa vada ca afacerea ta functioneaza si este
              prezenta online, acest pachet este construit exact pentru asta.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 px-6 py-10 text-center shadow-sm sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Vrei sa incepem chiar luna asta?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Scrie-ne si activam pachetul unic de 299 EUR/luna pentru Facebook si
            Instagram.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Activeaza pachetul
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
