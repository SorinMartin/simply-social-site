const solutions = [
  "Plan lunar de continut",
  "Design profesionist",
  "Programare automata",
  "Administrare si raspuns mesaje",
];

export function SolutionSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Noi facem lucrurile simplu.
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {solutions.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition-colors hover:border-slate-300"
            >
              <p className="text-base font-medium text-slate-800">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
