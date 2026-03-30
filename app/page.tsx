import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Toolbox from '@/components/Toolbox'
import DigitalCrew from '@/components/DigitalCrew'
import FounderNote from '@/components/FounderNote'
import BeamLog from '@/components/BeamLog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <Toolbox />
      <DigitalCrew />
      <FounderNote />
      <BeamLog />
      <Footer />
    </main>
  )
}
