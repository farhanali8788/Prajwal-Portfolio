import { FiArrowUp, FiAperture } from 'react-icons/fi'
import { profile, socials } from '../../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  const toTop = (e) => {
    e.preventDefault()
    // Lenis intercepts #top anchors; this is the no-JS-scroll fallback.
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-line/60 bg-surface">
      {/* giant wordmark */}
      <div className="shell pt-20 md:pt-28">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3 text-gold">
            <FiAperture size={26} className="animate-[spin_18s_linear_infinite]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
              Cinematographer · Editor
            </span>
          </div>

          <a
            href="#top"
            onClick={toTop}
            data-cursor="link"
            aria-label="Back to top"
            className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-gold"
          >
            Back to top
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold/60">
              <FiArrowUp size={16} />
            </span>
          </a>
        </div>

        <h2 className="mt-10 font-display leading-[0.82] tracking-tight text-ink">
          <span className="block text-[clamp(3.5rem,18vw,16rem)]">PRAJWAL</span>
          <span className="block text-[clamp(3.5rem,18vw,16rem)] text-gold-gradient">KOKATE</span>
        </h2>

        <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
          Creating stories one frame at a time.
        </p>
      </div>

      {/* bottom bar */}
      <div className="shell mt-16 border-t border-line/60 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted/80">
            © {year} {profile.name} · All rights reserved
          </p>

          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                data-cursor="link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-gold/60 hover:text-gold"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted/60">
            {profile.website}
          </p>
        </div>
      </div>
    </footer>
  )
}
