"use client";

import { Search, ShieldCheck, MessagesSquare, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "./FadeIn";

type PainPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const painPoints: PainPoint[] = [
  {
    icon: Search,
    title: "Sulit ditemukan calon pelanggan",
    description:
      "Orang mencari produk atau jasa Anda di Google, tapi yang muncul kompetitor. Tanpa website, Anda kehilangan pelanggan yang sebenarnya sudah siap membeli.",
  },
  {
    icon: ShieldCheck,
    title: "Terlihat kurang profesional",
    description:
      "Hanya mengandalkan Instagram atau WhatsApp membuat calon klien ragu, apalagi untuk transaksi bernilai besar.",
  },
  {
    icon: MessagesSquare,
    title: "Repot melayani pertanyaan berulang",
    description:
      "Chat WhatsApp penuh pertanyaan yang itu-itu saja soal harga, produk, atau cara pesan — padahal bisa otomatis terjawab di website.",
  },
  {
    icon: TrendingDown,
    title: "Kehilangan momentum saat promosi",
    description:
      "Sudah capek-capek iklan atau posting, tapi diarahkan ke mana? Tanpa landing page yang jelas, budget promosi jadi kurang maksimal.",
  },
];

export function PainPoints() {
  return (
    <section
      id="layanan"
      className="scroll-mt-24 border-t border-stone bg-stoneMist/50 py-20 sm:py-28"
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
                Masih mengandalkan cara lama? Ini yang mungkin sedang Anda alami.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70 text-pretty">
                Tanpa website, ada peluang bisnis yang mungkin sedang Anda
                lewatkan.
              </p>
            </div>
          </FadeIn>

          {/* Pain point list */}
          <div className="divide-y divide-stone border-t border-stone">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <FadeIn key={point.title} delay={index * 0.06}>
                  <div className="grid gap-x-6 gap-y-4 py-8 sm:grid-cols-[auto_1fr] sm:py-9">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pine/10 text-pine">
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                        {point.title}
                      </h3>
                      <p className="mt-2.5 max-w-xl text-[0.95rem] leading-relaxed text-ink/65 text-pretty">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <FadeIn>
          <p className="mt-12 text-center text-lg italic text-ink/60 sm:text-left">
            Solusinya? Salah satu dari layanan kami —{" "}
            <a
              href="#harga"
              className="font-semibold text-pine underline-offset-4 transition-colors hover:text-pineLight hover:underline"
            >
              lihat paket di bawah ini
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
