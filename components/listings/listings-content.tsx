"use client";

/**
 * Listings index: hero, sticky filter chips, luxury property cards, FAQ — mobile-first layout and tokens.
 */

import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { properties, faqs } from "@/lib/data";
import { FAQAccordion } from "@/components/faq-accordion";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { ListingsHero } from "@/components/listings/listings-hero";
import {
  ListingsCategoryBar,
  type ListingCategory,
  type CategoryChip,
} from "@/components/listings/listings-category-bar";
import { ListingsPropertyCard } from "@/components/listings/listings-property-card";

function isListingCategory(v: string | null): v is ListingCategory {
  return v === "all" || v === "house" || v === "apartment" || v === "land";
}

export function ListingsContent() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();

  const paramCat = searchParams.get("category");
  const initialCategory: ListingCategory =
    paramCat && isListingCategory(paramCat) ? paramCat : "all";

  const [activeCategory, setActiveCategory] =
    useState<ListingCategory>(initialCategory);
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeaderVisible(true);
  }, []);

  useEffect(() => {
    const cat = searchParams.get("category");
    const next: ListingCategory =
      cat && isListingCategory(cat) ? cat : "all";
    setActiveCategory(next);
  }, [searchParams]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categoryChips: CategoryChip[] = useMemo(() => {
    let house = 0;
    let apartment = 0;
    let land = 0;
    for (const p of properties) {
      if (p.category === "house") house++;
      else if (p.category === "apartment") apartment++;
      else land++;
    }
    const items: CategoryChip[] = [
      { value: "all", label: t.listings.all, count: properties.length },
    ];
    if (house > 0) {
      items.push({ value: "house", label: t.listings.houses, count: house });
    }
    if (apartment > 0) {
      items.push({
        value: "apartment",
        label: t.listings.apartments,
        count: apartment,
      });
    }
    if (land > 0) {
      items.push({ value: "land", label: t.listings.lands, count: land });
    }
    return items;
  }, [language, t]);

  const handleCategoryChange = (cat: ListingCategory) => {
    setLoading(true);
    setActiveCategory(cat);
    router.push(cat === "all" ? "/listings" : `/listings?category=${cat}`, {
      scroll: false,
    });
    window.setTimeout(() => setLoading(false), 380);
  };

  const filteredProperties = useMemo(() => {
    if (activeCategory === "all") return properties;
    return properties.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const skeletonCount = Math.min(6, Math.max(3, filteredProperties.length));

  return (
    <div className="overflow-x-clip">
      <ListingsHero
        resultCount={filteredProperties.length}
        headerVisible={headerVisible}
      />

      <ListingsCategoryBar
        categories={categoryChips}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <section
        ref={sectionRef}
        className="py-10 sm:py-14 lg:py-20"
        aria-label={t.listings.title}
      >
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div
            className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3 xl:gap-8 transition-all duration-700 motion-reduce:transition-none ${
              isVisible ? "animate-pop-in" : "opacity-0"
            }`}
          >
            {loading
              ? Array.from({ length: skeletonCount }).map((_, index) => (
                  <div
                    key={`sk-${index}`}
                    className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm"
                  >
                    <div className="aspect-3/4 animate-pulse bg-secondary/50 sm:aspect-5/6" />
                    <div className="h-16 animate-pulse bg-secondary/30" />
                  </div>
                ))
              : filteredProperties.map((property, index) => (
                  <ListingsPropertyCard
                    key={property.id}
                    property={property}
                    animationDelayMs={index * 50}
                  />
                ))}
          </div>

          {!loading && filteredProperties.length === 0 && (
            <div className="mx-auto max-w-md rounded-2xl border border-border/80 bg-secondary/30 px-8 py-16 text-center">
              <p className="text-lg font-medium text-foreground">
                {t.listings.noProperties}
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t.nav.contact}
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-border/60 bg-linear-to-b from-secondary/40 to-secondary/20 py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              {t.listings.faq.title}
            </span>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              {t.listings.faq.description}
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
