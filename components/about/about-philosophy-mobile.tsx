"use client";

/**
 * Mobile-only horizontal scroll-snap “chapters” with dot navigation and intersection-based active index.
 */

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import type { AboutPhilosophy } from "@/components/about/types";
import { useAboutReveal } from "@/components/about/use-about-reveal";
import { cn } from "@/lib/utils";

interface AboutPhilosophyMobileProps {
  philosophies: AboutPhilosophy[];
  reducedMotion: boolean;
}

export function AboutPhilosophyMobile({
  philosophies,
  reducedMotion,
}: AboutPhilosophyMobileProps) {
  const { t } = useLanguage();
  const { ref: sectionRef, visible } = useAboutReveal(reducedMotion);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const slides = root.querySelectorAll<HTMLElement>("[data-about-slide]");
    if (!slides.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.getAttribute("data-slide-index"));
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        });
      },
      { root, threshold: 0.55, rootMargin: "0px -12% 0px -12%" },
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [philosophies.length]);

  const scrollToSlide = useCallback(
    (index: number) => {
      const root = scrollRef.current;
      const slide = root?.querySelector<HTMLElement>(
        `[data-slide-index="${index}"]`,
      );
      slide?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        inline: "center",
        block: "nearest",
      });
    },
    [reducedMotion],
  );

  const total = philosophies.length;

  return (
    <section
      ref={sectionRef}
      className="border-t border-border/60 bg-gradient-to-b from-background to-muted/20 px-0 pb-12 pt-10 lg:hidden"
    >
      <div className="px-4 pb-4">
        <p
          className={cn(
            "text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-primary motion-safe:transition-opacity motion-safe:duration-500",
            visible ? "opacity-100" : "opacity-0",
          )}
        >
          {t.about.scrollHint}
        </p>
      </div>

      <div
        ref={scrollRef}
        data-about-carousel
        style={{ scrollPaddingInline: "1rem" }}
        className={cn(
          "flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          visible ? "opacity-100" : "opacity-0",
          "motion-safe:transition-opacity motion-safe:duration-700",
        )}
        role="region"
        aria-roledescription="carousel"
        aria-label={t.about.carouselAria}
      >
        {philosophies.map((item, index) => (
          <article
            key={item.number}
            data-about-slide
            data-slide-index={index}
            aria-label={`${t.about.chapterLabel} ${item.number}: ${item.title}`}
            className="w-[min(100%,calc(100vw-3rem))] max-w-md shrink-0 snap-center snap-always"
          >
            <div className="flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[0_24px_60px_-20px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.03]">
              <div className="relative aspect-[16/11] shrink-0">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover"
                  loading="lazy"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  aria-hidden
                />
                <span className="absolute bottom-4 left-4 font-mono text-5xl font-light tabular-nums text-white/95">
                  {item.number}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                  {t.about.chapterLabel} {item.number}
                </p>
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-white">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Step indicator — safe-area aware */}
      <div
        className="flex flex-col items-center gap-3 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
        role="group"
        aria-label={`${t.about.chapterLabel} navigation`}
      >
        <p
          className="font-mono text-xs tabular-nums text-muted-foreground"
          aria-live="polite"
        >
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          {philosophies.map((item, index) => (
            <button
              key={item.number}
              type="button"
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`${t.about.chapterLabel} ${item.number}: ${item.title}`}
              onClick={() => scrollToSlide(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
