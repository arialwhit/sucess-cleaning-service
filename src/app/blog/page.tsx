import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { posts } from "@/content/blog";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description: "Practical notes on London office cleaning, end of tenancy checkouts, and the products we use on site.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <PageHero title="Blog" lede="Notes from the field — cleaning cadence, checkout checklists, and what ‘eco’ can honestly mean." image="/images/office-clean.jpg" />
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                <Image src={post.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-teal">{post.category}</p>
              <h2 className="mt-2 font-heading text-xl font-semibold text-ink group-hover:text-navy">{post.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <p className="mt-3 text-xs text-muted">
                {formatDate(post.date)} · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
