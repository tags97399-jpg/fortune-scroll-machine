import type { FortuneSection } from '../types/scrollTypes'

interface ScrollSectionProps {
  section: FortuneSection
}

export function ScrollSection({ section }: ScrollSectionProps) {
  return (
    <article className="scroll-section">
      <div className="section-icon" aria-hidden="true">
        {section.icon}
      </div>
      <div>
        <h3>{section.title}</h3>
        <p>{section.body}</p>
      </div>
    </article>
  )
}
