import Link from "next/link";
import ContactCTA from "./components/ContactCTA";
import GrassStrip from "./components/GrassStrip";
import PixelArt, { type Sprite } from "./components/PixelArt";
import { houseScene, icons } from "./components/sprites";
import { site } from "./site";

const services: { icon: Sprite; title: string; text: string; href?: string }[] = [
  {
    icon: icons.building,
    title: "Commercial Construction",
    text: "Tenant improvements, office build-outs, and commercial remodels, managed start to finish.",
    href: "/commercial",
  },
  {
    icon: icons.hammer,
    title: "Remodels & Additions",
    text: "Home remodels, additions, repairs, and improvements, built to last.",
    href: "/home-renovation",
  },
  {
    icon: icons.house,
    title: "Framing & Carpentry",
    text: "Wood and metal framing, plus doors, trim, and custom carpentry.",
  },
  {
    icon: icons.bricks,
    title: "Drywall, Paint & Tile",
    text: "Drywall hanging, finishing, and repairs; interior and exterior painting; tile floors, showers, and walls.",
  },
  {
    icon: icons.pickaxe,
    title: "Concrete",
    text: "Driveways, patios, walkways, and pads.",
  },
  {
    icon: icons.snowflake,
    title: "HVAC, Plumbing & Electrical",
    text: "Coordinated through qualified trades and managed as part of your project.",
    href: "/hvac",
  },
];

const steps = [
  { title: "Free Estimate", text: "We visit your site, listen to your goals, and scope the work." },
  { title: "Plan & Price", text: "A clear written proposal with timeline and pricing — no surprises." },
  { title: "Build", text: "Our crew gets to work, with regular updates along the way." },
  { title: "Final Walkthrough", text: "We walk the finished project with you to make sure it's right." },
];

const values = [
  { title: "Licensed & Insured", text: `${site.license.type}, fully insured with general liability coverage.` },
  { title: "Built Level", text: "Precise, square, and plumb. We sweat the details so you don't have to." },
  { title: "One Point of Contact", text: "Full general contracting. We coordinate every trade so you don't have to." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{site.city}, {site.state} · {site.serviceArea}</p>
            <h1>Built level. Crafted to last.</h1>
            <p className="lead">
              Residential and commercial construction across {site.serviceArea}. From remodels
              and additions to office build-outs, Level Craft builds it right — block by block.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn">Get a Free Estimate</a>
              <a href="#services" className="btn btn-ghost">Our Services</a>
            </div>
            <p className="hero-badge">
              <PixelArt sprite={icons.check} scale={2} />
              Licensed &amp; insured · {site.license.type}
            </p>
          </div>
          <PixelArt sprite={houseScene} className="hero-art" />
        </div>
        <GrassStrip id="grass-hero" />
      </section>

      <section id="services" className="section">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h2>What We Build</h2>
          <div className="grid">
            {services.map((s) => (
              <article key={s.title} className="card">
                <PixelArt sprite={s.icon} className="card-icon" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.href && (
                  <Link href={s.href} className="card-link">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section section-alt">
        <div className="container">
          <p className="eyebrow">How It Works</p>
          <h2>Your Project, Level by Level</h2>
          <ol className="steps">
            {steps.map((step, i) => (
              <li key={step.title} className="step">
                <span className="step-level">Level {i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <div className="xp-bar" aria-hidden="true">
                  {steps.map((_, j) => (
                    <span key={j} className={j <= i ? "filled" : undefined} />
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <p className="eyebrow">About</p>
          <h2>Why Level Craft</h2>
          <p className="section-intro">
            Level Craft is owned by {site.owner} and based in {site.city}, {site.state}. We
            handle the whole job as your general contractor, from framing and drywall to tile,
            concrete, and finish carpentry, and we coordinate the specialty trades.
          </p>
          <div className="grid grid-3">
            {values.map((v) => (
              <div key={v.title} className="value">
                <h3>
                  <PixelArt sprite={icons.check} scale={3} />
                  {v.title}
                </h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
