import Link from "next/link";
import { site } from "../site";

export default function ContactCTA({ title = "Ready to start your next build?" }: { title?: string }) {
  return (
    <section id="contact" className="section cta">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2>{title}</h2>
        <p className="section-intro">
          Tell us what you have in mind and we&apos;ll get back to you with a free estimate.
        </p>
        <div className="contact-info">
          <Link href="/contact" className="btn">Request an Estimate</Link>
          <a href={site.phone.href} className="btn btn-ghost">{site.phone.display}</a>
        </div>
      </div>
    </section>
  );
}
