"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Mark Anderson",
    rating: 4.9,
    comment:
      "Urban Estate made buying my dream home a breeze. Professional, knowledgeable, and always available.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Haniwa Winston",
    rating: 4.9,
    comment:
      "They guided me through every step and found the perfect home within my budget.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Cristine Buckley",
    rating: 4.9,
    comment:
      "True experts in the market. Every recommendation matched my needs perfectly.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "James Miller",
    rating: 5.0,
    comment:
      "Excellent communication and outstanding service from start to finish.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Sophia Turner",
    rating: 4.8,
    comment:
      "A seamless experience. I felt confident and supported throughout the process.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "Daniel Ross",
    rating: 5.0,
    comment:
      "Highly professional team with deep knowledge of the real estate market.",
    image: "/placeholder.svg?height=80&width=80",
  },
];

export function TestimonialsSection() {
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
              Discover more of our properties
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Checkout our reviews
            </h2>

            <p className="text-muted-foreground text-lg max-w-md">
              Hear what our happy clients say about working with Urban Estate
              and how we helped them find their perfect property.
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
