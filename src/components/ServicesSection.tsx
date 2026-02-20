import Link from "next/link";
import { servicePackages } from "@/data/site";

export function ServicesSection() {
  const pack = servicePackages[0];

  return (
    <section id="servicii" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Pachetul nostru
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              O oferta simpla, cu rezultat vizibil in fiecare luna.
            </h2>
          </div>
          <Link
            href="/servicii"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900"
          >
            Vezi toate detaliile →
          </Link>
        </div>

        <article className="mx-auto max-w-3xl rounded-3xl border border-emerald-300 bg-gradient-to-b from-emerald-50 to-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm font-semibold tracking-[0.18em] text-slate-500">
            {pack.name}
          </p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            {pack.price}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">{pack.description}</p>

          <ul className="mt-6 grid gap-3 text-slate-700 sm:grid-cols-2">
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
            Solicita pachetul
          </Link>
        </article>
      </div>
    </section>
  );
}
