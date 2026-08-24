import Image from "next/image";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export type BrowserFrameProps = {
  url: string;
  imageSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  children?: ReactNode;
};

export function BrowserFrame({
  url,
  imageSrc,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  children,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-2xl border border-hair bg-white shadow-sm",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-hair bg-white px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-[14rem] truncate rounded-md bg-mist px-3 py-1 text-center text-xs font-mono text-ink/70 sm:max-w-[16rem]">
            {url}
          </div>
        </div>
      </div>

      {/* Viewport */}
      <div className="relative min-h-0 flex-1 bg-mist">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes={sizes}
          className="object-cover"
        />
        {children}
      </div>
    </div>
  );
}
