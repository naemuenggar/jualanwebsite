"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { trustCategories } from "@/lib/data";

const MARQUEE_SPEED_PX_PER_SEC = 55;

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-stone bg-paper px-5 py-2 text-sm font-medium text-ink/75 shadow-card">
      <span className="h-1.5 w-1.5 rounded-full bg-pine" aria-hidden="true" />
      {label}
    </span>
  );
}

export function TrustMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);
  const [baseWidth, setBaseWidth] = useState(0);
  const [copies, setCopies] = useState(4);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function update() {
      const container = containerRef.current;
      const base = baseRef.current;
      if (!container || !base) return;
      const containerWidth = container.getBoundingClientRect().width;
      const baseListWidth = base.getBoundingClientRect().width;
      if (!baseListWidth) return;
      setBaseWidth(baseListWidth);
      setCopies(Math.max(2, Math.ceil(containerWidth / baseListWidth) + 1));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const duration = baseWidth ? baseWidth / MARQUEE_SPEED_PX_PER_SEC : 0;
  const items = Array.from({ length: copies }, () => trustCategories).flat();

  return (
    <section
      className="overflow-hidden border-y border-stone bg-stoneMist/60 py-6"
      aria-label="Jenis usaha yang kami bantu"
    >
      <p className="mx-auto max-w-8xl px-5 pb-5 text-center text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ink/45 sm:px-8">
        Dipercaya berbagai jenis usaha di Indonesia
      </p>
      <div className="relative" ref={containerRef}>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent" />

        {/* hidden base list for measurement */}
        <div
          ref={baseRef}
          className="invisible absolute flex w-max items-center gap-4"
          aria-hidden="true"
        >
          {trustCategories.map((category, idx) => (
            <Chip key={`base-${category}-${idx}`} label={category} />
          ))}
        </div>

        {shouldReduceMotion ? (
          <div className="flex w-max items-center gap-4 px-5">
            {items.map((category, idx) => (
              <Chip key={`static-${category}-${idx}`} label={category} />
            ))}
          </div>
        ) : (
          <motion.div
            className="flex w-max items-center gap-4"
            animate={baseWidth ? { x: -baseWidth } : undefined}
            transition={
              baseWidth
                ? {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                      duration,
                    },
                  }
                : undefined
            }
          >
            {items.map((category, idx) => (
              <Chip key={`${category}-${idx}`} label={category} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
