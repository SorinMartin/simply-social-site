import { BrandMark } from "@/components/BrandMark";

const links = [
  { label: "Servicii", href: "#servicii" },
  { label: "Contact", href: "#contact" },
  { label: "Politica de confidentialitate", href: "#" },
];

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
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

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
