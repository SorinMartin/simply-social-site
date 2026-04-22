"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandMark } from "@/components/BrandMark";
import { navItems } from "@/data/site";

type HeaderProps = {
  pathname?: string;
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({ pathname = "/" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-[var(--line)] bg-[rgba(10,10,11,0.72)] backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link href="/" aria-label="Simply Social — Acasa" className="relative z-10">
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex items-baseline gap-1.5 text-sm"
                >
                  <span className="font-mono text-[10px] text-[var(--fg-dim)]">
                    {item.index}
                  </span>
                  <span
                    className={`link-sweep transition-colors ${
                      active ? "text-[var(--fg)]" : "text-[var(--fg-muted)] group-hover:text-[var(--fg)]"
                    }`}
                  >
                    {item.label}
                  </span>
                  {active && (
                    <span className="absolute -bottom-1 left-[22px] right-0 h-px bg-[var(--accent)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2 text-xs font-medium text-[var(--fg)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)] md:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Programeaza discutia
            </Link>

            <button
              type="button"
              aria-label={open ? "Inchide meniul" : "Deschide meniul"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--fg)] md:hidden"
            >
              <span className="sr-only">Meniu</span>
              <span className="relative block h-[10px] w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-30 bg-[var(--bg)] md:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-24">
              <nav className="flex flex-1 flex-col justify-center gap-2">
                {navItems.map((item, i) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline gap-4 border-b border-[var(--line)] py-5"
                      >
                        <span className="font-mono text-xs text-[var(--fg-dim)]">
                          {item.index}
                        </span>
                        <span
                          className={`font-display text-5xl ${
                            active ? "text-[var(--accent)]" : "text-[var(--fg)]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-6 flex flex-col gap-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Programeaza discutia
                </Link>
                <a
                  href="mailto:contact@simplysocial.ro"
                  className="text-center text-sm text-[var(--fg-muted)]"
                >
                  contact@simplysocial.ro
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
