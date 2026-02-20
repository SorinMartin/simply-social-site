import Link from "next/link";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section
      id="cum-functioneaza"
      className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Proces
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Cum functioneaza colaborarea
            </h2>
          </div>
          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900"
          >
            Pornim cu o discutie →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span className="text-lg" aria-hidden="true">
                  {step.icon}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
