"use client";

import { processSteps } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function ProcessSteps() {
  return (
    <section
      id="proses"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="proses-heading"
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <FadeIn>
          <div className="max-w-2xl">
            <h2
              id="proses-heading"
              className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl"
            >
              Dari ide sampai website hidup.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70 text-pretty">
              Empat langkah yang bikin proses pembuatan website Anda transparan
              dan tidak membingungkan.
            </p>
          </div>
        </FadeIn>

        <div className="relative mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-stone lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <div className="relative">
                <div
                  className={`grid h-14 w-14 place-items-center rounded-full font-display text-lg font-bold ring-8 ring-canvas ${
                    index === 0
                      ? "bg-pine text-canvas shadow-pine"
                      : "border border-stone bg-paper text-pine"
                  }`}
                >
                  {index + 1}
                  {index === 0 && (
                    <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-canvas bg-saffron" />
                  )}
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink/65">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
