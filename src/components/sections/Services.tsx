import Link from 'next/link'
import { Reveal } from '@/components/animations/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  return (
    <section className="section-pad bg-canvas border-t border-border">
      <div className="container-width">
        {/* Header */}
        <Reveal>
          <SectionLabel>// services</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight text-primary text-balance">
            Four areas. One standard of work.
          </h2>
        </Reveal>

        {/* Asymmetric bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            // Asymmetric spans: 01 → md:col-span-2, 04 → md:col-span-2, rest 1
            const colSpan =
              service.id === '01' || service.id === '04'
                ? 'md:col-span-2'
                : 'md:col-span-1'
            const delay = i * 0.08

            return (
              <Reveal key={service.id} delay={delay} className={colSpan}>
                <Link
                  href={service.link}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 md:p-9
                             transition-all duration-300
                             hover:border-border-strong hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
                >
                  <span className="font-mono text-xs text-muted tracking-widest uppercase">
                    {service.id}
                  </span>

                  <h3 className="mt-5 font-heading text-lg font-semibold text-primary leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary flex-1">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-1.5 font-mono text-xs text-accent">
                    <span>Learn more</span>
                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

