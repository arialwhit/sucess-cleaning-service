"use client";

import { FormEvent, useState } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { services } from "@/content/services";
import { Button } from "@/components/ui/Button";

const propertyTypes = ["Office", "Home", "Retail", "Hospitality", "Healthcare", "Venue / Event", "Other"];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ presetService }: { presetService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_website") ?? "").length > 0) {
      setStatus("success");
      return;
    }

    const nextErrors: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const notes = String(data.get("message") ?? "").trim();

    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (phone.length < 8) nextErrors.phone = "Enter a phone number we can reach you on.";
    if (!service) nextErrors.service = "Select a service.";
    if (notes.length < 10) nextErrors.message = "Tell us a little about the property or schedule.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/quote", { method: "POST", body: data });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("The form could not be sent. Call us or email and we will pick it up.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.75rem] bg-teal-soft p-8 ring-1 ring-teal/20" role="status">
        <CheckCircle size={32} className="text-teal" weight="fill" />
        <h3 className="mt-4 font-heading text-2xl font-semibold text-ink">Quote request received</h3>
        <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-muted">
          Thank you. A member of the team will come back within one working day with availability and a price range.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5 md:p-8">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} autoComplete="name" />
        <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" error={errors.phone} autoComplete="tel" />
        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-sm font-medium text-ink">
            Service interested in
          </label>
          <select
            id="service"
            name="service"
            defaultValue={presetService ?? ""}
            className="h-12 rounded-xl border border-line bg-white px-3 text-base text-body"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p className="flex items-center gap-1 text-sm text-red-700" role="alert">
              <WarningCircle size={14} /> {errors.service}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="propertyType" className="text-sm font-medium text-ink">
            Property / business type
          </label>
          <select id="propertyType" name="propertyType" className="h-12 rounded-xl border border-line bg-white px-3 text-base text-body">
            {propertyTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="rounded-xl border border-line bg-white px-3 py-3 text-base text-body"
            placeholder="Location, size, and preferred start date"
          />
          {errors.message ? (
            <p className="flex items-center gap-1 text-sm text-red-700" role="alert">
              <WarningCircle size={14} /> {errors.message}
            </p>
          ) : (
            <p className="text-sm text-muted">Include borough, square footage if known, and access notes.</p>
          )}
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="photos" className="text-sm font-medium text-ink">
            Photos (optional)
          </label>
          <input id="photos" name="photos" type="file" accept="image/*" multiple className="text-sm text-muted" />
        </div>
      </div>
      {status === "error" ? (
        <p className="mt-4 flex items-center gap-2 text-sm text-red-700" role="alert">
          <WarningCircle size={16} /> {message}
        </p>
      ) : null}
      <Button type="submit" className="mt-6" disabled={status === "loading"} icon={false} fullWidth>
        {status === "loading" ? "Sending…" : "Request a Quote"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className="h-12 rounded-xl border border-line bg-white px-3 text-base text-body"
      />
      {error ? (
        <p className="flex items-center gap-1 text-sm text-red-700" role="alert">
          <WarningCircle size={14} /> {error}
        </p>
      ) : null}
    </div>
  );
}
