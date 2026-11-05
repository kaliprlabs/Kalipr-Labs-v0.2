import { COMPANY } from '@/lib/constants'

const stats = [
  { label: 'Founded', value: COMPANY.foundedYear.toString() },
  { label: 'Kalvora', value: `${COMPANY.kalvoraUsers} Users` },
  { label: 'Client Projects', value: COMPANY.clientProjects },
  { label: 'Location', value: COMPANY.location },
]

export default function CredibilityBar() {
  return (
    <section
      aria-label="Company highlights"
      className="section-pad-sm border-y border-border bg-canvas"
    >
      <div className="container-width">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="flex flex-col items-center px-6 md:px-10 text-center">
                <span className="font-heading text-lg font-semibold text-primary leading-none">
                  {stat.value}
                </span>
                <span className="mt-1 font-mono text-[0.65rem] text-muted uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <span
                  aria-hidden
                  className="hidden md:block h-8 w-px bg-border"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

