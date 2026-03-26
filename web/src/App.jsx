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

    const BOTTOM_THRESHOLD = 30

    const getNavOffset = () => {
      const header = document.querySelector('.app-header')
      if (!header) return 140
      const rect = header.getBoundingClientRect()
      const height = Math.ceil(rect.height)
      return height > 0 ? height : 140
    }

    const setNavOffsetCssVar = () => {
      const offset = getNavOffset()
      document.documentElement.style.setProperty('--nav-offset', `${offset}px`)
      return offset
    }

    let navOffset = setNavOffsetCssVar()
    let navLock = null
    let lastScrollY = window.scrollY
    const isAtBottom = () => {
      const scrollBottom = window.scrollY + window.innerHeight
      const pageBottom = document.documentElement.scrollHeight
      return pageBottom - scrollBottom <= BOTTOM_THRESHOLD
    }

    const getActiveId = (offset) => {
      // Only force the last section active when we're at the bottom AND not
      // actively scrolling upward (otherwise Contact can feel "stuck").
      if (isAtBottom() && window.scrollY >= lastScrollY - 2) {
        return sections[sections.length - 1].id
      }

      // "Active line" is just below the fixed header.
      // Adding a tiny epsilon biases toward the next section when the line
      // falls exactly on a section boundary.
      const marker = window.scrollY + offset + 1
      let activeId = sections[0].id
      for (const s of sections) {
        const top = s.getBoundingClientRect().top + window.scrollY
        if (top <= marker) activeId = s.id
        else break
      }
      return activeId
    }

    const onHashChange = () => {
      const id = window.location.hash.slice(1)
      if (id && sections.some((s) => s.id === id)) {
        // Keep the active state aligned to the latest measured header height.
        navOffset = setNavOffsetCssVar()
        const targetEl = document.getElementById(id)
        if (targetEl) {
          const r = targetEl.getBoundingClientRect()
          const top = r.top + window.scrollY
          const bottom = top + r.height
          // Prevent the lock from getting "stuck" if layout/scroll timing is odd.
          navLock = {
            id,
            top,
            bottom,
            until: Date.now() + 1500,
            startScrollY: window.scrollY,
          }
        } else {
          navLock = null
        }
        setActiveSection(id)
      }
    }

    let scrollRafId = null
    const onScroll = () => {
      // Keep active-section highlighting in sync while the page scrolls.
      if (scrollRafId) return
      scrollRafId = requestAnimationFrame(() => {
        scrollRafId = null
        navOffset = setNavOffsetCssVar()
        const currentScrollY = window.scrollY
        const marker = window.scrollY + navOffset + 1
        if (navLock) {
          // If we've scrolled away from the click target, stop forcing the clicked section.
          if (Math.abs(currentScrollY - navLock.startScrollY) > 8) {
            navLock = null
            lastScrollY = currentScrollY
            setActiveSection(getActiveId(navOffset))
            return
          }

          // If the user scrolls away (especially upward), stop forcing the clicked section.
          if (currentScrollY < lastScrollY - 2) {
            navLock = null
            lastScrollY = currentScrollY
            setActiveSection(getActiveId(navOffset))
            return
          }

          if (Date.now() > navLock.until) {
            navLock = null
            lastScrollY = currentScrollY
            setActiveSection(getActiveId(navOffset))
            return
          }

          const targetEl = document.getElementById(navLock.id)
          if (targetEl) {
            const r = targetEl.getBoundingClientRect()
            const top = r.top + window.scrollY
            const bottom = top + r.height
            navLock.top = top
            navLock.bottom = bottom
          }

          // Stay locked to the clicked section until the active line is inside it.
          if (marker >= navLock.top - 1 && marker < navLock.bottom + 1) {
            navLock = null
            setActiveSection(getActiveId(navOffset))
          } else {
            setActiveSection(navLock.id)
            lastScrollY = currentScrollY
            return
          }
        } else {
          setActiveSection(getActiveId(navOffset))
        }

        lastScrollY = currentScrollY
      })
    }

    setActiveSection(getActiveId(navOffset))
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('scroll', onScroll, { passive: true })

    let rafId = null
    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        navOffset = setNavOffsetCssVar()
        navLock = null
        setActiveSection(getActiveId(navOffset))
      })
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (rafId) cancelAnimationFrame(rafId)
      if (scrollRafId) cancelAnimationFrame(scrollRafId)
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
          src={`${import.meta.env.BASE_URL}rd-logo-trans-grey.png`}
          alt="RD"
          className="footer-logo"
        />
      </footer>
    </div>
  )
}

export default App
