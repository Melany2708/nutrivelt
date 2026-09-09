export default function SectionHeading({ eyebrow, title, children, light = false, align = '' }) {
  return <header className={`section-heading ${light ? 'light' : ''} ${align}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {children && <p>{children}</p>}
  </header>
}
