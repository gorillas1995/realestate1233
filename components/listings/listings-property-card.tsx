"use client";

/**
 * Luxury listing card: hero imagery, gradient caption, specs row, clear mobile tap target + footer CTA strip.
 */

import Link from "next/link";
import Image from "next/image";
import ImageKitImage from "@/components/ImageKitImage";
import { Bath, Bed, ChevronRight, MapPin } from "lucide-react";
import type { Property } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";

type ListingsPropertyCardProps = {
  property: Property;
  /** Staggered grid entrance */
  animationDelayMs?: number;
};

export function ListingsPropertyCard({
  property,
  animationDelayMs = 0,
}: ListingsPropertyCardProps) {
  const { t } = useLanguage();

  return (
    <Link
      href={`/property/${property.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card text-left shadow-md ring-1 ring-black/4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:active:scale-100"
      style={
        animationDelayMs
          ? { animationDelay: `${animationDelayMs}ms` }
          : undefined
      }
      aria-label={`${t.listings.viewListing}: ${property.title}`}
    >
      <div className="relative aspect-3/4 w-full overflow-hidden bg-secondary sm:aspect-5/6">
        {property.imageKitGallery && property.imageKitGallery.length > 0 ? (
          <ImageKitImage
            path={property.imageKitGallery[0]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
            width={900}
            height={1200}
          />
        ) : (
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        )}

        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/5"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/75">
            {property.price}
          </p>
          <h2 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
            {property.title}
          </h2>
          <p className="mt-2 flex items-start gap-1.5 text-sm leading-snug text-white/88 line-clamp-2">
            <MapPin
              className="mt-0.5 size-3.5 shrink-0 text-white/70"
              aria-hidden
            />
            <span>{property.location}</span>
          </p>

          {(property.bedrooms != null || property.bathrooms != null) && (
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-white/95">
              {property.bedrooms != null && (
                <span className="inline-flex items-center gap-1.5">
                  <Bed className="size-3.5 text-white/80" aria-hidden />
                  <span>
                    {property.bedrooms}{" "}
                    <span className="font-normal text-white/80">
                      {t.property.statBedrooms}
                    </span>
                  </span>
                </span>
              )}
              {property.bathrooms != null && (
                <span className="inline-flex items-center gap-1.5">
                  <Bath className="size-3.5 text-white/80" aria-hidden />
                  <span>
                    {property.bathrooms}{" "}
                    <span className="font-normal text-white/80">
                      {t.property.statBathrooms}
                    </span>
                  </span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex min-h-14 items-center justify-between gap-3 border-t border-border/50 bg-secondary/40 px-4 py-4 sm:px-5">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {t.listings.exploreDetails}
        </span>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:translate-x-0.5">
          <ChevronRight className="size-5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
