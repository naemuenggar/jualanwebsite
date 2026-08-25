"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SitePreview } from "./SitePreview";
import { projects, stats, contactInfo } from "@/lib/data";

const kopi = projects.find((p) => p.id === "kopi-senja")!;
const mitra = projects.find((p) => p.id === "mitra-sehat")!;

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section
      className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-44 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* atmosphere */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-pine/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-saffron/[0.05] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Text */}
          <div className="max-w-2xl">
            <motion.h1
              id="hero-heading"
              {...rise(0.05)}
              className="font-display text-[2.7rem] font-bold leading-[0.98] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.6rem]"
            >
              Website yang bikin{" "}
              <span className="relative whitespace-nowrap text-pine">
                bisnis kecil
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-saffron"
                >
                  <path
                    d="M3 11C60 4 240 4 297 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              terlihat kelas atas.
            </motion.h1>

            <motion.p
              {...rise(0.15)}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70 text-pretty sm:text-xl"
            >
              Webkriya merancang dan membangun website untuk UMKM dan bisnis
              kecil-menengah — rapi, cepat dibuka, mudah dikelola, dan enak diajak
              ngobrol dari brief sampai launch.
            </motion.p>

            <motion.div
              {...rise(0.25)}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#portofolio"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-pine px-7 py-3.5 text-[0.95rem] font-semibold text-canvas shadow-pine transition-all duration-200 hover:-translate-y-0.5 hover:bg-pineLight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                Lihat Portofolio
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-[12px] border border-ink/20 px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/40 hover:bg-ink/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                Konsultasi Gratis
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* honest offer strip — not a fabricated track record */}
            <motion.dl
              {...rise(0.35)}
              className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-stone pt-7"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && (
                    <span className="hidden h-1.5 w-1.5 rounded-full bg-saffron sm:block" />
                  )}
                  <div>
                    <dt className="nums font-display text-2xl font-bold leading-none text-ink">
                      {stat.value}
                      {stat.unit && (
                        <span className="ml-1 text-base font-semibold text-ink/50">
                          {stat.unit}
                        </span>
                      )}
                    </dt>
                    <dd className="mt-1.5 text-[0.8rem] font-medium text-ink/55">
                      {stat.label}
                    </dd>
                  </div>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Visual cluster — authored previews, no fake domains */}
          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 28 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.2, ease },
                })}
            className="relative mx-auto h-[400px] w-full max-w-lg sm:h-[500px] lg:h-[560px] lg:max-w-none"
          >
            <div className="absolute left-0 top-2 w-[78%] -rotate-[3deg] sm:top-6 lg:left-2">
              <div className="animate-float-slow">
                <SitePreview
                  {...kopi}
                  detail="full"
                  priority
                  sizes="(max-width: 1024px) 70vw, 32vw"
                  className="shadow-lift"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 right-0 w-[60%] rotate-[4deg] sm:bottom-2 lg:right-2">
              <div className="animate-float-slow [animation-delay:1.5s]">
                <SitePreview
                  {...mitra}
                  detail="min"
                  priority
                  sizes="(max-width: 1024px) 55vw, 26vw"
                  className="shadow-lift"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
