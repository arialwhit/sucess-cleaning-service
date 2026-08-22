import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description: "Cookies used on the London Prime Cleaning website.",
  path: "/cookie-policy",
  index: false,
});

export default function CookiePage() {
  return (
    <LegalLayout title="Cookie Policy" lede="What we store in your browser, and what stays off until you accept.">
      <h2 className="font-heading text-2xl font-semibold text-ink">Essential</h2>
      <p>
        We store a consent flag (`lpc-cookie-consent`) so the banner does not reappear every visit. This is required to remember your choice.
      </p>
      <h2 className="font-heading text-2xl font-semibold text-ink">Analytics</h2>
      <p>
        No analytics cookies load until you press Accept. If you choose Essential only, we do not set marketing or analytics cookies.
      </p>
    </LegalLayout>
  );
}
