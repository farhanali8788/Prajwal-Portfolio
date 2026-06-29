import { FiMessageSquare } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { testimonials } from '../../data/content'

function Card({ t }) {
  return (
    <figure className="glass relative w-[320px] shrink-0 rounded-2xl p-7 md:w-[420px]">
      <FiMessageSquare className="text-gold/70" size={22} />
      <blockquote className="mt-5 text-[15px] leading-relaxed text-ink/90">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-line/80 pt-4">
        <p className="font-display text-xl uppercase tracking-wide text-ink">{t.name}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{t.role}</p>
      </figcaption>
    </figure>
  )
}

/**
 * Auto-scrolling testimonial wall. The track is duplicated so the loop is
 * seamless (re-using the marquee keyframe: 0 → -50%). Pauses on hover.
 * Quotes are clearly-marked samples — replace with real client words.
 */
export default function Testimonials() {
  const track = [...testimonials, ...testimonials]
  return (
    <section className="relative overflow-hidden border-t border-line/60 bg-surface py-24 md:py-36">
      <div className="shell">
        <SectionHeader roll="09" eyebrow="Kind Words" title="Testimonials" />
      </div>

      {/* edge fades */}
      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent md:w-40" />

        <div className="group flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused]">
            {track.map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </div>

      <div className="shell">
        <Reveal dir="up" delay={0.1}>
          <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted/70">
            Sample quotes shown for layout · swap with real testimonials in content.js
          </p>
        </Reveal>
      </div>
    </section>
  )
}
