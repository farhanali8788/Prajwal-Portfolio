/**
 * Seamless infinite marquee. Duplicates children so the loop is invisible.
 *   <Marquee items={[...]} />
 */
export default function Marquee({ items, separator = '✦', reverse = false, duration = 40 }) {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span className="font-display text-[clamp(2.2rem,6vw,5rem)] uppercase leading-none text-ink/90 transition-colors hover:text-gold">
            {item}
          </span>
          <span className="text-gold/70 text-2xl">{separator}</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="group relative flex overflow-hidden">
      <div
        className="flex animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {row}
        {row}
      </div>
    </div>
  )
}
