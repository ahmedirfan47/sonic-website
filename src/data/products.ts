export interface Product {
  slug: string;
  name: string;
  status: "live" | "in-development";
  tagline: string;
  description: string;
  industry: string;
  capabilities: string[];
}

/**
 * Product registry. Adding a second product later means adding one entry
 * here (and, if it deserves a full page, one route in App.tsx) -- the rest
 * of the site (product cards, nav) reads from this list.
 */
export const products: Product[] = [
  {
    slug: "salesman",
    name: "Salesman",
    status: "live",
    tagline: "The AI-operated order and delivery platform for wholesalers",
    description:
      "Salesman replaces manual, WhatsApp-and-spreadsheet order-taking with software that quotes real prices, tracks real stock, and coordinates real deliveries -- built for wholesale and distribution businesses in the GCC.",
    industry: "Wholesale & Distribution",
    capabilities: [
      "AI ordering agent over WhatsApp -- text and voice",
      "Real-time pricing and inventory, never guessed by the AI",
      "Role-based operations: sales, dispatch, delivery, warehouse",
      "Delivery zones with automatic driver assignment",
      "Full audit trail on every order and status change",
    ],
  },
];

export const flagshipProduct = products[0];