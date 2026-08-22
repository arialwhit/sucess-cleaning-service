import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/ui/CTASection";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRelatedServices, getService, services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: `${service.short} Serving Greater London. Request a free quote from London Prime Cleaning.`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug);
  const quote =
    testimonials.find((item) => item.service === service.name) ?? testimonials[0];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceJsonLd(service.name, service.hero, `/services/${service.slug}`)} />
      <section className="relative min-h-[56dvh] overflow-hidden bg-navy">
        <Image src={service.image} alt="" fill priority className="object-cover opacity-50" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/35" />
        <div className="relative mx-auto flex min-h-[56dvh] max-w-[1280px] flex-col justify-end px-6 pb-14 pt-28">
          <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">{service.hero}</p>
        </div>
      </section>
      <Section>
        <h2 className="font-heading text-3xl font-semibold text-ink">What&apos;s included</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {service.included.map((item) => (
            <li key={item} className="border-t border-line pt-4 text-sm leading-relaxed text-body">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="surface">
        <h2 className="font-heading text-3xl font-semibold text-ink">Why choose us for {service.name.toLowerCase()}</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {service.why.map((item, index) => (
            <div key={item.title} className="border-t border-navy/15 pt-6">
              <span className="font-heading text-sm font-semibold text-teal">0{index + 1}</span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="font-heading text-3xl font-semibold text-ink">Our process</h2>
        <ol className="mt-10 grid gap-0 md:grid-cols-3">
          {service.process.map((step, index) => (
            <li key={step.title} className="border-t py-8 md:border-l md:border-t-0 md:px-8 first:md:border-l-0 first:md:pl-0">
              <span className="font-heading text-4xl font-semibold text-teal">{index + 1}</span>
              <h3 className="mt-3 font-heading text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="surface">
        <h2 className="font-heading text-3xl font-semibold text-ink">Questions we hear first</h2>
        <div className="mt-8 max-w-3xl">
          <Accordion items={service.faqs} />
        </div>
      </Section>
      <Section>
        <h2 className="font-heading text-3xl font-semibold text-ink">A client on this work</h2>
        <div className="mt-8 max-w-xl">
          <TestimonialCard item={quote} />
        </div>
      </Section>
      <CTASection title={`Get a free quote for ${service.name}`} body="Send the site details and a preferred start date." />
      <Section>
        <h2 className="font-heading text-3xl font-semibold text-ink">Related services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </div>
      </Section>
    </>
  );
}
