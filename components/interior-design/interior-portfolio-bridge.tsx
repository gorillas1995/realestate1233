"use client";

/**
 * Editorial bridge: developments as proof of taste — connects real estate to interior service.
 */

import { useLanguage } from "@/contexts/language-context";

export function InteriorPortfolioBridge() {
  const { t } = useLanguage();
  const { bridge } = t.interiorDesignPage;

  return (
    <section
      id="interior-portfolio"
      className="bg-secondary/80 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="interior-bridge-heading"
    >
      <div className="container mx-auto max-w-3xl text-center lg:text-left">
        <h2
          id="interior-bridge-heading"
          className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl"
        >
          {bridge.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {bridge.body}
        </p>
      </div>
    </section>
  );
}
