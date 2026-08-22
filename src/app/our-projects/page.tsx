import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Projects",
  description: "Case studies from London offices, restaurants, hotels, events and residential handovers by London Prime Cleaning.",
  path: "/our-projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Our Projects", path: "/our-projects" }])} />
      <PageHero
        title="Our projects"
        lede="A sample of London sites — challenge, method and result. Before-and-after photography is representative until client-approved shots replace it."
        image="/images/project-after.jpg"
      />
      <Section>
        <ProjectGrid />
      </Section>
      <CTASection title="Have a site that needs this finish?" />
    </>
  );
}
