import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { currentProblems, whyExistingSoftwareFails } from "../data/company";

/**
 * Deliberately not another card grid -- two clean text columns, divided by
 * a vertical rule, contrasting "how it works today" against "why it hasn't
 * been fixed." Breaks the boxed-card pattern used elsewhere on the page.
 */
export function Problem() {
  return (
    <Section id="problem" className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>The Problem</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Distribution, wholesale, and logistics still run by hand.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">
          <div className="md:border-r md:border-[var(--color-border)] md:pr-16">
            <Reveal delay={120}>
              <div className="mb-8 text-sm font-semibold text-[var(--color-text)]">
                How it works today
              </div>
            </Reveal>
            <div className="space-y-8">
              {currentProblems.map((point, i) => (
                <Reveal key={point.title} delay={160 + i * 90}>
                  <div>
                    <div className="font-mono text-xs text-[var(--color-text-dim)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-[var(--color-text)]">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {point.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal delay={140}>
              <div className="mb-8 text-sm font-semibold text-[var(--color-accent)]">
                Why it hasn't been fixed
              </div>
            </Reveal>
            <div className="space-y-8">
              {whyExistingSoftwareFails.map((point, i) => (
                <Reveal key={point.title} delay={180 + i * 90}>
                  <div>
                    <div className="font-mono text-xs text-[var(--color-text-dim)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-[var(--color-text)]">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {point.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}