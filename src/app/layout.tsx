import type { Metadata, Viewport } from "next";
import { Archivo, Inter_Tight } from "next/font/google";
import "./globals.css";

// Variable font: weights 300–900 plus the width axis (the headings run extended, up to 125 %).
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});
// Body text, as in the designs.
const inter = Inter_Tight({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });

const description =
  "Matthew Grygar, Praha. Propojuji lidi, technologie a nápady do funkčních výsledků — projektové a provozní řízení, klientská spolupráce, IT a digitální služby.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://matthewgrygar.com"),
  title: "Matthew Grygar",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Matthew Grygar",
    locale: "cs_CZ",
    alternateLocale: ["en_US"],
    title: "Matthew Grygar",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Grygar",
    description,
  },
};

// Runs before first paint: marks JS as available (the intro animations key off `.js`, as in the design)
// and applies the saved language so English visitors never see a Czech flash.
const boot = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('mg-lang')==='en'){d.classList.add('en');d.lang='en'}}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${archivo.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
