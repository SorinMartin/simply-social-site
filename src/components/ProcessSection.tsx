const steps = [
  "Discutie initiala",
  "Strategie si plan",
  "Creare continut",
  "Publicare & optimizare",
];

export function ProcessSection() {
  return (
    <section
      id="cum-functioneaza"
      className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Cum functioneaza
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-sm font-semibold text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-medium text-slate-800">{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
