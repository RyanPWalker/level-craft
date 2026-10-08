// Business details shown on the site. These are public by design.
export const site = {
  name: "Level Craft Construction",
  // Canonical origin, used for absolute URLs in metadata, the sitemap, and structured data.
  url: "https://levelcraft.co",
  legalName: "J & M Harris Enterprises, LLC",
  owner: "Joaquin Harris",
  city: "Orem",
  state: "Utah",
  // Statewide. Out-of-state projects are considered case by case, so word that as an invitation
  // to ask, never a promise.
  serviceArea: "Utah",
  // Home county, named in page titles for local search. Copy should make clear the work isn't
  // limited to it.
  county: "Utah County",
  license: {
    type: "Utah B100 General Contractor",
    // TODO: add the license number once provided. Shown in the footer when set.
    number: "",
  },
  phone: {
    display: "(575) 749-2589",
    href: "tel:+15757492589",
  },
  instagram: {
    handle: "levelcraftconstruction",
    url: "https://www.instagram.com/levelcraftconstruction/",
  },
  // Our other site (same business, different design). Linked only from the 404 page.
  otherSiteUrl: "https://levelcraftconstruction.com",
  // Formspree form that receives contact-page submissions and forwards them to the owner's inbox.
  // There is deliberately no email address on the site, to keep it away from spam bots.
  formEndpoint: "https://formspree.io/f/xqpeqboo",
};

// Service landing pages, used for the nav, footer, and home page links.
export const servicePages = [
  { href: "/home-renovation", navLabel: "Renovation", title: "Home Renovation" },
  { href: "/hvac", navLabel: "HVAC", title: "Heating & Cooling" },
  { href: "/commercial", navLabel: "Commercial", title: "Commercial Construction" },
];
