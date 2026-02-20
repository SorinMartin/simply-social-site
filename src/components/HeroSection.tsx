import Link from "next/link";
import { sectors } from "@/data/site";

function DashboardMockup() {
  return (
    <div className="relative rounded-3xl border border-slate-200/90 bg-white p-5 shadow-[0_24px_65px_-34px_rgba(15,23,42,0.5)] sm:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">Pachet activ</p>
          <p className="text-xs text-slate-500">299 EUR/luna</p>
        </div>
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          Facebook + Instagram
        </span>
      </div>

      <div className="space-y-3">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
            <span>Postari lunare</span>
            <span>20 / 20 programate</span>
          </div>
          <div className="h-2 rounded-full bg-slate-200">
            <div className="h-2 w-full rounded-full bg-slate-900" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-100 p-4">
            <p className="text-xs text-slate-500">Canale active</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">2</p>
          </div>
          <div className="rounded-2xl border border-slate-100 p-4">
            <p className="text-xs text-slate-500">Frecventa</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">Constanta</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 p-4">
          <p className="mb-3 text-xs text-slate-500">Status publicare</p>
          <div className="space-y-2">
            {[
              { channel: "📸 Instagram", status: "✅ Programat" },
              { channel: "📘 Facebook", status: "🟢 Publicat" },
            ].map((item) => (
              <div
                key={item.channel}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-xs"
              >
                <span className="text-slate-600">{item.channel}</span>
                <span className="font-medium text-slate-800">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-100/70 blur-2xl" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="acasa" className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_24px_60px_-34px_rgba(15,23,42,0.4)] backdrop-blur md:p-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
            ✨ Pachet unic: 299 EUR/luna
          </p>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            O prezenta social media constanta, care inspira incredere.
          </h1>

          <p className="max-w-2xl text-pretty text-lg text-slate-600">
            Gestionam 20 de postari pe luna si publicam pe Facebook si
            Instagram, astfel incat brandul tau sa comunice elegant, clar si
            profesionist.
          </p>

          <p className="text-sm font-semibold text-slate-700">
            Un serviciu clar, cu executie impecabila: 299 EUR/luna.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Programeaza o discutie 🚀
            </Link>
            <Link
              href="/servicii"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
            >
              Descopera pachetul 📦
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}
