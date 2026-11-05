export const NAV_LINKS = [
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/work',     label: 'Work' },
  { href: '/about',    label: 'About' },
] as const

export const COMPANY = {
  name:            'Kalipr Labs',
  tagline:         'Independent Software Product Studio',
  location:        'Pune, India',
  email:           'contact@kaliprlabs.in',
  url:             'https://kaliprlabs.in',
  foundedYear:     2025,
  kalvoraUsers:    '500+',
  clientProjects:  '5+',
} as const

export const SOCIAL_LINKS = {
  linkedin:        'https://www.linkedin.com/company/kalipr-labs',
  kalvora:         'https://kalvora.kaliprlabs.in',
  founderPortfolio:'https://pratik.kaliprlabs.in',
  founderLinkedIn: 'https://www.linkedin.com/in/pratikanpat',
} as const

export const SERVICES = [
  {
    id: '01',
    title: 'Software Product Development',
    description:
      'We build SaaS platforms and software products from idea to market. Kalvora is an example — purpose-built for a defined user problem, owned and operated by us.',
    link: '/services',
  },
  {
    id: '02',
    title: 'Custom Web Applications',
    description:
      'Purpose-built web applications engineered around your specific business requirements. No templates. No shortcuts. Built for how your business actually works.',
    link: '/services',
  },
  {
    id: '03',
    title: 'AI & Workflow Automation',
    description:
      'Automation systems that connect business processes, reduce manual overhead, and improve operational reliability. Practical intelligence — not AI for its own sake.',
    link: '/services',
  },
  {
    id: '04',
    title: 'Website Development',
    description:
      'Professional websites built to engineering-grade standards — fast, accessible, and built to perform. For businesses that take their digital presence seriously.',
    link: '/services',
  },
] as const

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    summary: 'Understand the problem',
    description:
      "We understand the business problem, the users it affects, and the constraints that matter. We don't start building until we understand what we're actually solving.",
  },
  {
    step: '02',
    title: 'Strategize',
    summary: 'Define the approach',
    description:
      'We define the product architecture, feature scope, and technical approach. Decisions made here determine the quality of everything that follows.',
  },
  {
    step: '03',
    title: 'Engineer',
    summary: 'Build with precision',
    description:
      'We design and build the solution with engineering precision. We write code that is maintainable, well-structured, and built to evolve — not just built to ship.',
  },
  {
    step: '04',
    title: 'Deliver',
    summary: 'Ship to production',
    description:
      'Test, deploy, and launch. We handle the full delivery process — from production infrastructure to the moment your users first use the product.',
  },
  {
    step: '05',
    title: 'Evolve',
    summary: 'Improve continuously',
    description:
      "Software doesn't end at launch. We iterate based on real usage, fix what needs fixing, and improve what can be improved.",
  },
] as const

export const KALVORA_FEATURES = [
  'Branded proposal generation',
  'Client approval workflows',
  'Proposal sharing with clients',
  'GST invoice generation',
  'Studio management workflows',
] as const

export const PHILOSOPHY_PRINCIPLES = [
  {
    num: '01',
    title: 'Understand before building',
    description: "Most bad software comes from building the wrong thing confidently. We don't write code until we understand the problem clearly.",
  },
  {
    num: '02',
    title: 'Quality over shortcuts',
    description: "Speed matters. Quality matters more. We build things that work correctly, hold up under real usage, and don't create debt.",
  },
  {
    num: '03',
    title: 'Simplicity over complexity',
    description: 'The best solution is usually the simplest one that solves the problem. We resist the urge to over-engineer.',
  },
  {
    num: '04',
    title: 'Build for reliability',
    description: 'Software that people depend on must be dependable. We don\'t ship things we wouldn\'t trust ourselves.',
  },
  {
    num: '05',
    title: 'Learn from real users',
    description: 'Product decisions should come from actual behaviour, not assumptions. We test, listen carefully, and iterate honestly.',
  },
  {
    num: '06',
    title: 'Every project is a responsibility',
    description: 'When a business trusts us with their technology, we treat it as a serious responsibility — not a contract to fulfil and forget.',
  },
] as const

