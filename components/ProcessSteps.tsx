"use client";

import { processSteps } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function ProcessSteps() {
  return (
    <section
      id="proses"
      className="bg-white py-16 sm:py-24"
      aria-labelledby="proses-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-mono font-semibold uppercase tracking-wider text-brand">
              Proses Kerja
            </span>
            <h2
              id="proses-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Dari ide sampai website hidup
            </h2>
            <p className="mt-4 text-ink/70">
              Empat langkah sederhana supaya proses pembuatan website Anda
              transparan dan tidak membingungkan.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08}>
              <article className="relative h-full rounded-2xl border border-hair bg-white p-6 transition-all duration-200 hover:border-brand hover:shadow-sm">
                <span className="font-mono text-4xl font-bold text-brand/20">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {step.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
