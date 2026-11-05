import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas pt-[72px]">
      <div className="container-width py-20 text-center">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">404</p>
        <h1 className="mt-6 font-heading text-[clamp(2rem,5vw,3rem)] font-semibold text-primary">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 text-base text-secondary max-w-sm mx-auto">
          The page you&apos;re looking for has either moved or was never here.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-inverse hover:bg-primary/90 transition-colors"
          >
            ← Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-secondary hover:border-border-strong hover:text-primary transition-colors"
          >
            Contact us
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/work" className="hover:text-primary transition-colors">Work</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        </div>
      </div>
    </div>
  )
}

