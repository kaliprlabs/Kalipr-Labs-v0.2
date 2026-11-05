'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'
import { ease } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: React.ElementType
}

export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const ref  = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}

