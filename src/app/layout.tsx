import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
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
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.simplysocial.ro"),
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
    url: "https://www.simplysocial.ro",
    siteName: "Simply Social",
    locale: "ro_RO",
    type: "website",
  },
  robots: { index: true, follow: true },
  category: "marketing",
  alternates: { canonical: "/" },
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
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
