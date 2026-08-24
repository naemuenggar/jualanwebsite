"use client";

import { whyUsFeatures } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function WhyUs() {
  return (
    <section
      className="bg-ink py-16 text-white sm:py-24"
      aria-labelledby="whyus-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-mono font-semibold uppercase tracking-wider text-zap">
              Kenapa Kami
            </span>
            <h2
              id="whyus-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Dibuat untuk hasil, bukan cuma tampilan
            </h2>
            <p className="mt-4 text-white/70">
              Kami percaya website yang baik harus mudah ditemukan, cepat
              dibuka, dan nyaman digunakan pengunjung.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={index * 0.08}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:bg-white/10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zap text-ink">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
