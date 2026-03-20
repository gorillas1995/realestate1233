"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Ruler,
  LandPlot,
  Home,
  Layers,
  TreePine,
  Waves,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react";
import type { Property } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";
import { PropertyAmenitiesCarousel } from "@/components/property/property-amenities-carousel";

interface PropertyInfoProps {
  property: Property;
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  const { t, language } = useLanguage();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const fullDescription =
    language === "es"
      ? property.descriptionEs || property.description
      : property.description;
  const paragraphs = fullDescription
    .split(/\n\n+|\.\s+(?=[A-Z])/)
    .filter((p) => p.trim().length > 0);
  const firstParagraph = paragraphs[0] || fullDescription;
  const hasMoreContent =
    paragraphs.length > 1 ||
    fullDescription.length > firstParagraph.length + 50;
  const displayDescription = isDescriptionExpanded
    ? fullDescription
    : firstParagraph;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Ordered metric tiles for the visado-style spec sheet (matches amenities / related UI)
  type SpecTile = {
    key: string;
    label: string;
    value: string;
    icon: LucideIcon;
  };
  const specTiles: SpecTile[] = [];
  if (property.bedrooms != null) {
    specTiles.push({
      key: "bedrooms",
      label: t.property.statBedrooms,
      value: String(property.bedrooms),
      icon: Bed,
    });
  }
  if (property.bathrooms != null) {
    specTiles.push({
      key: "bathrooms",
      label: t.property.statBathrooms,
      value: String(property.bathrooms),
      icon: Bath,
    });
  }
  if (property.totalBuiltArea) {
    specTiles.push({
      key: "totalBuilt",
      label: t.property.totalBuiltArea,
      value: property.totalBuiltArea,
      icon: Home,
    });
  } else if (property.landArea) {
    specTiles.push({
      key: "landPrimary",
      label: t.property.landArea,
      value: property.landArea,
      icon: LandPlot,
    });
  } else {
    specTiles.push({
      key: "areaFallback",
      label: t.property.totalBuiltArea,
      value: property.area,
      icon: Maximize,
    });
  }
  if (property.totalBuiltArea && property.landArea) {
    specTiles.push({
      key: "land",
      label: t.property.landArea,
      value: property.landArea,
      icon: LandPlot,
    });
  }
  if (property.poolArea) {
    specTiles.push({
      key: "pool",
      label: t.property.poolArea,
      value: property.poolArea,
      icon: Waves,
    });
  }
  if (property.porchesArea) {
    specTiles.push({
      key: "porches",
      label: t.property.porchesArea,
      value: property.porchesArea,
      icon: TreePine,
    });
  }
  if (property.terraceArea) {
    specTiles.push({
      key: "terrace",
      label: t.property.terraceArea,
      value: property.terraceArea,
      icon: Sun,
    });
  }
  if (property.basementArea) {
    specTiles.push({
      key: "basement",
      label: t.property.basementArea,
      value: property.basementArea,
      icon: Layers,
    });
  }
  if (property.groundFloorArea) {
    specTiles.push({
      key: "ground",
      label: t.property.groundFloorArea,
      value: property.groundFloorArea,
      icon: Layers,
    });
  }
  if (property.upperFloorArea) {
    specTiles.push({
      key: "upper",
      label: t.property.upperFloorArea,
      value: property.upperFloorArea,
      icon: Layers,
    });
  }

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* ─── Main Content ─── */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Header Card */}
            <div className="mb-6 md:mb-8 p-5 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-border/60 shadow-sm">
              <span className="inline-block px-3 py-1 bg-[#428BC7]/10 text-[#428BC7] text-[11px] font-semibold uppercase tracking-[0.2em] rounded-full mb-4">
                {property.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 text-foreground">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-[#428BC7]" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Surfaces & volumes — same visual language as amenities + related properties */}
            {specTiles.length > 0 && (
              <div className="relative mb-6 md:mb-8 overflow-hidden rounded-2xl md:rounded-3xl border border-[#428BC7]/30 shadow-[0_24px_80px_-24px_rgba(66,139,199,0.3)]">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0c1829] to-[#0f2847]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#428BC7]/20 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.03)_50%,transparent_60%)]"
                  aria-hidden
                />
                <div
                  className="relative h-1 w-full bg-gradient-to-r from-transparent via-[#428BC7] to-transparent"
                  aria-hidden
                />

                <div className="relative z-10 px-5 py-7 md:px-8 md:py-10">
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-300/90">
                        {t.property.specSheetLabel}
                      </span>
                      <h2 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
                        {t.property.specSheetTitle}
                      </h2>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
                        {t.property.specSheetSubtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
                      <Ruler className="h-4 w-4 text-sky-300" aria-hidden />
                      <span className="text-xs font-medium text-slate-300">
                        {property.address ?? property.location}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
                    {specTiles.map((tile, index) => {
                      const Icon = tile.icon;
                      return (
                        <div
                          key={tile.key}
                          className={`group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#428BC7]/45 hover:bg-white/8 hover:shadow-lg hover:shadow-[#428BC7]/10 md:p-5 ${
                            isVisible
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-3"
                          }`}
                          style={{
                            transitionDelay: isVisible
                              ? `${Math.min(index, 14) * 35}ms`
                              : "0ms",
                          }}
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#428BC7] to-[#2563eb] shadow-md shadow-[#428BC7]/25 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105">
                            <Icon
                              className="h-5 w-5 text-white"
                              strokeWidth={2}
                              aria-hidden
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="break-words text-base font-bold leading-snug text-white md:text-lg">
                              {tile.value}
                            </p>
                            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-sky-200/75">
                              {tile.label}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Description Card */}
            <div className="mb-6 md:mb-8 p-5 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-border/60 shadow-sm">
              <h2 className="text-lg md:text-xl font-bold mb-4 text-foreground">
                {t.property.description}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                {displayDescription}
              </p>
              {hasMoreContent && (
                <button
                  onClick={() =>
                    setIsDescriptionExpanded(!isDescriptionExpanded)
                  }
                  className="mt-5 inline-flex items-center gap-2 text-[#428BC7] hover:text-[#3678ad] font-semibold text-sm transition-all duration-300 group"
                >
                  {isDescriptionExpanded ? (
                    <>
                      {t.property.showLess}
                      <ChevronUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </>
                  ) : (
                    <>
                      {t.property.seeCompleteDescription}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Amenities — premium highlight (differentiator vs typical listings) */}
            {property.amenities.length > 0 && (
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#428BC7]/30 shadow-[0_24px_80px_-24px_rgba(66,139,199,0.35)]">
                {/* Layered background: depth + brand glow */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0c1829] to-[#0f2847]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#428BC7]/25 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.03)_50%,transparent_60%)]"
                  aria-hidden
                />

                {/* Top accent bar */}
                <div
                  className="relative h-1 w-full bg-gradient-to-r from-transparent via-[#428BC7] to-transparent"
                  aria-hidden
                />

                <div className="relative z-10 px-5 py-8 md:px-10 md:py-12">
                  {/* Header: icon + label + title + body */}
                  <div className="mb-8 md:mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                    <div className="flex shrink-0 justify-center sm:justify-start">
                      <div className="relative flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner backdrop-blur-sm">
                        <Sparkles
                          className="h-8 w-8 md:h-9 md:w-9 text-sky-300"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#428BC7] text-[10px] font-bold text-white shadow-lg">
                          {property.amenities.length}
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 text-center sm:text-left">
                      <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-300/90">
                        {t.property.amenitiesHighlightLabel}
                      </span>
                      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-[2rem] lg:leading-tight">
                        {t.property.amenitiesHighlightTitle}
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                        {t.property.amenitiesHighlightBody}
                      </p>
                      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                        {t.property.amenitiesHighlightFooter.replace(
                          "{count}",
                          String(property.amenities.length),
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Three specs per slide: swipe (Embla) + arrows + dots; key resets carousel on property change */}
                  <PropertyAmenitiesCarousel
                    key={property.slug}
                    amenities={property.amenities}
                    isVisible={isVisible}
                  />

                  {/* Bottom ribbon — reinforces “standard, not upgrade” */}
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-white/10 pt-6 text-center sm:justify-start">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      {t.property.amenities}
                    </span>
                    <span className="text-xs text-slate-500">
                      · {t.property.amenitiesHighlightRibbon}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ─── Sidebar ─── */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="lg:sticky lg:top-28 space-y-4">
              {/* Price Card */}
              <div className="p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-border/60 shadow-sm">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  Price
                </span>
                <div className="text-3xl md:text-4xl font-bold text-[#428BC7] mt-1">
                  {property.price}
                </div>

                <div className="mt-6 space-y-3">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 md:py-4 bg-[#428BC7] text-white font-semibold tracking-wide rounded-xl transition-all duration-300 hover:bg-[#3678ad] hover:shadow-lg hover:shadow-[#428BC7]/20 group"
                  >
                    {t.property.scheduleViewing}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 md:py-4 border-2 border-foreground/15 text-foreground font-semibold tracking-wide rounded-xl transition-all duration-300 hover:bg-foreground/5 hover:border-foreground/30"
                  >
                    {t.property.requestInformation}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
