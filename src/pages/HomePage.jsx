import { HeroSection } from '../sections/HeroSection.jsx'
import { ContactSection } from '../sections/ContactSection.jsx'

export function HomePage() {
  return (
    <div className="home-page">
      <section className="home-page-main" aria-label="Introduction">
        <HeroSection />
      </section>
      <ContactSection layout="home" />
    </div>
  )
}
