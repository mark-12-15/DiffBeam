import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Toolbox from '@/components/Toolbox'
import FounderNote from '@/components/FounderNote'
import DigitalCrew from '@/components/DigitalCrew'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <Toolbox />
      <FounderNote />
      <DigitalCrew />
      <Footer />
    </main>
  )
}
