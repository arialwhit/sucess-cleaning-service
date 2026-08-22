import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/ui/CTASection";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPost, posts } from "@/content/blog";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const share = encodeURIComponent(`${site.url}/blog/${post.slug}`);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          author: { "@type": "Organization", name: post.author },
          image: `${site.url}${post.image}`,
          description: post.excerpt,
        }}
      />
      <article>
        <header className="relative min-h-[48dvh] overflow-hidden bg-navy">
          <Image src={post.image} alt="" fill priority className="object-cover opacity-45" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
          <div className="relative mx-auto flex min-h-[48dvh] max-w-[800px] flex-col justify-end px-6 pb-12 pt-28">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{post.category}</p>
            <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-sm text-white/75">
              {post.author} · {formatDate(post.date)} · {post.readTime}
            </p>
          </div>
        </header>
        <Section>
          <div className="mx-auto max-w-[720px]">
            {post.content.map((block) => (
              <section key={block.heading ?? block.paragraphs[0]} className="mb-8">
                {block.heading ? (
                  <h2 className="mb-3 font-heading text-2xl font-semibold text-ink">{block.heading}</h2>
                ) : null}
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <span className="text-muted">Share</span>
              <a className="font-semibold text-navy" href={`https://www.linkedin.com/sharing/share-offsite/?url=${share}`}>
                LinkedIn
              </a>
              <a className="font-semibold text-navy" href={`https://twitter.com/intent/tweet?url=${share}`}>
                X
              </a>
              <a className="font-semibold text-navy" href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${share}`}>
                Email
              </a>
            </div>
          </div>
        </Section>
      </article>
      <Section tone="surface">
        <h2 className="font-heading text-3xl font-semibold text-ink">Related posts</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5">
              <h3 className="font-heading text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection title="Need the work, not just the article?" />
    </>
  );
}
