import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Complaints Procedure",
  description: "How to raise a complaint with London Prime Cleaning.",
  path: "/complaints-procedure",
  index: false,
});

export default function ComplaintsPage() {
  return (
    <LegalLayout title="Complaints Procedure" lede="If a visit was late, incomplete or below the written spec, say so quickly.">
      <ol className="list-decimal space-y-3 pl-5">
        <li>Email {site.email} or call {site.phoneDisplay} with the site address, date and what was missed.</li>
        <li>We acknowledge within two working days and name the person handling it.</li>
        <li>We investigate against the specification, not against a verbal memory of the job.</li>
        <li>Where the miss is ours, we offer a return visit or a fee adjustment as set out in the refund policy.</li>
      </ol>
    </LegalLayout>
  );
}
