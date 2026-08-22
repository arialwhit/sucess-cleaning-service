export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function mailHref(email: string) {
  return `mailto:${email}`;
}
