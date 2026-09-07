import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { mission, vision } from "../data/company";

export function VisionMission() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Mission</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-2 text-2xl font-semibold leading-snug tracking-tight text-[var(--color-text)] md:text-3xl">
                {mission}
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal delay={120}>
              <Eyebrow>Vision</Eyebrow>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-2 text-2xl font-semibold leading-snug tracking-tight text-[var(--color-text-muted)] md:text-3xl">
                {vision}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}