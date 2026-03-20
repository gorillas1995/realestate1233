"use client";

/**
 * High-contrast band summarizing execution depth (suppliers, systems, delivery).
 */

import { useLanguage } from "@/contexts/language-context";

export function InteriorExecutionBand() {
  const { t } = useLanguage();
  const { executionBand } = t.interiorDesignPage;

  return (
    <section
      className="bg-primary px-4 py-16 text-primary-foreground sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="interior-execution-heading"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h2
          id="interior-execution-heading"
          className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
        >
          {executionBand.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-primary-foreground/95 md:text-lg">
          {executionBand.body}
        </p>
      </div>
    </section>
  );
}
