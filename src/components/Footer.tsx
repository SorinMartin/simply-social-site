import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

const links = [
  { label: "Servicii", href: "/servicii" },
  { label: "Contact", href: "/contact" },
  {
    label: "Politica de confidentialitate",
    href: "/politica-de-confidentialitate",
  },
] as const;

const channels = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
] as const;

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50 shadow-[0_28px_60px_-34px_rgba(15,23,42,0.38)]">
        <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.25fr_1fr_1fr] lg:py-10">
          <div className="space-y-4">
            <BrandMark />
            <p className="max-w-sm text-sm leading-7 text-slate-600">
              Social media management pentru afaceri care vor o prezenta
              constanta, curata si credibila in online.
            </p>
            <a
              href="mailto:contact@simplysocial.ro"
              className="inline-flex rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              ✉️ contact@simplysocial.ro
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              🧭 Navigare
            </p>
            <nav className="mt-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              ⭐ Pachet Unic
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
              299 EUR/luna
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              20 postari/luna, publicare pe Facebook si Instagram.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Incepe colaborarea
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200/80 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm text-slate-500">© 2026 Simply Social</p>
          <div className="flex flex-wrap gap-2">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {channel.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
