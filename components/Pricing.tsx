"use client";

import { Check } from "lucide-react";
import { pricingTiers, contactInfo } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function Pricing() {
  return (
    <section
      id="harga"
      className="bg-white py-16 sm:py-24"
      aria-labelledby="harga-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-mono font-semibold uppercase tracking-wider text-brand">
              Harga
            </span>
            <h2
              id="harga-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Investasi website yang terjangkau
            </h2>
            <p className="mt-4 text-ink/70">
              Pilih paket sesuai kebutuhan. Harga di bawah bisa disesuaikan
              lagi setelah kita diskusi detail.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <FadeIn key={tier.id} delay={index * 0.08}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-200 hover:shadow-md ${
                  tier.popular
                    ? "border-2 border-brand bg-white"
                    : "border-hair bg-white hover:border-brand"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-6 inline-flex rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                    Populer
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-ink">
                  {tier.name}
                </h3>
                <p className="mt-4 font-display text-4xl font-bold text-ink">
                  {tier.price}
                </p>
                <p className="mt-2 text-sm text-ink/70">{tier.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span className="text-sm text-ink/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    tier.popular
                      ? "bg-brand text-white hover:bg-brandDark focus-visible:ring-brand"
                      : "border border-hair bg-white text-ink hover:border-brand hover:text-brand focus-visible:ring-brand"
                  }`}
                >
                  Pilih Paket
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
