import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCTA, SkipLink } from "@/components/layout/MobileCTA";
import { getSiteUrl, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${site.name} | Commercial & Residential Cleaning in London`,
    description: site.description,
    path: "/",
  }),
  metadataBase: new URL(getSiteUrl()),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${sora.variable} ${jakarta.variable}`}>
      <body className="flex min-h-dvh flex-col pb-24 font-sans antialiased lg:pb-0">
        <SkipLink />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
