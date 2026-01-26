"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

// Hardcoded featured properties
const featuredProperties = [
  {
    id: "house1",
    title: "La Plana Claror - XIRGU 69",
    price: "€2,350,000",
    image: "/xirgu69.png",
    href: "/property/la-plana-claror",
    area: "600,00 m²",
  },
  {
    id: "house2",
    title: "La Plana Brisa - XIRGU 71",
    price: "€970,000",
    image: "/xirgu71.png",
    href: "/property/la-plana-brisa",
    area: "600,00 m²",
  },
  {
    id: "house3",
    title: "La Plana Serena - XIRGU 73",
    price: "€1,550,000",
    image: "/xirgu73.png",
    href: "/property/la-plana-serena",
    area: "600,00 m²",
  },
];

export function FeaturedListings() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white space-y-10">
      {/* HEADER */}
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-700 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="space-y-3">
            <span className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              {t.featuredListings.label}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t.featuredListings.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              {t.featuredListings.description}
            </p>
          </div>

          <Link
            href="/listings"
            className="inline-flex items-center gap-3 px-7 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 hover:gap-3.5 hover:shadow-lg group"
          >
            {t.featuredListings.viewListings}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* FULL WIDTH GRID */}
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 transition-all duration-700 ${
            isVisible ? "animate-pop-in" : "opacity-0"
          }`}
        >
          {featuredProperties.map((property, index) => (
            <Link
              key={property.id}
              href={property.href}
              className="group rounded-md overflow-hidden border border-border bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* IMAGE */}
              <div className="relative aspect-6/7">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* BLURRED AREA BADGE */}
                <div className="absolute bottom-3 left-3">
                  <div className="px-3 py-1.5 rounded-md bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
                    <span className="text-sm font-semibold text-foreground">
                      {property.area}
                    </span>
                  </div>
                </div>
              </div>

              {/* TITLE & PRICE */}
              <div className="mt-2 mb-2 px-4 py-2 bg-[#F1F3F4] flex items-center justify-between rounded-t">
                <span className="text-base font-semibold text-foreground group-hover:text-black transition-colors duration-300 truncate">
                  {property.title}
                </span>
                <span className="text-primary font-semibold text-base whitespace-nowrap">
                  {property.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
