"use client";

import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type Consent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string | null;
  version: number;
};

const STORAGE_KEY = "ss-consent-v1";
const CONSENT_VERSION = 1;

const defaultConsent: Consent = {
  essential: true,
  analytics: false,
  marketing: false,
  decidedAt: null,
  version: CONSENT_VERSION,
};

type ConsentContextValue = {
  consent: Consent;
  decided: boolean;
  openPreferences: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (partial: Partial<Pick<Consent, "analytics" | "marketing">>) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function readStorage(): Consent {
  if (typeof window === "undefined") return defaultConsent;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultConsent;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    if (parsed.version !== CONSENT_VERSION) return defaultConsent;
    return {
      essential: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      decidedAt: parsed.decidedAt ?? null,
      version: CONSENT_VERSION,
    };
  } catch {
    return defaultConsent;
  }
}

function writeStorage(c: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  } catch {
    // ignore (private mode, quota)
  }
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within CookieConsentProvider");
  return ctx;
}

type ProviderProps = {
  children?: React.ReactNode;
};

export function CookieConsent({ children }: ProviderProps) {
  const [consent, setConsent] = useState<Consent>(defaultConsent);
  const [mounted, setMounted] = useState(false);
  const [paneOpen, setPaneOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = readStorage();
    setConsent(stored);
    setMounted(true);
    if (!stored.decidedAt) setBannerOpen(true);
  }, []);

  const persist = useCallback((next: Consent) => {
    writeStorage(next);
    setConsent(next);
  }, []);

  const acceptAll = useCallback(() => {
    persist({
      essential: true,
      analytics: true,
      marketing: true,
      decidedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    });
    setBannerOpen(false);
    setPaneOpen(false);
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist({
      essential: true,
      analytics: false,
      marketing: false,
      decidedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    });
    setBannerOpen(false);
    setPaneOpen(false);
  }, [persist]);

  const savePreferences = useCallback(
    (partial: Partial<Pick<Consent, "analytics" | "marketing">>) => {
      persist({
        essential: true,
        analytics: partial.analytics ?? consent.analytics,
        marketing: partial.marketing ?? consent.marketing,
        decidedAt: new Date().toISOString(),
        version: CONSENT_VERSION,
      });
      setBannerOpen(false);
      setPaneOpen(false);
    },
    [consent.analytics, consent.marketing, persist],
  );

  const openPreferences = useCallback(() => {
    setPaneOpen(true);
    setBannerOpen(false);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      decided: Boolean(consent.decidedAt),
      openPreferences,
      acceptAll,
      rejectAll,
      savePreferences,
    }),
    [consent, openPreferences, acceptAll, rejectAll, savePreferences],
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {mounted && (
        <>
          <CookieBanner
            open={bannerOpen}
            onAcceptAll={acceptAll}
            onRejectAll={rejectAll}
            onCustomize={openPreferences}
          />
          <PreferencesModal
            open={paneOpen}
            initial={consent}
            onClose={() => setPaneOpen(false)}
            onAcceptAll={acceptAll}
            onRejectAll={rejectAll}
            onSave={savePreferences}
          />
        </>
      )}
    </ConsentContext.Provider>
  );
}

type BannerProps = {
  open: boolean;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onCustomize: () => void;
};

function CookieBanner({ open, onAcceptAll, onRejectAll, onCustomize }: BannerProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Banner cookies"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[60] sm:left-6 sm:right-auto sm:w-[420px]"
        >
          <div className="rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-elevated)]/95 p-5 shadow-[0_32px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                Cookies
              </p>
            </div>
            <h2 className="mt-4 font-serif-italic text-2xl text-[var(--fg)]">
              iti respectam confidentialitatea.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
              Folosim cookies esentiale pentru functionarea site-ului si, cu
              acordul tau, cookies pentru analiza trafic si marketing. Iti poti
              schimba optiunea oricand. Detalii in{" "}
              <Link
                href="/politica-de-cookies"
                className="link-sweep text-[var(--fg)]"
              >
                Politica de cookies
              </Link>
              .
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <button type="button" onClick={onAcceptAll} className="btn-primary">
                Accept toate
              </button>
              <button type="button" onClick={onRejectAll} className="btn-ghost">
                Refuz toate
              </button>
              <button
                type="button"
                onClick={onCustomize}
                className="link-sweep ml-1 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]"
              >
                Configureaza
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type PreferencesModalProps = {
  open: boolean;
  initial: Consent;
  onClose: () => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onSave: (partial: Partial<Pick<Consent, "analytics" | "marketing">>) => void;
};

function PreferencesModal({
  open,
  initial,
  onClose,
  onAcceptAll,
  onRejectAll,
  onSave,
}: PreferencesModalProps) {
  const [analytics, setAnalytics] = useState(initial.analytics);
  const [marketing, setMarketing] = useState(initial.marketing);

  useEffect(() => {
    if (open) {
      setAnalytics(initial.analytics);
      setMarketing(initial.marketing);
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open, initial.analytics, initial.marketing]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Preferinte cookies"
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-elevated)] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Inchide"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <div className="border-b border-[var(--line)] p-6 sm:p-8">
              <p className="eyebrow">Preferinte cookies</p>
              <h2 className="mt-4 font-serif-italic text-3xl text-[var(--fg)] sm:text-4xl">
                alege ce permiti.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                Cookies esentiale sunt activate pentru ca site-ul sa functioneze
                corect. Restul sunt optionale — le activezi doar daca vrei.
              </p>
            </div>

            <ul className="divide-y divide-[var(--line)]">
              <Category
                title="Esentiale"
                description="Strict necesare pentru functionarea site-ului si pastrarea preferintelor tale. Nu pot fi dezactivate."
                locked
                checked
              />
              <Category
                title="Analytics"
                description="Ne ajuta sa intelegem cum este utilizat site-ul, cu date agregate si anonime. Fara identificare individuala."
                checked={analytics}
                onChange={setAnalytics}
              />
              <Category
                title="Marketing"
                description="Folosite pentru a masura campanii si, unde este cazul, pentru retargeting pe Meta. Active numai cu acordul tau."
                checked={marketing}
                onChange={setMarketing}
              />
            </ul>

            <div className="flex flex-col gap-3 border-t border-[var(--line)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={onRejectAll}
                  className="link-sweep text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]"
                >
                  Refuz toate
                </button>
                <span className="text-[var(--fg-dim)]">·</span>
                <button
                  type="button"
                  onClick={onAcceptAll}
                  className="link-sweep text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]"
                >
                  Accept toate
                </button>
              </div>
              <button
                type="button"
                onClick={() => onSave({ analytics, marketing })}
                className="btn-primary"
              >
                Salveaza preferintele
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type CategoryProps = {
  title: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (v: boolean) => void;
};

function Category({ title, description, checked, locked, onChange }: CategoryProps) {
  return (
    <li className="flex items-start gap-6 p-6 sm:p-8">
      <div className="flex-1">
        <h3 className="font-display text-lg text-[var(--fg)]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
          {description}
        </p>
      </div>
      <Toggle
        checked={checked}
        locked={locked}
        onChange={(v) => onChange?.(v)}
        label={title}
      />
    </li>
  );
}

type ToggleProps = {
  checked: boolean;
  locked?: boolean;
  onChange: (v: boolean) => void;
  label: string;
};

function Toggle({ checked, locked, onChange, label }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={`${label}${locked ? " (obligatoriu)" : ""}`}
      onClick={() => !locked && onChange(!checked)}
      className={`relative mt-1 inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors ${
        locked
          ? "cursor-not-allowed border-[var(--line-strong)] bg-[var(--line-strong)]"
          : checked
            ? "border-[var(--accent)] bg-[var(--accent)]"
            : "border-[var(--line-strong)] bg-[var(--bg)]"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
          locked
            ? "translate-x-[22px] bg-[var(--fg-muted)]"
            : checked
              ? "translate-x-[22px] bg-[var(--accent-ink)]"
              : "translate-x-[4px] bg-[var(--fg-muted)]"
        }`}
      />
    </button>
  );
}

export function CookiePreferencesButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openPreferences } = useConsent();
  return (
    <button type="button" onClick={openPreferences} className={className}>
      {children ?? "Preferinte cookies"}
    </button>
  );
}
