import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--f-serif",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--f-sans",
  display: "swap",
});

const title = "Matthew Grygar — projekty, provoz a technologie · Praha";
const description =
  "Matthew Grygar, Praha. Propojuji lidi, technologie a nápady do funkčních výsledků — projektové a provozní řízení, klientská spolupráce, IT a digitální služby.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F1E8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://matthewgrygar.com"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Matthew Grygar",
    locale: "cs_CZ",
    alternateLocale: ["en_US"],
    title: "Matthew Grygar — Rozumím technologiím. Umím mluvit s lidmi. A věci dotahuju.",
    description: "Portfolio · Praha · projektové a provozní řízení, account management, IT a digitální služby.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Grygar — Rozumím technologiím. Umím mluvit s lidmi. A věci dotahuju.",
    description: "Portfolio · Praha · projektové a provozní řízení, account management, IT a digitální služby.",
  },
};

// Applies the saved language before first paint so English visitors never see a Czech flash.
const langBoot = `try{if(localStorage.getItem('mg-lang')==='en'){var d=document.documentElement;d.classList.add('en');d.lang='en'}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langBoot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
