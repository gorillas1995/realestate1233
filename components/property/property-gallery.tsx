"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight, FileText, Box, Play, MapPin, Image as ImageIcon } from "lucide-react"
import type { Property } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

interface PropertyGalleryProps {
  property: Property
}

export function PropertyGallery({ property }: PropertyGalleryProps) {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [showFloorPlans, setShowFloorPlans] = useState(false)
  const [currentFloorPlanIndex, setCurrentFloorPlanIndex] = useState(0)
  const [showMap, setShowMap] = useState(false)
  const [showVirtualTour, setShowVirtualTour] = useState(false)
  const allImages = [property.image, ...property.gallery]
  const floorPlans = property.floorPlans || (property.floorPlansImage ? [property.floorPlansImage] : [])

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goToPreviousImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1)
  }
  const goToNextImage = () => {
    setCurrentImageIndex(currentImageIndex === allImages.length - 1 ? 0 : currentImageIndex + 1)
  }
  const goToPrevious = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === 0 ? allImages.length - 1 : lightboxIndex - 1)
  }
  const goToNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === allImages.length - 1 ? 0 : lightboxIndex + 1)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) closeLightbox()
        if (showFloorPlans) setShowFloorPlans(false)
        if (showMap) setShowMap(false)
        if (showVirtualTour) setShowVirtualTour(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex, showFloorPlans, showMap, showVirtualTour])

  useEffect(() => {
    if (lightboxIndex !== null || showFloorPlans || showMap || showVirtualTour) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [lightboxIndex, showFloorPlans, showMap, showVirtualTour])

  const actionButtons = [
    {
      key: "images",
      show: true,
      icon: ImageIcon,
      label: t.property.buttons.images,
      accent: true,
      onClick: () => openLightbox(currentImageIndex),
    },
    {
      key: "floorPlans",
      show: floorPlans.length > 0,
      icon: FileText,
      label: t.property.buttons.floorPlans,
      onClick: () => { setCurrentFloorPlanIndex(0); setShowFloorPlans(true) },
    },
    {
      key: "virtualTour",
      show: !!property.virtualTourUrl,
      icon: Box,
      label: t.property.buttons.virtualTour,
      onClick: () => setShowVirtualTour(true),
    },
    {
      key: "video",
      show: !!property.videoUrl,
      icon: Play,
      label: t.property.buttons.video,
      href: property.videoUrl,
    },
    {
      key: "map",
      show: !!(property.mapLatitude && property.mapLongitude),
      icon: MapPin,
      label: t.property.buttons.map,
      onClick: () => setShowMap(true),
    },
  ].filter(b => b.show)

  return (
    <>
      <section className="pt-24 lg:pt-28">
        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-6">
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.property.backToListings}
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
            {/* Main Image */}
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl md:rounded-2xl group">
                <Image
                  src={allImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`${property.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
                <button
                  onClick={() => openLightbox(currentImageIndex)}
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"
                  aria-label="Open image in lightbox"
                />

                {/* Nav Arrows */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); goToPreviousImage() }}
                      className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); goToNextImage() }}
                      className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>
                  </>
                )}

                {/* Counter */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-medium">
                    {currentImageIndex + 1} / {allImages.length}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {allImages.slice(1, 5).map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index + 1)}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl group"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Image ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  {index === 3 && allImages.length > 5 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
                      <span className="text-white text-lg md:text-xl font-bold">+{allImages.length - 5}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ─── Action Buttons ─── */}
          <div className="mt-5 md:mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-3">
              {actionButtons.map((btn) => {
                const Icon = btn.icon
                const baseClasses = "group relative flex items-center gap-3 px-4 py-3.5 md:px-5 md:py-4 rounded-xl md:rounded-2xl border transition-all duration-300 overflow-hidden"

                const content = (
                  <>
                    <div className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl transition-all duration-300 ${
                      btn.accent
                        ? "bg-white/20 group-hover:bg-white/30"
                        : "bg-[#428BC7]/10 group-hover:bg-[#428BC7]/20"
                    }`}>
                      <Icon className={`w-4 h-4 md:w-[18px] md:h-[18px] transition-colors duration-300 ${
                        btn.accent ? "text-white" : "text-[#428BC7]"
                      }`} />
                    </div>
                    <span className={`text-xs md:text-sm font-semibold tracking-wide transition-colors duration-300 ${
                      btn.accent ? "text-white" : "text-foreground"
                    }`}>
                      {btn.label}
                    </span>
                  </>
                )

                if (btn.href) {
                  return (
                    <a
                      key={btn.key}
                      href={btn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${baseClasses} ${
                        btn.accent
                          ? "bg-[#428BC7] border-[#428BC7] hover:bg-[#3678ad] hover:shadow-lg hover:shadow-[#428BC7]/15 hover:-translate-y-0.5"
                          : "bg-white border-border hover:border-[#428BC7]/40 hover:shadow-md hover:-translate-y-0.5"
                      }`}
                    >
                      {content}
                    </a>
                  )
                }

                return (
                  <button
                    key={btn.key}
                    onClick={btn.onClick}
                    className={`${baseClasses} ${
                      btn.accent
                        ? "bg-[#428BC7] border-[#428BC7] hover:bg-[#3678ad] hover:shadow-lg hover:shadow-[#428BC7]/15 hover:-translate-y-0.5"
                        : "bg-white border-border hover:border-[#428BC7]/40 hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    {content}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox() }}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Close"
          >
            <X className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious() }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-7 h-7 md:w-10 md:h-10 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext() }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Next"
          >
            <ChevronRight className="w-7 h-7 md:w-10 md:h-10 text-white" />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-4/3 mx-4 md:mx-6 z-[105]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[lightboxIndex] || "/placeholder.svg"}
              alt={`${property.title} - Image ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs md:text-sm tracking-wider z-[110] border border-white/20">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}

      {/* ─── Floor Plans Modal ─── */}
      {showFloorPlans && floorPlans.length > 0 && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowFloorPlans(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setShowFloorPlans(false) }}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Close"
          >
            <X className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>

          {floorPlans.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentFloorPlanIndex(currentFloorPlanIndex === 0 ? floorPlans.length - 1 : currentFloorPlanIndex - 1)
                }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border-2 border-white/30 shadow-lg"
                aria-label="Previous floor plan"
              >
                <ChevronLeft className="w-7 h-7 md:w-10 md:h-10 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentFloorPlanIndex(currentFloorPlanIndex === floorPlans.length - 1 ? 0 : currentFloorPlanIndex + 1)
                }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border-2 border-white/30 shadow-lg"
                aria-label="Next floor plan"
              >
                <ChevronRight className="w-7 h-7 md:w-10 md:h-10 text-white" />
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-6xl aspect-4/3 mx-4 md:mx-6 z-[105]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={floorPlans[currentFloorPlanIndex]}
              alt={`${property.title} - Floor Plan ${currentFloorPlanIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {floorPlans.length > 1 && (
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs md:text-sm tracking-wider z-[110] border border-white/20">
              {currentFloorPlanIndex + 1} / {floorPlans.length}
            </div>
          )}
        </div>
      )}

      {/* ─── 3D Virtual Tour Modal ─── */}
      {showVirtualTour && property.virtualTourUrl && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowVirtualTour(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setShowVirtualTour(false) }}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Close"
          >
            <X className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>

          <div
            className="relative w-[95vw] h-[85vh] md:w-[90vw] md:h-[85vh] max-w-7xl rounded-xl md:rounded-2xl overflow-hidden border border-white/10 z-[105]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={property.virtualTourUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="3D Virtual Tour"
            />
          </div>
        </div>
      )}

      {/* ─── Map Modal ─── */}
      {showMap && property.mapLatitude && property.mapLongitude && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowMap(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setShowMap(false) }}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Close"
          >
            <X className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>

          <div
            className="relative w-[95vw] h-[80vh] md:w-full md:max-w-6xl md:h-[80vh] mx-2 md:mx-6 rounded-xl md:rounded-2xl overflow-hidden border border-white/20 z-[105]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024!2d${property.mapLongitude}!3d${property.mapLatitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE0JzA0LjIiTiAxwrA0OCc0NC4zIkU!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </>
  )
}
