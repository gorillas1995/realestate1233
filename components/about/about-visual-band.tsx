"use client";

/**
 * Editorial image composition: primary frame + overlapping secondary card (rotation on lg+).
 */

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { useAboutReveal } from "@/components/about/use-about-reveal";
import { cn } from "@/lib/utils";

export function AboutVisualBand({ reducedMotion }: { reducedMotion: boolean }) {
  const { t } = useLanguage();
  const { ref, visible } = useAboutReveal(reducedMotion);

  return (
    <section ref={ref} className="relative px-4 py-14 lg:px-8 lg:py-20">
      <div className="container relative mx-auto max-w-7xl">
        <p
          className={cn(
            "mb-8 max-w-md text-xs font-medium uppercase tracking-[0.28em] text-white motion-safe:transition-all motion-safe:duration-700",
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {t.about.kicker}
        </p>

        <div className="relative mx-auto max-w-6xl">
          {/* Primary wide frame */}
          <div
            className={cn(
              "relative aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_32px_80px_-24px_rgba(0,0,0,0.25)] ring-1 ring-black/5 motion-safe:transition-all motion-safe:duration-1000 motion-safe:ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <Image
              src="/place15.jpeg"
              alt="Architect-designed residences"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Overlapping secondary — offset + slight rotation on large screens */}
          <div
            className={cn(
              "relative -mt-16 ml-auto w-[min(100%,20rem)] sm:w-[min(100%,24rem)] lg:absolute lg:bottom-[-3.5rem] lg:right-[-1rem] lg:mt-0 lg:w-[min(40%,22rem)] motion-safe:transition-all motion-safe:duration-1000 motion-safe:ease-out motion-safe:delay-150",
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0",
              "lg:motion-safe:rotate-[-2deg]",
            )}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10 lg:rounded-3xl">
              <Image
                src="/house2.jpeg"
                alt=""
                fill
                sizes="(max-width: 1024px) 320px, 360px"
                className="object-cover"
                loading="lazy"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
