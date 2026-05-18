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
  title: "Matthew Grygar — IT Consultant, Lector & Technology Partner",
  description:
    "Reliable IT support, infrastructure projects, Microsoft 365, networking, user training, and practical technology solutions for individuals and growing businesses.",
  openGraph: {
    type: "website",
    siteName: "Matthew Grygar",
    title: "Matthew Grygar — IT Consultant, Lector & Technology Partner",
    description:
      "Reliable IT support, infrastructure projects, Microsoft 365, networking, user training, and practical technology solutions for individuals and growing businesses.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Grygar — IT Consultant, Lector & Technology Partner",
    description:
      "Reliable IT support, infrastructure projects, Microsoft 365, networking, user training, and practical technology solutions for individuals and growing businesses.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
