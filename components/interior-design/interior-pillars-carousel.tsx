"use client";

/**
 * Four “pillars” in an Embla carousel: swipe on mobile, arrows + dots, accessible live region.
 */

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function InteriorPillarsCarousel() {
  const { t } = useLanguage();
  const { pillars } = t.interiorDesignPage;
  const items = pillars.items;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const syncEmblaState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

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

  useEffect(() => {
    if (!showSwipeHint || items.length <= 1) return;
    const timer = window.setTimeout(() => setShowSwipeHint(false), 8000);
    return () => window.clearTimeout(timer);
  }, [showSwipeHint, items.length]);

  const pageStatusText = pillars.pageStatus
    .replace("{current}", String(selectedIndex + 1))
    .replace("{total}", String(items.length));

  const hasMultiple = items.length > 1;

  return (
    <section
      id="interior-pillars"
      className="border-y border-border/60 bg-background px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="interior-pillars-heading"
      aria-roledescription="carousel"
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {pageStatusText}
      </p>

      <div className="container mx-auto max-w-6xl">
        <h2
          id="interior-pillars-heading"
          className="mx-auto max-w-2xl text-center text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl"
        >
          {pillars.sectionTitle}
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          {pillars.carouselAria}
        </p>

        <div className="relative mt-10">
          {hasMultiple && showSwipeHint && (
            <p
              className="mb-4 text-center text-sm text-muted-foreground motion-reduce:hidden md:hidden"
              aria-hidden
            >
              {pillars.swipeHint}
            </p>
          )}

          {hasMultiple && (
            <>
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background to-transparent sm:w-8"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background to-transparent sm:w-8"
                aria-hidden
              />
            </>
          )}

          <div
            className="overflow-hidden"
            ref={emblaRef}
            onPointerDown={dismissSwipeHint}
            role="region"
            aria-label={pillars.carouselAria}
          >
            <div className="flex">
              {items.map((item, index) => (
                <div
                  key={item.title}
                  className="min-w-0 shrink-0 grow-0 basis-full px-1 sm:basis-1/2 sm:px-2 lg:basis-1/2"
                >
                  <article className="mx-auto flex h-full min-h-[280px] max-w-lg flex-col rounded-2xl border border-border/70 bg-card/30 p-8 shadow-sm backdrop-blur-sm sm:min-h-[260px] lg:max-w-none">
                    <span className="text-xs font-semibold tabular-nums text-primary/90">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {hasMultiple && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canPrev}
                className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
                aria-label={pillars.prevAria}
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <div className="flex gap-2" role="tablist" aria-label={pillars.carouselAria}>
                {items.map((item, i) => (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={i === selectedIndex}
                    aria-label={pillars.dotAria.replace("{n}", String(i + 1))}
                    onClick={() => scrollTo(i)}
                    className={`size-2.5 rounded-full transition-all ${
                      i === selectedIndex
                        ? "scale-110 bg-primary"
                        : "bg-border hover:bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={scrollNext}
                disabled={!canNext}
                className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
                aria-label={pillars.nextAria}
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
