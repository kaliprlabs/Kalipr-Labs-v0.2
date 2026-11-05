'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[Error boundary]', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas pt-[72px]">
      <div className="container-width py-20 text-center">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">Error</p>
        <h1 className="mt-6 font-heading text-[clamp(2rem,5vw,3rem)] font-semibold text-primary">
          Something went wrong.
        </h1>
        <p className="mt-4 text-base text-secondary max-w-sm mx-auto">
          An unexpected error occurred. You can try again or return to the homepage.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-inverse hover:bg-primary/90 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-secondary hover:border-border-strong hover:text-primary transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

