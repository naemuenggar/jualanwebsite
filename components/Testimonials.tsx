"use client";

import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="bg-mist py-16 sm:py-24"
      aria-labelledby="testimoni-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-mono font-semibold uppercase tracking-wider text-brand">
              Testimoni
            </span>
            <h2
              id="testimoni-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Apa kata klien kami
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-hair bg-white p-6 transition-all duration-200 hover:border-brand hover:shadow-sm">
                <Quote className="h-8 w-8 text-zap" aria-hidden="true" />
                <p className="mt-4 flex-1 text-ink/80 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand text-brand"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="mt-4 border-t border-hair pt-4">
                  <p className="font-display font-semibold text-ink">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-ink/60">
                    {testimonial.role}, {testimonial.business}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
