import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { icons } from "../components/sprites";

export const metadata: Metadata = {
  title: "Home Renovation",
  description:
    "Kitchen, bathroom, basement, and whole-home renovations from Level Craft Construction. Free estimates and clear, written pricing.",
};

export default function HomeRenovationPage() {
  return (
    <ServicePage
      eyebrow="Home Renovation"
      title="Level up your home."
      lead="Kitchens, baths, basements, and whole-home remodels — planned carefully and built to last, so you can love the home you already have."
      icon={icons.hammer}
      offeringsTitle="Renovations We Build"
      offerings={[
        { title: "Kitchen Remodels", text: "Layouts, cabinetry, counters, and lighting for a kitchen that works the way you cook." },
        { title: "Bathroom Remodels", text: "From refreshed fixtures to full gut-and-rebuild bathrooms with tile and custom showers." },
        { title: "Basement Finishing", text: "Turn unused space into a family room, guest suite, office, or game room." },
        { title: "Whole-Home Renovations", text: "Coordinated updates across your home, managed as one project with one team." },
        { title: "Flooring & Finish Carpentry", text: "Hardwood, LVP, and tile, plus trim, doors, and built-ins finished with care." },
        { title: "Additions", text: "More room without the move — additions that blend seamlessly with your existing home." },
      ]}
      highlightsTitle="Renovation Without the Headaches"
      highlights={[
        { title: "Free In-Home Estimate", text: "We walk your space, talk through ideas, and give you an honest scope." },
        { title: "Respect for Your Home", text: "Clean, protected work areas — we treat your home like our own." },
        { title: "Clear Communication", text: "A written plan, a realistic schedule, and updates along the way." },
      ]}
      ctaTitle="Ready to renovate?"
    />
  );
}
