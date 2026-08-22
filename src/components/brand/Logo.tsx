import Link from "next/link";
import { site } from "@/content/site";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} home`}>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-navy">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <path
            d="M7 22V9.5h5.2c3.4 0 5.4 1.7 5.4 4.4 0 2.6-2 4.3-5.4 4.3H10.4V22H7zm3.4-6.4h1.6c1.6 0 2.5-.8 2.5-2.1s-.9-2.1-2.5-2.1h-1.6v4.2zM20.2 22V9.5h3.3V22h-3.3z"
            fill="#1AA179"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-[15px] font-semibold tracking-tight ${onDark ? "text-white" : "text-navy"}`}>
          London Prime
        </span>
        <span className={`mt-1 text-[11px] font-medium uppercase tracking-[0.18em] ${onDark ? "text-white/70" : "text-muted"}`}>
          Cleaning
        </span>
      </span>
    </Link>
  );
}
