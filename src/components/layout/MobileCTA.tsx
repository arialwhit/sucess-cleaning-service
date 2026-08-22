import { Phone } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/content/site";
import { telHref } from "@/lib/utils";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 p-3 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={telHref(site.phone)}
          className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-navy text-sm font-semibold text-white"
        >
          <Phone size={16} weight="fill" />
          Call Now
        </a>
        <a
          href="/contact"
          className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-teal text-sm font-semibold text-white"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}

export function SkipLink() {
  return (
    <a href="#main" className="skip-link">
      Skip to content
    </a>
  );
}
