import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import GrassStrip from "../components/GrassStrip";
import PixelArt from "../components/PixelArt";
import { icons } from "../components/sprites";
import { JsonLd, pageMetadata } from "../seo";
import { site } from "../site";

const page = {
  path: "/contact/",
  title: "Request a Free Estimate in Utah",
  description:
    "Contact Level Craft Construction in Orem, Utah. Request a free estimate for a remodel, addition, concrete, or commercial build-out anywhere in Utah.",
};

export const metadata: Metadata = pageMetadata(page);

const nextSteps = [
  "We call you back to talk through the project.",
  "We schedule a site visit to see the space and scope the work.",
  "You get a written estimate with pricing and timeline.",
];

export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}${page.path}` },
    ],
  };

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd} />
      <section className="hero page-hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Contact</p>
            <h1>Get a free estimate.</h1>
            <p className="lead">
              Tell us a little about your project and how to reach you. We&apos;ll follow up to
              schedule a site visit.
            </p>
          </div>
          <PixelArt sprite={icons.house} className="page-hero-art" />
        </div>
        <GrassStrip id="grass-hero" />
      </section>

      <section id="contact" className="section">
        <div className="container contact-layout">
          <div className="card form-card">
            <ContactForm />
          </div>
          <aside className="contact-aside">
            <h2 className="contact-heading">Prefer to call?</h2>
            <a href={site.phone.href} className="btn">{site.phone.display}</a>
            <p className="contact-area">
              Based in {site.city}, serving all of {site.serviceArea}. Have a project outside{" "}
              {site.serviceArea}? Ask us. We consider out-of-state work case by case.
            </p>
            <h2 className="contact-heading">What happens next</h2>
            <ol className="next-steps">
              {nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="hero-badge">
              <PixelArt sprite={icons.check} scale={2} />
              Licensed &amp; insured · {site.license.type}
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
