"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ArrowRight, X, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import type { Property } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import ImageKitImage from "@/components/ImageKitImage"

interface PropertyRendersProps {
  property: Property
}

export function PropertyRenders({ property }: PropertyRendersProps) {
  const { t } = useLanguage()
  // Use imageKitRenders (all images) for "Experience Every Detail" / View all renders section
  const imageKitImages = property.imageKitRenders || property.imageKitGallery || []
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const thumbnailContainerRef = useRef<HTMLDivElement>(null)

  const previewCount = 5
  const previewImages = imageKitImages.slice(0, previewCount)
  const remainingCount = Math.max(0, imageKitImages.length - previewCount)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const goPrev = useCallback(() => {
    setCurrentIndex(i => i === 0 ? imageKitImages.length - 1 : i - 1)
  }, [imageKitImages.length])

  const goNext = useCallback(() => {
    setCurrentIndex(i => i === imageKitImages.length - 1 ? 0 : i + 1)
  }, [imageKitImages.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showModal) return
      if (e.key === "Escape") setShowModal(false)
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [showModal, goPrev, goNext])

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [showModal])

  useEffect(() => {
    if (showModal && thumbnailContainerRef.current) {
      const el = thumbnailContainerRef.current.children[currentIndex] as HTMLElement
      if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
    }
  }, [currentIndex, showModal])

  if (imageKitImages.length === 0) return null

  const openAt = (idx: number) => { setCurrentIndex(idx); setShowModal(true) }

  return (
    <>
      {/* ─── Section ─── */}
      <section ref={sectionRef} className="relative overflow-hidden">
        {/* Accent top-border line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#428BC7]/40 to-transparent" />

        <div className="py-14 md:py-20 lg:py-28 bg-[#fafbfc]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">

            {/* Header — centered */}
            <div
              className={`text-center max-w-2xl mx-auto mb-10 md:mb-14 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#428BC7] mb-4">
                {t.property.renders.label}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-snug text-foreground">
                {t.property.renders.title}
              </h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                {t.property.renders.description}
              </p>
            </div>

            {/* Image mosaic — desktop: 1 hero + 4 side · mobile: 2-col grid */}
            <div
              className={`transition-all duration-1000 delay-150 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Desktop layout */}
              <div className="hidden md:grid grid-cols-12 gap-3 lg:gap-4">
                {/* Hero image — left 7 cols */}
                {previewImages[0] && (
                  <button
                    onClick={() => openAt(0)}
                    className="col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden group"
                  >
                    <ImageKitImage
                      path={previewImages[0]}
                      alt={`${property.title} render 1`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      width={900}
                      height={675}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      {t.property.renders.cta}
                    </div>
                  </button>
                )}

                {/* Right 5 cols — 2x2 grid */}
                <div className="col-span-5 grid grid-cols-2 gap-3 lg:gap-4">
                  {previewImages.slice(1, 5).map((img, i) => {
                    const idx = i + 1
                    const isLast = idx === previewCount - 1 && remainingCount > 0
                    return (
                      <button
                        key={idx}
                        onClick={() => openAt(idx)}
                        className="relative aspect-square rounded-2xl overflow-hidden group"
                        style={{ animationDelay: `${idx * 60}ms` }}
                      >
                        <ImageKitImage
                          path={img}
                          alt={`${property.title} render ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                          width={400}
                          height={400}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                        {isLast && (
                          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-1 transition-colors duration-300 group-hover:bg-black/60">
                            <span className="text-white text-2xl lg:text-3xl font-bold">+{remainingCount}</span>
                            <span className="text-white/80 text-[11px] uppercase tracking-widest font-medium">renders</span>
                          </div>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Mobile layout — 2 col masonry-like */}
              <div className="grid md:hidden grid-cols-2 gap-2.5">
                {previewImages.slice(0, 4).map((img, idx) => {
                  const isLast = idx === 3 && remainingCount > 0
                  return (
                    <button
                      key={idx}
                      onClick={() => openAt(idx)}
                      className={`relative overflow-hidden rounded-xl group ${
                        idx === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                      }`}
                    >
                      <ImageKitImage
                        path={img}
                        alt={`${property.title} render ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        width={idx === 0 ? 800 : 400}
                        height={idx === 0 ? 450 : 400}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400" />

                      {isLast && (
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-0.5">
                          <span className="text-white text-xl font-bold">+{remainingCount}</span>
                          <span className="text-white/80 text-[10px] uppercase tracking-widest font-medium">renders</span>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* CTA button */}
            <div
              className={`mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={() => openAt(0)}
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#428BC7] text-white text-sm font-semibold tracking-wide rounded-full transition-all duration-500 hover:bg-[#3678ad] hover:shadow-lg hover:shadow-[#428BC7]/20 hover:gap-4 active:scale-[0.98]"
              >
                {t.property.renders.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5" />
              </button>
              <span className="text-xs text-muted-foreground tracking-wide">
                {imageKitImages.length} renders
              </span>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#428BC7]/40 to-transparent" />
      </section>

      {/* ─── Full-screen Modal ─── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); setShowModal(false) }}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Close"
          >
            <X className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>

          {/* Prev */}
          {imageKitImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="w-7 h-7 md:w-10 md:h-10 text-white" />
            </button>
          )}

          {/* Next */}
          {imageKitImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
              aria-label="Next"
            >
              <ChevronRight className="w-7 h-7 md:w-10 md:h-10 text-white" />
            </button>
          )}

          {/* Main Image */}
          <div
            className="relative w-full max-w-5xl aspect-4/3 mx-4 md:mx-6 z-[105]"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageKitImage
              path={imageKitImages[currentIndex]}
              alt={`${property.title} - Render ${currentIndex + 1}`}
              fill
              className="object-contain"
              width={1200}
              height={800}
            />
          </div>

          {/* Thumbnail Strip */}
          <div
            className="absolute bottom-14 md:bottom-16 left-0 right-0 z-[110] px-4 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              ref={thumbnailContainerRef}
              className="flex gap-1.5 md:gap-2 overflow-x-auto py-2 px-2 md:px-4 justify-start lg:justify-center"
            >
              {imageKitImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative flex-shrink-0 w-12 h-8 md:w-16 md:h-11 rounded overflow-hidden transition-all duration-200 ${
                    idx === currentIndex
                      ? "ring-2 ring-[#428BC7] opacity-100 scale-110"
                      : "opacity-40 hover:opacity-75"
                  }`}
                >
                  <ImageKitImage
                    path={img}
                    alt={`Thumbnail ${idx + 1}`}
                    width={120}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs md:text-sm tracking-wider z-[110] border border-white/20">
            {currentIndex + 1} / {imageKitImages.length}
          </div>
        </div>
      )}
    </>
  )
}
