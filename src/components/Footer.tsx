import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { navItems } from "@/data/site";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
] as const;

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
              href="mailto:contact@simplysocial.ro"
              className="link-sweep inline-block text-sm text-[var(--fg)]"
            >
              contact@simplysocial.ro
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
            <p className="eyebrow">Social</p>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-sweep text-sm text-[var(--fg)]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/politica-de-confidentialitate"
                  className="link-sweep text-sm text-[var(--fg-muted)]"
                >
                  Politica de confidentialitate
                </Link>
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
            © {new Date().getFullYear()} Simply Social · toate drepturile rezervate
          </p>
          <p className="font-mono text-xs text-[var(--fg-dim)]">
            Bucuresti · Romania
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
