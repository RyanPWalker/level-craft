import Link from "next/link";
import ContactCTA from "./ContactCTA";
import GrassStrip from "./GrassStrip";
import PixelArt, { type Sprite } from "./PixelArt";
import { icons } from "./sprites";
import { businessId, JsonLd } from "../seo";
import { site } from "../site";

export type ServicePageProps = {
  /** The page's path, title, and description, shared with its metadata. Used for structured data. */
  page: { path: string; title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  icon: Sprite;
  offeringsTitle: string;
  offerings: { title: string; text: string }[];
  highlightsTitle: string;
  highlights: { title: string; text: string }[];
  ctaTitle: string;
};

/** Shared layout for service landing pages. Pages can diverge from this as they grow. */
export default function ServicePage(props: ServicePageProps) {
  const url = `${site.url}${props.page.path}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.page.title,
    description: props.page.description,
    url,
    serviceType: props.offerings.map((o) => o.title),
    provider: { "@id": businessId },
    areaServed: { "@type": "AdministrativeArea", name: `${site.serviceArea}, UT` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: props.page.title, item: url },
    ],
  };

  return (
    <main>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <section className="hero page-hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{props.eyebrow}</p>
            <h1>{props.title}</h1>
            <p className="lead">{props.lead}</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn">Get a Free Estimate</Link>
            </div>
          </div>
          <PixelArt sprite={props.icon} className="page-hero-art" />
        </div>
        <GrassStrip id="grass-hero" />
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <h2>{props.offeringsTitle}</h2>
          <div className="grid">
            {props.offerings.map((o) => (
              <article key={o.title} className="card">
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Why Level Craft</p>
          <h2>{props.highlightsTitle}</h2>
          <div className="grid grid-3">
            {props.highlights.map((h) => (
              <div key={h.title} className="value">
                <h3>
                  <PixelArt sprite={icons.check} scale={3} />
                  {h.title}
                </h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA title={props.ctaTitle} />
    </main>
  );
}
