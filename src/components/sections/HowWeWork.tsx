'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal } from '@/components/animations/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { PROCESS_STEPS } from '@/lib/constants'
import { cn, ease } from '@/lib/utils'

export default function HowWeWork() {
  const [active, setActive] = useState<string>(PROCESS_STEPS[0].step)

  const activeStep = PROCESS_STEPS.find((s) => s.step === active)!

  return (
    <section className="section-pad bg-surface border-t border-border">
      <div className="container-width">
        <Reveal>
          <SectionLabel>// process</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight text-primary">
            How we work.
          </h2>
        </Reveal>

        {/* ── Desktop Tab Layout ── */}
        <div className="mt-14 hidden md:block">
          {/* Tab list */}
          <div
            role="tablist"
            aria-label="Process steps"
            className="flex border-b border-border gap-1"
          >
            {PROCESS_STEPS.map((step) => {
              const isActive = step.step === active
              return (
                <button
                  key={step.step}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tab-panel-${step.step}`}
                  id={`tab-${step.step}`}
                  onClick={() => setActive(step.step)}
                  className={cn(
                    'group relative flex flex-col items-start px-6 py-4 text-left transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
                    isActive ? 'text-primary' : 'text-muted hover:text-secondary',
                  )}
                >
                  <span className="font-mono text-xs tracking-widest uppercase">
                    {step.step}
                  </span>
                  <span
                    className={cn(
                      'mt-1 font-heading text-sm font-semibold transition-colors',
                      isActive ? 'text-primary' : 'text-secondary group-hover:text-primary',
                    )}
                  >
                    {step.title}
                  </span>
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{ duration: 0.3, ease }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Tab panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              id={`tab-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`tab-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease }}
              className="mt-8 max-w-[640px]"
            >
              <h3 className="font-heading text-xl font-semibold text-primary">
                {activeStep.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-secondary">
                {activeStep.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Mobile vertical list ── */}
        <div className="mt-10 flex flex-col gap-6 md:hidden">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border',
                      'font-mono text-xs font-medium transition-colors',
                      'border-accent/40 bg-accent-subtle text-accent',
                    )}
                  >
                    {step.step}
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-heading text-base font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
