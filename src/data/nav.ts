export interface NavLink {
  label: string;
  href: string;
}

/** Top nav links -- anchors on the homepage, since Sonic is currently a
 * single deep page rather than many thin ones. Add real routes here if
 * dedicated pages are introduced later. */
export const navLinks: NavLink[] = [
  { label: "Problem", href: "/#problem" },
  { label: "Salesman", href: "/salesman" },
  { label: "Technology", href: "/#technology" },
  { label: "Founder", href: "/#founder" },
];

export const ctaLabel = "Talk to Sonic";