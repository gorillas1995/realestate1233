"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Property } from "@/lib/data"

interface PropertyGalleryProps {
  property: Property
}

export function PropertyGallery({ property }: PropertyGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const allImages = [property.image, ...property.gallery]

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goToPrevious = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === 0 ? allImages.length - 1 : lightboxIndex - 1)
  }

  const goToNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === allImages.length - 1 ? 0 : lightboxIndex + 1)
  }

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
            Back to Listings
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Main Image */}
            <button onClick={() => openLightbox(0)} className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={allImages[0] || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
            </button>

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
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-foreground hover:text-accent transition-colors duration-300 z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-6 p-3 text-foreground hover:text-accent transition-colors duration-300 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 p-3 text-foreground hover:text-accent transition-colors duration-300 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-5xl aspect-[4/3] mx-6">
            <Image
              src={allImages[lightboxIndex] || "/placeholder.svg"}
              alt={`${property.title} - Image ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted text-sm tracking-wider">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  )
}
