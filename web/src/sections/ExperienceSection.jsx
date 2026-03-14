import { Section } from '../components/Section.jsx'
import { Timeline } from '../components/Timeline.jsx'
import { experience } from '../data/experience.js'

export function ExperienceSection() {
  return (
    <Section id="experience" label="Experience" title="Experience">
      <Timeline items={experience} />
    </Section>
  )
}

