import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PropertyCard } from "@/components/property-card"
import { Marquee } from "@/components/marquee"
import type { Property } from "@/lib/data"

interface RelatedPropertiesProps {
  properties: Property[]
}

export function RelatedProperties({ properties }: RelatedPropertiesProps) {
  if (properties.length === 0) return null

  return (
    <section className="py-16 lg:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Similar Properties
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium">You May Also Like</h2>
          </div>
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300 group"
          >
            View All Properties
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <Marquee speed="slow" className="py-4">
        {properties.map((property) => (
          <div key={property.id} className="flex-shrink-0 w-[350px] md:w-[400px]">
            <PropertyCard property={property} />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
