import { notFound } from "next/navigation";
import { properties } from "@/lib/data";
import { PropertyGallery } from "@/components/property/property-gallery";
import { PropertyRenders } from "@/components/property/property-renders";
import { PropertyInfo } from "@/components/property/property-info";
import { RelatedProperties } from "@/components/property/related-properties";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return {
      title: "Property Not Found | Urban Estate",
    };
  }

  return {
    title: `${property.title} | Urban Estate`,
    description: property.description,
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const relatedSlugs = [
    "la-plana-brisa-xirgu-49",
    "la-plana-claror-xirgu-13",
    "la-plana-alba-xirgu-67",
    "la-plana-aura-xirgu-69",
    "la-plana-horizon-xirgu-97",
    "la-plana-llum-xirgu-71",
    "la-plana-ponent-xirgu-73",
    "la-plana-vista-garraf-45",
  ];

  const relatedProperties = relatedSlugs
    .map((relatedSlug) => properties.find((p) => p.slug === relatedSlug))
    .filter((p): p is (typeof properties)[number] => Boolean(p));

  return (
    <>
      <PropertyGallery property={property} />
      <PropertyRenders property={property} />
      <PropertyInfo property={property} />
      <RelatedProperties properties={relatedProperties} />
    </>
  );
}
