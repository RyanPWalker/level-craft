import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { icons } from "../components/sprites";

export const metadata: Metadata = {
  title: "Commercial Construction",
  description:
    "Commercial construction, tenant improvements, and build-outs from Level Craft Construction. Managed from groundwork to final inspection.",
};

export default function CommercialPage() {
  return (
    <ServicePage
      eyebrow="Commercial Construction"
      title="Commercial builds, done level."
      lead="Ground-up construction, build-outs, and renovations for businesses — managed carefully so you can open on time and on budget."
      icon={icons.building}
      offeringsTitle="Commercial Services"
      offerings={[
        { title: "Ground-Up Construction", text: "New commercial buildings managed from site prep to final inspection." },
        { title: "Tenant Improvements", text: "Build-outs that turn shell space into a space ready for your business." },
        { title: "Office & Retail Build-Outs", text: "Functional, finished spaces for offices, storefronts, and showrooms." },
        { title: "Commercial Renovations", text: "Updates and remodels with minimal disruption to your operations." },
        { title: "Site Prep & Demolition", text: "Clearing, excavation, and safe demolition to get your project started right." },
        { title: "Project Management", text: "One point of contact coordinating schedules, subs, and inspections." },
      ]}
      highlightsTitle="A Partner for Your Business"
      highlights={[
        { title: "Schedules You Can Plan Around", text: "Realistic timelines and proactive updates so you can plan your opening." },
        { title: "Transparent Budgets", text: "Detailed, written estimates and clear change-order communication." },
        { title: "Minimal Disruption", text: "Work planned around your business hours and operations when needed." },
      ]}
      ctaTitle="Planning a commercial project?"
    />
  );
}
