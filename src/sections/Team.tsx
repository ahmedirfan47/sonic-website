import { ExternalLink } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section, Eyebrow } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { team } from "../data/team";

export function Team() {
  return (
    <Section id="team" className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal>
          <Eyebrow>Team</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
            Built by one person today. Hiring is next.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-[var(--color-text-muted)]">
            Sonic is early, and we'd rather say so plainly than pretend
            otherwise. See the Team path below if building this with us
            interests you.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          {team.map((person, i) => (
            <Reveal key={person.name} delay={200 + i * 80}>
              <div className="flex flex-col items-start gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg)] text-lg font-semibold text-[var(--color-text-muted)]">
                  {person.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-[var(--color-text)]">
                      {person.name}
                    </h3>
                    <span className="text-sm text-[var(--color-text-dim)]">
                      {person.role}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {person.bio}
                  </p>
                </div>
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    aria-label={`${person.name} on LinkedIn`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}