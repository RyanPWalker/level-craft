import type { Metadata } from "next";
import Link from "next/link";
import OtherSiteLink from "./components/OtherSiteLink";
import { site } from "./site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

// Exported as 404.html, which GitHub Pages serves for any missing path.
export default function NotFound() {
  return (
    <main>
      <section className="hero page-hero not-found-hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Error 404</p>
            <h1>Block not found.</h1>
            <p className="lead">
              We couldn&apos;t find that page. It may have moved, or the link may be mistyped.
            </p>
            <div className="not-found-links">
              <Link href="/" className="btn">Home</Link>
              <Link href="/contact" className="btn btn-ghost">Get a Free Estimate</Link>
            </div>
            <OtherSiteLink origin={site.otherSiteUrl} className="not-found-other" />
          </div>
        </div>
      </section>
    </main>
  );
}
