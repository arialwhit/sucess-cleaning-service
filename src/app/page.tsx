import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarBlank,
  IdentificationCard,
  Leaf,
  MagnifyingGlass,
  ShieldCheck,
  Sparkle,
  Student,
} from "@phosphor-icons/react/dist/ssr";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { JsonLd } from "@/components/seo/JsonLd";
import { posts } from "@/content/blog";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { breadcrumbJsonLd, localBusinessJsonLd, pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} | Commercial & Residential Cleaning in London`,
  description: site.description,
  path: "/",
});

const trust = [
  { label: "Insured", icon: ShieldCheck },
  { label: "DBS checked staff", icon: IdentificationCard },
  { label: "Eco-preferable products", icon: Leaf },
  { label: "Fully trained teams", icon: Student },
];

const reasons = [
  { title: "Reliability", body: "Named regulars, not a different face every Monday. Attendance is logged." },
  { title: "Experience", body: "Twelve years of London sites — from two-desk studios to stadia." },
  { title: "Attention to detail", body: "Specifications name rooms and tasks. Supervisors audit, they do not just count hours." },
  { title: "Flexible scheduling", body: "After-hours, weekend and event call-times. Hybrid offices are priced on occupancy." },
];

const steps = [
  { title: "Request a quote", body: "Tell us the site, the service and when you need it. Photos help.", icon: MagnifyingGlass },
  { title: "Schedule", body: "We confirm a window, access and the named lead cleaner.", icon: CalendarBlank },
  { title: "We clean", body: "The crew works the spec and leaves a short handover you can check.", icon: Sparkle },
];

const stats = [
  { value: "12 yrs", label: "Operating in London" },
  { value: "640+", label: "Properties on the books" },
  { value: "4.9", label: "Average review score" },
  { value: "48", label: "Trained staff" },
];

export default function HomePage() {
  const featured = services.slice(0, 6);
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          review: testimonials.map((item) => ({
            "@type": "Review",
            author: { "@type": "Person", name: item.name },
            reviewRating: { "@type": "Rating", ratingValue: item.rating, bestRating: 5 },
            reviewBody: item.quote,
            datePublished: item.date,
          })),
        }}
      />

      <section className="relative min-h-[100dvh] overflow-hidden bg-navy">
        <Image
          src="/images/hero-office.jpg"
          alt="London Prime Cleaning team preparing a modern City office"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/25" />
        <div className="relative mx-auto flex min-h-[100dvh] max-w-[1280px] flex-col justify-end px-6 pb-16 pt-28 md:pb-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">Greater London</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
            London&apos;s trusted cleaning specialists
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Insured teams for offices, homes, hospitality and venues across Greater London.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Get a Free Quote</Button>
            <Button href="/services" variant="ghost">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      <div className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {trust.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 bg-white px-6 py-5">
                <Icon size={22} className="text-teal" weight="regular" />
                <span className="text-sm font-semibold text-navy">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Section>
        <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Cleaning for the rooms London actually uses
        </h2>
        <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">
          Twelve services, one account team. From a two-bed checkout in Hackney to a bowl turnaround after full time.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-6">
          <div className="md:col-span-3">
            <ServiceCard service={featured[0]} featured />
          </div>
          <div className="md:col-span-3">
            <ServiceCard service={featured[1]} featured />
          </div>
          {featured.slice(2).map((service) => (
            <div key={service.slug} className="md:col-span-3 lg:col-span-3">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        <Link href="/services" className="mt-8 inline-flex text-sm font-semibold text-teal hover:text-teal-dark">
          View all 12 services
        </Link>
      </Section>

      <Section tone="surface">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink md:text-4xl">Why facilities teams keep us</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <li key={reason.title} className="border-t border-navy/15 pt-6">
              <span className="font-heading text-sm font-semibold text-teal">0{index + 1}</span>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-ink">{reason.title}</h3>
              <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted">{reason.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="navy">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink md:text-4xl">How it works</h2>
        <div className="mt-10 grid gap-0 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="border-t border-line py-8 md:border-l md:border-t-0 md:px-8 md:py-2 first:md:border-l-0 first:md:pl-0">
                <Icon size={28} className="text-teal" />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Step {index + 1}</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink md:text-4xl">Recent sites</h2>
          <Link href="/our-projects" className="text-sm font-semibold text-teal">
            Our Projects
          </Link>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="flex flex-col">
              <BeforeAfter before={project.before} after={project.after} alt={project.title} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-teal">{project.location}</p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink md:text-4xl">What clients write back</h2>
        <p className="mt-3 text-sm text-muted">
          {site.ratingValue} from {site.reviewCount}+ reviews — placeholder aggregate until Google Business is connected.
        </p>
        <div className="mt-10">
          <TestimonialCarousel />
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink md:text-4xl">From the desk</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <Link href={`/blog/${latestPosts[0].slug}`} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem]">
                <Image src={latestPosts[0].image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-teal">{latestPosts[0].category}</p>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-ink group-hover:text-navy">{latestPosts[0].title}</h3>
              <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-muted">{latestPosts[0].excerpt}</p>
            </Link>
          </article>
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            {latestPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group border-t border-line pt-6 first:border-t-0 first:pt-0">
                <p className="text-xs text-muted">{formatDate(post.date)}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-ink group-hover:text-navy">{post.title}</h3>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Get a free quote for your site"
        body="Send the borough, the service and a preferred start date. We reply within one working day."
      />
    </>
  );
}
