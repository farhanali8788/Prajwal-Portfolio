import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FiMaximize2 } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import Lightbox from '../ui/Lightbox'
import { gallery } from '../../data/content'

export default function Gallery() {
  const [active, setActive] = useState(null)
  const items = gallery.map((g) => ({ src: g.src, tag: g.tag }))

  return (
    <section id="gallery" className="relative border-t border-line/60 py-24 md:py-36">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader roll="04" eyebrow="On Set" title="Gallery" />
          <Reveal dir="up" delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted md:text-right">
              Frames from the field — the camera, the crew, and the quiet moments between takes.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 gap-4 columns-2 lg:columns-3">
          {gallery.map((g, i) => (
            <Reveal key={i} dir="up" delay={(i % 3) * 0.07} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setActive(i)}
                data-cursor="link"
                className="group relative block w-full overflow-hidden rounded-sm ring-1 ring-line transition-all duration-500 hover:ring-gold/60 hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.4)]"
              >
                <div className={`relative overflow-hidden ${g.span === 'lg' ? 'aspect-[4/3]' : 'aspect-square'}`}>
                  <img
                    src={g.src}
                    alt={g.tag}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-cine group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-bg/0 transition-colors duration-500 group-hover:bg-bg/20" />
                  <div className="absolute inset-3 border border-ink/0 transition-colors duration-500 group-hover:border-ink/20" />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink">{g.tag}</span>
                    <FiMaximize2 size={15} className="text-gold" />
                  </div>
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
