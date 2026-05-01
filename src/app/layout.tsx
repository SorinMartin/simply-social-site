import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/data/legal";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  // Mono is small UI text only; let display fonts win the preload race.
  preload: false,
});

const SITE_URL = "https://www.simplysocial.ro";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Simply Social — Social media, fara complicatii",
    template: "%s · Simply Social",
  },
  description:
    "Un singur pachet: 299 EUR/luna pentru 20 de postari pe Facebook si Instagram. Design, copy si publicare, gestionate de noi.",
  keywords: [
    "agentie social media",
    "administrare social media",
    "postari facebook instagram",
    "simply social",
  ],
  openGraph: {
    title: "Simply Social — Social media, fara complicatii",
    description:
      "20 postari/luna pe Facebook si Instagram, 299 EUR/luna. Design, copy si publicare incluse.",
    url: SITE_URL,
    siteName: "Simply Social",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simply Social — Social media, fara complicatii",
    description:
      "20 postari/luna pe Facebook si Instagram, 299 EUR/luna. Design, copy si publicare incluse.",
  },
  robots: { index: true, follow: true },
  category: "marketing",
  alternates: { canonical: "/" },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Simply Social",
  legalName: company.name,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: company.email,
  description:
    "Agentie de social media. Pachet unic de 20 postari pe luna pe Facebook si Instagram, 299 EUR/luna.",
  vatID: company.cui,
  taxID: company.cui,
  identifier: company.registruComertului,
  address: {
    "@type": "PostalAddress",
    addressCountry: "RO",
    addressRegion: "Hunedoara",
    addressLocality: "Sat Pricaz",
    streetAddress: "Nr. 36",
    postalCode: "337496",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: company.email,
      availableLanguage: ["Romanian"],
    },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Simply Social",
  url: SITE_URL,
  inLanguage: "ro-RO",
  publisher: { "@type": "Organization", name: "Simply Social" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ro"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="grain antialiased">
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <SmoothScroll>
          <Cursor />
          <CookieConsent>{children}</CookieConsent>
        </SmoothScroll>
      </body>
    </html>
  );
}
