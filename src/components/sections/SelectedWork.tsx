import Link from 'next/link'
import { Reveal } from '@/components/animations/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function SelectedWork() {
  return (
    <section className="section-pad border-t border-border bg-canvas">
      <div className="container-width">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel>// work</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight text-primary">
                Selected client projects.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-hover transition-colors"
            >
              View all work
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-10 rounded-2xl border border-border bg-surface p-8 md:p-12">
            <p className="text-base leading-relaxed text-secondary max-w-[560px]">
              We have worked with{' '}
              <span className="font-semibold text-primary">5+ clients</span> across
              product development, custom web engineering, and automation projects.
            </p>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Detailed case studies are being prepared. For project references or to
              discuss past work,{' '}
              <Link
                href="/contact"
                className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                reach out directly
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

