import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Handshake, ShieldCheck, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "London Prime Cleaning is a Greater London commercial and residential cleaning company. Insured teams, named supervisors, and specifications you can audit.",
  path: "/about-us",
});

const values = [
  { title: "Reliability", body: "The same lead cleaner, logged attendance, and a phone number that is answered in hours, not days.", icon: ShieldCheck },
  { title: "Sustainability", body: "Concentrates, measured dosing and fragrance-free options. Clinical and food rooms still get products with a real biocidal claim.", icon: Leaf },
  { title: "Professionalism", body: "DBS-checked staff, site induction, and uniforms. We do not improvise on listed buildings or clinical floors.", icon: Handshake },
  { title: "Customer care", body: "Quotes in writing. Changes in writing. Complaints go to a named manager, not a generic inbox.", icon: UsersThree },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About Us", path: "/about-us" }])} />
      <PageHero
        title="About London Prime Cleaning"
        lede="A London contractor built around named crews, written specifications and sites that have to look finished by morning."
        image="/images/team.jpg"
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink">Our story</h2>
            <div className="mt-5 space-y-4 max-w-[65ch] text-base leading-relaxed text-muted">
              <p>
                London Prime Cleaning started as a small after-hours office crew in the City and grew with the buildings that kept us: law firms that needed kitchens handled, restaurants that closed after midnight, and agents who wanted a checkout they could photograph.
              </p>
              <p>
                We still run that way. Supervisors know the sites. Specifications name rooms. We do not sell a franchise kit or a national call centre. The work is local, the staff are DBS-checked, and the insurance is current.
              </p>
              <p>
                The name is a placeholder until the trading name is confirmed. The operating model is not: commercial and residential cleaning across Greater London, quoted in writing, delivered by a named team.
              </p>
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-[1.75rem] lg:col-span-5">
            <Image src="/images/office-clean.jpg" alt="A cleaned London office at dusk" fill className="object-cover" sizes="40vw" />
          </div>
        </div>
      </Section>
      <Section tone="surface">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink">What we hold to</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="border-t border-navy/15 pt-6">
                <Icon size={28} className="text-teal" />
                <h3 className="mt-4 font-heading text-2xl font-semibold text-ink">{value.title}</h3>
                <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted">{value.body}</p>
              </div>
            );
          })}
        </div>
      </Section>
      <Section>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink">Certifications and cover</h2>
        <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">
          Public liability insurance, employer’s liability, COSHH-controlled products, and enhanced DBS for healthcare and residential placements. Health and safety method statements are written per site, not copied from a template folder. Eco-preferable ranges are used on general work; clinical and food rooms use products with a stated claim.
        </p>
        <ul className="mt-8 grid gap-3 text-sm font-medium text-navy sm:grid-cols-2 lg:grid-cols-3">
          <li className="rounded-2xl bg-navy-soft px-4 py-3">Public liability insured</li>
          <li className="rounded-2xl bg-navy-soft px-4 py-3">Employer’s liability</li>
          <li className="rounded-2xl bg-navy-soft px-4 py-3">Enhanced DBS where required</li>
          <li className="rounded-2xl bg-navy-soft px-4 py-3">COSHH documentation</li>
          <li className="rounded-2xl bg-navy-soft px-4 py-3">Site-specific RAMS</li>
          <li className="rounded-2xl bg-navy-soft px-4 py-3">Fragrance-free options</li>
        </ul>
      </Section>
      <Section tone="surface">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink">Where we work</h2>
        <p className="mt-4 max-w-[65ch] text-muted">Greater London, with regular crews in:</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {site.boroughs.map((borough) => (
            <li key={borough} className="rounded-full bg-white px-4 py-2 text-sm text-navy ring-1 ring-line">
              {borough}
            </li>
          ))}
        </ul>
      </Section>
      <CTASection title="Work with a named London crew" body="Tell us the site. We will tell you who would run it." />
    </>
  );
}
