import Link from "next/link";
import NavLinks from "./NavLinks";
import PixelArt from "./PixelArt";
import { grassBlock } from "./sprites";

export default function SiteHeader() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <PixelArt sprite={grassBlock} scale={2} />
          Level Craft
        </Link>
        <a href="#contact" className="btn btn-small nav-cta">Get a Quote</a>
        <NavLinks />
      </div>
    </header>
  );
}
