import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { NAV_LINKS, COMPANY, SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-inverse text-on-inverse">
      {/* ── CTA Band ── */}
      <div className="section-pad border-b border-border-inverse">
        <div className="container-width">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest uppercase text-on-inverse-muted mb-6">
              // contact
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-on-inverse tracking-tight text-balance mb-6">
              Have a problem worth solving?
            </h2>
            <p className="text-on-inverse-muted text-lg mb-10 max-w-lg leading-relaxed">
              Tell us what you&apos;re building. We&apos;ll let you know if we&apos;re the right fit.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-on-inverse text-primary font-medium px-7 py-3.5 rounded-full text-base hover:bg-on-inverse/90 transition-colors"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-mono text-sm text-on-inverse-muted hover:text-on-inverse transition-colors"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer Links ── */}
      <div className="section-pad-sm">
        <div className="container-width">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
            {/* Brand */}
            <div>
              <p className="font-heading font-semibold text-sm tracking-[0.14em] text-on-inverse mb-2">
                KALIPR LABS
              </p>
              <p className="font-mono text-xs text-on-inverse-muted uppercase tracking-widest">
                {COMPANY.tagline}
              </p>
              <p className="text-sm text-on-inverse-muted mt-1">{COMPANY.location}</p>
            </div>

            {/* Nav links */}
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-10 gap-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-on-inverse-muted hover:text-on-inverse transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="text-sm text-on-inverse-muted hover:text-on-inverse transition-colors">
                Contact
              </Link>
            </nav>

            {/* LinkedIn */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-on-inverse-muted hover:text-on-inverse transition-colors flex items-center gap-1.5"
            >
              LinkedIn
              <ArrowRight className="w-3 h-3 -rotate-45" />
            </a>
          </div>

          {/* Bottom strip */}
          <div className="mt-14 pt-6 border-t border-border-inverse flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="font-mono text-xs text-on-inverse-muted">
              © {year} Kalipr Labs · Creators of{' '}
              <a
                href={SOCIAL_LINKS.kalvora}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-on-inverse transition-colors"
              >
                Kalvora
              </a>
            </p>
            <p className="font-mono text-xs text-on-inverse-muted">
              Built by Kalipr Labs · Pune, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

