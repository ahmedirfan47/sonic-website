import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Badge } from "../components/ui/Badge";
import { flagshipProduct } from "../data/products";

export function ProductShowcase() {
  const p = flagshipProduct;

  return (
    <Section id="products" className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>Product</Eyebrow>
        </Reveal>

        <div className="mt-4 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <Reveal delay={80}>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
                  {p.name}
                </h2>
                <Badge>{p.status === "live" ? "Live" : "In development"}</Badge>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-lg text-[var(--color-text-muted)]">
                {p.tagline}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-dim)]">
                {p.description}
              </p>
            </Reveal>
            <Reveal delay={260}>
              <Link
                to={`/${p.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline"
              >
                Explore {p.name}
                <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="w-full md:max-w-sm">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="eyebrow mb-4">{p.industry}</div>
              <ul className="space-y-3">
                {p.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}