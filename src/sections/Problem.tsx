import { AlertCircle, XCircle } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { currentProblems, whyExistingSoftwareFails } from "../data/company";

export function Problem() {
  return (
    <Section id="problem" className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>The Problem</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Operationally complex businesses are still run by hand.
          </h2>
        </Reveal>

        <div className="mt-14">
          <Reveal delay={120}>
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
              <AlertCircle size={16} className="text-[var(--color-accent)]" />
              What businesses actually face
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {currentProblems.map((point, i) => (
              <Reveal key={point.title} delay={160 + i * 80}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <h3 className="text-base font-semibold text-[var(--color-text)]">
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

        <div className="mt-16">
          <Reveal delay={120}>
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
              <XCircle size={16} className="text-[var(--color-accent)]" />
              Why existing software hasn't solved this
            </div>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
            {whyExistingSoftwareFails.map((point, i) => (
              <Reveal key={point.title} delay={200 + i * 80}>
                <div className="h-full bg-[var(--color-bg)] p-6">
                  <h3 className="text-sm font-semibold text-[var(--color-text)]">
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
      </Container>
    </Section>
  );
}