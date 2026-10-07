import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { icons } from "../components/sprites";

export const metadata: Metadata = {
  title: "Heating & Cooling (HVAC)",
  description:
    "HVAC installation, replacement, repair, and maintenance from Level Craft Construction. Keep your home comfortable year-round.",
};

export default function HvacPage() {
  return (
    <ServicePage
      eyebrow="Heating · Cooling"
      title="Comfort, crafted."
      lead="Heating and cooling installation, replacement, and service to keep your home comfortable in every season."
      icon={icons.snowflake}
      offeringsTitle="HVAC Services"
      offerings={[
        { title: "AC Installation & Replacement", text: "Properly sized, efficient cooling systems installed right the first time." },
        { title: "Furnaces & Heating", text: "Furnace installation, replacement, and repair to keep you warm all winter." },
        { title: "Heat Pumps", text: "Efficient all-in-one heating and cooling for lower energy bills." },
        { title: "Ductwork", text: "New ductwork, repairs, and sealing for better airflow and comfort." },
        { title: "Maintenance & Tune-Ups", text: "Seasonal checkups that catch problems early and extend system life." },
        { title: "Repairs", text: "Diagnosis and repair to get your system running again." },
      ]}
      highlightsTitle="HVAC Done Right"
      highlights={[
        { title: "Right-Sized Systems", text: "We size equipment to your home, not to a sales quota." },
        { title: "Upfront Pricing", text: "Clear, written quotes before any work begins." },
        { title: "Builder's Perspective", text: "As a construction company, we handle the framing, drywall, and finish work HVAC jobs sometimes need." },
      ]}
      ctaTitle="Need heating or cooling help?"
    />
  );
}
