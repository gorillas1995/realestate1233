"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const philosophies = [
  {
    number: "01",
    title: "PHILOSOPHY",
    description:
      "Welcome to [Your Urban Construction Company] - where innovation meets urban transformation. As a leading force in the construction industry, we take pride in shaping the skylines of cities.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    number: "02",
    title: "CRAFTSMANSHIP",
    description:
      'Need terms that convey quality and attention to detail. Maybe "engineered excellence" or "artisan-grade materials" to emphasize the build quality.',
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    number: "03",
    title: "STRATEGY",
    description:
      'This should reflect a long-term vision. Words like "future-focused infrastructure" or "adaptive design" might show forward-thinking planning.',
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    // Trigger initial animations
    setTimeout(() => {
      setVisibleSections(new Set([0]))
    }, 100)

    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref || index === 0) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]))
          }
        },
        { threshold: 0.2 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el
        }}
        className="pt-28 pb-12 lg:pt-36 lg:pb-20"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className={`max-w-4xl transition-all duration-700 ${
              visibleSections.has(0) ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">ABOUT</h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
              Where glass towers pulse with city rhythms—smart living, rooftop gardens, and underground speakeasies.
              Your address isnt just a location, its a backstage pass to the urban future
            </p>
            <Link
              href="/listings"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 hover:gap-4 hover:shadow-lg group"
            >
              VIEW LISTINGS
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Large Hero Image */}
      <section className="pb-16 lg:pb-24 px-4 lg:px-8">
        <div
          className={`container mx-auto max-w-7xl transition-all duration-700 ${
            visibleSections.has(0) ? "animate-pop-in" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative aspect-[16/9] lg:aspect-[16/7] rounded-3xl overflow-hidden">
            <Image src="/placeholder.svg?height=700&width=1600" alt="Luxury estate" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Philosophy Sections */}
      {philosophies.map((philosophy, index) => (
        <section
          key={philosophy.number}
          ref={(el) => {
            sectionRefs.current[index + 1] = el
          }}
          className="py-16 lg:py-24"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
                visibleSections.has(index + 1) ? "animate-pop-in" : "opacity-0"
              }`}
            >
              {/* Image - alternating sides with rounded corners */}
              <div
                className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={philosophy.image || "/placeholder.svg"}
                  alt={philosophy.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-primary text-sm font-medium tracking-wider">{philosophy.number}</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-foreground">{philosophy.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{philosophy.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
