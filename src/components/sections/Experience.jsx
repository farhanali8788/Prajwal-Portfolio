import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { experience } from '../../data/content'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="relative border-t border-line/60 py-24 md:py-36">
      <div className="shell">
        <SectionHeader roll="03" eyebrow="The Journey" title="Experience" />

        <div ref={ref} className="relative mt-16 pl-8 md:pl-0">
          {/* rail */}
          <div className="absolute left-[5px] top-2 h-full w-px bg-line md:left-[140px]">
            <motion.div style={{ height: lineHeight }} className="w-px bg-gradient-to-b from-gold to-gold/30" />
          </div>

          <div className="space-y-12 md:space-y-16">
            {experience.map((item, i) => (
              <Reveal key={i} dir="up" delay={0.05} amount={0.4}>
                <div className="relative grid grid-cols-1 gap-x-12 md:grid-cols-[140px_1fr] md:items-baseline">
                  {/* node */}
                  <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center md:left-[135px]">
                    <span className="h-3 w-3 rounded-full border border-gold bg-bg" />
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-gold/40" style={{ animationDuration: '2.5s' }} />
                  </span>

                  {/* year */}
                  <div className="mb-2 md:mb-0 md:pr-10 md:text-right">
                    <span className="font-display text-3xl uppercase tracking-wide text-gold md:text-4xl">{item.year}</span>
                  </div>

                  {/* body */}
                  <div className="md:pl-10">
                    <h3 className="font-display text-2xl uppercase tracking-wide text-ink md:text-3xl">{item.role}</h3>
                    <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">{item.org}</p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">{item.detail}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
