"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

const testimonials = [
  {
    id: 1,
    name: "Alex M.",
    rating: 5.0,
    comment:
      "What convinced me was the level of materials used as standard. CORIAN bathrooms, porcelain façades, zero thresholds — this is not speculative development, it’s architectural housing.",
    image: "/review1.avif",
  },
  {
    id: 2,
    name: "Daniel R.",
    rating: 4.9,
    comment:
      "The layout, openness, and light are exceptional. You really feel the space. Add the fact that the beach is only 900 meters away in a straight line and it becomes a rare find.",
    image: "/review2.webp",
  },
  {
    id: 3,
    name: "Sofia T.",
    rating: 5.0,
    comment:
      "I appreciated the inclusivity and atmosphere of the area. It feels safe, open-minded, and respectful — a place where everyone can feel comfortable and at home.",
    image: "/review4.webp",
  },
  {
    id: 4,
    name: "Michael B.",
    rating: 4.8,
    comment:
      "After visiting the site and reviewing the technical specs, it’s clear this project is built for long-term living, not quick resale. The climate and lighting systems are extremely well thought out.",
    image: "/review3.avif",
  },
  {
    id: 5,
    name: "Elena C.",
    rating: 5.0,
    comment:
      "The architectural details stood out immediately — linear pool lighting, hidden LEDs, glass balustrades. Everything is integrated, nothing feels added later.",
    image: "/review5.webp",
  },
  {
    id: 6,
    name: "Chris W.",
    rating: 4.9,
    comment:
      "As someone who values privacy, design, and proximity to the sea, this project checks all the boxes. It feels calm, spacious, and intentionally designed.",
    image: "/review6.avif",
  },
];

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const REVIEWS_PER_PAGE = 3;
  const totalPages = Math.ceil(testimonials.length / REVIEWS_PER_PAGE);

  const visibleReviews = testimonials.slice(
    page * REVIEWS_PER_PAGE,
    page * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE
  );

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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT TEXT */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-700 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-primary block">
              {t.testimonials.label}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {t.testimonials.title}
            </h2>

            <p className="text-muted-foreground text-lg max-w-md">
              {t.testimonials.description}
            </p>
          </div>

          {/* RIGHT REVIEWS */}
          <div className="lg:col-span-7 space-y-5">
            {visibleReviews.map((review, index) => (
              <div
                key={review.id}
                className={`bg-white border border-border rounded-2xl p-5 flex gap-4 transition-all duration-700 ${
                  isVisible ? "animate-pop-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Avatar */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">
                        {review.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            ))}

            {/* DOT PAGINATION */}
            <div className="flex items-center gap-3 pt-4">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    page === i
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Show reviews page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
