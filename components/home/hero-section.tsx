"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export function HeroSection() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center">
      {/* 0.5% outer spacing */}
      <div className="w-full h-screen px-[0.5vw] py-[0.5vh]">
        <div
          className={`relative w-full h-full rounded-[2.5rem] overflow-hidden transition-all duration-1000 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* ================= VIDEO BACKGROUND ================= */}

          {/* Desktop video */}
          <video
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
            src="/hero-dessktop.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Mobile video */}
          <video
            className="block md:hidden absolute inset-0 w-full h-full object-cover"
            src="/hero-mobile.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* ================= CONTENT ================= */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-10 lg:px-16 max-w-xl">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-5 text-white transition-all duration-1000 delay-200 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {t.hero.title}
                <br />
                <span className="text-white/90">{t.hero.subtitle}</span>
              </h1>

              <p
                className={`text-white/80 text-sm sm:text-base lg:text-lg max-w-md mb-7 leading-relaxed transition-all duration-1000 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {t.hero.description}
              </p>

              <div
                className={`transition-all duration-1000 delay-500 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <Link
                  href="/listings"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-foreground font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-white/90 hover:gap-4 hover:shadow-xl group"
                >
                  {t.hero.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
