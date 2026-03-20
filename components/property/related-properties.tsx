"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { PropertyCard } from "@/components/property-card";
import type { Property } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";

interface RelatedPropertiesProps {
  properties: Property[];
}

export function RelatedProperties({ properties }: RelatedPropertiesProps) {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  if (properties.length === 0) return null;

  const scrollToNextCard = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-property-card]"),
    );

    if (!cards.length) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const targetIndex =
      direction === "right"
        ? Math.min(closestIndex + 1, cards.length - 1)
        : Math.max(closestIndex - 1, 0);

    const targetCard = cards[targetIndex];
    const targetScrollLeft =
      targetCard.offsetLeft -
      container.clientWidth / 2 +
      targetCard.offsetWidth / 2;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 shadow-[0_-24px_80px_-32px_rgba(66,139,199,0.2)]">
      {/* Match amenities block: deep gradient + brand glow (property-info.tsx) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0c1829] to-[#0f2847]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#428BC7]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.025)_50%,transparent_60%)]"
        aria-hidden
      />
      <div
        className="relative h-px w-full bg-gradient-to-r from-transparent via-[#428BC7]/60 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-300/90 mb-3 md:mb-4">
              {t.property.relatedProperties.label}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {t.property.relatedProperties.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-400 md:text-base">
              {t.property.relatedProperties.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToNextCard("left")}
              aria-label="Previous property"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#428BC7]/50 hover:bg-[#428BC7]/20 hover:shadow-lg hover:shadow-[#428BC7]/15"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => scrollToNextCard("right")}
              aria-label="Next property"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#428BC7]/40 bg-[#428BC7]/15 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#428BC7]/30 hover:shadow-lg hover:shadow-[#428BC7]/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="
          relative z-10 flex gap-6 overflow-x-auto scroll-smooth pb-6
          px-[calc(50vw-175px)] md:px-6 lg:px-12
          snap-x snap-mandatory
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {properties.map((property) => (
          <div
            key={property.id}
            data-property-card
            className="shrink-0 w-[350px] md:w-[400px] snap-center"
          >
            <PropertyCard property={property} variant="lightText" />
          </div>
        ))}
      </div>
    </section>
  );
}
