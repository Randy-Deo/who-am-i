const ArrowIcon = () => (
  <svg className="experience-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M17 7h-10v10" />
  </svg>
)

export function Timeline({ items }) {
  return (
    <div className="experience-list" aria-label="Work experience">
      {items.map((item) => (
        <article key={item.id} className="experience-item">
          <div className="experience-row">
            <div className="experience-company-block">
              {item.link ? (
                <a href={item.link} className="experience-company-link" target="_blank" rel="noreferrer">
                  <span className="experience-company">{item.company}</span>
                  <ArrowIcon />
                </a>
              ) : (
                <span className="experience-company">{item.company}</span>
              )}
            </div>
            <span className="experience-date">
              {item.start} – {item.end}
            </span>
          </div>
          <p className="experience-role">{item.role}</p>
          <p className="experience-description">{item.description}</p>
          {item.highlights?.length ? (
            <ul className="experience-highlights">
              {item.highlights.map((hl) => (
                <li key={hl}>{hl}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  )
}

