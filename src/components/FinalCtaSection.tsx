import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 px-6 py-12 text-center shadow-[0_24px_60px_-34px_rgba(15,23,42,0.65)] sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Pachet unic
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          299 EUR/luna. 20 postari. Facebook + Instagram.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          Construim o prezenta social media care arata profesional, comunica
          constant si sustine imaginea afacerii tale in fiecare luna.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Vreau sa incepem
          </Link>
          <a
            href="mailto:contact@simplysocial.ro"
            className="inline-flex rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-400 hover:text-white"
          >
            contact@simplysocial.ro
          </a>
        </div>
      </div>
    </section>
  );
}
