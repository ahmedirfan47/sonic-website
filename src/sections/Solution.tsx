import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "The order arrives",
    body: "A customer messages on WhatsApp -- text or voice -- exactly as they always have.",
  },
  {
    n: "02",
    title: "Software resolves it",
    body: "Real prices and real stock are checked against the database. Nothing is estimated.",
  },
  {
    n: "03",
    title: "Operations run themselves",
    body: "The order is confirmed, assigned to the right driver by zone, and tracked to delivery.",
  },
];

export function Solution() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>The Sonic Approach</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            The same conversation. Software underneath it.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-[var(--color-text-muted)]">
            Sonic doesn't ask businesses to change how their customers order.
            It puts real software behind the conversation that's already
            happening.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={200 + i * 100}>
              <div className="h-full bg-[var(--color-bg)] p-8">
                <div className="font-mono text-sm text-[var(--color-accent)]">
                  {step.n}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-text)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}