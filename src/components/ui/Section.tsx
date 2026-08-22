import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "surface" | "navy";
};

export function Section({ children, className, id, tone = "white" }: SectionProps) {
  const tones = {
    white: "bg-white",
    surface: "bg-surface",
    navy: "bg-navy text-white",
  };

  return (
    <section id={id} className={cn("py-16 md:py-24 lg:py-28", tones[tone], className)}>
      <div className="mx-auto w-full max-w-[1280px] px-6">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[11px] font-semibold uppercase tracking-[0.22em] text-teal", className)}>
      {children}
    </p>
  );
}
