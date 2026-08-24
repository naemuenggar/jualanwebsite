"use client";

import { projects } from "@/lib/data";
import { BrowserFrame } from "./BrowserFrame";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

function gridClasses(size: (typeof projects)[number]["size"]) {
  switch (size) {
    case "large":
      return "col-span-2 row-span-1 md:row-span-2 min-h-[240px] md:min-h-[420px]";
    case "tall":
      return "col-span-1 row-span-1 md:row-span-2 min-h-[240px] md:min-h-[420px]";
    case "wide":
      return "col-span-2 row-span-1 min-h-[200px]";
    default:
      return "col-span-1 row-span-1 min-h-[200px]";
  }
}

export function PortfolioBento() {
  return (
    <section
      id="portofolio"
      className="bg-mist py-16 sm:py-24"
      aria-labelledby="portofolio-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-mono font-semibold uppercase tracking-wider text-brand">
              Portofolio
            </span>
            <h2
              id="portofolio-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Beberapa website yang sudah kami buat
            </h2>
            <p className="mt-4 text-ink/70">
              Setiap proyek dirancang dengan fokus pada tujuan bisnis dan
              pengalaman pengunjung.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[minmax(160px,auto)]">
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={index * 0.06}
              className={cn("group", gridClasses(project.size))}
            >
              <BrowserFrame
                url={project.url}
                imageSrc={project.imageSrc}
                alt={project.alt}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="transition-transform duration-200 group-hover:scale-[1.01] group-hover:shadow-md"
              >
                <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm backdrop-blur-sm">
                  {project.title} · {project.category}
                </div>
              </BrowserFrame>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
