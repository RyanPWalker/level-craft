import type { Metadata } from "next";
import { Inter, Jersey_10, Silkscreen } from "next/font/google";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { businessId, JsonLd, ogImage } from "./seo";
import { servicePages, site } from "./site";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Jersey_10({ subsets: ["latin"], weight: "400", variable: "--font-pixel-display" });
const label = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pixel-label" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | General Contractor in ${site.city}, ${site.state}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Licensed and insured general contractor in Orem, Utah. Home remodels, additions, and commercial tenant improvements across Utah County. Call for a free estimate.",
  applicationName: site.name,
  formatDetection: { telephone: true },
  robots: { index: true, follow: true },
};

// Structured data so search engines can show the business in local results.
// Pages reference this node by `businessId`. Leave out placeholder details (email, license number).
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": businessId,
  name: site.name,
  legalName: site.legalName,
  url: `${site.url}/`,
  image: `${site.url}${ogImage.url}`,
  telephone: site.phone.href.replace("tel:", ""),
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: "UT",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: `${site.city}, UT` },
    { "@type": "AdministrativeArea", name: `${site.serviceArea}, UT` },
  ],
  knowsAbout: [
    "Home remodeling",
    "Home additions",
    "Tenant improvements",
    "Office build-outs",
    "Commercial remodeling",
    "Wood and metal framing",
    "Drywall",
    "Interior and exterior painting",
    "Tile",
    "Concrete driveways and patios",
    "Carpentry",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction services",
    itemListElement: servicePages.map((page) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: page.title, url: `${site.url}${page.href}/` },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${label.variable}`}>
      <body>
        <JsonLd data={businessJsonLd} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
