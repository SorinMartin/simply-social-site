const problems = [
  "Posteaza rar si haotic",
  "Design amator",
  "Fara strategie",
];

export function ProblemSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          De ce majoritatea afacerilor nu cresc online?
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 h-10 w-10 rounded-2xl border border-slate-200 bg-slate-50" />
              <p className="text-lg font-medium text-slate-800">{problem}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
