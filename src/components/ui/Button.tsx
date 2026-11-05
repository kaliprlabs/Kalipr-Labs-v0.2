import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-inverse hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/50',
  secondary:
    'bg-transparent text-primary border border-border-strong hover:border-primary hover:bg-surface-hover',
  ghost:
    'bg-transparent text-secondary hover:text-primary',
  inverse:
    'bg-on-inverse text-primary hover:bg-on-inverse/90 focus-visible:ring-2 focus-visible:ring-on-inverse/50',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className,
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-2 font-sans font-medium rounded-full',
    'transition-all duration-200 cursor-pointer',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className,
  )

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

