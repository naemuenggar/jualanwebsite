"use client";

import { testimonials } from "@/lib/data";
import { FadeIn } from "./FadeIn";

function initials(name: string) {
  const clean = name.replace(/^(dr\.|drg\.|ir\.)\s*/i, "");
  return clean
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="testimoni-heading"
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <FadeIn>
          <div className="max-w-2xl">
            <h2
              id="testimoni-heading"
              className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl"
            >
              Kata mereka yang sudah bekerja sama.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <FadeIn key={t.id} delay={index * 0.08}>
              <figure className="flex h-full flex-col rounded-card border border-stone bg-paper p-7 shadow-card">
                <span
                  className="font-display text-5xl leading-none text-saffron"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1 text-[1.05rem] leading-relaxed text-ink/85 text-pretty">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-stone pt-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-pine font-display text-sm font-bold text-canvas">
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block font-display font-semibold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-sm text-ink/55">
                      {t.role}, {t.business}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
