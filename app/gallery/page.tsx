import { GalleryGrid } from "@/components/gallery/gallery-grid"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Gallery | Urban Estate",
  description: "Explore stunning visuals of our exceptional luxury properties.",
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">GALLERY</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Check our most highlighted estate work in our gallery. All the projects are done by urban estate and its
              team.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 hover:gap-4 hover:shadow-lg group"
            >
              ABOUT US
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <GalleryGrid />
    </>
  )
}
