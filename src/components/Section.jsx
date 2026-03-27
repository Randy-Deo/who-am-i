export function Section({ id, title, children, hideHeader = false, className = '' }) {
  return (
    <section id={id} className={['section', className].filter(Boolean).join(' ')}>
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

