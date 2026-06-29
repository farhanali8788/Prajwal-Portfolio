import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import Counter from '../ui/Counter'
import { aboutCopy, stats, services, profile, award } from '../../data/content'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* portrait */}
          <div className="lg:col-span-5">
            <Reveal dir="right">
              <div className="viewfinder relative">
                <div className="relative overflow-hidden">
                  <img
                    src="/assets/bts-1.jpg"
                    alt="Prajwal Kokate behind the camera on location"
                    className="aspect-[4/5] w-full object-cover grayscale-[0.2] transition-all duration-700 ease-cine hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
                </div>
                {/* vertical label */}
                <span className="absolute -right-3 top-8 hidden rotate-90 origin-right font-mono text-[10px] uppercase tracking-[0.4em] text-muted md:block">
                  Behind the lens
                </span>
              </div>

              {/* now playing strip */}
              <div className="glass mt-6 flex items-center justify-between rounded-lg px-5 py-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Currently</p>
                  <p className="mt-1 font-display text-2xl uppercase tracking-wide text-ink">{profile.company}</p>
                </div>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gold">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" /> On set
                </span>
              </div>
            </Reveal>
          </div>

          {/* story */}
          <div className="lg:col-span-7">
            <SectionHeader roll="01" eyebrow="The Storyteller" title="About" />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {aboutCopy.map((p, i) => (
                <Reveal key={i} dir="up" delay={i * 0.08}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {/* services */}
            <Reveal dir="up" delay={0.1}>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:border-gold/50 hover:text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* award badge */}
            <Reveal dir="up" delay={0.15}>
              <div className="mt-9 flex items-start gap-4 rounded-xl border border-gold/25 bg-gold/[0.04] p-5">
                <span className="mt-0.5 text-gold">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="5" />
                    <path d="M8.5 12.5L7 22l5-3 5 3-1.5-9.5" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-ink">{award.title}</p>
                  <p className="mt-1 text-sm text-muted">{award.event} · {award.by}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-24 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={i} dir="up" delay={i * 0.08} className="bg-bg">
              <div className="group flex h-full flex-col justify-between px-6 py-9 transition-colors duration-500 hover:bg-card md:px-8 md:py-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-8 font-display text-6xl leading-none text-ink transition-colors group-hover:text-gold md:text-7xl">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
