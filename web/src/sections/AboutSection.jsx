import { Section } from '../components/Section.jsx'

export function AboutSection() {
  return (
    <Section id="about" title="" hideHeader>
      <div className="about-block">
        <h2 className="about-block-title">
          About<span className="section-title-period">.</span>
        </h2>
        <div className="about-block-row">
          <div className="about-block-text">
            <p className="about-block-tagline">
              Detail-oriented quality professional with a strong background in both software development
              and testing.
            </p>
            <p className="about-block-paragraph">
              I focus on building and testing reliable applications, identifying and debugging
              defects early, and improving system quality through effective testing practices
              and close collaboration with development teams. Having worked as both a developer
              and a QA engineer, I design with testability in mind and aim to deliver more robust
              solutions.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
