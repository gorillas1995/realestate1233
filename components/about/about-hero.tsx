"use client";

/**
 * Full-viewport (mobile) / tall editorial hero: image + gradient, kicker, title, pill CTA.
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

const HERO_IMAGE = "/place15.jpeg";

export function AboutHero({ reducedMotion }: { reducedMotion: boolean }) {
  const { t } = useLanguage();
  const [intro, setIntro] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const t0 = window.setTimeout(() => setIntro(true), 80);
    return () => window.clearTimeout(t0);
  }, [reducedMotion]);

  const motionClass = reducedMotion
    ? ""
    : intro
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6";

  return (
    <section
      className="relative min-h-[calc(100dvh-4.5rem)] w-full overflow-hidden lg:min-h-[72vh]"
      aria-labelledby="about-hero-title"
    >
      {/* Background image — LCP candidate */}
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      {/* Layered gradients: readability + luxury depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent lg:from-black/40"
        aria-hidden
      />
      {/* Subtle grain via noise texture (CSS-only feel) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[calc(100dvh-4.5rem)] flex-col justify-end px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-32 lg:min-h-[72vh] lg:justify-center lg:px-8 lg:pb-16 lg:pt-36">
        <div className="container mx-auto max-w-4xl">
          <p
            className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${motionClass}`}
            style={{ transitionDelay: reducedMotion ? "0ms" : "60ms" }}
          >
            {t.about.kicker}
          </p>
          <h1
            id="about-hero-title"
            className={`text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${motionClass}`}
            style={{ transitionDelay: reducedMotion ? "0ms" : "140ms" }}
          >
            {t.about.title}
          </h1>
          <p
            className={`mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${motionClass}`}
            style={{ transitionDelay: reducedMotion ? "0ms" : "220ms" }}
          >
            {t.about.description}
          </p>
          <div
            className={`mt-8 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${motionClass}`}
            style={{ transitionDelay: reducedMotion ? "0ms" : "300ms" }}
          >
            <Link
              href="/listings"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/20 transition-all duration-300 hover:gap-4 hover:bg-primary/90 hover:shadow-xl"
            >
              {t.about.viewResidences}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
