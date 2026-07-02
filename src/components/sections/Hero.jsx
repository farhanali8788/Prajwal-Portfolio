import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowDownRight, FiPlay } from "react-icons/fi";
import { profile } from "../../data/content";
import { WordReveal } from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";

export default function Hero({ onShowreel }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  // background drifts opposite to the cursor; photo drifts with it
  const bgX = useTransform(sx, [-0.5, 0.5], [20, -20]);
  const bgY = useTransform(sy, [-0.5, 0.5], [16, -16]);
  const photoX = useTransform(sx, [-0.5, 0.5], [-26, 26]);
  const photoY = useTransform(sy, [-0.5, 0.5], [-18, 18]);
  const leakX = useTransform(sx, [-0.5, 0.5], [40, -40]);

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMove}
      className="vignette relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* ---- background layers ---- */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 -z-10 scale-110"
      >
        {/* OPTIONAL VIDEO: drop a file in /public and uncomment.
        <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-40">
          <source src="/showreel.mp4" type="video/mp4" />
        </video> */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_70%_10%,#16130c_0%,#0b0b0b_45%,#070707_100%)]" />
        {/* slow zoom faint backdrop */}
        <motion.div
          className="absolute inset-0 bg-[url('/assets/bts-1.jpg')] bg-cover bg-center opacity-[0.10] mix-blend-luminosity"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.div>

      {/* light leaks */}
      <motion.div
        style={{ x: leakX }}
        className="pointer-events-none absolute -left-20 top-1/4 -z-10 h-[480px] w-[480px] rounded-full bg-gold/10 blur-[120px] animate-leak"
      />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[520px] w-[520px] rounded-full bg-[#3a2f12]/30 blur-[140px]" />

      {/* ---- content ---- */}
      <div className="shell grid w-full grid-cols-1 items-center gap-12 pt-28 lg:grid-cols-12 lg:pt-0">
        {/* left */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              {profile.role}
            </span>
            <span className="h-px w-12 bg-line" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
              {profile.basedIn}
            </span>
          </motion.div>

          <h1 className="h-display mt-6 text-[clamp(3.6rem,12vw,11rem)]">
            <span className="block">
              <WordReveal text={profile.firstName} delay={0.4} />
            </span>
            <span className="block text-gold-gradient">
              <WordReveal text={profile.lastName} delay={0.6} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 max-w-xl whitespace-pre-line text-lg leading-relaxed text-muted md:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton variant="gold" href="#work">
              View Portfolio <FiArrowDownRight />
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={onShowreel}>
              <FiPlay className="text-gold" /> Watch Showreel
            </MagneticButton>
          </motion.div>
        </div>

        {/* right — floating framed still */}
        <div className="lg:col-span-5">
          <motion.div
            style={{ x: photoX, y: photoY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-sm lg:ml-auto lg:max-w-none"
          >
            <div className="animate-float">
              <div className="viewfinder relative overflow-hidden">
                <img
                  src="/assets/prajwal-gold.png"
                  alt="Prajwal reviewing a shot on the camera monitor"
                  className="aspect-[4/5] w-full scale-x-[-1] grayscale object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-bg/10" />
                {/* REC overlay */}
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/80">
                    Rec
                  </span>
                </div>
                <div className="absolute right-4 top-4 font-mono text-[10px] tracking-widest text-ink/70">
                  00:24:11:08
                </div>
                <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
                  f/1.8 · 24mm · ISO 400
                </div>
              </div>
            </div>
            {/* caption tag */}
            <div className="glass absolute -bottom-5 -left-5 hidden rounded-lg px-4 py-3 sm:block">
              <p className="font-display text-2xl leading-none text-gold">5+</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                Years on set
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        data-cursor="link"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute left-0 top-0 h-3 w-px bg-gold"
            animate={{ y: [-12, 40] }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
          />
        </span>
      </motion.a>
    </section>
  );
}
