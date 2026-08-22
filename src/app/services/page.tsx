import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/content/services";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Services",
  description:
    "Cinema, hospital, office, retail, hotel, restaurant, residential and event cleaning across Greater London. Twelve services, one contractor.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        title="Our services"
        lede="Twelve cleaning programmes for London workplaces, homes and public venues — quoted in writing, delivered by a named team."
        image="/images/facility-clean.jpg"
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <CTASection
        title="Don’t see what you need?"
        body="Tell us the building type and the hours. Custom scopes are normal — stadia, clinics and listed interiors included."
        action="Get a custom quote"
      />
    </>
  );
}
