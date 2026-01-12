"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  { id: "1", src: "/placeholder.svg?height=600&width=800", alt: "Modern luxury living room" },
  { id: "2", src: "/placeholder.svg?height=800&width=600", alt: "Elegant master bedroom" },
  { id: "3", src: "/placeholder.svg?height=600&width=800", alt: "Contemporary kitchen design" },
  { id: "4", src: "/placeholder.svg?height=600&width=800", alt: "Stunning exterior facade" },
  { id: "5", src: "/placeholder.svg?height=800&width=600", alt: "Infinity pool with ocean view" },
  { id: "6", src: "/placeholder.svg?height=600&width=800", alt: "Private wine cellar" },
  { id: "7", src: "/placeholder.svg?height=600&width=800", alt: "Manicured garden landscape" },
  { id: "8", src: "/placeholder.svg?height=800&width=600", alt: "Home theater room" },
  { id: "9", src: "/placeholder.svg?height=600&width=800", alt: "Spa bathroom" },
  { id: "10", src: "/placeholder.svg?height=600&width=800", alt: "Outdoor dining terrace" },
  { id: "11", src: "/placeholder.svg?height=800&width=600", alt: "Grand entrance hall" },
  { id: "12", src: "/placeholder.svg?height=600&width=800", alt: "Sunset view from balcony" },
]

export function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = () => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1)
  }

  const goToNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1)
  }

  return (
    <>
      {/* Gallery Grid */}
      <section ref={gridRef} className="pb-20 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                  isVisible ? "animate-pop-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-white hover:text-white/70 transition-colors duration-300 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-6 p-3 text-white hover:text-white/70 transition-colors duration-300 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 p-3 text-white hover:text-white/70 transition-colors duration-300 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-5xl aspect-[4/3] mx-6">
            <Image
              src={galleryImages[selectedIndex].src || "/placeholder.svg"}
              alt={galleryImages[selectedIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-wider">
            {selectedIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  )
}
