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
            <span>GOLANG</span>
            <span>/</span>
            <span>PYTHON</span>
            <span>/</span>
            <span>SELENIUM</span>
            <span>/</span>
            <span>JIRA</span>
            <span>/</span>
            <span>FIGMA</span>
            <span>/</span>
            <span>AWS</span>
            <span>/</span>
            <span>JENKINS</span>
            <span>/</span>
            <span>POSTMAN</span>
            <span>/</span>
            <span>REST APIs</span>
            <span>/</span>
            <span>BDD</span>
            <span>/</span>
            <span>MICROSERVICES</span>
            <span>/</span>
            <span>CONFLUENCE</span>
            <span>/</span>
            <span>BITBUCKET</span>
            <span>/</span>
            <span>KIBANA</span>
            <span>/</span>
            <span>DATADOG</span>
            <span>/</span>
            <span>LAMBDA</span>
            <span>/</span>
            <span>DYNAMODB</span>
            <span>/</span>
            <span>3D-SECURE</span>
            <span>/</span>
            <span>AGILE</span>
            <span>/</span>
            <span>GOLANG</span>
            <span>/</span>
            <span>PYTHON</span>
            <span>/</span>
            <span>SELENIUM</span>
            <span>/</span>
            <span>JIRA</span>
            <span>/</span>
            <span>FIGMA</span>
            <span>/</span>
            <span>AWS</span>
            <span>/</span>
            <span>JENKINS</span>
            <span>/</span>
            <span>POSTMAN</span>
            <span>/</span>
            <span>REST APIs</span>
            <span>/</span>
            <span>BDD</span>
            <span>/</span>
            <span>MICROSERVICES</span>
            <span>/</span>
            <span>CONFLUENCE</span>
            <span>/</span>
            <span>BITBUCKET</span>
            <span>/</span>
            <span>KIBANA</span>
            <span>/</span>
            <span>DATADOG</span>
            <span>/</span>
            <span>LAMBDA</span>
            <span>/</span>
            <span>DYNAMODB</span>
            <span>/</span>
            <span>3D-SECURE</span>
            <span>/</span>
            <span>AGILE</span>
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

