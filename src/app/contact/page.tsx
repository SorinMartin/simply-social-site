import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacteaza Simply Social pentru o discutie despre strategia ta de social media.",
};

type ContactItem = {
  title: string;
  value: string;
  href?: string;
};

const contactItems: ContactItem[] = [
  {
    title: "Email",
    value: "contact@simplysocial.ro",
    href: "mailto:contact@simplysocial.ro",
  },
  {
    title: "Program",
    value: "Luni - Vineri, 09:00 - 18:00",
  },
  {
    title: "Raspuns estimat",
    value: "In maximum 24 de ore lucratoare",
  },
] as const;

export default function ContactPage() {
  return (
    <SiteFrame pathname="/contact">
      <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Hai sa discutam despre cresterea ta online.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Trimite-ne cateva detalii despre afacerea ta si revenim rapid cu un
            plan simplu si realist.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Date de contact</h2>
            <div className="mt-6 space-y-5">
              {contactItems.map((item) => (
                <div key={item.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {item.title}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm font-medium text-slate-700">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </aside>

          <form className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Trimite un mesaj</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-600">
                <span>Nume</span>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500"
                  placeholder="Numele tau"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-600">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500"
                  placeholder="email@business.ro"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-600 sm:col-span-2">
                <span>Nume companie</span>
                <input
                  type="text"
                  name="company"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500"
                  placeholder="Compania ta"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-600 sm:col-span-2">
                <span>Mesaj</span>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500"
                  placeholder="Spune-ne ce obiective ai si cu ce te putem ajuta."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Trimite mesajul
            </button>
          </form>
        </div>
      </section>
    </SiteFrame>
  );
}
