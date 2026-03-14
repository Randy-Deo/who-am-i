import { Section } from '../components/Section.jsx'

export function AboutSection() {
  return (
    <Section id="about" label="" title="" hideHeader>
      <div className="hero">
        <div className="hero-left">
          <img
            src={`${import.meta.env.BASE_URL}randy-profile.png`}
            alt="Randy Deo"
            className="hero-photo"
          />
        </div>
        <div className="hero-right">
          <h1 className="hero-title">
            <span className="hero-title-line">
              Hi, I&apos;m Randy<span className="hero-fullstop">.</span>
            </span>
            <span className="hero-title-line hero-title-gradient">
              Software Developer<span className="hero-fullstop"> /</span>
            </span>
            <span className="hero-title-line hero-title-gradient">
              QA Engineer
            </span>
          </h1>
        </div>
      </div>

      <div className="stack-bar">
        <div className="stack-bar-track" aria-hidden="true">
          <div className="stack-bar-inner">
            <span>WEB</span>
            <span>/</span>
            <span>PROGRAMMING</span>
            <span>/</span>
            <span>DEVELOPMENT</span>
            <span>/</span>
            <span>TESTING</span>
            <span>/</span>
            <span>JAVASCRIPT</span>
            <span>/</span>
            <span>GOLANG</span>
            <span>/</span>
            <span>PYTHON</span>
            <span>/</span>
            <span>AWS</span>
            <span>/</span>
            <span>WEB</span>
            <span>/</span>
            <span>PROGRAMMING</span>
            <span>/</span>
            <span>DEVELOPMENT</span>
            <span>/</span>
            <span>TESTING</span>
            <span>/</span>
            <span>JAVASCRIPT</span>
            <span>/</span>
            <span>GOLANG</span>
            <span>/</span>
            <span>PYTHON</span>
            <span>/</span>
            <span>AWS</span>
            <span>/</span>
          </div>
        </div>
      </div>

      <div className="about-block">
        <h2 className="about-block-title">
          About<span className="section-title-period">.</span>
        </h2>
        <div className="about-block-row">
          <div className="about-block-text">
            <p className="about-block-tagline">
              Detail-oriented quality professional with a strong background in software development
              and testing.
            </p>
            <p className="about-block-paragraph">
              I focus on building and testing reliable applications, identifying and debugging
              defects early, and improving overall system quality through effective testing practices
              and close collaboration with development teams.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

