import { useState, useEffect } from 'react'

const links = [
  { id: 'about', href: '#about', label: 'About' },
  { id: 'experience', href: '#experience', label: 'Experience' },
  { id: 'skills', href: '#skills', label: 'Skills' },
  { id: 'projects', href: '#projects', label: 'Projects' },
  { id: 'contact', href: '#contact', label: 'Contact' },
]

const MOBILE_BREAKPOINT = 1000

export function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setMenuOpen(false)
    }
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  return (
    <header className="app-header">
      <div className="brand">
        <div className="brand-name">Randy Deo</div>
        <div className="brand-role">
          <span className="brand-role-line">Software Developer / </span>
          <span className="brand-role-line">Quality Assurance Engineer</span>
        </div>
      </div>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary">
        <button
          type="button"
          className="nav-hamburger"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav-hamburger-line" />
          <span className="nav-hamburger-line" />
          <span className="nav-hamburger-line" />
        </button>
        <div id="nav-menu" className="nav-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${
                activeSection === link.id ? ' nav-link-active' : ''
              }`}
              onClick={closeMenu}
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

