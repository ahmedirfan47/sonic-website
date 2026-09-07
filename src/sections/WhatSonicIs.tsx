import { Building2, Package } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { mission } from "../data/company";

export function WhatSonicIs() {
  return (
    <Section id="company">
      <Container>
        <Reveal>
          <Eyebrow>What Sonic Is</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Sonic is a company. Our products are how we deliver on it.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-[var(--color-text-muted)]">
            {mission}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal delay={200}>
            <div className="rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-accent-dim)] p-7">
              <Building2 size={22} className="text-[var(--color-accent)]" />
              <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">
                Sonic — the company
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                A technology company building AI-operated business
                infrastructure. Sonic's scope is the long-term problem: giving
                operationally complex businesses systems that run their
                operations, not just report on them.
              </p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
              <Package size={22} className="text-[var(--color-text-muted)]" />
              <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">
                Salesman — a Sonic product
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                The first application of that infrastructure: an AI-operated
                order and delivery platform for wholesale distribution. One
                product among what Sonic intends to build over time.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}