import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.simplysocial.ro"),
  title: {
    default: "Simply Social | Agentie Social Media",
    template: "%s | Simply Social",
  },
  description:
    "Simply Social ajuta afacerile locale cu social media simplu: continut constant, imagine profesionala si rezultate clare.",
  keywords: [
    "agentie social media",
    "marketing social media",
    "administrare social media",
    "postari social media",
    "simply social",
  ],
  openGraph: {
    title: "Simply Social | Agentie Social Media",
    description:
      "Postari constante. Imagine profesionala. Rezultate clare pentru afaceri locale.",
    url: "https://www.simplysocial.ro",
    siteName: "Simply Social",
    locale: "ro_RO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "marketing",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
