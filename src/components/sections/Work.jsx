import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FiPlay, FiArrowUpRight } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import Lightbox from '../ui/Lightbox'
import { works } from '../../data/content'

export default function Work() {
  const [active, setActive] = useState(null)

  const items = works.map((w) => ({
    src: w.cover,
    video: w.video,
    title: w.title,
    category: w.category,
    meta: `${w.category} · ${w.client} · ${w.year}`,
    tag: w.category,
    placeholderVideo: !w.video,
  }))

  return (
    <section id="work" className="relative border-t border-line/60 py-24 md:py-36">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader roll="02" eyebrow="Selected Films" title="Featured Work" />
          <Reveal dir="up" delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted md:text-right">
              A reel across real estate, brand films, hospitality and podcasts. Tap any frame to open.
            </p>
          </Reveal>
        </div>

        {/* masonry */}
        <div className="mt-14 gap-5 [column-fill:_balance] columns-1 sm:columns-2 lg:columns-3">
          {works.map((w, i) => (
            <Reveal key={i} dir="up" delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
              <button
                onClick={() => setActive(i)}
                data-cursor="link"
                className="group viewfinder relative block w-full overflow-hidden text-left"
              >
                <div className={`relative overflow-hidden ${w.ratio === 'tall' ? 'aspect-[3/4]' : 'aspect-[16/11]'}`}>
                  <img
                    src={w.cover}
                    alt={`${w.title} — ${w.category}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-700 ease-cine group-hover:scale-[1.06] group-hover:blur-[1px]"
                  />
                  {/* darken + grade on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-bg/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 scale-75 items-center justify-center rounded-full border border-ink/30 bg-bg/40 text-ink opacity-0 backdrop-blur-md transition-all duration-500 ease-cine group-hover:scale-100 group-hover:opacity-100">
                      <FiPlay size={20} className="ml-0.5" />
                    </span>
                  </div>

                  {/* index */}
                  <span className="absolute right-4 top-4 font-mono text-[11px] tracking-widest text-ink/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* meta bar */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">{w.category}</p>
                    <h3 className="mt-1.5 font-display text-2xl uppercase leading-none tracking-wide text-ink md:text-3xl">
                      {w.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted">{w.client} · {w.year}</p>
                  </div>
                  <FiArrowUpRight className="mb-1 shrink-0 text-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" size={20} />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <Lightbox items={items} index={active} setIndex={setActive} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
