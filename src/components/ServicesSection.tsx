type ServicePackage = {
  name: string;
  features: string[];
  highlighted?: boolean;
};

const packages: ServicePackage[] = [
  {
    name: "BASIC",
    features: [
      "8 postari/luna",
      "Design inclus",
      "Copy inclus",
      "Programare postari",
    ],
  },
  {
    name: "PRO",
    highlighted: true,
    features: [
      "12 postari/luna",
      "Reel-uri incluse",
      "Administrare mesaje",
      "Strategie lunara",
    ],
  },
  {
    name: "PREMIUM",
    features: [
      "16+ postari",
      "Ads management",
      "Optimizare conversii",
      "Raport lunar detaliat",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="servicii" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Servicii construite pentru ritmul afacerii tale
        </h2>

        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((pack) => (
            <article
              key={pack.name}
              className={`flex h-full flex-col rounded-3xl border p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
                pack.highlighted
                  ? "border-emerald-300 bg-emerald-50/50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-slate-600">
                {pack.name}
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex w-fit rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
              >
                Solicita oferta
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
