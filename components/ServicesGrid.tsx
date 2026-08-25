"use client";

import { ArrowUpRight } from "lucide-react";
import { services, contactInfo } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function ServicesGrid() {
  return (
    <section
      id="layanan"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="layanan-heading"
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Header */}
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <h2
                id="layanan-heading"
                className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl"
              >
                Empat cara kami bantu bisnis Anda online.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70 text-pretty">
                Dari halaman promosi sederhana sampai sistem custom — kami bantu
                wujudkan sesuai anggaran dan tahap bisnis Anda.
              </p>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-pine transition-colors hover:text-pineLight"
              >
                Bingung pilih yang mana? Tanya dulu
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          {/* List */}
          <div className="divide-y divide-stone border-t border-stone">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.06}>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-3 py-7 transition-colors sm:py-8"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-pine">
                        {service.title}
                      </h3>
                      <span className="rounded-full border border-stone bg-stoneMist/60 px-2.5 py-0.5 text-xs font-medium text-ink/60">
                        {service.deliverable}
                      </span>
                    </div>
                    <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-ink/65">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 text-right">
                    <span className="text-[0.72rem] font-medium uppercase tracking-wide text-ink/40">
                      Mulai dari
                    </span>
                    <span className="nums font-display text-xl font-bold text-ink">
                      {service.startingPrice}
                    </span>
                    <span className="mt-1 grid h-9 w-9 place-items-center rounded-full border border-stone text-ink/50 transition-all duration-200 group-hover:border-pine group-hover:bg-pine group-hover:text-canvas">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
