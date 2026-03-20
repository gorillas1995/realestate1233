"use client";

/**
 * Sticky category chips: horizontal scroll + snap on mobile, centered wrap on desktop.
 */

import { useLanguage } from "@/contexts/language-context";

export type ListingCategory = "all" | "house" | "apartment" | "land";

export type CategoryChip = {
  value: ListingCategory;
  label: string;
  count: number;
};

type ListingsCategoryBarProps = {
  categories: CategoryChip[];
  activeCategory: ListingCategory;
  onCategoryChange: (cat: ListingCategory) => void;
};

export function ListingsCategoryBar({
  categories,
  activeCategory,
  onCategoryChange,
}: ListingsCategoryBarProps) {
  const { t } = useLanguage();

  return (
    <div className="sticky top-24 z-30 border-b border-border/60 bg-background/92 shadow-sm backdrop-blur-md lg:top-28">
      <p className="px-4 pt-3 text-center text-xs text-muted-foreground md:hidden">
        {t.listings.filterSwipeHint}
      </p>
      <div className="mx-auto max-w-6xl px-4 pb-3 pt-2 lg:px-8">
        <div
          role="tablist"
          aria-label={t.listings.title}
          className="flex gap-2 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory md:flex-wrap md:justify-center md:overflow-x-visible md:snap-none md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onCategoryChange(cat.value)}
                className={`snap-start shrink-0 rounded-full border px-5 py-3.5 text-left text-sm font-semibold tracking-wide transition-all duration-200 min-h-12 md:min-h-11 ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "border-border/80 bg-secondary/60 text-foreground hover:border-primary/40 hover:bg-secondary"
                } `}
              >
                <span>{cat.label}</span>
                <span
                  className={`ml-2 tabular-nums text-xs font-bold ${
                    isActive ? "text-primary-foreground/90" : "text-muted-foreground"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
