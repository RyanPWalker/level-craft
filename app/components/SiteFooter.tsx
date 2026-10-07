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
          <a href={site.phone.href}>{site.phone.display}</a>
        </nav>
        <p>&copy; {year} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
