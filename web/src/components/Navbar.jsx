const links = [
  { id: 'about', href: '#about', label: 'About' },
  { id: 'experience', href: '#experience', label: 'Experience' },
  { id: 'skills', href: '#skills', label: 'Skills' },
  { id: 'projects', href: '#projects', label: 'Projects' },
  { id: 'contact', href: '#contact', label: 'Contact' },
]

export function Navbar({ activeSection }) {
  return (
    <header className="app-header">
      <div className="brand">
        <div className="brand-name">Randy Deo</div>
        <div className="brand-role">Software Developer / Quality Assurance Engineer</div>
      </div>
      <nav className="nav" aria-label="Primary">
        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${
                activeSection === link.id ? ' nav-link-active' : ''
              }`}
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

