"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { properties, faqs } from "@/lib/data"
import { PropertyCard } from "@/components/property-card"
import { FAQAccordion } from "@/components/faq-accordion"

type Category = "all" | "house" | "apartment" | "land"

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "ALL" },
  { value: "house", label: "HOUSES" },
  { value: "apartment", label: "APARTMENTS" },
  { value: "land", label: "LANDS" },
]

export function ListingsContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [isVisible, setIsVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setHeaderVisible(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProperties = useMemo(() => {
    if (activeCategory === "all") return properties
    return properties.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      {/* Header Section */}
      <section
        ref={headerRef}
        className={`pb-8 transition-all duration-700 ${headerVisible ? "animate-slide-up" : "opacity-0"}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">LISTINGS</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore our exclusive collection of luxury properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Tabs - centered pill style */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap gap-2 bg-secondary/50 p-2 rounded-full">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                    activeCategory === category.value
                      ? "bg-foreground text-white"
                      : "bg-transparent text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section ref={sectionRef} className="py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property, index) => (
              <div
                key={property.id}
                className={`transition-all duration-700 ${isVisible ? "animate-pop-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No properties found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Frequently Asked Questions
            </span>
            <p className="text-muted-foreground">Check below our most frequently asked questions from you guys</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
