import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { nav, profile } from "../../data/content";
import MagneticButton from "../ui/MagneticButton";

function Logo() {
  return (
    <a
      href="#top"
      data-cursor="link"
      aria-label="Prajwal Kokate — back to top"
      className="group flex flex-col leading-none"
    >
      <span className="font-display text-[1.6rem] uppercase tracking-[0.06em] text-ink md:text-[1.85rem]">
        Prajwal
        <span className="text-gold transition-opacity duration-500 group-hover:opacity-60">
          .
        </span>
      </span>
      <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.45em] text-muted transition-colors duration-500 group-hover:text-gold">
        Kokate
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-cine ${
          scrolled
            ? "border-b border-line/70 bg-bg/70 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-6"
        }`}
      >
        <nav className="shell flex items-center justify-between">
          <Logo />

          {/* desktop links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-cursor="link"
                  className="group relative font-mono text-[12px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-400 ease-cine group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <MagneticButton variant="gold" href="#contact" strength={0.3}>
                Let’s Create
              </MagneticButton>
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              data-cursor="link"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold hover:text-gold lg:hidden"
            >
              <FiMenu size={18} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[110] bg-bg/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                data-cursor="link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink hover:border-gold hover:text-gold"
              >
                <FiX size={20} />
              </button>
            </div>

            <ul className="mt-10 flex flex-col gap-2 px-6">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.08 * i + 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line/60 py-4"
                  >
                    <span className="font-mono text-xs text-gold">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl uppercase tracking-wide text-ink">
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 px-6">
              <MagneticButton
                variant="gold"
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full"
              >
                Let’s Create
              </MagneticButton>
              <p className="mt-6 font-mono text-xs text-muted">
                {profile.basedIn}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
