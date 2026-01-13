"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const philosophies = [
  {
    number: "01",
    title: "PHILOSOPHY",
    description:
      "We believe architecture should create a feeling before it creates a form. Our approach is rooted in clarity, light, and spatial comfort — designing homes that feel calm, open, and intentional from the very first step inside.",
    image: "/house2.jpeg",
  },
  {
    number: "02",
    title: "CRAFTSMANSHIP",
    description:
      "Every material is selected for longevity, tactility, and coherence. From porcelain stoneware façades and CORIAN interiors to integrated lighting and climate systems, nothing is decorative — everything is engineered to last.",
    image: "/house3.jpeg",
  },
  {
    number: "03",
    title: "LONG-TERM VISION",
    description:
      "We design for how people will live, not for how projects are sold. Our homes are built for comfort, inclusivity, and permanence — places meant to age gracefully and remain relevant long after completion.",
    image: "/house1.jpeg",
  },
];

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(
    new Set()
  );
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Trigger initial animations
    setTimeout(() => {
      setVisibleSections(new Set([0]));
    }, 100);

    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref || index === 0) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="pt-28 pb-12 lg:pt-36 lg:pb-20"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className={`max-w-4xl transition-all duration-700 ${
              visibleSections.has(0) ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              ABOUT
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
              We develop architect-designed residences defined by light, space,
              and material honesty. Our focus is not volume, but precision —
              creating calm, inclusive living environments near the sea, built
              for long-term comfort rather than short-term trends.
            </p>
            <Link
              href="/listings"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 hover:gap-4 hover:shadow-lg group"
            >
              VIEW RESIDENCES
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Large Hero Image */}
      <section className="pb-16 lg:pb-24 px-4 lg:px-8">
        <div
          className={`container mx-auto max-w-7xl transition-all duration-700 ${
            visibleSections.has(0) ? "animate-pop-in" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative aspect-[16/9] lg:aspect-[16/7] rounded-3xl overflow-hidden">
            <Image
              src="/place15.jpeg"
              alt="Architect-designed luxury residences"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Sections */}
      {philosophies.map((philosophy, index) => (
        <section
          key={philosophy.number}
          ref={(el) => {
            sectionRefs.current[index + 1] = el;
          }}
          className="py-16 lg:py-24"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
                visibleSections.has(index + 1) ? "animate-pop-in" : "opacity-0"
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={philosophy.image}
                  alt={philosophy.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-primary text-sm font-medium tracking-wider">
                  {philosophy.number}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-foreground">
                  {philosophy.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {philosophy.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
