import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { beliefs } from "../data/company";

/**
 * Vertical, editorial manifesto list -- large type, generous rhythm, no
 * boxes. Deliberately distinct from the boxed-card treatment used in
 * Problem and Technology, so the page doesn't read as one repeated pattern.
 */
export function Approach() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container className="max-w-3xl">
        <Reveal>
          <Eyebrow>What We Believe</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Four convictions, unchanged across every system we build.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-[var(--color-border)]">
          {beliefs.map((belief, i) => (
            <Reveal key={belief.title} delay={140 + i * 90}>
              <div className="flex flex-col gap-3 py-8 sm:flex-row sm:gap-10">
                <div className="shrink-0 font-mono text-2xl text-[var(--color-accent)] sm:w-16">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text)]">
                    {belief.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                    {belief.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}