import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Refund & Cancellation Policy",
  description: "Cancellation windows and re-clean terms for London Prime Cleaning.",
  path: "/refund-cancellation-policy",
  index: false,
});

export default function RefundPage() {
  return (
    <LegalLayout title="Refund & Cancellation Policy" lede="How cancellations, no-access visits and re-cleans are handled.">
      <h2 className="font-heading text-2xl font-semibold text-ink">Cancellations</h2>
      <p>
        Cancel or move a booked visit with at least 24 hours’ notice and no fee applies. Inside 24 hours we may charge a call-out to cover a crew that cannot be reassigned. No-access on the day is treated as a late cancellation.
      </p>
      <h2 className="font-heading text-2xl font-semibold text-ink">Re-cleans</h2>
      <p>
        If an item on the written specification was missed, we return at no extra charge when you tell us within 48 hours and the property has not been re-occupied or used in a way that undoes the work. Damage, wear, and items never in the specification are outside this promise.
      </p>
      <p>Commercial contracts may replace this page with the terms in the signed service agreement. Contact {site.email}.</p>
    </LegalLayout>
  );
}
