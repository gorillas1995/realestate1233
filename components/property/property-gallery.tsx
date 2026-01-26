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
  const allImages = [property.image, ...property.gallery]
  // Use floorPlans array if available, otherwise fall back to floorPlansImage
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

  // Close modals on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) closeLightbox()
        if (showFloorPlans) setShowFloorPlans(false)
        if (showMap) setShowMap(false)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [lightboxIndex, showFloorPlans, showMap])

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (lightboxIndex !== null || showFloorPlans || showMap) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [lightboxIndex, showFloorPlans, showMap])

  return (
    <>
      <section className="pt-24 lg:pt-28">
        {/* Back Button */}
        <div className="container mx-auto px-6 lg:px-12 py-6">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.property.backToListings}
            </Link>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Main Image with Navigation */}
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden group">
                <Image
                  src={allImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`${property.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority
                />
                <button
                  onClick={() => openLightbox(currentImageIndex)}
                  className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500"
                  aria-label="Open image in lightbox"
                />
                
                {/* Navigation Arrows */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        goToPreviousImage()
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        goToNextImage()
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm">
                    {currentImageIndex + 1} / {allImages.length}
                  </div>
                )}
              </div>

              {/* Action Buttons - Under Main Image */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {/* Images Button */}
                <button
                  onClick={() => openLightbox(currentImageIndex)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300"
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>{t.property.buttons.images}</span>
                </button>

            {/* Floor Plans Button */}
            {floorPlans.length > 0 && (
              <button
                onClick={() => {
                  setCurrentFloorPlanIndex(0)
                  setShowFloorPlans(true)
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white border border-border text-foreground rounded-full hover:bg-secondary transition-all duration-300"
              >
                <FileText className="w-3 h-3" />
                <span>{t.property.buttons.floorPlans}</span>
              </button>
            )}

                {/* 3D Virtual Tour Button */}
                {property.virtualTourUrl && (
                  <a
                    href={property.virtualTourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white border border-border text-foreground rounded-full hover:bg-secondary transition-all duration-300"
                  >
                    <Box className="w-3 h-3" />
                    <span>{t.property.buttons.virtualTour}</span>
                  </a>
                )}

                {/* Video Button */}
                {property.videoUrl && (
                  <a
                    href={property.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white border border-border text-foreground rounded-full hover:bg-secondary transition-all duration-300"
                  >
                    <Play className="w-3 h-3" />
                    <span>{t.property.buttons.video}</span>
                  </a>
                )}

                {/* Map Button */}
                {property.mapLatitude && property.mapLongitude && (
                  <button
                    onClick={() => setShowMap(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white border border-border text-foreground rounded-full hover:bg-secondary transition-all duration-300"
                  >
                    <MapPin className="w-3 h-3" />
                    <span>{t.property.buttons.map}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 gap-4">
              {allImages.slice(1, 5).map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index + 1)}
                  className="relative aspect-[4/3] overflow-hidden group"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Image ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                  {index === 3 && allImages.length > 5 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60">
                      <span className="text-lg font-medium">+{allImages.length - 5} more</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button - Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10 text-white" />
          </button>

          {/* Image Container - Click stops propagation */}
          <div
            className="relative w-full max-w-5xl aspect-4/3 mx-6 z-[105]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[lightboxIndex] || "/placeholder.svg"}
              alt={`${property.title} - Image ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm tracking-wider z-[110] border border-white/20">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}

      {/* Floor Plans Modal */}
      {showFloorPlans && floorPlans.length > 0 && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowFloorPlans(false)}
        >
          {/* Close Button - Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setShowFloorPlans(false)
            }}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Previous Floor Plan Button */}
          {floorPlans.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrentFloorPlanIndex(
                  currentFloorPlanIndex === 0 ? floorPlans.length - 1 : currentFloorPlanIndex - 1
                )
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border-2 border-white/30 shadow-lg"
              aria-label="Previous floor plan"
            >
              <ChevronLeft className="w-10 h-10 text-white" />
            </button>
          )}

          {/* Next Floor Plan Button */}
          {floorPlans.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrentFloorPlanIndex(
                  currentFloorPlanIndex === floorPlans.length - 1 ? 0 : currentFloorPlanIndex + 1
                )
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border-2 border-white/30 shadow-lg"
              aria-label="Next floor plan"
            >
              <ChevronRight className="w-10 h-10 text-white" />
            </button>
          )}

          {/* Image Container - Click stops propagation */}
          <div
            className="relative w-full max-w-6xl aspect-4/3 mx-6 z-[105]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={floorPlans[currentFloorPlanIndex]}
              alt={`${property.title} - Floor Plan ${currentFloorPlanIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Floor Plan Counter */}
          {floorPlans.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm tracking-wider z-[110] border border-white/20">
              {currentFloorPlanIndex + 1} / {floorPlans.length}
            </div>
          )}
        </div>
      )}

      {/* Map Modal */}
      {showMap && property.mapLatitude && property.mapLongitude && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowMap(false)}
        >
          {/* Close Button - Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setShowMap(false)
            }}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-[110] backdrop-blur-md border border-white/20"
            aria-label="Close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Map Container - Click stops propagation */}
          <div
            className="relative w-full max-w-6xl h-[80vh] mx-6 rounded-lg overflow-hidden border border-white/20 z-[105]"
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
