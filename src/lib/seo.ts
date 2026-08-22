import { site } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
};

export function pageMetadata({ title, description, path, index = true }: PageMeta) {
  const url = `${site.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: index ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [{ url: "/images/hero-office.jpg", width: 1200, height: 675, alt: `${site.name} team at work in a London office` }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
      images: ["/images/hero-office.jpg"],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: `${site.url}/images/hero-office.jpg`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressCountry: site.address.country,
    },
    areaServed: site.boroughs.map((borough) => ({
      "@type": "AdministrativeArea",
      name: `${borough}, London`,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.ratingValue,
      reviewCount: site.reviewCount,
      bestRating: "5",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
    },
    areaServed: "London, United Kingdom",
    url: `${site.url}${path}`,
  };
}
