import type { Metadata } from "next";
import { Inter, Jersey_10, Silkscreen } from "next/font/google";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { site } from "./site";
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
    "Level Craft Construction is a licensed and insured general contractor in Orem, Utah, serving Utah County with remodels, additions, and commercial tenant improvements.",
};

// Structured data so search engines can show the business in local results.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  legalName: site.legalName,
  telephone: site.phone.href.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: "UT",
    addressCountry: "US",
  },
  areaServed: site.serviceArea,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${label.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
