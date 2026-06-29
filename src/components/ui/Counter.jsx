import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animated number counter. Starts when scrolled into view.
 *   <Counter value={500} suffix="+" />
 */
export default function Counter({ value, prefix = '', suffix = '', duration = 1800 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplay(value)
      return
    }

    let raf
    const start = performance.now()
    const ease = (t) => 1 - Math.pow(1 - t, 3) // easeOutCubic

    const step = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(ease(p) * value))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
