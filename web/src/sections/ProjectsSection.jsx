import { Section } from '../components/Section.jsx'
import { projects } from '../data/projects.js'

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project) => {
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
            </>
          )

          if (project.link && project.link !== '#') {
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

