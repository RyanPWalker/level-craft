import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { icons } from "../components/sprites";

export const metadata: Metadata = {
  title: "Home Renovation",
  description:
    "Home remodels, additions, repairs, and improvements in Orem and Utah County. Level Craft Construction is a licensed and insured Utah B100 general contractor.",
};

export default function HomeRenovationPage() {
  return (
    <ServicePage
      eyebrow="Home Renovation"
      title="Level up your home."
      lead="Remodels, additions, repairs, and improvements across Utah County — planned carefully and built to last, so you can love the home you already have."
      icon={icons.hammer}
      offeringsTitle="Renovations We Build"
      offerings={[
        { title: "Remodels", text: "Kitchens, bathrooms, basements, and whole rooms, managed as one project with one team." },
        { title: "Additions", text: "More room without the move — additions that blend with your existing home." },
        { title: "Repairs & Improvements", text: "Fixes and upgrades large and small, done right the first time." },
        { title: "Drywall & Paint", text: "Drywall hanging, finishing, and repairs, plus interior and exterior painting." },
        { title: "Tile", text: "Tile floors, showers, and walls." },
        { title: "Concrete", text: "Driveways, patios, walkways, and pads." },
      ]}
      highlightsTitle="Renovation Without the Headaches"
      highlights={[
        { title: "Licensed & Insured", text: "A licensed Utah B100 general contractor with general liability coverage." },
        { title: "One Point of Contact", text: "We coordinate every trade, including plumbing, electrical, and HVAC, so you don't have to." },
        { title: "Clear Communication", text: "A written plan, a realistic schedule, and updates along the way." },
      ]}
      ctaTitle="Ready to renovate?"
    />
  );
}
