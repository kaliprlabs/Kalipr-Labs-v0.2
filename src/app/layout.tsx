import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { COMPANY } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: 'Kalipr Labs — Independent Software Product Studio',
    template: '%s — Kalipr Labs',
  },
  description:
    'Kalipr Labs builds software products and engineers digital solutions for businesses. Creators of Kalvora. Based in Pune, India.',
  keywords: [
    'software products',
    'SaaS development',
    'custom web applications',
    'AI automation',
    'Kalvora',
    'Pune',
    'India',
    'software studio',
  ],
  authors: [{ name: 'Pratik Anpat', url: 'https://pratik.kaliprlabs.in' }],
  creator: 'Kalipr Labs',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: COMPANY.url,
    title: 'Kalipr Labs — Independent Software Product Studio',
    description:
      'Kalipr Labs builds software products and engineers digital solutions for businesses. Creators of Kalvora. Based in Pune, India.',
    siteName: 'Kalipr Labs',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kalipr Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalipr Labs — Independent Software Product Studio',
    description:
      'Kalipr Labs builds software products and engineers digital solutions. Creators of Kalvora.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kalipr Labs',
  url: COMPANY.url,
  logo: `${COMPANY.url}/favicon.svg`,
  description: 'Independent software product studio. Creators of Kalvora.',
  founder: {
    '@type': 'Person',
    name: 'Pratik Anpat',
    url: 'https://pratik.kaliprlabs.in',
  },
  foundingDate: '2025',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressCountry: 'IN',
  },
  sameAs: ['https://www.linkedin.com/company/kalipr-labs'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-canvas text-secondary font-sans antialiased overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

