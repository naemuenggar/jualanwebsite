"use client";

import { ArrowUpRight } from "lucide-react";
import { projects, contactInfo } from "@/lib/data";
import { SitePreview } from "./SitePreview";
import { FadeIn } from "./FadeIn";

const [featured, ...rest] = projects;

export function PortfolioBento() {
  return (
    <section
      id="portofolio"
      className="scroll-mt-24 border-y border-stone bg-stoneMist/50 py-20 sm:py-28"
      aria-labelledby="portofolio-heading"
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="portofolio-heading"
              className="max-w-xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl"
            >
              Karya yang sudah kami rilis.
            </h2>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink/60 text-pretty">
              Setiap proyek digarap dari nol dengan fokus pada tujuan bisnis dan
              kenyamanan pengunjung.
            </p>
          </div>
        </FadeIn>

        {/* Featured project */}
        <FadeIn delay={0.05}>
          <div className="mt-12 grid items-center gap-8 rounded-panel border border-stone bg-paper p-4 shadow-card sm:p-6 lg:grid-cols-2 lg:gap-12 lg:p-8">
            <SitePreview
              {...featured}
              detail="full"
              sizes="(max-width: 1024px) 90vw, 44vw"
            />
            <div className="lg:pr-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-pine/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pine">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
                Proyek pilihan
              </span>
              <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink">
                {featured.title}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-ink/50">
                {featured.category}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink/70 text-pretty">
                {featured.summary} Dibangun responsif, ringan, dan siap menerima
                pesanan langsung dari pengunjung.
              </p>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-[12px] border border-ink/20 px-6 py-3 text-[0.95rem] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-pine hover:text-pine"
              >
                Mau yang seperti ini?
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Grid of the rest */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.05}>
              <article className="group h-full">
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <SitePreview
                    {...project}
                    detail="min"
                    sizes="(max-width: 768px) 90vw, 30vw"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3 px-1">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      {project.summary}
                    </p>
                  </div>
                  <span className="mt-0.5 shrink-0 rounded-full border border-stone px-2.5 py-0.5 text-[0.7rem] font-medium text-ink/55">
                    {project.category}
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
