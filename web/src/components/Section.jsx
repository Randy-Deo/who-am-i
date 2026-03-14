export function Section({ id, label, title, children, hideHeader = false }) {
  return (
    <section id={id} className="section">
      {!hideHeader && (
        <div className="section-header">
          <div className="section-title">
            {title}
            <span className="section-title-period">.</span>
          </div>
        </div>
      )}
      <div className="section-body">{children}</div>
    </section>
  )
}

