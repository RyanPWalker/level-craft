import type { Metadata } from "next";
import { Inter, Jersey_10, Silkscreen } from "next/font/google";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Jersey_10({ subsets: ["latin"], weight: "400", variable: "--font-pixel-display" });
const label = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pixel-label" });

export const metadata: Metadata = {
  title: {
    default: "Level Craft Construction",
    template: "%s | Level Craft Construction",
  },
  description:
    "Level Craft Construction — new construction, remodeling, renovation, and HVAC, built level and crafted to last.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${label.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
