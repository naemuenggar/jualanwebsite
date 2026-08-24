"use client";

import { ArrowRight } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";
import { Button } from "./ui/Button";
import { stats, contactInfo } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="max-w-2xl">
            <FadeIn>
              <span className="inline-flex items-center rounded-full border border-hair bg-mist px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-ink">
                Jasa Pembuatan Website
              </span>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1
                id="hero-heading"
                className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
              >
                Website keren untuk{" "}
                <span className="relative inline-block">
                  bisnis
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 160 12"
                    className="absolute -bottom-1 left-0 w-full text-zap"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="currentColor"
                      d="M2 8c40-6 116-6 156 0"
                    />
                  </svg>
                </span>{" "}
                Anda, tanpa ribet.
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink/70 sm:text-xl">
                Webkriya bantu UMKM dan bisnis kecil-menengah punya website
                profesional yang cepat, mudah dikelola, dan siap menarik lebih
                banyak pelanggan.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 text-base"
                >
                  Mulai Konsultasi Gratis
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" href="#portofolio" className="px-7 py-3.5 text-base">
                  Lihat Portofolio
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-hair pt-8 sm:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-2xl font-bold text-ink sm:text-3xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-xs font-medium text-ink/60 sm:text-sm">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>

          {/* Visual cluster */}
          <FadeIn delay={0.15} direction="left">
            <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[520px] lg:h-[580px] lg:max-w-none">
              <div className="absolute left-[5%] top-[8%] h-[55%] w-[70%] -rotate-6 sm:left-[8%] sm:top-[10%]">
                <BrowserFrame
                  url="kopisenja.id"
                  imageSrc="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
                  alt="Preview website toko online Kopi Senja"
                  priority
                  sizes="(max-width: 768px) 80vw, 35vw"
                />
              </div>
              <div className="absolute right-[2%] top-[28%] h-[45%] w-[55%] rotate-3 sm:right-[5%] sm:top-[26%]">
                <BrowserFrame
                  url="mitrasehat.co.id"
                  imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                  alt="Preview website company profile klinik Mitra Sehat"
                  priority
                  sizes="(max-width: 768px) 70vw, 28vw"
                />
              </div>
              <div className="absolute bottom-[5%] left-[18%] h-[40%] w-[50%] rotate-2 sm:bottom-[6%] sm:left-[20%]">
                <BrowserFrame
                  url="noirfashion.id"
                  imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                  alt="Preview landing page Noir Fashion"
                  priority
                  sizes="(max-width: 768px) 65vw, 26vw"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
