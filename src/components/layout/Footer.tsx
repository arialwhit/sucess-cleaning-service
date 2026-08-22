import Link from "next/link";
import { EnvelopeSimple, FacebookLogo, GoogleLogo, InstagramLogo, LinkedinLogo, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { legalLinks, nav, site } from "@/content/site";
import { services } from "@/content/services";
import { mailHref, telHref } from "@/lib/utils";

const social = [
  { href: site.social.facebook, label: "Facebook", icon: FacebookLogo },
  { href: site.social.instagram, label: "Instagram", icon: InstagramLogo },
  { href: site.social.linkedin, label: "LinkedIn", icon: LinkedinLogo },
  { href: site.social.google, label: "Google Business", icon: GoogleLogo },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Logo onDark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">{site.tagline}</p>
          <div className="mt-6 flex gap-2">
            {social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white transition-colors duration-200 hover:bg-teal"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold">Quick links</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/70 transition-colors duration-200 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold">Services</p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              Greater London, United Kingdom
            </li>
            <li>{site.hours}</li>
            <li>
              <a href={mailHref(site.email)} className="flex items-center gap-3 hover:text-white">
                <EnvelopeSimple size={18} />
                {site.email}
              </a>
            </li>
            <li>
              <a href={telHref(site.phone)} className="flex items-center gap-3 hover:text-white">
                <Phone size={18} />
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
          <Button href="/contact" variant="primary" className="mt-6">
            Request a Quote
          </Button>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
