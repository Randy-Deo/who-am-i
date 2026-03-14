import { Section } from '../components/Section.jsx'
import { projects } from '../data/projects.js'

export function ProjectsSection() {
  return (
    <Section id="projects" label="Selected work" title="Projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-name-row">
              <h2 className="project-name">{project.name}</h2>
              {project.link && project.link !== '#' ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View
                </a>
              ) : null}
            </div>
            <p className="project-description">{project.description}</p>
            <ul className="project-tech-list">
              {project.tech.map((tag) => (
                <li key={tag} className="project-tech-item">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

