import { Database, Bot, ShieldCheck } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

const pillars = [
  {
    icon: Bot,
    title: "AI handles conversation",
    body: "A tool-calling agent understands what a customer wants and decides what to look up -- it never answers a factual question from memory.",
  },
  {
    icon: Database,
    title: "The database owns the facts",
    body: "Every price and every stock number the AI states comes from a real, live query. If it isn't in the database, the AI doesn't say it.",
  },
  {
    icon: ShieldCheck,
    title: "Every action is recorded",
    body: "Order status, assignment, and delivery are logged with who did it and when -- an audit trail, not a black box.",
  },
];

export function HowItWorks() {
  return (
    <Section id="technology" className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>Technology</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            The AI never guesses.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-[var(--color-text-muted)]">
            The single rule behind everything Sonic builds: language models
            are excellent at conversation and terrible at facts. So the
            model handles the conversation, and the database handles every
            fact.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={200 + i * 90}>
              <div className="border-l-2 border-[var(--color-border-strong)] pl-6">
                <pillar.icon size={20} className="text-[var(--color-accent)]" />
                <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}