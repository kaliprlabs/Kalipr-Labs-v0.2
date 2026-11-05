'use client'

import dynamic from 'next/dynamic'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ease } from '@/lib/utils'

const HeroVisual = dynamic(() => import('@/components/visuals/HeroVisual'), {
  ssr: false,
  loading: () => (
    <div className="aspect-square w-full max-w-[520px] animate-pulse rounded-2xl bg-surface" />
  ),
})

const variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center dot-grid bg-canvas pt-[72px]">
      {/* subtle vignette overlay so dots fade toward edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #FAFAF8 100%)',
        }}
      />

      <div className="container-width relative z-10 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_auto]">
          {/* ── Left: Copy ── */}
          <div className="max-w-[600px]">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0, ease }}
            >
              <SectionLabel>Independent Software Product Studio</SectionLabel>
            </motion.div>

            <motion.h1
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="mt-6 text-balance font-heading text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.08] tracking-tight text-primary"
            >
              Engineering ideas into{' '}
              <span className="text-accent">products</span>{' '}
              that matter.
            </motion.h1>

            <motion.p
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mt-6 text-[1.0625rem] leading-relaxed text-secondary max-w-[480px]"
            >
              We build software products and engineer digital solutions for real-world
              business problems. From idea to production — with precision and purpose.
            </motion.p>

            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button href="/contact" variant="primary" size="lg">
                Start a Project
              </Button>
              <Button href="/work" variant="ghost" size="lg" className="group">
                See Our Work
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Button>
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="hidden lg:flex justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, #FAFAF8)' }}
      />
    </section>
  )
}

