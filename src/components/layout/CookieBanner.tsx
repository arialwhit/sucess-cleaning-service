"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem("lpc-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-20 z-40 rounded-2xl bg-navy p-5 text-white shadow-soft md:bottom-6 md:max-w-lg lg:bottom-6">
      <p className="text-sm leading-relaxed text-white/85">
        We use essential cookies to run this site. Analytics cookies are off until you accept. Read the{" "}
        <Link href="/cookie-policy" className="underline underline-offset-2">
          cookie policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="cursor-pointer rounded-full bg-teal px-4 py-2 text-sm font-semibold"
          onClick={() => {
            window.localStorage.setItem("lpc-cookie-consent", "accepted");
            setVisible(false);
          }}
        >
          Accept
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-full bg-white/10 px-4 py-2 text-sm font-semibold"
          onClick={() => {
            window.localStorage.setItem("lpc-cookie-consent", "essential");
            setVisible(false);
          }}
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
