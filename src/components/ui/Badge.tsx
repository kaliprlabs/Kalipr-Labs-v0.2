import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'live' | 'muted' | 'accent'
  className?: string
}

export function Badge({ children, variant = 'muted', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded-full border',
        variant === 'live'   && 'text-accent border-accent/30 bg-accent-subtle',
        variant === 'muted'  && 'text-muted border-border',
        variant === 'accent' && 'text-on-inverse border-border-inverse bg-on-inverse/10',
        className,
      )}
    >
      {variant === 'live' && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
      )}
      {children}
    </span>
  )
}

