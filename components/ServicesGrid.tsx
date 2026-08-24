"use client";

import { services } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function ServicesGrid() {
  return (
    <section id="layanan" className="bg-white py-16 sm:py-24" aria-labelledby="layanan-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-mono font-semibold uppercase tracking-wider text-brand">
              Layanan Kami
            </span>
            <h2
              id="layanan-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Pilih jenis website yang sesuai kebutuhan
            </h2>
            <p className="mt-4 text-ink/70">
              Dari halaman promosi sederhana sampai sistem custom, kami bantu
              wujudkan sesuai anggaran bisnis Anda.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-hair bg-white p-6 transition-all duration-200 hover:border-brand hover:shadow-md">
                <span className="font-mono text-sm font-bold text-brand">
                  {service.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-hair pt-4">
                  <span className="text-xs font-medium text-ink/50">
                    Mulai dari
                  </span>
                  <span className="font-display text-lg font-bold text-ink">
                    {service.startingPrice}
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
