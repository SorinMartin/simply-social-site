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

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200/80 bg-white px-6 py-8 shadow-[0_20px_45px_-26px_rgba(15,23,42,0.3)] sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <BrandMark />
            <a
              href="mailto:contact@simplysocial.ro"
              className="block text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              contact@simplysocial.ro
            </a>
            <p className="text-sm text-slate-500">© 2026 Simply Social</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
