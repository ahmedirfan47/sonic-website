import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { beliefs } from "../data/company";

export function Approach() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>What Sonic Believes</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Our approach doesn't change from one product to the next.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-[var(--color-text-muted)]">
            These are the principles every system Sonic builds is held to --
            independent of which industry or product they show up in.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2">
          {beliefs.map((belief, i) => (
            <Reveal key={belief.title} delay={180 + i * 80}>
              <div className="h-full bg-[var(--color-bg)] p-7">
                <div className="font-mono text-xs text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-base font-semibold text-[var(--color-text)]">
                  {belief.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {belief.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}