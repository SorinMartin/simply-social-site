import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { CookiePreferencesButton } from "@/components/CookieConsent";
import { navItems } from "@/data/site";
import { company, legalPages } from "@/data/legal";

export function Footer() {
  return (
    <footer className="relative mt-40 border-t border-[var(--line)] px-5 pb-10 pt-20 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <BrandMark />
            <p className="max-w-xs text-sm leading-7 text-[var(--fg-muted)]">
              Social media, fara complicatii. Un singur pachet, lunar.
              Gandit pentru afaceri care vor o prezenta coerenta.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="link-sweep inline-block text-sm text-[var(--fg)]"
            >
              {company.email}
            </a>
          </div>

          <div>
            <p className="eyebrow">Navigare</p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-sweep text-sm text-[var(--fg)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Legal</p>
            <ul className="mt-5 space-y-3">
              {legalPages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="link-sweep text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePreferencesButton className="link-sweep text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]">
                  Preferinte cookies
                </CookiePreferencesButton>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Pachet</p>
            <p className="mt-5 font-serif-italic text-4xl text-[var(--fg)]">
              299 <span className="text-[var(--fg-muted)]">eur</span>
            </p>
            <p className="mt-1 text-sm text-[var(--fg-muted)]">
              per luna, 20 postari, FB + IG
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Activeaza pachetul
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-[var(--line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-[var(--fg-dim)]">
            © {new Date().getFullYear()} Simply Social. Toate drepturile rezervate.
          </p>
          <p className="font-mono text-xs text-[var(--fg-dim)]">
            Creat de{" "}
            <a
              href="https://digitalwizards.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-[var(--fg-muted)] hover:text-[var(--fg)]"
            >
              Digital Wizards
            </a>
          </p>
        </div>
      </div>

      <div className="pointer-events-none mt-16 select-none overflow-hidden">
        <p className="font-serif-italic text-[22vw] leading-none text-[var(--fg)] opacity-[0.06]">
          simply<span className="font-sans not-italic font-medium">social</span>
        </p>
      </div>
    </footer>
  );
}
