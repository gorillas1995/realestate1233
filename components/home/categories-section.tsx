"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "HOUSES",
    description:
      "Explore our most premium, functional and exotic selection of our available houses.",
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
  },
  {
    title: "LAND",
    description:
      "We have some of most fertile and beautiful lands in our collection.",
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
  },
  {
    title: "APARTMENTS",
    description:
      "Luxury apartments starting from $80k including all services like security, internet, and top view etc.",
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
  },
  {
    title: "EXCLUSIVE ONLY",
    description:
      "Luxury apartments starting from $80k including all services like security, internet, and top view etc.",
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
  },
];

export function CategoriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      {/* WIDE BANNER */}
      <div className="w-full px-4 lg:px-[5vw] mb-16">
        <div
          className={`rounded-3xl overflow-hidden border border-border bg-[#428BC7] shadow-sm transition-all duration-700 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-10 gap-6">
            <div className="flex-1 space-y-3">
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-white block">
                About Us
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Precision. Innovation. Quality.
              </h3>
              <p className="text-white  leading-relaxed max-w-2xl">
                We blend cutting-edge technology with meticulous craftsmanship
                to deliver iconic properties that stand the test of time.
                Trusted by clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SPLIT LAYOUT */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT TEXT */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-700 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Discover our most beautiful properties in Town
            </h2>

            <p className="text-muted-foreground text-lg max-w-md">
              Discover the best and beautiful properties in different categories
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((category, index) => {
              // Make the 4th card (#3, because index is zero-based) have a blue background and white text
              const isFourth = index === 3;
              const cardBg = isFourth ? "bg-[#428BC7]" : "bg-secondary/40";
              const headingText = isFourth ? "text-white" : "text-foreground";
              const descText = isFourth
                ? "text-white/80"
                : "text-muted-foreground";

              return (
                <div
                  key={category.title}
                  className={`${cardBg} rounded-3xl p-6 transition-all duration-700 hover:shadow-md ${
                    isVisible ? "animate-pop-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Avatar images */}
                  <div className="flex -space-x-3 mb-5">
                    {category.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white"
                      >
                        <Image
                          src={img}
                          alt={`${category.title} ${imgIndex}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-2 ${headingText}`}>
                    {category.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${descText}`}>
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
