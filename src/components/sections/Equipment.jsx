import { FiCamera, FiAperture, FiNavigation, FiMove, FiSun, FiMic } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { equipment } from '../../data/content'

const ICONS = [FiCamera, FiAperture, FiNavigation, FiMove, FiSun, FiMic]

export default function Equipment() {
  return (
    <section className="relative border-t border-line/60 bg-surface py-24 md:py-36">
      <div className="shell">
        <SectionHeader roll="07" eyebrow="The Arsenal" title="Equipment" />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((e, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={e.name} dir="up" delay={(i % 3) * 0.07}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-line bg-card p-6 transition-all duration-500 ease-cine hover:border-gold/40 hover:shadow-[0_20px_60px_-30px_rgba(212,175,55,0.5)]">
                  {/* sheen */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/10" />

                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-line text-gold transition-colors duration-500 group-hover:border-gold/50">
                      <Icon size={22} />
                    </span>
                    <span className="font-mono text-[11px] tracking-widest text-muted">{String(i + 1).padStart(2, '0')}</span>
                  </div>

                  <h3 className="mt-8 font-display text-3xl uppercase leading-none tracking-wide text-ink">{e.name}</h3>
                  <p className="mt-2 text-sm text-muted">{e.spec}</p>

                  <div className="mt-6 flex items-center gap-2 border-t border-line pt-4">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{e.use}</span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal dir="up" delay={0.1}>
          <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted/70">
            Memory cards · monitors · tripods · supports — the full kit, always ready
          </p>
        </Reveal>
      </div>
    </section>
  )
}
