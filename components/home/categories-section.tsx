"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

/**
 * Homepage philosophy: blue intro band + editorial title, intro copy, and four pillar cards (no category avatars).
 */
export function CategoriesSection() {
  const { t } = useLanguage();
  const p = t.homePhilosophy;
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
      {/* Philosophy band — mirrors location band rhythm on the homepage */}
      <div className="w-full px-4 lg:px-[5vw] mb-16">
        <div
          className={`rounded-3xl overflow-hidden border border-border bg-[#428BC7] shadow-sm transition-all duration-700 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 py-10 lg:px-12 lg:py-12 gap-4">
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-white block">
              {p.bandKicker}
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {p.bandHeading}
            </h3>
            <p className="text-white/90 leading-relaxed max-w-3xl text-sm md:text-base">
              {p.bandBody}
            </p>
          </div>
        </div>
      </div>

      {/* Intro + pillar grid */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div
            className={`lg:col-span-5 space-y-5 transition-all duration-700 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-primary block">
              {p.sectionKicker}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {p.title}
            </h2>
            {p.introParagraphs.map((para, i) => (
              <p
                key={i}
                className="text-muted-foreground text-base md:text-lg leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {p.pillars.map((pillar, index) => {
              const isAccent = index === 3;
              const cardBg = isAccent ? "bg-[#428BC7]" : "bg-secondary/40";
              const headingText = isAccent ? "text-white" : "text-foreground";
              const descText = isAccent
                ? "text-white/85"
                : "text-muted-foreground";

              return (
                <div
                  key={pillar.title}
                  className={`${cardBg} rounded-3xl p-6 transition-all duration-700 hover:shadow-md ${
                    isVisible ? "animate-pop-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className={`text-lg font-bold mb-3 ${headingText}`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${descText}`}>
                    {pillar.body}
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
