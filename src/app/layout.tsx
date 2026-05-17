import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  title: "Matthew Grygar — IT Risk Manager & Systems Engineer",
  description:
    "IT Risk Manager and Systems Engineer based in Prague. 5 years in live operations — IAM, incident response, and operational resilience.",
  openGraph: {
    type: "website",
    siteName: "Matthew Grygar",
    title: "Matthew Grygar — IT Risk Manager & Systems Engineer",
    description:
      "IT Risk Manager and Systems Engineer based in Prague. 5 years in live operations — IAM, incident response, and operational resilience.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Grygar — IT Risk Manager & Systems Engineer",
    description:
      "IT Risk Manager and Systems Engineer based in Prague. 5 years in live operations — IAM, incident response, and operational resilience.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
