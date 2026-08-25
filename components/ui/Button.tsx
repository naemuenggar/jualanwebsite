import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "outline" | "onPine";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
};

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-[12px] px-6 py-3 text-[0.95rem] font-semibold tracking-tight transition-[transform,background-color,box-shadow,color] duration-200 ease-out will-change-transform active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-pine text-canvas shadow-pine hover:-translate-y-0.5 hover:bg-pineLight",
  outline:
    "border border-ink/20 bg-transparent text-ink hover:-translate-y-0.5 hover:border-ink/40 hover:bg-ink/[0.03]",
  onPine:
    "bg-saffron text-pineDark shadow-lift hover:-translate-y-0.5 hover:bg-[#EBB558]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", href, children, target, rel, ...props },
    ref
  ) => {
    const classes = cn(base, variants[variant], className);

    if (href) {
      return (
        <a href={href} className={classes} target={target} rel={rel}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} type="button" className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
