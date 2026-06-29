import { FiAward, FiFilm, FiScissors, FiStar } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { award } from '../../data/content'

/**
 * Recognition. The headline is the real 1st-prize win; the supporting cards
 * are the facets that prize recognised (cinematography + editing) plus the
 * programme it came from. All grounded in the CV — swap freely in content.js.
 */
const recognitions = [
  { icon: FiFilm, label: 'Best Cinematography', note: 'Short Film Competition' },
  { icon: FiScissors, label: 'Best Editing', note: 'Short Film Competition' },
  { icon: FiStar, label: 'Super 30 — “Nazariya”', note: 'Zee Institute of Creative Arts' },
]

export default function Awards() {
  return (
    <section id="awards" className="relative border-t border-line/60 py-24 md:py-36">
      {/* faint gold wash */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-[90vw] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[140px]" />

      <div className="shell relative">
        <SectionHeader roll="08" eyebrow="Recognition" title="Awards" />

        {/* featured win */}
        <Reveal dir="up" className="mt-14">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-card p-8 md:p-12"
          >
            {/* glow corner */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl transition-opacity duration-500 group-hover:bg-gold/20" />
            <span className="absolute right-6 top-6 font-mono text-[11px] uppercase tracking-[0.3em] text-gold/70">
              Winner
            </span>

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold shadow-[0_0_50px_-10px_rgba(212,175,55,0.6)]">
                <FiAward size={34} />
              </span>

              <div>
                <p className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] text-gold-gradient">
                  {award.title}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                  {award.event} — awarded by {award.by}.
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* supporting recognitions */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {recognitions.map((r, i) => {
            const Icon = r.icon
            return (
              <Reveal key={r.label} dir="up" delay={i * 0.08}>
                <div className="group h-full rounded-xl border border-line bg-surface p-6 transition-all duration-500 ease-cine hover:border-gold/40 hover:shadow-[0_20px_60px_-30px_rgba(212,175,55,0.55)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-gold transition-colors duration-500 group-hover:border-gold/50">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl uppercase leading-none tracking-wide text-ink">
                    {r.label}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {r.note}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
