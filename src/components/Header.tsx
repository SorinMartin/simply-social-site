import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { navItems } from "@/data/site";

type HeaderProps = {
  pathname?: string;
};

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href.startsWith("/#")) {
    return pathname === "/";
  }

  return pathname === href;
}

export function Header({ pathname = "/" }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/88 px-4 py-3 shadow-[0_18px_44px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl md:grid-cols-[1fr_auto_1fr] md:px-6">
          <div className="justify-self-start">
            <Link href="/" aria-label="Simply Social - Acasa">
              <BrandMark />
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 p-1 md:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="justify-self-end">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Programeaza o discutie
            </Link>
          </div>

          <nav className="col-span-2 flex items-center gap-2 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50/80 p-1 md:hidden">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={`mobile-${item.href}`}
                  href={item.href}
                  className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                    active
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
