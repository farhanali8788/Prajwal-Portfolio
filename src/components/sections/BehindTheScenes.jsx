import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { behindTheScenes } from "../../data/content";
import Lightbox from "../ui/Lightbox";

gsap.registerPlugin(ScrollTrigger);

export default function BehindTheScenes() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [active, setActive] = useState(null);

  const items = behindTheScenes.map((b) => ({
    src: b.src,
    video: b.video,
    title: b.label,
    tag: "Behind the Scenes",
    placeholderVideo: !b.video,
  }));

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!mq.matches || reduce) return; // mobile + reduced-motion use native scroll

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const getScroll = () => track.scrollWidth - window.innerWidth + 64;

      gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScroll()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-line/60 bg-surface py-20 md:h-screen md:py-0"
    >
      <div className="md:flex md:h-full md:items-center">
        <div
          ref={trackRef}
          className="no-scrollbar flex gap-5 overflow-x-auto px-6 pb-4 md:overflow-visible md:px-16 md:pb-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {/* intro panel */}
          <div
            className="flex w-[78vw] shrink-0 flex-col justify-center md:w-[36vw]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                Roll 05
              </span>
              <span className="h-px w-10 bg-line" />
              <span className="eyebrow">The Process</span>
            </div>
            <h2 className="h-display mt-5 text-[clamp(3rem,8vw,7rem)]">
              Behind
              <br />
              The Scenes
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted md:text-base">
              Every frame begins long before the record button. Camera, crew,
              light and patience — scroll through the making of the work.
            </p>
            <span className="mt-7 hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold md:flex">
              Scroll to explore <FiArrowRight />
            </span>
          </div>

          {/* frames */}
          {behindTheScenes.map((b, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              data-cursor="link"
              className="viewfinder group relative block w-[78vw] shrink-0 overflow-hidden text-left sm:w-[60vw] md:w-[40vw] lg:w-[32vw]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
                <img
                  src={b.src}
                  alt={`${b.label} — behind the scenes`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-cine group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" />
                <span className="absolute left-5 top-5 font-mono text-sm tracking-widest text-gold">
                  {b.n}
                </span>

                {/* play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 scale-75 items-center justify-center rounded-full border border-ink/30 bg-bg/40 text-ink opacity-0 backdrop-blur-md transition-all duration-500 ease-cine group-hover:scale-100 group-hover:opacity-100">
                    <FiPlay size={20} className="ml-0.5" />
                  </span>
                </div>

                <div className="absolute bottom-5 left-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                    Behind the scenes
                  </p>
                  <p className="mt-1 font-display text-3xl uppercase tracking-wide text-ink">
                    {b.label}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <Lightbox
            items={items}
            index={active}
            setIndex={setActive}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
