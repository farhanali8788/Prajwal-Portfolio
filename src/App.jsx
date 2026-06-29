import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useSmoothScroll } from './hooks/useSmoothScroll'

import Preloader from './components/effects/Preloader'
import CustomCursor from './components/effects/CustomCursor'
import FilmGrain from './components/effects/FilmGrain'
import ScrollProgress from './components/effects/ScrollProgress'

import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Work from './components/sections/Work'
import Experience from './components/sections/Experience'
import Gallery from './components/sections/Gallery'
import BehindTheScenes from './components/sections/BehindTheScenes'
import Skills from './components/sections/Skills'
import Equipment from './components/sections/Equipment'
import Awards from './components/sections/Awards'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

import Marquee from './components/ui/Marquee'
import Lightbox from './components/ui/Lightbox'

import { services, profile } from './data/content'

export default function App() {
  const [ready, setReady] = useState(false)
  const [showreel, setShowreel] = useState(false)

  // Lenis + GSAP ticker wiring
  useSmoothScroll()

  // Once the iris reveal finishes, content height is final — let pinned
  // sections (Behind the Scenes) re-measure so scroll math is correct.
  useEffect(() => {
    if (!ready) return
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [ready])

  const showreelItem = [
    {
      src: '/assets/bts-2.jpg',
      video: profile.showreel || '',
      title: 'Showreel',
      meta: profile.showreel
        ? ''
        : 'Add your reel — place showreel.mp4 in /public, then set profile.showreel in content.js',
      placeholderVideo: !profile.showreel,
    },
  ]

  return (
    <>
      <AnimatePresence>
        {!ready && <Preloader onDone={() => setReady(true)} />}
      </AnimatePresence>

      <CustomCursor />
      <FilmGrain />
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero onShowreel={() => setShowreel(true)} />

        {/* services marquee strip */}
        <div className="border-y border-line/60 bg-surface py-8 md:py-10">
          <Marquee items={services} />
        </div>

        <About />
        <Work />
        <Experience />
        <Gallery />
        <BehindTheScenes />
        <Skills />
        <Equipment />
        <Awards />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {showreel && (
          <Lightbox
            items={showreelItem}
            index={0}
            setIndex={() => {}}
            onClose={() => setShowreel(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
