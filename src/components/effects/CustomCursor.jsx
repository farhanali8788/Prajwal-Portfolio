import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a small glowing gold dot with a trailing ring.
 *  - expands when hovering links / [data-cursor="link"]
 *  - shrinks briefly while scrolling
 * Only renders on devices with a fine pointer (desktops).
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const state = useRef({
    x: 0,
    y: 0,
    rx: 0,
    ry: 0,
    hover: false,
    scrolling: false,
  });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);

    const s = state.current;
    let scrollTimer;

    const onMove = (e) => {
      s.x = e.clientX;
      s.y = e.clientY;
      const el = e.target.closest('a, button, [data-cursor="link"]');
      s.hover = !!el;
    };

    const onScroll = () => {
      s.scrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => (s.scrolling = false), 140);
    };

    let raf;
    const render = () => {
      // ring trails with easing
      s.rx += (s.x - s.rx) * 0.18;
      s.ry += (s.y - s.ry) * 0.18;

      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot)
        dot.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) translate(-50%, -50%)`;

      const ringScale = s.hover ? 1.9 : s.scrolling ? 0.5 : 1;
      if (ring) {
        ring.style.transform = `translate3d(${s.rx}px, ${s.ry}px, 0) translate(-50%, -50%) scale(${ringScale})`;
        ring.style.borderColor = s.hover
          ? "rgba(212,175,55,0.9)"
          : "rgba(245,245,245,0.35)";
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[150] h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(212,175,55,0.7)]"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[150] h-9 w-9 rounded-full border transition-[border-color] duration-300"
        style={{ borderColor: "rgba(245,245,245,0.35)" }}
      />
    </>
  );
}
