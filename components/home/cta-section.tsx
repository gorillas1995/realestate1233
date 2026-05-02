"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export function CTASection() {
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
        <div className="relative min-h-112 overflow-hidden rounded-3xl lg:min-h-80 lg:rounded-2xl w-full max-w-7xl mx-auto lg:max-w-none">
          <Image
            src="/img-banner2.avif"
            alt="Luxury lifestyle"
            fill
            className="object-cover"
            priority={false}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Use min-height on mobile so long localized copy never clips inside the image panel. */}
          <div className="relative z-10 flex min-h-112 items-center justify-center px-5 py-10 sm:px-6 lg:min-h-80">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {t.cta.title}
              </h2>
              <p className="text-white/85 text-sm leading-relaxed mb-7 max-w-2xl mx-auto md:text-base md:mb-8">
                {t.cta.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 bg-white text-foreground font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-white/90 hover:gap-4 hover:shadow-xl group sm:px-8 sm:py-4"
              >
                {t.cta.button}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
