import {
  FiFilm, FiZap, FiSliders, FiImage, FiSmartphone, FiVideo,
  FiDroplet, FiSun, FiCamera, FiGrid, FiActivity, FiCompass,
} from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { skills } from '../../data/content'

const ICONS = {
  'Premiere Pro': FiFilm,
  'After Effects': FiZap,
  'DaVinci Resolve': FiSliders,
  Photoshop: FiImage,
  CapCut: FiSmartphone,
  'VN Editor': FiVideo,
  'Color Grading': FiDroplet,
  Lighting: FiSun,
  'Camera Operation': FiCamera,
  Storyboarding: FiGrid,
  'Motion Graphics': FiActivity,
  'Visual Direction': FiCompass,
}

export default function Skills() {
  return (
    <section className="relative border-t border-line/60 py-24 md:py-36">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader roll="06" eyebrow="The Toolkit" title="Skills" />
          <Reveal dir="up" delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted md:text-right">
              Equal parts craft and software — the tools behind every frame and cut.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = ICONS[s.name] || FiFilm
            return (
              <Reveal key={s.name} dir="up" delay={(i % 4) * 0.06}>
                <div
                  className="glass group relative h-full rounded-xl p-5 transition-all duration-500 ease-cine hover:-translate-y-1.5 hover:border-gold/40"
                  style={{ animationDelay: `${(i % 6) * 0.5}s` }}
                >
                  <div className="animate-float" style={{ animationDelay: `${(i % 6) * 0.6}s`, animationDuration: `${5 + (i % 4)}s` }}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-gold transition-colors duration-500 group-hover:border-gold/50 group-hover:bg-gold/5">
                      <Icon size={20} />
                    </span>
                  </div>
                  <p className="mt-5 font-display text-xl uppercase leading-none tracking-wide text-ink">{s.name}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{s.note}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
