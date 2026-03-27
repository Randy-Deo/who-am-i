import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
]

const MOBILE_BREAKPOINT = 1024

export function Navbar() {
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
      <Link to="/" className="brand" onClick={closeMenu} aria-label="Home">
        <img
          src={`${import.meta.env.BASE_URL}rd-logo-trans-grey-crop.png`}
          alt=""
          className="brand-logo"
          width={44}
          height={44}
          decoding="async"
        />
        <div className="brand-text">
          <div className="brand-name">Randy Deo</div>
          <div className="brand-role">
            <span className="brand-role-line">Software Developer | </span>
            <span className="brand-role-line">Quality Assurance Engineer</span>
          </div>
        </div>
      </Link>
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
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `nav-link${isActive ? ' nav-link-active' : ''}`
              }
              onClick={closeMenu}
            >
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
