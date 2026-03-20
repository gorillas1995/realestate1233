import Link from "next/link"
import Image from "next/image"
import type { Property } from "@/lib/data"
import ImageKitImage from "@/components/ImageKitImage"

interface PropertyCardProps {
  property: Property
  variant?: "default" | "compact" | "lightText"
}

export function PropertyCard({ property, variant = "default" }: PropertyCardProps) {
  const useImageKit = property.imageKitGallery && property.imageKitGallery.length > 0
  const imagePath = useImageKit ? property.imageKitGallery![0] : property.image || "/placeholder.svg"

  return (
    <Link
      href={`/property/${property.slug}`}
      className={`group block overflow-hidden transition-all duration-500 ${
        variant === "lightText"
          ? "rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur-sm hover:border-[#428BC7]/45 hover:bg-white/8 hover:shadow-[#428BC7]/15"
          : "bg-card hover:bg-card/80"
      }`}
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden ${
          variant === "lightText"
            ? "rounded-t-2xl border-b border-white/10"
            : "rounded-2xl mb-4"
        }`}
      >
        {useImageKit ? (
          <ImageKitImage
            path={imagePath}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            width={400}
            height={300}
          />
        ) : (
          <Image
            src={imagePath}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
      </div>
      <div
        className={`p-6 ${variant === "compact" ? "p-4" : "p-6"} ${
          variant === "lightText"
            ? "rounded-b-2xl border-t border-white/5 bg-white/4 text-white"
            : ""
        }`}
      >
        <h3
          className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
            variant === "lightText"
              ? "text-white group-hover:text-sky-100"
              : "group-hover:text-accent"
          }`}
        >
          {property.title}
        </h3>
        <p
          className={`text-sm mb-3 ${
            variant === "lightText" ? "text-slate-300" : "text-muted"
          }`}
        >
          {property.location}
        </p>
        <div className="flex items-center justify-between">
          <span
            className={
              variant === "lightText"
                ? "font-semibold text-sky-200"
                : "text-accent font-semibold"
            }
          >
            {property.price}
          </span>
          {property.bedrooms && (
            <span
              className={`text-sm ${
                variant === "lightText" ? "text-slate-400" : "text-muted"
              }`}
            >
              {property.bedrooms} bed · {property.bathrooms} bath
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
