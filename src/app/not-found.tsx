import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70dvh] max-w-[1280px] flex-col justify-center px-6 py-24">
      <p className="text-sm font-semibold text-teal">404</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-ink md:text-6xl">That page is not around.</h1>
      <p className="mt-4 max-w-[55ch] text-muted">The link may be old, or the service page was renamed. Head home or request a quote.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Home</Button>
        <Button href="/contact" variant="secondary">
          Get a Quote
        </Button>
        <Link href="/services" className="inline-flex items-center text-sm font-semibold text-navy">
          All services
        </Link>
      </div>
    </section>
  );
}
