import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Cinematic loader. Counts to 100, then the aperture "opens" with a radial
 * mask that grows from the centre, revealing the homepage beneath it.
 * Calls onDone() once the reveal animation completes.
 */
export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0)
  const [opening, setOpening] = useState(false)
  const [radius, setRadius] = useState(0) // % of viewport for the iris hole
  const rafRef = useRef(0)

  // Phase 1 — count up to 100
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = prefersReduced ? 500 : 2200
    const start = performance.now()
    const ease = (t) => 1 - Math.pow(1 - t, 2)

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setCount(Math.round(ease(p) * 100))
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
      else setTimeout(() => setOpening(true), 250)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  // Phase 2 — iris opens
  useEffect(() => {
    if (!opening) return
    const start = performance.now()
    const duration = 950
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setRadius(ease(p) * 145)
      if (p < 1) requestAnimationFrame(tick)
      else setTimeout(onDone, 120)
    }
    requestAnimationFrame(tick)
  }, [opening, onDone])

  const mask = opening
    ? `radial-gradient(circle at 50% 50%, transparent ${radius}%, #000 ${radius + 0.5}%)`
    : 'none'

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
      style={{ WebkitMaskImage: mask, maskImage: mask }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="grain-layer opacity-[0.06]" />

      {/* aperture */}
      <div className="relative flex flex-col items-center">
        <motion.svg
          width="150"
          height="150"
          viewBox="0 0 200 200"
          className="text-gold"
          animate={opening ? { rotate: 120, scale: 1.6, opacity: 0 } : { rotate: 360 }}
          transition={
            opening
              ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
              : { duration: 9, ease: 'linear', repeat: Infinity }
          }
        >
          {/* outer focus ring */}
          <circle cx="100" cy="100" r="74" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 8" />
          {/* aperture blades */}
          <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeOpacity="0.85">
            {Array.from({ length: 6 }).map((_, i) => {
              const a = (i * 60 * Math.PI) / 180
              const a2 = ((i * 60 + 60) * Math.PI) / 180
              const r = 58
              const x1 = 100 + r * Math.cos(a)
              const y1 = 100 + r * Math.sin(a)
              const x2 = 100 + r * Math.cos(a2)
              const y2 = 100 + r * Math.sin(a2)
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
            })}
            {Array.from({ length: 6 }).map((_, i) => {
              const a = (i * 60 * Math.PI) / 180
              const r = 58
              const x = 100 + r * Math.cos(a)
              const y = 100 + r * Math.sin(a)
              return <line key={`s${i}`} x1={x} y1={y} x2="100" y2="100" strokeOpacity="0.18" />
            })}
          </g>
          {/* inner iris */}
          <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </motion.svg>

        {/* percentage */}
        <div className="mt-8 flex items-baseline gap-2">
          <span className="font-display text-5xl leading-none text-ink tabular-nums">{count}</span>
          <span className="font-mono text-sm text-gold">%</span>
        </div>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.4em] text-muted">
          Capturing Stories
          <span className="animate-pulse">…</span>
        </p>
      </div>

      {/* progress line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-line">
        <div
          className="h-full bg-gold transition-[width] duration-100 ease-out"
          style={{ width: `${count}%` }}
        />
      </div>
    </motion.div>
  )
}
