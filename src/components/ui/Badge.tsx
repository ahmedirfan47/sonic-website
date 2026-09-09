import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Badge({
  children,
  className,
  pulse = false,
}: {
  children: ReactNode;
  className?: string;
  /** Shows a small animated status dot -- used sparingly (e.g. hero). */
  pulse?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]",
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        </span>
      )}
      {children}
    </span>
  );
}