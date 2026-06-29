import { motion } from 'framer-motion'

const variants = {
  up: { y: 40, opacity: 0, filter: 'blur(6px)' },
  down: { y: -40, opacity: 0, filter: 'blur(6px)' },
  left: { x: 50, opacity: 0, filter: 'blur(6px)' },
  right: { x: -50, opacity: 0, filter: 'blur(6px)' },
  fade: { opacity: 0 },
  scale: { scale: 0.92, opacity: 0 },
}

const shown = { x: 0, y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }

/**
 * Generic scroll reveal. Wrap any block:
 *   <Reveal dir="up" delay={0.1}>...</Reveal>
 */
export default function Reveal({
  children,
  dir = 'up',
  delay = 0,
  duration = 0.9,
  amount = 0.3,
  once = true,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={variants[dir]}
      whileInView={shown}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Word-by-word text reveal for headlines.
 *   <WordReveal text="PRAJWAL KOKATE" />
 */
export function WordReveal({ text, className = '', delay = 0, stagger = 0.08 }) {
  const words = text.split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
