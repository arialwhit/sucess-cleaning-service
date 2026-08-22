function firstValidUrl(...values: Array<string | undefined>) {
  for (const value of values) {
    const trimmed = value?.trim();
    if (!trimmed) continue;
    try {
      const url = new URL(trimmed.includes("://") ? trimmed : `https://${trimmed}`);
      return url.origin;
    } catch {
      continue;
    }
  }
  return "http://localhost:3000";
}

export function getSiteUrl() {
  return firstValidUrl(
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  );
}

export const site = {
  name: "London Prime Cleaning",
  legalName: "London Prime Cleaning Ltd",
  tagline: "Commercial and residential cleaning across Greater London.",
  description:
    "Insured, DBS-checked cleaning teams for offices, homes, hospitality and public venues across Greater London. Request a free quote in minutes.",
  get url() {
    return getSiteUrl();
  },
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+442000000000",
  phoneDisplay: "020 0000 0000",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@londonprimecleaning.co.uk",
  address: {
    street: "To be confirmed",
    locality: "London",
    postalCode: "",
    country: "GB",
  },
  hours: "Monday to Saturday, 9:00–19:00",
  hoursShort: "Mon–Sat 9:00–19:00",
  ratingValue: "4.9",
  reviewCount: 127,
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    google: "https://www.google.com/maps",
  },
  boroughs: [
    "Westminster",
    "Camden",
    "Islington",
    "Hackney",
    "Tower Hamlets",
    "City of London",
    "Southwark",
    "Lambeth",
    "Wandsworth",
    "Kensington and Chelsea",
    "Hammersmith and Fulham",
    "Greenwich",
    "Lewisham",
    "Newham",
    "Barnet",
    "Ealing",
    "Richmond upon Thames",
    "Croydon",
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services", hasChildren: true },
  { href: "/our-projects", label: "Our Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/accessibility-statement", label: "Accessibility Statement" },
  { href: "/complaints-procedure", label: "Complaints Procedure" },
  { href: "/refund-cancellation-policy", label: "Refund & Cancellation" },
] as const;
