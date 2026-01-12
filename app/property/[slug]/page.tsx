import { notFound } from "next/navigation"
import { properties } from "@/lib/data"
import { PropertyGallery } from "@/components/property/property-gallery"
import { PropertyInfo } from "@/components/property/property-info"
import { RelatedProperties } from "@/components/property/related-properties"

interface PropertyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }))
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const { slug } = await params
  const property = properties.find((p) => p.slug === slug)

  if (!property) {
    return {
      title: "Property Not Found | Urban Estate",
    }
  }

  return {
    title: `${property.title} | Urban Estate`,
    description: property.description,
  }
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params
  const property = properties.find((p) => p.slug === slug)

  if (!property) {
    notFound()
  }

  const relatedProperties = properties
    .filter((p) => p.id !== property.id && p.category === property.category)
    .slice(0, 3)

  return (
    <>
      <PropertyGallery property={property} />
      <PropertyInfo property={property} />
      <RelatedProperties properties={relatedProperties} />
    </>
  )
}
