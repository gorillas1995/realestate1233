"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

// Gallery image type with category field
type GalleryCategory = "all" | "exterior" | "ground-floor" | "upper-floor";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory; // Category field for filtering
}

// Gallery images with category assignments
// To add items: set the 'category' field to one of: "exterior", "ground-floor", or "upper-floor"
const galleryImages: GalleryImage[] = [
  // Ground floor images - parter series
  {
    id: "13",
    src: "/parter1.jpg",
    alt: "Ground floor view 1",
    category: "ground-floor",
  },
  {
    id: "14",
    src: "/parter2.jpg",
    alt: "Ground floor view 2",
    category: "ground-floor",
  },
  {
    id: "15",
    src: "/parter3.jpg",
    alt: "Ground floor view 3",
    category: "ground-floor",
  },
  {
    id: "16",
    src: "/parter4.jpg",
    alt: "Ground floor view 4",
    category: "ground-floor",
  },
  {
    id: "17",
    src: "/parter5.jpg",
    alt: "Ground floor view 5",
    category: "ground-floor",
  },
  {
    id: "18",
    src: "/parter6.jpg",
    alt: "Ground floor view 6",
    category: "ground-floor",
  },
  {
    id: "19",
    src: "/parter7.jpg",
    alt: "Ground floor view 7",
    category: "ground-floor",
  },
  {
    id: "20",
    src: "/parter8.jpg",
    alt: "Ground floor view 8",
    category: "ground-floor",
  },
  {
    id: "21",
    src: "/parter9.jpg",
    alt: "Ground floor view 9",
    category: "ground-floor",
  },
  {
    id: "22",
    src: "/parter10.jpg",
    alt: "Ground floor view 10",
    category: "ground-floor",
  },
  {
    id: "23",
    src: "/parter11.jpg",
    alt: "Ground floor view 11",
    category: "ground-floor",
  },
  {
    id: "24",
    src: "/parter12.jpg",
    alt: "Ground floor view 12",
    category: "ground-floor",
  },
  {
    id: "25",
    src: "/parter13.jpg",
    alt: "Ground floor view 13",
    category: "ground-floor",
  },
  // Exterior images - house and place series
  {
    id: "26",
    src: "/house1.jpeg",
    alt: "Exterior house view 1",
    category: "exterior",
  },
  {
    id: "27",
    src: "/house2.jpeg",
    alt: "Exterior house view 2",
    category: "exterior",
  },
  {
    id: "28",
    src: "/house3.jpeg",
    alt: "Exterior house view 3",
    category: "exterior",
  },
  {
    id: "29",
    src: "/place1.jpeg",
    alt: "Exterior place view 1",
    category: "exterior",
  },
  {
    id: "30",
    src: "/place2.jpeg",
    alt: "Exterior place view 2",
    category: "exterior",
  },
  {
    id: "31",
    src: "/place3.jpeg",
    alt: "Exterior place view 3",
    category: "exterior",
  },
  {
    id: "32",
    src: "/place11.jpeg",
    alt: "Exterior place view 11",
    category: "exterior",
  },
  {
    id: "33",
    src: "/place12.jpeg",
    alt: "Exterior place view 12",
    category: "exterior",
  },
  {
    id: "34",
    src: "/place13.jpeg",
    alt: "Exterior place view 13",
    category: "exterior",
  },
  {
    id: "35",
    src: "/place14.jpeg",
    alt: "Exterior place view 14",
    category: "exterior",
  },
  {
    id: "36",
    src: "/place15.jpeg",
    alt: "Exterior place view 15",
    category: "exterior",
  },
  // Upper floor images - etaj series
  {
    id: "37",
    src: "/etaj1.jpg",
    alt: "Upper floor view 1",
    category: "upper-floor",
  },
  {
    id: "38",
    src: "/etaj2.jpg",
    alt: "Upper floor view 2",
    category: "upper-floor",
  },
  {
    id: "39",
    src: "/etaj3.jpg",
    alt: "Upper floor view 3",
    category: "upper-floor",
  },
  {
    id: "40",
    src: "/etaj4.jpg",
    alt: "Upper floor view 4",
    category: "upper-floor",
  },
  {
    id: "41",
    src: "/etaj5.jpg",
    alt: "Upper floor view 5",
    category: "upper-floor",
  },
  {
    id: "42",
    src: "/etaj6.jpg",
    alt: "Upper floor view 6",
    category: "upper-floor",
  },
  {
    id: "43",
    src: "/etaj7.jpg",
    alt: "Upper floor view 7",
    category: "upper-floor",
  },
  {
    id: "44",
    src: "/etaj8.jpg",
    alt: "Upper floor view 8",
    category: "upper-floor",
  },
  {
    id: "45",
    src: "/etaj9.jpg",
    alt: "Upper floor view 9",
    category: "upper-floor",
  },
  {
    id: "46",
    src: "/etaj10.jpg",
    alt: "Upper floor view 10",
    category: "upper-floor",
  },
  {
    id: "47",
    src: "/etaj11.jpg",
    alt: "Upper floor view 11",
    category: "upper-floor",
  },
  {
    id: "48",
    src: "/etaj12.jpg",
    alt: "Upper floor view 12",
    category: "upper-floor",
  },
  {
    id: "49",
    src: "/etaj13.jpg",
    alt: "Upper floor view 13",
    category: "upper-floor",
  },
  {
    id: "50",
    src: "/etaj14.jpg",
    alt: "Upper floor view 14",
    category: "upper-floor",
  },
  {
    id: "51",
    src: "/etaj15.jpg",
    alt: "Upper floor view 15",
    category: "upper-floor",
  },
];

export function GalleryGrid() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLElement>(null);

  // Filter categories configuration
  const categories: { value: GalleryCategory; label: string }[] = [
    { value: "all", label: t.gallery.filters.all },
    { value: "exterior", label: t.gallery.filters.exterior },
    { value: "ground-floor", label: t.gallery.filters.groundFloor },
    { value: "upper-floor", label: t.gallery.filters.upperFloor },
  ];

  // Filter images based on selected category
  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  // Reset lightbox and visibility when category changes
  useEffect(() => {
    setSelectedIndex(null);
    setIsVisible(false); // Reset visibility when category changes
  }, [activeCategory]);

  // Set up intersection observer - re-run when filtered images change
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let timer: NodeJS.Timeout;

    // Small delay to ensure DOM is ready after filter change
    timer = setTimeout(() => {
      if (gridRef.current) {
        // Check if element is already in viewport on mount
        const rect = gridRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
          setIsVisible(true);
        } else {
          // Set up observer if not in viewport
          observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
              }
            },
            { threshold: 0.1 }
          );

          observer.observe(gridRef.current);
        }
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [filteredImages]); // Re-run when filtered images change

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1
    );
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1
    );
  };

  return (
    <>
      {/* Filter Bar */}
      <section className="bg-background/80 backdrop-blur-md border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => {
              const isActive = activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveCategory(category.value);
                  }}
                  className={`group flex items-center justify-between gap-4 px-6 py-3 min-w-[170px] rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#428BC7] text-white shadow-lg"
                      : "bg-[#F1F3F4] text-foreground hover:shadow-md hover:-translate-y-0.5"
                  }`}
                  aria-label={`Filter by ${category.label}`}
                >
                  <span className="font-semibold tracking-wide text-sm pointer-events-none">
                    {category.label}
                  </span>

                  {/* ARROW */}
                  <span
                    className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 pointer-events-none ${
                      isActive
                        ? "bg-white translate-x-0 opacity-100"
                        : "bg-[#428BC7] translate-x-2 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <ArrowRight
                      className={`w-4 h-4 ${
                        isActive ? "text-black" : "text-white"
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={gridRef} className="pb-20 lg:pb-32">
        <div className="w-full px-2 sm:px-4 lg:px-6">
          {filteredImages.length > 0 ? (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 transition-all duration-700 ${
                isVisible ? "animate-pop-in" : "opacity-0"
              }`}
            >
              {filteredImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => openLightbox(index)}
                  className="group rounded-md overflow-hidden border border-border bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 60}ms` }}
                  tabIndex={0}
                  aria-label={image.alt}
                >
                  <div className="relative aspect-6/7">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2 mb-2 px-4 py-2 bg-[#F1F3F4] flex items-center justify-between rounded-t h-12">
                    <span className="text-base font-semibold text-foreground group-hover:text-black transition-colors duration-300 truncate">
                      {image.alt}
                    </span>
                    {/* Category badge for visual reference */}
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {image.category.replace("-", " ")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg">
                No images found in this category.
              </p>
            </div>
          )}
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
              src={filteredImages[selectedIndex].src || "/placeholder.svg"}
              alt={filteredImages[selectedIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-wider">
            {selectedIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
}
