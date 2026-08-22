"use client";

import { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/content/testimonials";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const max = Math.max(0, testimonials.length - visible);
  const slice = testimonials.slice(index, index + visible);

  return (
    <div>
      <div className="hidden grid-cols-3 gap-6 lg:grid">
        {slice.map((item) => (
          <TestimonialCard key={item.name + item.date} item={item} />
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:hidden">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name + item.date} item={item} />
        ))}
      </div>
      <div className="mt-6 hidden items-center gap-3 lg:flex">
        <button
          type="button"
          aria-label="Previous reviews"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-navy text-white disabled:opacity-40"
          disabled={index === 0}
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
        >
          <CaretLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next reviews"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-navy text-white disabled:opacity-40"
          disabled={index >= max}
          onClick={() => setIndex((value) => Math.min(max, value + 1))}
        >
          <CaretRight size={18} />
        </button>
      </div>
    </div>
  );
}
