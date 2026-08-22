"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown, List, Phone, X } from "@phosphor-icons/react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { nav } from "@/content/site";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { cn, telHref } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow] duration-200",
        scrolled && !open ? "bg-white/92 shadow-[0_8px_30px_-18px_rgba(11,61,98,0.35)] backdrop-blur-md" : "bg-white",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-6 lg:h-[72px]">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            "hasChildren" in item && item.hasChildren ? (
              <div key={item.href} className="relative">
                <button
                  type="button"
                  className={cn(
                    "flex cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-body transition-colors duration-200 hover:text-navy",
                    pathname.startsWith("/services") && "text-navy",
                  )}
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((value) => !value)}
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  {item.label}
                  <CaretDown size={14} />
                </button>
                {servicesOpen ? (
                  <div
                    className="absolute left-0 top-full z-50 w-[340px] rounded-2xl bg-white p-2 shadow-soft ring-1 ring-line"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block rounded-xl px-3 py-2 text-sm text-body transition-colors duration-200 hover:bg-navy-soft hover:text-navy"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-body transition-colors duration-200 hover:text-navy",
                  pathname === item.href && "text-navy",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={telHref(site.phone)}
            className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors duration-200 hover:text-teal"
          >
            <Phone size={16} weight="fill" />
            {site.phoneDisplay}
          </a>
          <Button href="/contact" icon>
            Get a Quote
          </Button>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-navy-soft text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>
    </header>
      {open ? (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-[#082C47] px-6 pb-28 pt-6 text-white lg:hidden">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between">
            <Logo onDark />
            <button
              type="button"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={22} />
            </button>
          </div>
          <nav className="mx-auto mt-12 flex max-w-md flex-col gap-2" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-3xl font-semibold tracking-tight text-white"
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Services</p>
            <div className="mt-3 grid grid-cols-1 gap-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <a href={telHref(site.phone)} className="mt-8 text-lg font-semibold">
              {site.phoneDisplay}
            </a>
            <Button href="/contact" variant="primary" className="mt-4" fullWidth>
              Get a Quote
            </Button>
          </nav>
        </div>
      ) : null}
    </>
  );
}
