import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Service } from "@/content/services";

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group flex cursor-pointer flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-black/5 transition-[box-shadow] duration-200 hover:shadow-card ${
        featured ? "md:min-h-[320px]" : ""
      }`}
    >
      <div className={`relative ${featured ? "h-48 md:h-56" : "h-40"}`}>
        <Image src={service.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-semibold tracking-tight text-ink">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal">
          Learn more
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
