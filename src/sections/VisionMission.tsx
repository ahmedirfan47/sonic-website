import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { mission, vision } from "../data/company";

/**
 * The one deliberate "stop scrolling" moment on the page -- large-scale
 * centered typography on a distinct tinted band, rather than another
 * boxed section. Vision gets the visual weight; mission supports it below.
 */
export function VisionMission() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-24 md:py-32">
      <Container className="max-w-4xl text-center">
        <Reveal>
          <Eyebrow>
            <span className="mx-auto">Vision</span>
          </Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-3xl font-semibold leading-[1.25] tracking-tight text-[var(--color-text)] md:text-5xl">
            {vision}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mx-auto mt-14 max-w-xl border-t border-[var(--color-border-strong)] pt-10">
            <div className="eyebrow mb-3">Mission</div>
            <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
              {mission}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}