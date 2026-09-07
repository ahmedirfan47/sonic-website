/**
 * Company-level content -- the facts, beliefs, and narrative that describe
 * Sonic itself, independent of any single product. Product-specific content
 * belongs in products.ts, not here.
 */

export const mission =
  "To replace the manual, disconnected operations that run operationally complex businesses -- WhatsApp threads, spreadsheets, phone calls, memory -- with software that runs those operations directly.";

export const vision =
  "A future where every operationally complex business -- distribution, retail, logistics, wholesale, and beyond -- runs on intelligent systems built for how it actually operates, starting in the GCC and extending globally.";

export interface ProblemPoint {
  title: string;
  body: string;
}

export const currentProblems: ProblemPoint[] = [
  {
    title: "Operations live in conversations, not systems",
    body: "Orders, pricing, stock questions, and delivery coordination happen across WhatsApp threads and phone calls -- information that is real, but nowhere a business can see, search, or rely on.",
  },
  {
    title: "The business depends on specific people remembering things",
    body: "Who owes what, what was promised, what's in stock, who's covering which delivery today -- this knowledge sits in individual employees' heads, not in any system the business owns.",
  },
  {
    title: "Growth multiplies the chaos instead of resolving it",
    body: "Adding more staff, more customers, or more locations doesn't make a manual operation more organized -- it makes the same coordination problems larger and more expensive to run.",
  },
];

export interface SoftwareGapPoint {
  title: string;
  body: string;
}

export const whyExistingSoftwareFails: SoftwareGapPoint[] = [
  {
    title: "Generic software asks businesses to change how they work",
    body: "Most business software requires staff and customers to adopt a new portal or app. Operationally complex businesses in the GCC already have a working interface -- WhatsApp -- and software that ignores that fact goes unused.",
  },
  {
    title: "Dashboards report on the business after the fact",
    body: "Traditional systems record what already happened. They don't take the order, don't check the real stock, and don't decide who should deliver it -- a person still has to do all of that manually, on top of using the software.",
  },
  {
    title: "AI chatbots without real operational data behind them",
    body: "A conversational layer with no connection to real pricing, real inventory, or real order status is a demo, not a business system -- it can talk convincingly and still be wrong about the one thing that matters.",
  },
];

export interface Belief {
  title: string;
  body: string;
}

/** Sonic's operating philosophy -- what the company believes, independent of
 * any specific product's feature set. */
export const beliefs: Belief[] = [
  {
    title: "Software should run the operation, not just report on it",
    body: "Sonic builds systems that take the order, check the real stock, assign the real driver -- not systems that wait for a human to do the work and then log it.",
  },
  {
    title: "AI is infrastructure, not a feature",
    body: "AI belongs underneath the business, handling conversation and judgment -- never as a decoration bolted onto software that already existed.",
  },
  {
    title: "The database owns every fact. The model never guesses.",
    body: "A language model can converse, reason, and decide what to look up. It should never be the source of a price, a stock count, or an order status -- that discipline is what makes an AI system trustworthy enough to run a real business.",
  },
  {
    title: "Meet businesses where they already operate",
    body: "In the GCC, that's WhatsApp -- not a new portal, not an app nobody opens. Sonic builds software behind the interface that already works, rather than asking a business to adopt a different one.",
  },
];

export interface TechPillar {
  title: string;
  body: string;
}

export const technologyPillars: TechPillar[] = [
  {
    title: "AI agents",
    body: "Conversational systems that understand what a person wants and decide what to do -- take an order, answer a question, flag an exception -- by calling real tools against real business data, never from memory.",
  },
  {
    title: "Automation",
    body: "The routine parts of an operation -- confirming an order, assigning a driver, queuing a delivery slip -- run without a person doing them by hand, freeing staff for the exceptions that actually need judgment.",
  },
  {
    title: "Operational intelligence",
    body: "Every action -- an order placed, a status changed, a delivery completed -- is recorded as real, structured data, not lost in a chat thread. That data is what lets a system reason about the business at all.",
  },
  {
    title: "Business data as the source of truth",
    body: "Pricing, inventory, and order history are held in versioned, auditable records. Every number a system reports or an AI agent states can be traced back to exactly where it came from.",
  },
];

export interface IndustryFocus {
  name: string;
  status: "current" | "next";
  body: string;
}

export const industries: IndustryFocus[] = [
  {
    name: "Distribution & Wholesale",
    status: "current",
    body: "Businesses selling a defined catalog to repeat B2B customers, coordinating delivery across a fleet -- the first operational shape Sonic is built for, proven with Salesman.",
  },
  {
    name: "FMCG",
    status: "next",
    body: "Fast-moving consumer goods operations with the same order-to-delivery complexity, at higher volume and tighter margins.",
  },
  {
    name: "Retail",
    status: "next",
    body: "Multi-branch and multi-location retail operations that need the same real-time visibility into stock, orders, and fulfillment.",
  },
  {
    name: "Logistics",
    status: "next",
    body: "Businesses whose core operation is moving goods -- where routing, assignment, and delivery accountability are the entire product.",
  },
];

export const whyGccMena: string[] = [
  "WhatsApp is the working business interface across the region -- not a habit to break, but the front door Sonic builds software behind.",
  "Distribution and wholesale form a large, operationally complex layer underneath nearly every retail and food business in the region, and it remains largely manual today.",
  "The region's businesses are growing fast enough that manual coordination is becoming the actual constraint on growth -- the timing for real operational software is now, not later.",
];

export interface EngagePath {
  audience: string;
  headline: string;
  body: string;
  cta: string;
}

export const engagePaths: EngagePath[] = [
  {
    audience: "Businesses",
    headline: "Running an operationally complex business",
    body: "If your operation runs on WhatsApp, spreadsheets, and memory, talk to Sonic about what Salesman can take off your plate.",
    cta: "Talk to Sonic",
  },
  {
    audience: "Partners",
    headline: "Distributing or reselling into the GCC",
    body: "If you work with businesses in distribution, wholesale, or retail across the region, Sonic is open to partnerships that bring intelligent operations to more businesses.",
    cta: "Discuss a partnership",
  },
  {
    audience: "Investors",
    headline: "Backing the next generation of GCC business infrastructure",
    body: "Sonic is early -- built and proven with one real product. If that trajectory is interesting to you, reach out directly.",
    cta: "Get in touch",
  },
  {
    audience: "Talent",
    headline: "Building AI-operated systems, not AI demos",
    body: "Sonic is looking for people who want to build software that actually runs a business, not software that just talks about one.",
    cta: "Introduce yourself",
  },
];

export const storyParagraphs: string[] = [
  "Sonic started with a direct observation, not a market report: a wholesale business in Saudi Arabia was running entirely on WhatsApp messages, a price list in someone's memory, and a driver who knew his deliveries by heart. It worked -- until it didn't scale, until stock went untracked, until nobody could say for certain what had been promised to whom.",
  "That specific problem became Salesman: a system that keeps the conversation businesses already have with their customers, and puts real software behind it -- real prices, real stock, real delivery assignment, a real audit trail.",
  "Sonic exists to generalize that same discipline -- AI as infrastructure, data as the source of truth, software that runs the operation instead of reporting on it -- across the operationally complex businesses that make up so much of the GCC economy, and eventually beyond it.",
];