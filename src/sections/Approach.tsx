import { ArrowRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { beliefs, workProcess } from "../data/company";

/**
 * Vertical, editorial manifesto list -- large type, generous rhythm, no
 * boxes. A compact "how we work" process strip follows, keeping the
 * industry-agnostic positioning integrated here rather than a new section.
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
              <div className="group flex flex-col gap-3 rounded-xl py-8 transition-colors duration-200 hover:bg-[var(--color-surface)] sm:flex-row sm:gap-10 sm:px-4">
                <div className="shrink-0 font-mono text-2xl text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1 sm:w-16">
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

        <Reveal delay={140 + beliefs.length * 90}>
          <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-[var(--color-border)] pt-10">
            <span className="eyebrow mr-1">How we work</span>
            {workProcess.map((step, i) => (
              <span key={step.label} className="flex items-center gap-3">
                <span className="text-sm font-medium text-[var(--color-text)]">{step.label}</span>
                {i < workProcess.length - 1 && (
                  <ArrowRight size={14} className="text-[var(--color-text-dim)]" />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}