"use client";

/**
 * Final dual CTA: interior project + explore listings (same standard narrative).
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function InteriorClosingCta() {
  const { t } = useLanguage();
  const { closing } = t.interiorDesignPage;

  return (
    <section
      id="interior-enquire"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="interior-closing-heading"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h2
          id="interior-closing-heading"
          className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl"
        >
          {closing.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {closing.body}
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-md transition-all hover:gap-3 hover:bg-primary/90"
          >
            {closing.ctaPrimary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/listings"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background px-8 py-3.5 text-sm font-semibold tracking-wide text-foreground transition-colors hover:bg-secondary"
          >
            {closing.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
