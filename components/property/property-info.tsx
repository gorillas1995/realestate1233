"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  Bed, Bath, Maximize, MapPin, ArrowRight, ChevronDown, ChevronUp,
  Ruler, LandPlot, Home, Layers, TreePine, Waves, Check
} from "lucide-react"
import type { Property } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

interface PropertyInfoProps {
  property: Property
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  const { t, language } = useLanguage()
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const fullDescription = language === "es" ? property.descriptionEs || property.description : property.description
  const paragraphs = fullDescription.split(/\n\n+|\.\s+(?=[A-Z])/).filter(p => p.trim().length > 0)
  const firstParagraph = paragraphs[0] || fullDescription
  const hasMoreContent = paragraphs.length > 1 || fullDescription.length > firstParagraph.length + 50
  const displayDescription = isDescriptionExpanded ? fullDescription : firstParagraph

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.05 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const detailItems = [
    { label: t.property.landArea, value: property.landArea, icon: LandPlot },
    { label: t.property.totalBuiltArea, value: property.totalBuiltArea, icon: Home },
    { label: t.property.basementArea, value: property.basementArea, icon: Layers },
    { label: t.property.groundFloorArea, value: property.groundFloorArea, icon: Layers },
    { label: t.property.upperFloorArea, value: property.upperFloorArea, icon: Layers },
    { label: t.property.porchesArea, value: property.porchesArea, icon: TreePine },
    { label: t.property.terraceArea, value: property.terraceArea, icon: TreePine },
    { label: t.property.poolArea, value: property.poolArea, icon: Waves },
  ].filter(d => d.value)

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">

          {/* ─── Main Content ─── */}
          <div className={`lg:col-span-2 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>

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

            {/* Quick Stats Row */}
            <div className="grid grid-cols-3 gap-2.5 md:gap-4 mb-6 md:mb-8">
              {property.bedrooms && (
                <div className="flex flex-col items-center gap-2 p-4 md:p-5 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-md hover:border-[#428BC7]/30 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#428BC7]/10 rounded-xl">
                    <Bed className="w-5 h-5 md:w-6 md:h-6 text-[#428BC7]" />
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-foreground">{property.bedrooms}</span>
                  <span className="text-[11px] md:text-xs text-muted-foreground uppercase tracking-wider font-medium">Bedrooms</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex flex-col items-center gap-2 p-4 md:p-5 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-md hover:border-[#428BC7]/30 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#428BC7]/10 rounded-xl">
                    <Bath className="w-5 h-5 md:w-6 md:h-6 text-[#428BC7]" />
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-foreground">{property.bathrooms}</span>
                  <span className="text-[11px] md:text-xs text-muted-foreground uppercase tracking-wider font-medium">Bathrooms</span>
                </div>
              )}
              <div className="flex flex-col items-center gap-2 p-4 md:p-5 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-md hover:border-[#428BC7]/30 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#428BC7]/10 rounded-xl">
                  <Maximize className="w-5 h-5 md:w-6 md:h-6 text-[#428BC7]" />
                </div>
                <span className="text-xl md:text-2xl font-bold text-foreground">{property.area}</span>
                <span className="text-[11px] md:text-xs text-muted-foreground uppercase tracking-wider font-medium">Area</span>
              </div>
            </div>

            {/* Description Card */}
            <div className="mb-6 md:mb-8 p-5 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-border/60 shadow-sm">
              <h2 className="text-lg md:text-xl font-bold mb-4 text-foreground">{t.property.description}</h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">{displayDescription}</p>
              {hasMoreContent && (
                <button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
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

            {/* Property Details Card */}
            {detailItems.length > 0 && (
              <div className="mb-6 md:mb-8 p-5 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-border/60 shadow-sm">
                <h2 className="text-lg md:text-xl font-bold mb-5 text-foreground">{t.property.details}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {detailItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 p-3 md:p-4 bg-[#fafbfc] rounded-xl border border-border/40 hover:border-[#428BC7]/30 hover:shadow-sm transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-[#428BC7]/10 rounded-lg">
                          <Icon className="w-4 h-4 text-[#428BC7]" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm md:text-base font-bold text-foreground truncate">{item.value}</div>
                          <div className="text-[10px] md:text-[11px] text-muted-foreground uppercase tracking-wider font-medium truncate">{item.label}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Amenities Card */}
            {property.amenities.length > 0 && (
              <div className="p-5 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-border/60 shadow-sm">
                <h2 className="text-lg md:text-xl font-bold mb-5 text-foreground">{t.property.amenities}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-start gap-3 p-3 md:p-3.5 bg-[#fafbfc] rounded-xl border border-border/40 hover:border-[#428BC7]/30 hover:bg-white hover:shadow-sm transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#428BC7]/10 rounded-md mt-0.5 group-hover:bg-[#428BC7]/20 transition-colors duration-300">
                        <Check className="w-3.5 h-3.5 text-[#428BC7]" />
                      </div>
                      <span className="text-sm text-foreground leading-snug">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ─── Sidebar ─── */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="lg:sticky lg:top-28 space-y-4">
              {/* Price Card */}
              <div className="p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-border/60 shadow-sm">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Price</span>
                <div className="text-3xl md:text-4xl font-bold text-[#428BC7] mt-1">{property.price}</div>

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

              {/* Agent Card */}
              <div className="p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-border/60 shadow-sm">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-4">Contact an Agent</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#428BC7]/10 rounded-xl flex items-center justify-center text-lg font-bold text-[#428BC7]">J</div>
                  <div>
                    <span className="block font-semibold text-foreground">James Anderson</span>
                    <a
                      href="tel:+377123456789"
                      className="text-sm text-muted-foreground hover:text-[#428BC7] transition-colors duration-300"
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
