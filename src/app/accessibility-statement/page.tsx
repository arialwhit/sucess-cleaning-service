import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement",
  description: "Accessibility aims for the London Prime Cleaning website, targeting WCAG 2.1 AA.",
  path: "/accessibility-statement",
  index: false,
});

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      lede="This site is built to meet WCAG 2.1 AA as far as we reasonably can. Tell us if something blocks you."
    >
      <p>
        We aim for sufficient colour contrast, keyboard access to navigation and forms, visible focus, labelled inputs, and a skip-to-content link. Decorative images use empty alt text; meaningful images describe the scene.
      </p>
      <p>
        Known limits: the before/after slider is a range input and may be awkward on some older assistive tech. If a page fails you, email {site.email} with the URL and we will provide the content another way.
      </p>
    </LegalLayout>
  );
}
