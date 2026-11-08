import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-plex-mono",
  display: "swap",
});

// Variable font: the design uses weights 300 and 400 plus the optical-size axis.
const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

const description =
  "Matthew Grygar, Praha. Propojuji lidi, technologie a nápady do funkčních výsledků — projektové a provozní řízení, klientská spolupráce, IT a digitální služby.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F0EDE6",
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
    <html lang="cs" className={`${plexSans.variable} ${plexMono.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
