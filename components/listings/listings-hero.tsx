"use client";

/**
 * Listings page masthead: regional kicker, title, description, and live result count for quick orientation.
 */

import { useLanguage } from "@/contexts/language-context";

type ListingsHeroProps = {
  /** Number of listings currently shown (after category filter) */
  resultCount: number;
  headerVisible: boolean;
};

export function ListingsHero({
  resultCount,
  headerVisible,
}: ListingsHeroProps) {
  const { t } = useLanguage();
  const L = t.listings;

  const countLabel =
    resultCount === 1
      ? L.resultsCountOne
      : L.resultsCount.replace("{count}", String(resultCount));

  return (
    <section
      className={`border-b border-border/60 bg-linear-to-b from-secondary/50 via-secondary/25 to-background pb-10 pt-1 transition-all duration-700 motion-reduce:transition-none sm:pb-12 ${
        headerVisible ? "animate-slide-up" : "opacity-0"
      }`}
      aria-labelledby="listings-page-title"
    >
      <div className="container mx-auto max-w-6xl px-4 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
          {L.kicker}
        </p>
        <div className="mt-5 flex flex-col gap-8 lg:mt-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 flex-1">
            <h1
              id="listings-page-title"
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {L.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {L.description}
            </p>
          </div>
          <div
            className="shrink-0 rounded-2xl border border-border/80 bg-background/90 px-6 py-4 text-center shadow-sm backdrop-blur-sm lg:min-w-[220px]"
            role="status"
            aria-live="polite"
          >
            <p className="text-sm font-semibold leading-snug text-foreground sm:text-base">
              {countLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
