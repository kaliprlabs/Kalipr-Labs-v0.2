export type NavLink = {
  href: string
  label: string
}

export type Service = {
  id: string
  title: string
  description: string
  link: string
}

export type ProcessStep = {
  step: string
  title: string
  summary: string
  description: string
}

export type PhilosophyPrinciple = {
  num: string
  title: string
  description: string
}

export type ContactFormData = {
  name: string
  email: string
  company?: string
  projectType: string
  budget?: string
  description: string
  honeypot?: string
  submittedAt?: number
}

