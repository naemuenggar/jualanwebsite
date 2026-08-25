import Image from "next/image";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export type SitePreviewProps = {
  title: string;
  category: string;
  accent: string;
  imageSrc: string;
  alt: string;
  /** "full" shows the content row below the hero; "min" stops at the hero. */
  detail?: "full" | "min";
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * An AUTHORED mini-site preview — a stylized landing page rendered in the
 * client's own brand accent. Deliberately shows no domain: the point is to
 * read as "a site we designed", not a stock photo behind a fabricated URL.
 */
export function SitePreview({
  title,
  category,
  accent,
  imageSrc,
  alt,
  detail = "full",
  priority = false,
  sizes = "(max-width: 768px) 90vw, 45vw",
  className,
}: SitePreviewProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-card border border-stone bg-paper shadow-card",
        className
      )}
    >
      {/* Browser chrome — no domain, just the site name */}
      <div className="flex items-center gap-3 border-b border-stone bg-stoneMist/70 px-3.5 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <span className="inline-flex max-w-[70%] items-center gap-1.5 truncate rounded-full bg-paper px-3 py-1 text-[0.7rem] font-medium text-ink/55 ring-1 ring-stone">
            <Lock className="h-3 w-3 shrink-0 text-ink/35" aria-hidden="true" />
            <span className="truncate">{title}</span>
          </span>
        </div>
      </div>

      {/* Rendered mini landing page */}
      <div className="relative min-h-0 flex-1">
        {/* mini nav */}
        <div className="flex items-center justify-between px-4 pt-3.5">
          <div className="flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-[4px]"
              style={{ backgroundColor: accent }}
              aria-hidden="true"
            />
            <span className="text-[0.7rem] font-bold tracking-tight text-ink">
              {title}
            </span>
          </div>
          <div className="hidden items-center gap-2 sm:flex" aria-hidden="true">
            <span className="h-1.5 w-6 rounded-full bg-ink/10" />
            <span className="h-1.5 w-6 rounded-full bg-ink/10" />
            <span
              className="h-4 w-10 rounded-full"
              style={{ backgroundColor: accent, opacity: 0.9 }}
            />
          </div>
        </div>

        {/* hero image block */}
        <div className="relative mx-4 mt-3 overflow-hidden rounded-[12px]">
          <div className="relative aspect-[16/9]">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              sizes={sizes}
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, ${accent}00 32%, ${accent}E6 100%)`,
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <span className="inline-block rounded-full bg-white/25 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                {category}
              </span>
              <p className="mt-1.5 font-display text-lg font-bold leading-none text-white sm:text-xl">
                {title}
              </p>
            </div>
          </div>
        </div>

        {/* content row */}
        {detail === "full" && (
          <div className="grid grid-cols-3 gap-2.5 px-4 pb-4 pt-3" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-[9px] bg-stoneMist p-2">
                <div
                  className="mb-1.5 h-1.5 w-8 rounded-full"
                  style={{ backgroundColor: accent, opacity: 0.55 }}
                />
                <div className="h-1.5 w-full rounded-full bg-ink/10" />
                <div className="mt-1 h-1.5 w-2/3 rounded-full bg-ink/10" />
              </div>
            ))}
          </div>
        )}
        {detail === "min" && <div className="h-4" />}
      </div>
    </div>
  );
}
