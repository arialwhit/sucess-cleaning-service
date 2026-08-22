import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How London Prime Cleaning handles personal data from quote requests and this website.",
  path: "/privacy-policy",
  index: false,
});

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lede="How we handle names, emails and phone numbers sent through this site.">
      <p>Last updated: 22 August 2026. Controller: {site.legalName}, Greater London, {site.email}.</p>
      <h2 className="font-heading text-2xl font-semibold text-ink">What we collect</h2>
      <p>
        Quote forms collect name, email, phone, service interest, property type, message and optional photos. Server logs may store IP address and user agent for security. Cookie consent is stored in your browser.
      </p>
      <h2 className="font-heading text-2xl font-semibold text-ink">Why we collect it</h2>
      <p>
        We use this information to respond to quote requests, schedule work, and meet legal obligations (contracts, insurance, complaints). We do not sell personal data.
      </p>
      <h2 className="font-heading text-2xl font-semibold text-ink">Retention and rights</h2>
      <p>
        Enquiry data is kept for as long as needed to quote and, if you become a client, for the life of the contract plus a reasonable period for claims. You may request access, correction or deletion at {site.email}, subject to legal hold.
      </p>
    </LegalLayout>
  );
}
