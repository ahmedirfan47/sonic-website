import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

const segments = [
  {
    title: "Wholesalers & distributors",
    body: "Businesses selling a defined catalog to repeat B2B customers, coordinating delivery across a fleet -- the operational shape Sonic is built around.",
    active: true,
  },
  {
    title: "Multi-branch retail & FMCG",
    body: "Operations with the same order-to-delivery complexity across multiple locations.",
    active: false,
  },
];

export function WhoItsFor() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>Who Sonic Is For</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Built for operationally complex businesses in the GCC.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {segments.map((seg, i) => (
            <Reveal key={seg.title} delay={160 + i * 100}>
              <div
                className={`rounded-2xl border p-6 ${
                  seg.active
                    ? "border-[var(--color-accent)]/40 bg-[var(--color-accent-dim)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)]"
                }`}
              >
                <h3 className="text-base font-semibold text-[var(--color-text)]">
                  {seg.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {seg.body}
                </p>
                {!seg.active && (
                  <div className="mt-3 text-xs text-[var(--color-text-dim)]">
                    Direction, not yet shipped
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}