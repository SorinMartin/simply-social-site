import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/SiteFrame";
import { sectors, servicePackages } from "@/data/site";

export const metadata: Metadata = {
  title: "Servicii Social Media",
  description:
    "Descopera pachetele Simply Social pentru administrare social media: BASIC, PRO si PREMIUM.",
};

const includedItems = [
  "Audit initial de prezenta online",
  "Calendar editorial lunar",
  "Design adaptat pe identitatea brandului",
  "Copywriting orientat spre claritate si conversie",
  "Raport lunar cu recomandari de optimizare",
] as const;

export default function ServicesPage() {
  return (
    <SiteFrame pathname="/servicii">
      <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Servicii Simply Social
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Pachete simple, executie premium.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Fara marketing complicat. Construim prezenta online constanta pentru
            afaceri locale, cu un proces clar si rezultate usor de urmarit.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {servicePackages.map((pack) => (
            <article
              key={pack.name}
              className={`flex h-full flex-col rounded-3xl border p-7 shadow-sm ${
                pack.highlighted
                  ? "border-emerald-300 bg-gradient-to-b from-emerald-50 to-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-slate-500">
                {pack.name}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{pack.description}</p>

              <ul className="mt-6 space-y-3 text-slate-700">
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
                Solicita oferta
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm md:grid-cols-[1.1fr_0.9fr] sm:p-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Ce include fiecare colaborare
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
              Industrii
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
              Lucram cu business-uri locale, clinici, restaurante si firme de
              servicii care vor sa creasca online intr-un mod predictibil.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 px-6 py-10 text-center shadow-sm sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Vrei un pachet potrivit exact pentru business-ul tau?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Spune-ne obiectivele tale si revenim cu o oferta clara, fara costuri
            ascunse.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Solicita oferta personalizata
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
