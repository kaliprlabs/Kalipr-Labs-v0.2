'use client'

import { motion, useReducedMotion } from 'motion/react'

const rings = [
  { cx: 310, cy: 250, r: 200, opacity: 0.07, delay: 0.3 },
  { cx: 370, cy: 190, r: 145, opacity: 0.055, delay: 0.5 },
  { cx: 240, cy: 310, r: 105, opacity: 0.065, delay: 0.7 },
]

const nodes = [
  { cx: 310,  cy: 50,  r: 7,  delay: 0.9  },
  { cx: 510,  cy: 190, r: 5.5, delay: 1.0 },
  { cx: 440,  cy: 380, r: 6,  delay: 1.1  },
  { cx: 140,  cy: 290, r: 5.5, delay: 1.2 },
  { cx: 335,  cy: 250, r: 11, delay: 1.3  }, // Centre — largest
]

const connectors = [
  { x1: 310, y1: 50, x2: 335, y2: 250 },
  { x1: 510, y1: 190, x2: 335, y2: 250 },
  { x1: 335, y1: 250, x2: 140, y2: 290 },
]

export default function HeroVisual() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      className="relative w-full max-w-[560px] mx-auto select-none pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 580 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Rings */}
        {rings.map((ring, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx={ring.cx}
            cy={ring.cy}
            r={ring.r}
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
            style={{ opacity: ring.opacity }}
            initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: ring.opacity }}
            transition={{
              pathLength: { duration: 1.8, delay: ring.delay, ease: 'easeOut' },
              opacity:    { duration: 0.4, delay: ring.delay },
            }}
          />
        ))}

        {/* Connectors */}
        {connectors.map((line, i) => (
          <motion.line
            key={`line-${i}`}
            x1={line.x1} y1={line.y1}
            x2={line.x2} y2={line.y2}
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="4 6"
            className="text-primary"
            style={{ opacity: 0.09 }}
            initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.09 }}
            transition={{ duration: 1.2, delay: 1.0 + i * 0.1, ease: 'easeOut' }}
          />
        ))}

        {/* Accent nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#1A5C3A"
            initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: node.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
          />
        ))}

        {/* Slow continuous rotation on outermost ring (barely perceptible) */}
        {!shouldReduceMotion && (
          <motion.circle
            cx={rings[0].cx}
            cy={rings[0].cy}
            r={rings[0].r + 24}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="3 60"
            className="text-accent"
            style={{ opacity: 0.25, transformOrigin: `${rings[0].cx}px ${rings[0].cy}px` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </svg>
    </div>
  )
}

