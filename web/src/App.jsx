import './App.css'
import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { AboutSection } from './sections/AboutSection.jsx'
import { ExperienceSection } from './sections/ExperienceSection.jsx'
import { ProjectsSection } from './sections/ProjectsSection.jsx'
import { SkillsSection } from './sections/SkillsSection.jsx'
import { ContactSection } from './sections/ContactSection.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section.section'))
    if (!sections.length) return

    const NAV_OFFSET = 140
    const intersectingIds = new Set()

    const BOTTOM_THRESHOLD = 30
    const isAtBottom = () => {
      const scrollBottom = window.scrollY + window.innerHeight
      const pageBottom = document.documentElement.scrollHeight
      return pageBottom - scrollBottom <= BOTTOM_THRESHOLD
    }

    const getActiveId = () => {
      if (isAtBottom()) return sections[sections.length - 1].id

      const line = NAV_OFFSET
      if (intersectingIds.size === 0) {
        let activeId = sections[0].id
        for (const s of sections) {
          const r = s.getBoundingClientRect()
          if (r.top <= line) activeId = s.id
        }
        return activeId
      }
      const candidates = []
      for (const id of intersectingIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const r = el.getBoundingClientRect()
        const containsLine = r.top <= line && r.bottom > line
        if (containsLine) candidates.push({ id, top: r.top })
      }
      if (candidates.length > 0) {
        const best = candidates.reduce((a, b) => (a.top < b.top ? a : b))
        return best.id
      }
      let fallback = null
      let fallbackTop = Infinity
      for (const id of intersectingIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top < fallbackTop) {
          fallbackTop = top
          fallback = id
        }
      }
      return fallback ?? sections[0].id
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id) {
            if (entry.isIntersecting) intersectingIds.add(entry.target.id)
            else intersectingIds.delete(entry.target.id)
          }
        }
        setActiveSection(getActiveId())
      },
      {
        root: null,
        rootMargin: `-${NAV_OFFSET}px 0px 0px 0px`,
        threshold: 0,
      }
    )

    sections.forEach((s) => observer.observe(s))

    const onHashChange = () => {
      const id = window.location.hash.slice(1)
      if (id && sections.some((s) => s.id === id)) {
        setActiveSection(id)
      }
    }

    const onScroll = () => {
      if (isAtBottom()) setActiveSection(sections[sections.length - 1].id)
    }

    setActiveSection(getActiveId())
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      sections.forEach((s) => observer.unobserve(s))
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="shell">
      <Navbar activeSection={activeSection} />
      <div className="shell-inner">
        <main>
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
      <footer className="footer">
        <img
          src={`${import.meta.env.BASE_URL}rd-logo-trans-blk.png`}
          alt="RD"
          className="footer-logo"
        />
      </footer>
    </div>
  )
}

export default App
