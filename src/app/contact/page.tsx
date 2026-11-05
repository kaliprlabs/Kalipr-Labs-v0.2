import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/animations/Reveal'
import ContactForm from '@/features/contact/ContactForm'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Start a Project',
  description:
    'Tell us about your project. We build software products, custom web applications, AI automation systems, and professional websites.',
}

export default function ContactPage() {
  return (
    <div className="bg-canvas pt-[72px]">
      <section className="section-pad">
        <div className="container-width">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
            {/* ── Left: Intro ── */}
            <div>
              <Reveal>
                <SectionLabel>// contact</SectionLabel>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-primary text-balance">
                  Let&apos;s talk about what you&apos;re building.
                </h1>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 text-base leading-relaxed text-secondary">
                  We work with founders, business owners, and teams who have a real problem
                  to solve. Tell us what you&apos;re working on — we&apos;ll take it from there.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 space-y-5">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-muted uppercase tracking-widest">
                      Response time
                    </span>
                    <span className="text-sm text-secondary">1–2 business days</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-muted uppercase tracking-widest">
                      Email directly
                    </span>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-sm text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-muted uppercase tracking-widest">
                      Based in
                    </span>
                    <span className="text-sm text-secondary">{COMPANY.location}</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── Right: Form ── */}
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}

