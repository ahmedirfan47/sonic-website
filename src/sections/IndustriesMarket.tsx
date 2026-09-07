import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { industries, whyGccMena } from "../data/company";

export function IndustriesMarket() {
  return (
    <Section id="industries" className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>Industries & Market</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Starting with distribution. Expanding across operational complexity.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={140 + i * 80}>
              <div
                className={`rounded-2xl border p-6 ${
                  ind.status === "current"
                    ? "border-[var(--color-accent)]/40 bg-[var(--color-accent-dim)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-[var(--color-text)]">
                    {ind.name}
                  </h3>
                  <span className="text-xs text-[var(--color-text-dim)]">
                    {ind.status === "current" ? "Current focus" : "Expansion path"}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {ind.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-14">
          <Reveal>
            <Eyebrow>Why GCC/MENA</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="max-w-xl text-xl font-semibold text-[var(--color-text)] md:text-2xl">
              The region is the starting point, not the ceiling.
            </h3>
          </Reveal>
          <div className="mt-8 space-y-4">
            {whyGccMena.map((point, i) => (
              <Reveal key={point} delay={140 + i * 70}>
                <p className="max-w-2xl border-l-2 border-[var(--color-border-strong)] pl-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {point}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}