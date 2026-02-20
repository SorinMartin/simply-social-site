function DashboardMockup() {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.45)]">
      <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">Dashboard Social</p>
          <p className="text-xs text-slate-500">Saptamana curenta</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          +14% engagement
        </span>
      </div>

      <div className="space-y-3">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
            <span>Postari programate</span>
            <span>12 / luna</span>
          </div>
          <div className="h-2 rounded-full bg-slate-200">
            <div className="h-2 w-3/4 rounded-full bg-slate-900" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-100 p-4">
            <p className="text-xs text-slate-500">Reach</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">48.2K</p>
          </div>
          <div className="rounded-2xl border border-slate-100 p-4">
            <p className="text-xs text-slate-500">Lead-uri</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">126</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 p-4">
          <p className="mb-3 text-xs text-slate-500">Canale active</p>
          <div className="flex flex-wrap gap-2">
            {['Facebook', 'Instagram', 'TikTok', 'LinkedIn'].map((channel) => (
              <span
                key={channel}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-emerald-100/60 blur-2xl" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="acasa" className="mx-auto w-full max-w-6xl px-4 pt-32 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur md:p-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
            Fara bullshit de agentie
          </p>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Social media simplificat pentru afacerea ta.
          </h1>

          <p className="max-w-2xl text-pretty text-lg text-slate-600">
            Ne ocupam de continut, postari si crestere, ca tu sa te ocupi de
            business.
          </p>

          <p className="text-sm font-medium text-slate-700">
            Postari constante. Imagine profesionala. Rezultate clare.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Programeaza o discutie
            </a>
            <a
              href="#servicii"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
            >
              Vezi serviciile
            </a>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}
