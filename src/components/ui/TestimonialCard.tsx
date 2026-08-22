import { Star } from "@phosphor-icons/react/dist/ssr";
import type { Testimonial } from "@/content/testimonials";

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          weight={index < rating ? "fill" : "regular"}
          className={index < rating ? "text-[#D4A017]" : "text-line"}
        />
      ))}
    </span>
  );
}

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-[1.75rem] bg-white p-7 ring-1 ring-black/5">
      <Stars rating={item.rating} />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-body">“{item.quote}”</blockquote>
      <figcaption className="mt-6">
        <p className="font-heading text-sm font-semibold text-ink">{item.name}</p>
        <p className="mt-1 text-sm text-muted">
          {item.company ? `${item.company} · ` : ""}
          {item.location}
        </p>
      </figcaption>
    </figure>
  );
}
