import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export function LegalLayout({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero title={title} lede={lede} />
      <Section>
        <div className="prose-legal mx-auto max-w-[720px] space-y-6 text-base leading-relaxed text-body">{children}</div>
        <p className="mx-auto mt-12 max-w-[720px] text-sm text-muted">
          This page is a working draft for the website build. Have it reviewed by a qualified solicitor before publishing.
        </p>
      </Section>
    </>
  );
}
