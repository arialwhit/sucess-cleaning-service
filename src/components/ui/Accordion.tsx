"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-line rounded-[1.75rem] bg-white ring-1 ring-black/5">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="font-heading text-base font-semibold text-ink">{item.q}</span>
              <CaretDown
                size={18}
                className={`shrink-0 text-teal transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div hidden={!isOpen} className="px-6 pb-5 text-sm leading-relaxed text-muted">
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
