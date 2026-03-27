import { Section } from '../components/Section.jsx'
import { skills } from '../data/skills.js'

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-groups">
        {skills.map((group) => (
          <div key={group.id} className="skills-group-card">
            <div className="skills-group-title">{group.title}</div>
            <ul className="skills-group-items">
              {group.items.map((item) => (
                <li key={item} className="skill-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

