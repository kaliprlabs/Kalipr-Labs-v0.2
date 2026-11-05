import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { SERVICES, PROCESS_STEPS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Software product development, custom web applications, AI & workflow automation, and professional website development. Kalipr Labs, Pune.',
}

export default function ServicesPage() {
  return (
    <div className="bg-canvas pt-[72px]">
      {/* Header */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// services</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-primary max-w-[640px] text-balance">
              We build software. For real problems.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-base leading-relaxed text-secondary max-w-[480px]">
              Four areas of work. All executed with the same engineering standard — built
              to function reliably, scale sensibly, and deliver genuine value.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services detail */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <div className="space-y-5">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.06}>
                <div className="group rounded-2xl border border-border bg-white p-7 md:p-10 hover:border-border-strong hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <div className="flex-1 min-w-[260px]">
                      <span className="font-mono text-xs text-muted uppercase tracking-widest">
                        {service.id}
                      </span>
                      <h2 className="mt-3 font-heading text-xl font-semibold text-primary">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-secondary max-w-[560px]">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:text-accent-hover transition-colors mt-1 shrink-0"
                    >
                      Start a project →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad border-b border-border bg-surface">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// how we work</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-primary">
              Working with us.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <div className="rounded-xl border border-border bg-white p-6 h-full">
                  <span className="font-mono text-xs text-accent uppercase tracking-widest">
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-width text-center">
          <Reveal>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-primary">
              Have a project in mind?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-base text-secondary max-w-[400px] mx-auto">
              Tell us what you&apos;re working on. We&apos;ll take it from there.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Start a Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

