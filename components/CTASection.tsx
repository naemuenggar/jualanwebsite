"use client";

import { ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function CTASection() {
  return (
    <section id="kontak" className="py-20 sm:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-panel bg-pine px-6 py-14 text-center text-canvas shadow-pine sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-saffron/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-pineLight/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2
                id="cta-heading"
                className="font-display text-4xl font-bold leading-[1.03] tracking-[-0.03em] sm:text-5xl"
              >
                Siap punya website yang bikin bisnis Anda dilirik?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-canvas/75 text-pretty">
                Ceritakan kebutuhan bisnis Anda. Konsultasi pertama gratis, tanpa
                biaya tersembunyi.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-[12px] bg-saffron px-8 py-4 text-[0.95rem] font-bold text-pineDark shadow-lift transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EBB558] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-pine"
                >
                  Konsultasi Gratis via WhatsApp
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#portofolio"
                  className="inline-flex items-center gap-2 rounded-[12px] border border-canvas/25 px-8 py-4 text-[0.95rem] font-semibold text-canvas transition-all duration-200 hover:-translate-y-0.5 hover:border-canvas/50 hover:bg-canvas/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas focus-visible:ring-offset-2 focus-visible:ring-offset-pine"
                >
                  Lihat Portofolio
                </a>
              </div>
              <p className="mt-6 text-sm text-canvas/60">
                Biasanya dibalas di hari yang sama.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
