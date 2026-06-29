import { useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi'

/**
 * Shared lightbox for the gallery and the project modal.
 * Pass an array of items + the active index. Each item:
 *   { src, video?, title?, meta?, tag? }
 */
export default function Lightbox({ items, index, setIndex, onClose }) {
  const item = items[index]
  const many = items.length > 1

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + items.length) % items.length)
    },
    [items.length, setIndex]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (many && e.key === 'ArrowRight') go(1)
      if (many && e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [go, many, onClose])

  if (!item) return null

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* top bar */}
      <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-6 py-6 md:px-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
          {item.tag || item.category || 'Frame'} {many && `· ${String(index + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`}
        </span>
        <button
          onClick={onClose}
          data-cursor="link"
          aria-label="Close"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold hover:text-gold"
        >
          <FiX size={18} />
        </button>
      </div>

      {/* arrows */}
      {many && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); go(-1) }}
            aria-label="Previous"
            data-cursor="link"
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold hover:text-gold md:left-8"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1) }}
            aria-label="Next"
            data-cursor="link"
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold hover:text-gold md:right-8"
          >
            <FiChevronRight size={22} />
          </button>
        </>
      )}

      {/* media */}
      <motion.div
        key={index}
        className="viewfinder relative mx-12 max-h-[78vh] w-full max-w-5xl overflow-hidden md:mx-20"
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.video ? (
          <video
            src={item.video}
            controls
            autoPlay
            playsInline
            className="max-h-[78vh] w-full bg-black object-contain"
          />
        ) : (
          <div className="relative">
            <img
              src={item.src}
              alt={item.title || item.tag || 'Project still'}
              className="max-h-[78vh] w-full object-contain"
            />
            {item.placeholderVideo && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 text-bg">
                  <FiPlay size={22} className="ml-1" />
                </span>
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* caption */}
      {(item.title || item.meta) && (
        <div className="absolute bottom-0 left-0 right-0 px-6 py-7 text-center md:px-10">
          {item.title && (
            <h3 className="font-display text-2xl uppercase tracking-wide text-ink md:text-3xl">{item.title}</h3>
          )}
          {item.meta && <p className="mt-1 text-sm text-muted">{item.meta}</p>}
        </div>
      )}
    </motion.div>
  )
}
