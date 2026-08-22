"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  icon?: boolean;
  fullWidth?: boolean;
};

const variants = {
  primary:
    "bg-teal text-white hover:bg-teal-dark shadow-[0_10px_24px_-12px_rgba(26,161,121,0.7)]",
  secondary:
    "bg-transparent text-navy ring-1 ring-navy/20 hover:ring-navy/40 hover:bg-navy-soft",
  ghost: "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/16",
  white: "bg-white text-navy hover:bg-navy-soft",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
  icon = true,
  fullWidth,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-[background-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60",
    fullWidth && "w-full",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {icon ? (
        <span
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5",
            variant === "primary" ? "bg-white/15" : variant === "white" ? "bg-navy/8" : "bg-navy/8",
          )}
        >
          <ArrowUpRight size={16} weight="bold" />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
