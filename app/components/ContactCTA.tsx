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
          <a href={site.phone.href} className="btn">{site.phone.display}</a>
          <a href={`mailto:${site.email}`} className="btn btn-ghost">{site.email}</a>
        </div>
      </div>
    </section>
  );
}
