import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  inverse?: boolean
}

export function SectionLabel({ children, className, inverse }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-xs tracking-[0.1em] uppercase mb-6',
        inverse ? 'text-on-inverse-muted' : 'text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}

