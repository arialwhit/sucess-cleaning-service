"use client";

import { useState } from "react";
import Image from "next/image";

export function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [value, setValue] = useState(52);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-navy-soft">
      <Image src={after} alt={`${alt} after cleaning`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
        <Image src={before} alt={`${alt} before cleaning`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${value}%` }} />
      <label className="sr-only" htmlFor={`compare-${alt}`}>
        Compare before and after
      </label>
      <input
        id={`compare-${alt}`}
        type="range"
        min={4}
        max={96}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="absolute inset-0 cursor-ew-resize opacity-0"
      />
      <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
        Before
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-teal/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
        After
      </span>
    </div>
  );
}
