import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/animations/Reveal'
import { PHILOSOPHY_PRINCIPLES, SOCIAL_LINKS, COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Kalipr Labs is an independent software product studio founded in Pune, India. We build software products and engineer digital solutions for real-world business problems.',
}

const TIMELINE = [
  {
    year: '2025',
    events: [
      'Kalipr Labs founded in Pune, India.',
      'First 2 client projects delivered — custom web applications and product development.',
      'Kalvora development begun: proposal & invoice software for interior designers.',
    ],
  },
  {
    year: '2026',
    events: [
      'Kalvora launched publicly and reached 500+ active users.',
      '3 additional client projects delivered across product development and automation.',
      'Kalipr Labs reaches 5+ client projects milestone.',
    ],
  },
  {
    year: 'Now',
    events: [
      'Continuing to build and improve Kalvora.',
      'Accepting new client projects.',
      'Exploring the next product to build.',
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="bg-canvas pt-[72px]">
      {/* Company intro */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// about</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-primary max-w-[680px] text-balance">
              An independent software product studio.
            </h1>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-[840px]">
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-secondary">
                Kalipr Labs is an independent software product studio based in Pune, India.
                We build software products from scratch and engineer custom digital solutions
                for businesses that need something built properly.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-base leading-relaxed text-secondary">
                We work at the intersection of software engineering and product thinking —
                not just writing code, but building things that solve the right problems
                the right way. Our flagship product, Kalvora, is used by 500+ interior
                designers across India.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-pad border-b border-border bg-surface">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// philosophy</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-primary">
              How we think about software.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PHILOSOPHY_PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.num} delay={i * 0.06}>
                <div className="rounded-xl border border-border bg-white p-6 h-full">
                  <span className="font-mono text-xs text-muted uppercase tracking-widest">
                    {principle.num}
                  </span>
                  <h3 className="mt-3 font-heading text-base font-semibold text-primary">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// timeline</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-primary">
              How we got here.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-0">
            {TIMELINE.map((entry, i) => (
              <Reveal key={entry.year} delay={i * 0.08}>
                <div className="flex gap-8 border-t border-border py-8 first:border-t-0">
                  <div className="w-16 shrink-0 pt-0.5">
                    <span
                      className={`font-heading text-base font-semibold ${
                        entry.year === 'Now' ? 'text-accent' : 'text-primary'
                      }`}
                    >
                      {entry.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-2">
                      {entry.events.map((event) => (
                        <li key={event} className="flex items-start gap-3 text-sm text-secondary">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-pad border-b border-border bg-surface">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// founder</SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 max-w-[600px]">
              <h2 className="font-heading text-2xl font-semibold text-primary">
                Pratik Anpat
              </h2>
              <p className="mt-1 font-mono text-xs text-muted uppercase tracking-widest">
                Founder, Kalipr Labs · {COMPANY.location}
              </p>
              <p className="mt-5 text-base leading-relaxed text-secondary">
                Pratik founded Kalipr Labs to build software that solves real problems —
                not software built to look impressive in a portfolio. He handles product
                strategy, engineering, and design across all Kalipr Labs work.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={SOCIAL_LINKS.founderPortfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-hover transition-colors"
                >
                  Portfolio →
                </a>
                <a
                  href={SOCIAL_LINKS.founderLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-hover transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-width">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="font-heading text-xl font-semibold text-primary">
                  Working on something worth building?
                </h2>
                <p className="mt-2 text-sm text-secondary max-w-[400px]">
                  We&apos;re selective about the projects we take on. If your problem is
                  worth solving properly, we&apos;d like to hear about it.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-inverse hover:bg-primary/90 transition-colors shrink-0"
              >
                Start a conversation →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

