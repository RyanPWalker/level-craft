// Business details shown on the site. These are public by design.
export const site = {
  name: "Level Craft Construction",
  legalName: "J & M Harris Enterprises, LLC",
  owner: "Joaquin Harris",
  city: "Orem",
  state: "Utah",
  serviceArea: "Utah County",
  license: {
    type: "Utah B100 General Contractor",
    // TODO: add the license number once provided. Shown in the footer when set.
    number: "",
  },
  phone: {
    display: "(575) 749-2589",
    href: "tel:+15757492589",
  },
  // TODO: placeholder — replace with the real business email.
  email: "info@levelcraft.com",
};

// Service landing pages, used for the nav, footer, and home page links.
export const servicePages = [
  { href: "/home-renovation", navLabel: "Renovation", title: "Home Renovation" },
  { href: "/hvac", navLabel: "HVAC", title: "Heating & Cooling" },
  { href: "/commercial", navLabel: "Commercial", title: "Commercial Construction" },
];
