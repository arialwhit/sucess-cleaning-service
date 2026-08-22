import Image from "next/image";

export function PageHero({
  title,
  lede,
  image,
}: {
  title: string;
  lede: string;
  image?: string;
}) {
  return (
    <section className="relative min-h-[52dvh] overflow-hidden bg-navy">
      {image ? (
        <Image src={image} alt="" fill priority className="object-cover opacity-45" sizes="100vw" />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="relative mx-auto flex min-h-[52dvh] max-w-[1280px] flex-col justify-end px-6 pb-14 pt-28">
        <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{lede}</p>
      </div>
    </section>
  );
}
