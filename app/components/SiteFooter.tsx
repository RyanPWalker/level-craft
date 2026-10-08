import Link from "next/link";
import GrassStrip from "./GrassStrip";
import PixelArt from "./PixelArt";
import { grassBlock } from "./sprites";
import { servicePages, site } from "../site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <GrassStrip id="grass-footer" />
      <div className="container footer-inner">
        <Link href="/" className="logo">
          <PixelArt sprite={grassBlock} scale={2} />
          Level Craft
        </Link>
        <nav className="footer-links" aria-label="Footer">
          {servicePages.map((page) => (
            <Link key={page.href} href={page.href}>{page.title}</Link>
          ))}
          <Link href="/contact">Contact</Link>
          <a href={site.phone.href}>{site.phone.display}</a>
        </nav>
      </div>
      <div className="container footer-legal">
        <p>
          {site.name} · {site.city}, {site.state} · Serving all of {site.serviceArea}
        </p>
        <p>
          Licensed &amp; insured {site.license.type}
          {site.license.number && <> · License #{site.license.number}</>}
        </p>
        <p>&copy; {year} {site.legalName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
