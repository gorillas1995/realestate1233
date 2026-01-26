"use client"

import { useState } from "react"
import Link from "next/link"
import { Bed, Bath, Maximize, MapPin, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import type { Property } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

interface PropertyInfoProps {
  property: Property
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  const { t, language } = useLanguage()
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const fullDescription = language === "es" ? property.descriptionEs || property.description : property.description
  
  // Split description into paragraphs (by double newlines or periods followed by space)
  const paragraphs = fullDescription.split(/\n\n+|\.\s+(?=[A-Z])/).filter(p => p.trim().length > 0)
  const firstParagraph = paragraphs[0] || fullDescription
  const hasMoreContent = paragraphs.length > 1 || fullDescription.length > firstParagraph.length + 50
  const displayDescription = isDescriptionExpanded ? fullDescription : firstParagraph
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8 pb-8 border-b border-border">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium uppercase tracking-wider mb-4">
                {property.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4">{property.title}</h1>
              <div className="flex items-center gap-2 text-muted">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
              {property.bedrooms && (
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-card border border-border">
                    <Bed className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block text-2xl font-medium">{property.bedrooms}</span>
                    <span className="text-sm text-muted">Bedrooms</span>
                  </div>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-card border border-border">
                    <Bath className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block text-2xl font-medium">{property.bathrooms}</span>
                    <span className="text-sm text-muted">Bathrooms</span>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-card border border-border">
                  <Maximize className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-2xl font-medium">{property.area}</span>
                  <span className="text-sm text-muted">Area</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 pb-8 border-b border-border">
              <h2 className="text-xl font-medium mb-4">{t.property.description}</h2>
              <p className="text-muted leading-relaxed whitespace-pre-line">{displayDescription}</p>
              {hasMoreContent && (
                <button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300 group"
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

            {/* Property Details */}
            {(property.landArea || property.totalBuiltArea || property.basementArea || property.groundFloorArea || property.upperFloorArea) && (
              <div className="mb-8 pb-8 border-b border-border">
                <h2 className="text-xl font-medium mb-4">{t.property.details}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.landArea && (
                    <div>
                      <span className="text-sm text-muted">{t.property.landArea}:</span>
                      <span className="ml-2 font-medium">{property.landArea}</span>
                    </div>
                  )}
                  {property.totalBuiltArea && (
                    <div>
                      <span className="text-sm text-muted">{t.property.totalBuiltArea}:</span>
                      <span className="ml-2 font-medium">{property.totalBuiltArea}</span>
                    </div>
                  )}
                  {property.basementArea && (
                    <div>
                      <span className="text-sm text-muted">{t.property.basementArea}:</span>
                      <span className="ml-2 font-medium">{property.basementArea}</span>
                    </div>
                  )}
                  {property.groundFloorArea && (
                    <div>
                      <span className="text-sm text-muted">{t.property.groundFloorArea}:</span>
                      <span className="ml-2 font-medium">{property.groundFloorArea}</span>
                    </div>
                  )}
                  {property.upperFloorArea && (
                    <div>
                      <span className="text-sm text-muted">{t.property.upperFloorArea}:</span>
                      <span className="ml-2 font-medium">{property.upperFloorArea}</span>
                    </div>
                  )}
                  {property.porchesArea && (
                    <div>
                      <span className="text-sm text-muted">{t.property.porchesArea}:</span>
                      <span className="ml-2 font-medium">{property.porchesArea}</span>
                    </div>
                  )}
                  {property.terraceArea && (
                    <div>
                      <span className="text-sm text-muted">{t.property.terraceArea}:</span>
                      <span className="ml-2 font-medium">{property.terraceArea}</span>
                    </div>
                  )}
                  {property.poolArea && (
                    <div>
                      <span className="text-sm text-muted">{t.property.poolArea}:</span>
                      <span className="ml-2 font-medium">{property.poolArea}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-medium mb-4">{t.property.amenities}</h2>
              <div className="flex flex-wrap gap-3">
                {property.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="px-4 py-2 bg-card border border-border text-sm text-foreground hover:border-accent transition-colors duration-300"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 bg-card border border-border p-8">
              <div className="mb-6">
                <span className="text-sm text-muted">Price</span>
                <div className="text-3xl font-serif font-medium text-accent">{property.price}</div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-accent text-accent-foreground font-medium tracking-wide transition-all duration-300 hover:bg-accent/90 group"
                >
                  {t.property.scheduleViewing}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:bg-foreground/5 hover:border-foreground/40"
                >
                  {t.property.requestInformation}
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-sm font-medium mb-4">Contact an Agent</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center text-lg font-medium">J</div>
                  <div>
                    <span className="block font-medium">James Anderson</span>
                    <a
                      href="tel:+377123456789"
                      className="text-sm text-muted hover:text-accent transition-colors duration-300"
                    >
                      +377 123 456 789
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
