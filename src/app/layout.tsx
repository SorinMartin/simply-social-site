import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simply-social-site.vercel.app"),
  title: {
    default: "Simply Social | Agentie Social Media",
    template: "%s | Simply Social",
  },
  description:
    "Simply Social este agentia de social media pentru afaceri locale care vor continut constant, imagine profesionala si rezultate clare.",
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
    url: "https://simply-social-site.vercel.app",
    siteName: "Simply Social",
    locale: "ro_RO",
    type: "website",
  },
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
