"use client";

import { Check } from "lucide-react";
import { pricingTiers, contactInfo } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="harga"
      className="scroll-mt-24 border-t border-stone bg-stoneMist/50 py-20 sm:py-28"
      aria-labelledby="harga-heading"
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <FadeIn>
          <div className="max-w-2xl">
            <h2
              id="harga-heading"
              className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl"
            >
              Investasi yang jelas sejak awal.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70 text-pretty">
              Pilih paket sesuai kebutuhan. Angka di bawah bisa disesuaikan lagi
              setelah kita diskusi detail — tanpa biaya tersembunyi.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => {
            const featured = Boolean(tier.popular);
            return (
              <FadeIn key={tier.id} delay={index * 0.08}>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-panel p-7 sm:p-8",
                    featured
                      ? "bg-pine text-canvas shadow-pine lg:-mt-4 lg:pb-11"
                      : "border border-stone bg-paper text-ink shadow-card"
                  )}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-saffron px-3 py-1 text-xs font-bold uppercase tracking-wide text-pineDark shadow-lift">
                      Paling laris
                    </span>
                  )}
                  <h3
                    className={cn(
                      "font-display text-xl font-semibold",
                      featured ? "text-canvas" : "text-ink"
                    )}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={cn(
                      "nums mt-4 font-display text-4xl font-bold tracking-tight",
                      featured ? "text-canvas" : "text-ink"
                    )}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={cn(
                      "mt-2.5 text-sm leading-relaxed",
                      featured ? "text-canvas/75" : "text-ink/65"
                    )}
                  >
                    {tier.description}
                  </p>

                  <ul className="mt-7 flex-1 space-y-3.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            featured ? "text-saffron" : "text-pine"
                          )}
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                        <span
                          className={cn(
                            "text-[0.9rem]",
                            featured ? "text-canvas/90" : "text-ink/80"
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-9 inline-flex items-center justify-center rounded-[12px] px-6 py-3.5 text-[0.95rem] font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                      featured
                        ? "bg-saffron text-pineDark shadow-lift hover:bg-[#EBB558] focus-visible:ring-saffron focus-visible:ring-offset-pine"
                        : "bg-pine text-canvas shadow-pine hover:bg-pineLight focus-visible:ring-pine focus-visible:ring-offset-canvas"
                    )}
                  >
                    Pilih {tier.name}
                  </a>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
