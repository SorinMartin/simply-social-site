import { BrandMark } from "@/components/BrandMark";

const navItems = [
  { label: "Servicii", href: "#servicii" },
  { label: "Proces", href: "#cum-functioneaza" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md">
        <a href="#acasa" aria-label="Acasa">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-xl border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Programeaza o discutie
        </a>
      </div>
    </header>
  );
}
