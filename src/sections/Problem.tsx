import { MessageSquare, FileSpreadsheet, EyeOff } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";

const points = [
  {
    icon: MessageSquare,
    title: "Orders live in chat threads",
    body: "Prices, quantities, and confirmations are scattered across WhatsApp messages -- searchable by no one, remembered by whoever happened to answer.",
  },
  {
    icon: FileSpreadsheet,
    title: "Stock is tracked by memory",
    body: "Inventory lives in someone's head or a spreadsheet updated after the fact -- so nobody actually knows what's available until it's too late.",
  },
  {
    icon: EyeOff,
    title: "Delivery has no record",
    body: "Who delivered what, to which area, and when, is rarely written down anywhere -- so accountability depends entirely on memory.",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <Container>
        <Reveal>
          <Eyebrow>The Problem</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Wholesale operations run on messages, memory, and spreadsheets.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={160 + i * 80}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <point.icon size={22} className="text-[var(--color-accent)]" />
                <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}