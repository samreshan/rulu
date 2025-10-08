import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ReactNode } from "react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { ContactSection } from "@/components/contact-section";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://samreshan.com.np"),
  title: {
    default: "Samreshan Sahani — Designer of Clarity",
    template: "%s — Samreshan Sahani",
  },
  description:
    "Portfolio of Samreshan Sahani, a multidisciplinary designer turning fuzzy ideas into designed clarity across product, brand, and systems.",
  openGraph: {
    type: "website",
    title: "Samreshan Sahani — Designer of Clarity",
    description:
      "Portfolio of Samreshan Sahani, a multidisciplinary designer turning fuzzy ideas into designed clarity across product, brand, and systems.",
    url: "https://samreshan.com.np",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samreshan Sahani — Designer of Clarity",
    description:
      "Portfolio of Samreshan Sahani, a multidisciplinary designer turning fuzzy ideas into designed clarity across product, brand, and systems.",
  },
  alternates: {
    canonical: "https://samreshan.com.np",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Samreshan Sahani",
    url: "https://samreshan.com.np",
    jobTitle: "Designer",
    description:
      "Samreshan Sahani helps founders turn fuzzy ideas into products, systems, and experiences that work.",
  } as const;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head />
      <body
        className="bg-ivory text-night"
        style={{
          ["--font-georgia" as string]: 'Georgia, "Times New Roman", serif',
        }}
      >
        <Script defer data-domain="samreshan.com.np" src="https://plausible.io/js/script.js" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="mx-auto max-w-5xl px-6">
          <MainNav />
          <PageTransition>
            <main className="pb-24">{children}</main>
          </PageTransition>
          <ContactSection />
          <Footer />
        </div>
      </body>
    </html>
  );
}
