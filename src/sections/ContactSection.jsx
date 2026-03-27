import { Section } from '../components/Section.jsx'

const contactLinks = [
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/randy-deo',
    label: 'LinkedIn',
    icon: (
      <svg className="contact-card-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'email',
    href: 'mailto:randydeo@gmail.com',
    label: 'E-mail',
    icon: (
      <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

const ArrowIcon = () => (
  <svg className="contact-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M17 7h-10v10" />
  </svg>
)

export function ContactSection({ layout = 'stack' }) {
  const isHomeRow = layout === 'home'

  return (
    <Section
      id="contact"
      title="Contact"
      className={isHomeRow ? 'section--home-contact' : ''}
    >
      <div className="contact-grid">
        {contactLinks.map((link) => (
          <a
            key={link.id}
            className="contact-card"
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <span className="contact-card-icon-wrap">{link.icon}</span>
            <span className="contact-card-label">{link.label}</span>
            <span className="contact-card-arrow-wrap">
              <ArrowIcon />
            </span>
          </a>
        ))}
      </div>
    </Section>
  )
}

