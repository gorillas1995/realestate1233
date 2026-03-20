"use client";

/**
 * Signature specifications carousel: shows 3 amenities per “page” (stacked rows),
 * horizontal swipe (Embla) + prev/next controls + dots. Mobile-first affordances
 * (edge fades, animated swipe hint, 44px+ touch targets).
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

/** Items visible at once (three stacked rows per slide). */
const AMENITIES_PER_PAGE = 3;

export interface PropertyAmenitiesCarouselProps {
  /** Ordered amenity strings from property data */
  amenities: string[];
  /** Section intersection: staggers card entrance when block scrolls into view */
  isVisible: boolean;
}

export function PropertyAmenitiesCarousel({
  amenities,
  isVisible,
}: PropertyAmenitiesCarouselProps) {
  const { t } = useLanguage();

  // Chunk amenities into slides of three for predictable layout on all breakpoints
  const pages = useMemo(() => {
    const chunks: string[][] = [];
    for (let i = 0; i < amenities.length; i += AMENITIES_PER_PAGE) {
      chunks.push(amenities.slice(i, i + AMENITIES_PER_PAGE));
    }
    return chunks;
  }, [amenities]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  /** Mobile swipe hint: hide after interaction or timeout so it doesn’t nag */
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const syncEmblaState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Subscribe to Embla select/reInit for dots + disabled arrows
  useEffect(() => {
    if (!emblaApi) return;
    syncEmblaState();
    emblaApi.on("select", syncEmblaState);
    emblaApi.on("reInit", syncEmblaState);
    return () => {
      emblaApi.off("select", syncEmblaState);
      emblaApi.off("reInit", syncEmblaState);
    };
  }, [emblaApi, syncEmblaState]);

  // When the parent property changes, reset scroll + rescan slide metrics
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
    emblaApi.scrollTo(0);
    setShowSwipeHint(true);
  }, [amenities, emblaApi]);

  const dismissSwipeHint = useCallback(() => setShowSwipeHint(false), []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    dismissSwipeHint();
  }, [emblaApi, dismissSwipeHint]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    dismissSwipeHint();
  }, [emblaApi, dismissSwipeHint]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      dismissSwipeHint();
    },
    [emblaApi, dismissSwipeHint],
  );

  // Auto-dismiss swipe hint on mobile after a few seconds (still available via arrows)
  useEffect(() => {
    if (!showSwipeHint || pages.length <= 1) return;
    const timer = window.setTimeout(() => setShowSwipeHint(false), 8500);
    return () => window.clearTimeout(timer);
  }, [showSwipeHint, pages.length]);

  const hasMultiplePages = pages.length > 1;

  /** Live region for screen readers when slide changes */
  const pageStatusText = t.property.amenitiesCarouselPageStatus
    .replace("{current}", String(selectedIndex + 1))
    .replace("{total}", String(pages.length));

  return (
    <div className="w-full">
      {/* Announce slide changes for assistive tech */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {pageStatusText}
      </p>

      <div className="relative">
        {/* Edge vignettes: subtle cue that content continues horizontally (mobile + desktop) */}
        {hasMultiplePages && (
          <>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0c1829] via-[#0c1829]/70 to-transparent sm:w-10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0f2847] via-[#0f2847]/70 to-transparent sm:w-10"
              aria-hidden
            />
          </>
        )}

        {/* Embla viewport: native swipe + momentum on touch devices */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onPointerDown={dismissSwipeHint}
        >
          {/* Embla handles horizontal touch; avoid touch-pan-y here or swipe breaks */}
          <div className="flex">
            {pages.map((chunk, pageIndex) => (
              <div
                key={`amenities-page-${pageIndex}`}
                className="min-w-0 shrink-0 grow-0 basis-full"
              >
                {/* Three stacked rows per slide (not an infinite single column) */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  {chunk.map((amenity, itemIndex) => {
                    const globalIndex =
                      pageIndex * AMENITIES_PER_PAGE + itemIndex;
                    return (
                      <div
                        key={`${pageIndex}-${itemIndex}-${amenity.slice(0, 32)}`}
                        className={`group flex gap-4 rounded-2xl border border-white/8 bg-white/4 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#428BC7]/45 hover:bg-white/8 hover:shadow-lg hover:shadow-[#428BC7]/10 md:p-5 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{
                          transitionDelay: isVisible
                            ? `${Math.min(globalIndex, 12) * 40}ms`
                            : "0ms",
                        }}
                      >
                        <div className="flex shrink-0 items-start pt-0.5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#428BC7] to-[#2563eb] shadow-md shadow-[#428BC7]/30 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105 motion-safe:active:scale-95">
                            <Check
                              className="h-5 w-5 text-white"
                              strokeWidth={2.5}
                              aria-hidden
                            />
                          </div>
                        </div>
                        <span className="min-w-0 pt-1 text-sm font-medium leading-snug text-white/95 md:text-[15px] md:leading-relaxed">
                          {amenity}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-only swipe affordance: animated chevrons + copy (hidden on md+) */}
      {hasMultiplePages && (
        <div
          className={`mt-5 flex flex-col items-center gap-1 transition-all duration-500 ease-out md:hidden ${
            showSwipeHint
              ? "max-h-24 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-1 opacity-0 overflow-hidden"
          }`}
          aria-hidden={!showSwipeHint}
        >
          <div className="flex items-center gap-3 text-sky-300/90">
            <ChevronLeft
              className="h-5 w-5 shrink-0 animate-amenities-hint-left"
              strokeWidth={2.5}
              aria-hidden
            />
            <span className="text-center text-[11px] font-semibold uppercase leading-tight tracking-[0.2em]">
              {t.property.amenitiesCarouselSwipeHint}
              <span className="mt-1 block font-medium normal-case tracking-normal text-sky-200/80">
                {t.property.amenitiesCarouselArrowsHint}
              </span>
            </span>
            <ChevronRight
              className="h-5 w-5 shrink-0 animate-amenities-hint-right"
              strokeWidth={2.5}
              aria-hidden
            />
          </div>
        </div>
      )}

      {/* Arrows + dot pagination: below slides, large tap targets for thumbs */}
      {hasMultiplePages && (
        <nav
          className="mt-6 flex flex-col items-center gap-4 sm:mt-8"
          aria-label={pageStatusText}
        >
          <div className="flex w-full max-w-md items-center justify-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canPrev}
              aria-label={t.property.amenitiesCarouselPrevAria}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg shadow-black/20 transition-all duration-200 hover:border-[#428BC7]/50 hover:bg-white/15 hover:shadow-[#428BC7]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 disabled:pointer-events-none disabled:opacity-35 motion-safe:active:scale-95"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={2} aria-hidden />
            </button>

            {/* Dots: stretched pill = current set; hover scale = micro-feedback */}
            <div className="flex min-h-12 flex-1 items-center justify-center gap-2 px-2">
              {pages.map((_, dotIndex) => {
                const isActive = dotIndex === selectedIndex;
                return (
                  <button
                    key={`amenity-dot-${dotIndex}`}
                    type="button"
                    aria-current={isActive ? "true" : undefined}
                    aria-label={t.property.amenitiesCarouselDotAria.replace(
                      "{n}",
                      String(dotIndex + 1),
                    )}
                    onClick={() => scrollTo(dotIndex)}
                    className={`rounded-full transition-all duration-300 ease-out motion-safe:hover:scale-110 motion-safe:active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                      isActive
                        ? "h-2.5 w-8 bg-[#428BC7] shadow-md shadow-[#428BC7]/40"
                        : "h-2 w-2 bg-white/35 hover:bg-white/55"
                    }`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              disabled={!canNext}
              aria-label={t.property.amenitiesCarouselNextAria}
              className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg shadow-black/20 transition-all duration-200 hover:border-[#428BC7]/50 hover:bg-white/15 hover:shadow-[#428BC7]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 disabled:pointer-events-none disabled:opacity-35 motion-safe:active:scale-95"
            >
              {/* Soft pulse when more slides exist — subtle “continue” cue */}
              {canNext && (
                <span
                  className="pointer-events-none absolute inset-0 rounded-full bg-[#428BC7]/20 motion-safe:animate-pulse motion-reduce:animate-none"
                  aria-hidden
                />
              )}
              <ChevronRight className="relative z-1 h-6 w-6" strokeWidth={2} aria-hidden />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
