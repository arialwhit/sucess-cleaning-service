import type { Metadata } from "next";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/ui/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { breadcrumbJsonLd, localBusinessJsonLd, pageMetadata } from "@/lib/seo";
import { mailHref, telHref } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Request a cleaning quote in Greater London. Call, email, or send the form — we reply within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <JsonLd data={localBusinessJsonLd()} />
      <PageHero
        title="Request a quote"
        lede="Send the borough, the service and when you need it. We reply within one working day."
        image="/images/facility-clean.jpg"
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-[1.75rem] bg-navy p-8 text-white">
              <h2 className="font-heading text-2xl font-semibold">Talk to the desk</h2>
              <ul className="mt-6 space-y-4 text-sm text-white/80">
                <li className="flex gap-3">
                  <Phone size={18} className="mt-0.5" />
                  <a href={telHref(site.phone)} className="hover:text-white">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <EnvelopeSimple size={18} className="mt-0.5" />
                  <a href={mailHref(site.email)} className="hover:text-white">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5" />
                  Greater London · {site.hours}
                </li>
              </ul>
              <p className="mt-6 text-sm text-white/70">
                Replace the placeholder phone and email before launch. Live chat can sit here later.
              </p>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.75rem] ring-1 ring-line">
              <iframe
                title="Greater London map"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=London%20UK&t=&z=10&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
