import { solutionPoints } from "@/data/site";

export function SolutionSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Solutia
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Noi facem lucrurile simplu.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {solutionPoints.map((item, index) => (
            <article
              key={item}
              className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-all duration-200 hover:border-slate-300 hover:bg-white"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                0{index + 1}
              </p>
              <p className="mt-2 text-base font-semibold text-slate-800">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
