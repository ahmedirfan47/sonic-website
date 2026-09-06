type ClassValue = string | number | boolean | undefined | null;

/** Tiny className joiner -- no need for a full clsx/tailwind-merge dependency. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}