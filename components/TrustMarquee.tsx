"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { trustCategories } from "@/lib/data";

const MARQUEE_SPEED_PX_PER_SEC = 60;

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
      const needed = Math.max(2, Math.ceil(containerWidth / baseListWidth) + 1);
      setCopies(needed);
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const duration = baseWidth ? baseWidth / MARQUEE_SPEED_PX_PER_SEC : 0;
  const items = Array.from({ length: copies }, () => trustCategories).flat();

  return (
    <section
      className="overflow-hidden border-y border-hair bg-white py-5"
      aria-label="Kategori klien"
      ref={containerRef}
    >
      {/* Hidden base list for measurement */}
      <div
        ref={baseRef}
        className="invisible absolute flex w-max items-center gap-4"
        aria-hidden="true"
      >
        {trustCategories.map((category, idx) => (
          <span
            key={`base-${category}-${idx}`}
            className="inline-flex shrink-0 items-center rounded-full border border-hair bg-mist px-5 py-2 text-sm font-medium text-ink"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Visible track */}
      {shouldReduceMotion ? (
        <div className="flex w-max items-center gap-4">
          {items.map((category, idx) => (
            <span
              key={`static-${category}-${idx}`}
              className="inline-flex shrink-0 items-center rounded-full border border-hair bg-mist px-5 py-2 text-sm font-medium text-ink"
            >
              {category}
            </span>
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
            <span
              key={`${category}-${idx}`}
              className="inline-flex shrink-0 items-center rounded-full border border-hair bg-mist px-5 py-2 text-sm font-medium text-ink"
            >
              {category}
            </span>
          ))}
        </motion.div>
      )}
    </section>
  );
}
