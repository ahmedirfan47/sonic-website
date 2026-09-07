export interface NavLink {
  label: string;
  href: string;
}

/** Top nav -- company-first ordering. Anchors point at homepage sections;
 * "Products" is a real route since it's meant to grow into a full index. */
export const navLinks: NavLink[] = [
  { label: "Company", href: "/#company" },
  { label: "Technology", href: "/#technology" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/#industries" },
  { label: "Team", href: "/#team" },
];

export const ctaLabel = "Talk to Sonic";