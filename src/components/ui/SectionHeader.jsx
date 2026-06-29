import Reveal, { WordReveal } from './Reveal'

/**
 * Consistent section header. The "roll" index reads like a film slate —
 * a real ordering device for a cinematographer's reel.
 *   <SectionHeader roll="02" eyebrow="The Storyteller" title="About" />
 */
export default function SectionHeader({ roll, eyebrow, title, align = 'left', className = '' }) {
  const isCenter = align === 'center'
  return (
    <div className={`${isCenter ? 'text-center' : ''} ${className}`}>
      <Reveal dir="up">
        <div className={`flex items-center gap-4 ${isCenter ? 'justify-center' : ''}`}>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            Roll {roll}
          </span>
          <span className="h-px w-10 bg-line" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <h2 className="h-display mt-5 text-[clamp(3rem,9vw,8rem)]">
        <WordReveal text={title} />
      </h2>
    </div>
  )
}
