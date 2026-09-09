import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
  as?: "button" | "a";
  href?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

const variants = {
  primary:
    "bg-[var(--color-accent)] text-white shadow-sm hover:bg-[var(--color-accent-hover)] hover:shadow-md",
  ghost:
    "border border-[var(--color-border-strong)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-dim)]",
};

export function Button({
  children,
  variant = "primary",
  className,
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}