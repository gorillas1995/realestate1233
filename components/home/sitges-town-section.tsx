"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

/**
 * Sitges culture & annual events — replaces the former testimonials carousel on the homepage.
 */
export function SitgesTownSection() {
  const { t } = useLanguage();
  const town = t.homeTown;
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
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-secondary/30"
      aria-labelledby="sitges-town-title"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column — section framing */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-700 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-primary block">
              {town.label}
            </span>

            <h2
              id="sitges-town-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              {town.title}
            </h2>

            {town.introParagraphs.map((para, i) => (
              <p
                key={i}
                className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md lg:max-w-none"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right column — events list + closing line */}
          <div className="lg:col-span-7 space-y-5">
            <ul className="space-y-4 list-none p-0 m-0" role="list">
              {town.events.map((event, index) => (
                <li
                  key={event.name}
                  className={`bg-white border border-border rounded-2xl p-5 transition-all duration-700 ${
                    isVisible ? "animate-pop-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <h3 className="font-semibold text-foreground mb-1.5">
                    {event.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.detail}
                  </p>
                </li>
              ))}
            </ul>

            <p
              className={`text-muted-foreground text-sm md:text-base leading-relaxed pt-2 transition-all duration-700 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              {town.outro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
