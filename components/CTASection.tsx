"use client";

import { ArrowRight } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function CTASection() {
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-brand px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/10" />
            <div className="relative">
              <h2
                id="cta-heading"
                className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Siap punya website profesional?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Ceritakan kebutuhan bisnis Anda. Konsultasi pertama gratis, tanpa
                biaya tersembunyi.
              </p>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-zap px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
              >
                Konsultasi Gratis Sekarang
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
