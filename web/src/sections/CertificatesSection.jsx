import { Section } from '../components/Section.jsx'
import { certificates } from '../data/certificates.js'

const ExternalArrow = () => (
  <svg className="certificate-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M17 7h-10v10" />
  </svg>
)

export function CertificatesSection() {
  return (
    <Section id="certificates" title="Certificates">
      <div className="certificates-list" aria-label="Certificates">
        {certificates.map((cert) => (
          <article key={cert.id} className="certificate-card">
            <div className="certificate-card-head">
              <h3 className="certificate-title">{cert.title}</h3>
            </div>
            <p className="certificate-meta">
              {cert.teacher
                ? `${cert.teacher} | ${cert.issuer} – Issued ${cert.issued}`
                : `${cert.issuer} – Issued ${cert.issued}`}
            </p>
            <p className="certificate-id">
              Credential ID – <span className="certificate-id-value">{cert.credentialId}</span>
            </p>
            <a className="certificate-verify-link" href={cert.url} target="_blank" rel="noreferrer">
              View on {cert.issuer}
              <ExternalArrow />
            </a>
          </article>
        ))}
      </div>
      <p className="certificates-footnote">Additional certifications in progress.</p>
    </Section>
  )
}
