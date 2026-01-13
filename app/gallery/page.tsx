"use client";

import { GalleryGrid } from "@/components/gallery/gallery-grid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function GalleryPage() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">{t.gallery.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t.gallery.description}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 hover:gap-4 hover:shadow-lg group"
            >
              {t.gallery.aboutUs}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <GalleryGrid />
    </>
  );
}
