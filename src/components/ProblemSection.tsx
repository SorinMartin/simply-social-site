import { problemPoints } from "@/data/site";

export function ProblemSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Problema
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            De ce majoritatea afacerilor nu cresc online?
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {problemPoints.map((problem) => (
            <article
              key={problem.title}
              className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 h-10 w-10 rounded-2xl border border-slate-200 bg-slate-50" />
              <h3 className="text-lg font-semibold text-slate-900">{problem.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
