import Link from "next/link";
import ContactCTA from "./components/ContactCTA";
import GrassStrip from "./components/GrassStrip";
import PixelArt, { type Sprite } from "./components/PixelArt";
import { houseScene, icons } from "./components/sprites";

const services: { icon: Sprite; title: string; text: string; href?: string }[] = [
  {
    icon: icons.house,
    title: "New & Commercial Construction",
    text: "Custom homes, offices, and retail spaces, managed from foundation to final walkthrough.",
    href: "/commercial",
  },
  {
    icon: icons.hammer,
    title: "Remodeling & Renovation",
    text: "Kitchens, baths, basements, and whole-home renovations built to last.",
    href: "/home-renovation",
  },
  {
    icon: icons.bricks,
    title: "Additions",
    text: "More room without the move — additions that blend seamlessly with your existing home.",
  },
  {
    icon: icons.snowflake,
    title: "Heating & Cooling",
    text: "HVAC installation, replacement, and service to keep your home comfortable year-round.",
    href: "/hvac",
  },
  {
    icon: icons.wrench,
    title: "Repairs & Restoration",
    text: "Structural repairs, framing, and restoration work handled with care and precision.",
  },
  {
    icon: icons.pickaxe,
    title: "Site Prep & Demolition",
    text: "Clearing, excavation, and safe demolition to get your project off to a solid start.",
  },
];

const steps = [
  { title: "Free Estimate", text: "We visit your site, listen to your goals, and scope the work." },
  { title: "Plan & Price", text: "A clear written proposal with timeline and pricing — no surprises." },
  { title: "Build", text: "Our crew gets to work, with regular updates along the way." },
  { title: "Final Walkthrough", text: "We walk the finished project with you to make sure it's right." },
];

const values = [
  { title: "Built Level", text: "Precise, square, and plumb. We sweat the details so you don't have to." },
  { title: "Honest Pricing", text: "Clear, written estimates with no surprises along the way." },
  { title: "On Schedule", text: "Realistic timelines and regular updates from start to finish." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Construction · Renovation · HVAC</p>
            <h1>Built level. Crafted to last.</h1>
            <p className="lead">
              From new builds and remodels to heating and cooling, Level Craft Construction
              builds it right — block by block.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn">Get a Free Estimate</a>
              <a href="#services" className="btn btn-ghost">Our Services</a>
            </div>
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
            We&apos;re a family of builders who believe good work starts with a solid foundation —
            in our structures and in our relationships with clients.
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
