import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Website and service terms for London Prime Cleaning.",
  path: "/terms-conditions",
  index: false,
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lede="The rules for using this website and booking cleaning work.">
      <p>These terms govern use of {site.url} and any quotation issued by {site.legalName}.</p>
      <h2 className="font-heading text-2xl font-semibold text-ink">Quotes and contracts</h2>
      <p>
        Website prices, if shown, are illustrative. A binding price is the written quote. Work starts when you accept that quote and we confirm a slot. Access, keys and a safe working environment are your responsibility unless we have agreed otherwise in writing.
      </p>
      <h2 className="font-heading text-2xl font-semibold text-ink">Website</h2>
      <p>
        Content is provided for information. We may change services, hours and copy without notice. You may not scrape, copy or misrepresent the site as your own.
      </p>
    </LegalLayout>
  );
}
