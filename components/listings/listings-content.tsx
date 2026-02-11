"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { properties, faqs } from "@/lib/data";
import { FAQAccordion } from "@/components/faq-accordion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

type Category = "all" | "house" | "apartment" | "land";

export function ListingsContent() {
  const { t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories: { value: Category; label: string }[] = [
    { value: "house", label: t.listings.houses },
  ];

  const initialCategory = (searchParams.get("category") as Category) || "all";

  const [activeCategory, setActiveCategory] =
    useState<Category>(initialCategory);
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  /* Header animation */
  useEffect(() => {
    setHeaderVisible(true);
  }, []);

  /* Intersection animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* URL sync + skeleton trigger */
  const handleCategoryChange = (cat: Category) => {
    setLoading(true);
    setActiveCategory(cat);

    router.push(cat === "all" ? "/listings" : `/listings?category=${cat}`, {
      scroll: false,
    });

    setTimeout(() => setLoading(false), 400);
  };

  const filteredProperties = useMemo(() => {
    if (activeCategory === "all") return properties;
    return properties.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* HEADER */}
      <section
        className={`pb-12 transition-all duration-700 ${
          headerVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t.listings.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {t.listings.description}
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => {
              const isActive = activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`group flex items-center justify-between gap-4 px-6 py-3 min-w-[170px] rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#428BC7] text-white shadow-lg"
                      : "bg-[#F1F3F4] text-foreground hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  <span className="font-semibold tracking-wide text-sm">
                    {category.label}
                  </span>

                  <span
                    className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-white translate-x-0 opacity-100"
                        : "bg-[#428BC7] translate-x-2 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <ArrowRight
                      className={`w-4 h-4 ${
                        isActive ? "text-black" : "text-white"
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* LISTINGS GRID */}
      <section ref={sectionRef} className="py-12 lg:py-20">
        <div className="w-full px-2 sm:px-4 lg:px-6">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 transition-all duration-700 ${
              isVisible ? "animate-pop-in" : "opacity-0"
            }`}
          >
            {(loading ? Array.from({ length: 9 }) : filteredProperties).map(
              (property: any, index: number) =>
                loading ? (
                  <div
                    key={index}
                    className="rounded-md border border-border bg-white shadow-sm"
                  >
                    <div className="h-48 bg-secondary/40 animate-pulse rounded-t-md" />
                    <div className="px-4 py-3 bg-[#F1F3F4] h-10" />
                  </div>
                ) : (
                  <Link
                    key={property.id}
                    href={`/property/${property.slug}`}
                    className="group rounded-md border border-border bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    {/* IMAGE — auto height, fully visible */}
                    <div className="w-full bg-white flex items-center justify-center p-2">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>

                    {/* FOOTER */}
                    <div className="px-4 py-3 bg-[#F1F3F4] flex items-center justify-between">
                      <span className="text-base font-semibold truncate">
                        {property.title}
                      </span>
                      <span className="text-primary font-semibold whitespace-nowrap">
                        {property.price}
                      </span>
                    </div>
                  </Link>
                ),
            )}
          </div>

          {!loading && filteredProperties.length === 0 && (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg">
                {t.listings.noProperties}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              {t.listings.faq.title}
            </span>
            <p className="text-muted-foreground">
              {t.listings.faq.description}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
