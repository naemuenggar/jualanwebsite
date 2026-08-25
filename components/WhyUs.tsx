"use client";

import { whyUsFeatures, contactInfo } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { ArrowUpRight } from "lucide-react";

export function WhyUs() {
  return (
    <section
      className="relative overflow-hidden bg-pine py-20 text-canvas sm:py-28"
      aria-labelledby="whyus-heading"
    >
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-saffron/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pineLight/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <h2
                id="whyus-heading"
                className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-5xl"
              >
                Dibuat untuk hasil, bukan cuma tampilan.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-canvas/75 text-pretty">
                Website yang baik harus mudah ditemukan, cepat dibuka, dan nyaman
                digunakan pengunjung — tidak berhenti di indah dilihat.
              </p>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-[12px] bg-saffron px-6 py-3.5 text-[0.95rem] font-semibold text-pineDark shadow-lift transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EBB558]"
              >
                Mulai proyek Anda
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {whyUsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={index * 0.08}>
                  <div className="border-t border-canvas/15 pt-6">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-[12px] bg-canvas/10 text-saffron ring-1 ring-canvas/10">
                      <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-canvas/70">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
