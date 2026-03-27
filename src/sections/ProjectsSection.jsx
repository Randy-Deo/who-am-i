import { Section } from '../components/Section.jsx'
import { projects } from '../data/projects.js'

function hasExternalLink(link) {
  return Boolean(link && link !== '#')
}

const ExternalArrow = () => (
  <svg className="project-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M17 7h-10v10" />
  </svg>
)

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project) => {
          const linked = hasExternalLink(project.link)
          const content = (
            <>
              <div className="project-name-row">
                <h2 className="project-name">{project.name}</h2>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech-list">
                {project.tech.map((tag) => (
                  <li key={tag} className="project-tech-item">
                    {tag}
                  </li>
                ))}
              </ul>
              {linked && project.linkLabel ? (
                <span className="project-verify-link">
                  {project.linkLabel}
                  <ExternalArrow />
                </span>
              ) : null}
            </>
          )

          if (linked) {
            return (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-card project-card-link"
              >
                {content}
              </a>
            )
          }

          return (
            <article key={project.id} className="project-card">
              {content}
            </article>
          )
        })}
      </div>
    </Section>
  )
}

