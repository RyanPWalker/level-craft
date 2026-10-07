import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { icons } from "../components/sprites";
import { pageMetadata } from "../seo";

const page = {
  path: "/commercial/",
  title: "Commercial Contractor in Utah County",
  description:
    "Tenant improvements, office build-outs, and commercial remodels in Orem and Utah County from a licensed, insured Utah B100 general contractor.",
};

export const metadata: Metadata = pageMetadata(page);

export default function CommercialPage() {
  return (
    <ServicePage
      page={page}
      eyebrow="Commercial Construction"
      title="Commercial builds, done level."
      lead="Tenant improvements, office build-outs, and remodels for businesses across Utah County — managed carefully so you can open on time."
      icon={icons.building}
      offeringsTitle="Commercial Services"
      offerings={[
        { title: "Tenant Improvements", text: "Build-outs that turn shell space into a space ready for your business." },
        { title: "Office Build-Outs", text: "Functional, finished offices, from layout and framing to final paint." },
        { title: "Commercial Remodels", text: "Updates and remodels with minimal disruption to your operations." },
        { title: "Wood & Metal Framing", text: "Wood and metal stud framing for walls, soffits, and partitions." },
        { title: "Drywall, Paint & Finishes", text: "Drywall, painting, tile, doors, and trim to finish the space." },
        { title: "General Contracting", text: "Full project management and subcontractor coordination, including qualified plumbing, electrical, and HVAC trades." },
      ]}
      highlightsTitle="A Partner for Your Business"
      highlights={[
        { title: "Licensed & Insured", text: "A licensed Utah B100 general contractor with general liability coverage." },
        { title: "One Point of Contact", text: "We schedule the trades and keep the job moving, so you can focus on your business." },
        { title: "Minimal Disruption", text: "Work planned around your business hours and operations when needed." },
      ]}
      ctaTitle="Planning a commercial project?"
    />
  );
}
