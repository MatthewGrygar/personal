import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matthew Grygar — IT Risk Manager & Systems Engineer",
  description: "IT Risk Manager, Crisis Specialist and Systems Engineer based in Prague. Calm structure for complex problems.",
  openGraph: {
    title: "Matthew Grygar",
    description: "IT Risk Manager · Systems Engineer · Crisis Specialist",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
