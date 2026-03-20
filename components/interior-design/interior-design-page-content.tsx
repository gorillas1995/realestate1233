"use client";

/**
 * Composes the full interior design experience: hero → visual → bridge → pillars → features → process → execution → closing.
 */

import { usePrefersReducedMotion } from "@/components/about/use-prefers-reduced-motion";
import { InteriorHero } from "@/components/interior-design/interior-hero";
import { InteriorMainVisual } from "@/components/interior-design/interior-main-visual";
import { InteriorPortfolioBridge } from "@/components/interior-design/interior-portfolio-bridge";
import { InteriorPillarsCarousel } from "@/components/interior-design/interior-pillars-carousel";
import { InteriorFeatureEditorial } from "@/components/interior-design/interior-feature-editorial";
import { InteriorProcess } from "@/components/interior-design/interior-process";
import { InteriorExecutionBand } from "@/components/interior-design/interior-execution-band";
import { InteriorClosingCta } from "@/components/interior-design/interior-closing-cta";

export function InteriorDesignPageContent() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="bg-background text-foreground overflow-x-clip">
      <InteriorHero reducedMotion={reducedMotion} />
      <InteriorMainVisual />
      <InteriorPortfolioBridge />
      <InteriorPillarsCarousel />
      <InteriorFeatureEditorial />
      <InteriorProcess />
      <InteriorExecutionBand />
      <InteriorClosingCta />
    </div>
  );
}
