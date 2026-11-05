import Hero from '@/components/sections/Hero'
import CredibilityBar from '@/components/sections/CredibilityBar'
import Services from '@/components/sections/Services'
import KalvoraShowcase from '@/components/sections/KalvoraShowcase'
import HowWeWork from '@/components/sections/HowWeWork'
import SelectedWork from '@/components/sections/SelectedWork'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <Services />
      <KalvoraShowcase />
      <HowWeWork />
      <SelectedWork />
    </>
  )
}

