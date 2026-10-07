import type { Metadata } from "next";
import { Inter, Jersey_10, Silkscreen } from "next/font/google";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Jersey_10({ subsets: ["latin"], weight: "400", variable: "--font-pixel-display" });
const label = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pixel-label" });

export const metadata: Metadata = {
  title: "Level Craft Construction",
  description:
    "Level Craft Construction — new construction, remodeling, renovation, and HVAC, built level and crafted to last.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${label.variable}`}>
      <body>{children}</body>
    </html>
  );
}
