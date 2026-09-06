import { ArrowRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Reveal } from "../components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      {/* subtle grid backdrop -- no gradients, no glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative">
        <Reveal>
          <Badge>Building for the GCC</Badge>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-text)] md:text-6xl">
            AI-operated business systems for operationally complex companies.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            Sonic replaces manual, WhatsApp-and-spreadsheet operations with
            software that runs itself -- starting with order-taking and
            delivery for wholesale distribution in the GCC.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="/#contact">
              Talk to Sonic
              <ArrowRight size={16} />
            </Button>
            <Button as="a" href="/salesman" variant="ghost">
              See Salesman
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}