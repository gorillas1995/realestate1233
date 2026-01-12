"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { stats } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export function StatsSection() {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 pt-5 lg:pt-3  bg-secondary/30 space-y-14"
    >
      {/* STATS (normal container width) */}
      <div className="container mx-auto">
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 ${
            isVisible ? "animate-pop-in" : "opacity-0"
          }`}
        >
          {stats.map((item, index) => {
            // Set background and text color according to card index
            let cardBg, cardText;
            if (index === 2) {
              // Third card: blue background, white text
              cardBg = "bg-[#428BC7]";
              cardText = "text-white";
            } else {
              // First two: light gray background, normal text
              cardBg = "bg-[#F1F3F4]";
              cardText = "text-foreground";
            }
            return (
              <div
                key={item.label}
                className={`rounded-3xl ${cardBg} shadow-sm border border-border p-6 py-15`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* NUMBER */}
                <div className={`text-4xl lg:text-6xl text-left ${cardText}`}>
                  {item.value}
                </div>

                {/* LABEL */}
                <div
                  className={`mt-3 text-sm lg:text-base uppercase tracking-widest text-left pt-5 ${
                    index === 2 ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BANNER (wider on desktop – 6% spacing) */}
      <div className="w-full px-2 lg:px-[2vw] pt-10">
        <div
          className={`rounded-3xl overflow-hidden border border-border bg-[#428BC7] shadow-sm transition-all duration-700 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* TEXT */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center space-y-5">
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-white">
                About Us
              </span>

              <h3 className="text-3xl lg:text-3xl  leading-tight text-white">
                Precision. Innovation. Quality.
              </h3>

              <p className="text-white leading-relaxed text-sm">
                We blend cutting-edge technology with meticulous craftsmanship
                to deliver iconic properties that stand the test of time.
                Trusted by clients worldwide.
              </p>

              <Link
                href="/listings"
                className="inline-flex items-center gap-2 w-fit text-white font-semibold hover:gap-3 transition-all"
              >
                VIEW LISTINGS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
