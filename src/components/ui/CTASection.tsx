import { Button } from "@/components/ui/Button";

export function CTASection({
  title,
  body,
  action = "Get a Free Quote",
}: {
  title: string;
  body?: string;
  action?: string;
}) {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] bg-navy px-8 py-12 text-white md:px-14 md:py-16">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {body ? <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-white/75">{body}</p> : null}
          <Button href="/contact" variant="primary" className="mt-8">
            {action}
          </Button>
        </div>
      </div>
    </section>
  );
}
