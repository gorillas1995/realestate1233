"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 lg:py-20 px-4 lg:px-6">
      <div
        className={`w-full mx-auto transition-all duration-700 ${
          isVisible ? "animate-pop-in" : "opacity-0"
        }`}
      >
        <div className="relative overflow-hidden rounded-3xl lg:rounded-2xl w-full max-w-7xl mx-auto lg:max-w-none">
          <div className="relative aspect-[16/6] lg:aspect-[16/3] w-full">
            <Image
              src="/img-banner2.avif"
              alt="Luxury lifestyle"
              fill
              className="object-cover"
              priority={false}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                CHANGE YOUR LIFESTYLE!
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-white/90 hover:gap-4 hover:shadow-xl group"
              >
                REACH OUT TO US
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
