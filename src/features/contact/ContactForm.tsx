'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from './schema'
import { cn } from '@/lib/utils'
import { COMPANY } from '@/lib/constants'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const PROJECT_TYPES = [
  'Software Product Development',
  'Custom Web Application',
  'AI & Workflow Automation',
  'Website Development',
  'Not sure yet',
] as const

const BUDGET_OPTIONS = [
  'Under ₹1L',
  '₹1L – ₹3L',
  '₹3L – ₹7L',
  '₹7L – ₹15L',
  '₹15L+',
  'Let\'s discuss',
]

const inputBase =
  'w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder:text-muted ' +
  'transition-colors duration-200 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 ' +
  'disabled:opacity-50 disabled:cursor-not-allowed'

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  // Set submittedAt on mount for bot timing check
  useEffect(() => {
    setValue('submittedAt', Date.now())
  }, [setValue])

  const onSubmit = async (data: ContactFormData) => {
    setFormState('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setFormState('success')
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMessage(
          (json as { error?: string }).error ??
            'Something went wrong. Please try again.',
        )
        setFormState('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setFormState('error')
    }
  }

  // ── Success state ──────────────────────────────────────────
  if (formState === 'success') {
    return (
      <div className="rounded-2xl border border-border bg-white p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-subtle">
          <span className="text-xl text-accent">✓</span>
        </div>
        <h3 className="font-heading text-lg font-semibold text-primary">
          Message received.
        </h3>
        <p className="mt-2 text-sm text-secondary">
          Thank you for reaching out. We&apos;ll review your inquiry and reply to{' '}
          <span className="text-primary font-medium">your email</span> within 1–2
          business days.
        </p>
        <p className="mt-4 text-xs text-muted">
          In a hurry? Email us directly at{' '}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-accent underline underline-offset-2"
          >
            {COMPANY.email}
          </a>
        </p>
      </div>
    )
  }

  const isLoading = formState === 'loading'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      aria-label="Project inquiry form"
    >
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="sr-only"
        {...register('honeypot')}
      />

      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Rahul Sharma"
            disabled={isLoading}
            className={cn(inputBase, errors.name && 'border-red-400')}
            {...register('name')}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="rahul@company.com"
            disabled={isLoading}
            className={cn(inputBase, errors.email && 'border-red-400')}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-primary">
          Company{' '}
          <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          placeholder="Your company or studio"
          disabled={isLoading}
          className={inputBase}
          {...register('company')}
        />
      </div>

      {/* Project type */}
      <div>
        <label
          htmlFor="projectType"
          className="mb-1.5 block text-sm font-medium text-primary"
        >
          Project Type <span className="text-accent">*</span>
        </label>
        <select
          id="projectType"
          disabled={isLoading}
          className={cn(inputBase, 'cursor-pointer', errors.projectType && 'border-red-400')}
          {...register('projectType')}
          defaultValue=""
        >
          <option value="" disabled>
            Select a project type
          </option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className="mt-1 text-xs text-red-500">{errors.projectType.message}</p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-primary">
          Approximate Budget{' '}
          <span className="text-muted font-normal">(optional)</span>
        </label>
        <select
          id="budget"
          disabled={isLoading}
          className={cn(inputBase, 'cursor-pointer')}
          {...register('budget')}
          defaultValue=""
        >
          <option value="">Select a range (optional)</option>
          {BUDGET_OPTIONS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="mb-1.5 block text-sm font-medium text-primary"
        >
          Tell us about your project <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          placeholder="Describe your idea, the problem you're solving, and what you need help with. The more context you share, the better we can respond."
          disabled={isLoading}
          className={cn(inputBase, 'resize-y min-h-[120px]', errors.description && 'border-red-400')}
          {...register('description')}
        />
        {errors.description && (
          <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Error message */}
      {formState === 'error' && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {errorMessage}{' '}
          <a
            href={`mailto:${COMPANY.email}`}
            className="underline underline-offset-2 hover:text-red-700"
          >
            {COMPANY.email}
          </a>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className={cn(
          'inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5',
          'font-sans text-sm font-medium text-on-inverse',
          'bg-primary transition-all duration-200 hover:bg-primary/90',
          'focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        )}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          'Send Inquiry'
        )}
      </button>
    </form>
  )
}

