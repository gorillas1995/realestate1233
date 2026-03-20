"use client";

/**
 * Large editorial still below the hero — establishes material and scale before copy blocks.
 */

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export function InteriorMainVisual() {
  const { t } = useLanguage();
  const alt = t.interiorDesignPage.mainVisual.alt;

  return (
    <section
      className="px-4 pb-12 pt-4 sm:px-6 sm:pb-16 lg:pb-20"
      aria-label={alt}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-secondary shadow-xl shadow-black/10 sm:aspect-[16/9] lg:h-[min(560px,70vh)] lg:aspect-auto">
          <Image
            src="/house2.jpeg"
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>
      </div>
    </section>
  );
}
