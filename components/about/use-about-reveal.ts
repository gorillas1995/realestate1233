"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal; respects prefers-reduced-motion (shows content immediately).
 */
export function useAboutReveal(reducedMotion: boolean, threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, threshold]);

  return { ref, visible };
}
