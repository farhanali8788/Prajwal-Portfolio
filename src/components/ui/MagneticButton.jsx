import { useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * Magnetic, glowing CTA. The element drifts toward the cursor and the inner
 * label lags slightly for depth. Used for all primary actions.
 *
 *   <MagneticButton variant="gold" href="#work">View Portfolio</MagneticButton>
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'ghost', // 'gold' | 'ghost' | 'solid'
  className = '',
  strength = 0.4,
  ...rest
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0px, 0px)'
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] transition-colors duration-500 ease-cine will-change-transform'

  const styles = {
    gold:
      'bg-gold text-bg hover:bg-gold-soft shadow-[0_0_0_0_rgba(212,175,55,0.45)] hover:shadow-[0_0_40px_-4px_rgba(212,175,55,0.55)]',
    ghost:
      'border border-line text-ink hover:border-gold/60 hover:text-gold',
    solid: 'bg-ink text-bg hover:bg-white',
  }

  const Tag = href ? motion.a : motion.button

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor="link"
      className={`${base} ${styles[variant]} ${className}`}
      style={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), color .5s, border-color .5s, background-color .5s, box-shadow .5s' }}
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
      {/* sheen sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-cine group-hover:translate-x-full" />
    </Tag>
  )
}
