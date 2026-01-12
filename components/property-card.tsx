import Link from "next/link"
import Image from "next/image"
import type { Property } from "@/lib/data"

interface PropertyCardProps {
  property: Property
  variant?: "default" | "compact"
}

export function PropertyCard({ property, variant = "default" }: PropertyCardProps) {
  return (
    <Link
      href={`/property/${property.slug}`}
      className="group block bg-card overflow-hidden transition-all duration-500 hover:bg-card/80"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className={`p-6 ${variant === "compact" ? "p-4" : "p-6"}`}>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
          {property.title}
        </h3>
        <p className="text-muted text-sm mb-3">{property.location}</p>
        <div className="flex items-center justify-between">
          <span className="text-accent font-semibold">{property.price}</span>
          {property.bedrooms && (
            <span className="text-muted text-sm">
              {property.bedrooms} bed · {property.bathrooms} bath
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
