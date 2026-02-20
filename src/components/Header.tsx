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

          <div className="flex items-center justify-self-end gap-2">
            <Link
              href="/contact"
              className="hidden rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800 md:inline-flex"
            >
              Programeaza o discutie
            </Link>

            <details className="group relative md:hidden">
              <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition-colors hover:text-slate-900 [&::-webkit-details-marker]:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
                <span className="sr-only">Deschide meniul</span>
              </summary>

              <div className="absolute right-0 top-12 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_50px_-25px_rgba(15,23,42,0.45)]">
                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const active = isActive(pathname, item.href);

                    return (
                      <Link
                        key={`mobile-${item.href}`}
                        href={item.href}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                          active
                            ? "bg-slate-100 text-slate-900"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <Link
                  href="/contact"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Programeaza o discutie
                </Link>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
