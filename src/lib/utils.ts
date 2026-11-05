import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ease = [0.16, 1, 0.3, 1] as const

export const transition = {
  fast:   { duration: 0.3, ease },
  normal: { duration: 0.6, ease },
  slow:   { duration: 0.9, ease },
} as const

export const stagger = {
  fast:   0.05,
  normal: 0.08,
  slow:   0.12,
} as const

export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const

