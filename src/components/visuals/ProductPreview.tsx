import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProductPreviewProps {
  src?: string
  alt?: string
  className?: string
}

/**
 * ProductPreview — displays a Kalvora screenshot in a styled browser-chrome frame.
 * Drop screenshots into: public/screenshots/kalvora/
 * Expected filename: proposal-editor.png
 *
 * If the image is not yet available, a branded placeholder is shown.
 */
export function ProductPreview({
  src = '/screenshots/kalvora/proposal-editor.png',
  alt = 'Kalvora proposal editor — create branded proposals for interior design projects',
  className,
}: ProductPreviewProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Browser chrome frame */}
      <div className="rounded-xl overflow-hidden border border-border-inverse shadow-2xl bg-surface">
        {/* Chrome top bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-canvas border-b border-border">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <div className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 ml-3">
            <div className="bg-surface rounded-md px-3 py-1.5 max-w-[240px]">
              <span className="text-xs font-mono text-muted">kalvora.kaliprlabs.in</span>
            </div>
          </div>
        </div>

        {/* Screenshot area */}
        <div className="relative aspect-[4/3] bg-surface">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Decorative glow */}
      <div
        className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, #1A5C3A 0%, transparent 70%)' }}
        aria-hidden="true"
      />
    </div>
  )
}

