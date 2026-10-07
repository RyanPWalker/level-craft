const services = [
  {
    title: "New Construction",
    text: "Custom homes and commercial builds, managed from foundation to final walkthrough.",
  },
  {
    title: "Remodeling",
    text: "Kitchens, baths, basements, and whole-home renovations built to last.",
  },
  {
    title: "Additions",
    text: "More room without the move — additions that blend seamlessly with your existing structure.",
  },
  {
    title: "Repairs & Restoration",
    text: "Structural repairs, framing, and restoration work handled with care and precision.",
  },
];

const values = [
  { title: "Built Level", text: "Precise, square, and plumb. We sweat the details so you don't have to." },
  { title: "Honest Pricing", text: "Clear, written estimates with no surprises along the way." },
  { title: "On Schedule", text: "Realistic timelines and regular updates from start to finish." },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo">
            <span className="logo-mark" aria-hidden="true" />
            Level Craft
          </a>
          <nav>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn btn-small">Get a Quote</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Level Craft Construction</p>
            <h1>Built level. Built to last.</h1>
            <p className="lead">
              Quality residential and commercial construction, remodeling, and renovation —
              done right the first time.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn">Request a Free Estimate</a>
              <a href="#services" className="btn btn-ghost">Our Services</a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>What We Build</h2>
            <div className="grid">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container">
            <h2>Why Level Craft</h2>
            <p className="section-intro">
              We&apos;re a team of builders who believe good work starts with a solid foundation —
              in our structures and in our relationships with clients.
            </p>
            <div className="grid grid-3">
              {values.map((v) => (
                <div key={v.title} className="value">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section cta">
          <div className="container">
            <h2>Ready to start your project?</h2>
            <p className="section-intro">Tell us what you have in mind and we&apos;ll get back to you with a free estimate.</p>
            <div className="contact-info">
              <a href="tel:+15555555555" className="btn">(555) 555-5555</a>
              <a href="mailto:info@levelcraft.com" className="btn btn-ghost">info@levelcraft.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {year} Level Craft Construction. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
