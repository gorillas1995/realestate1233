"use client";

/**
 * Composes About experience: hero → visual band → prestige bridge → philosophy (mobile snap / desktop editorial).
 */

import { useLanguage } from "@/contexts/language-context";
import type { AboutPhilosophy } from "@/components/about/types";
import { AboutHero } from "@/components/about/about-hero";
import { AboutVisualBand } from "@/components/about/about-visual-band";
import { AboutPrestigeBridge } from "@/components/about/about-prestige-bridge";
import { AboutPhilosophyMobile } from "@/components/about/about-philosophy-mobile";
import { AboutPhilosophyDesktop } from "@/components/about/about-philosophy-desktop";
import { usePrefersReducedMotion } from "@/components/about/use-prefers-reduced-motion";

export function AboutPageContent() {
  const { t } = useLanguage();
  const reducedMotion = usePrefersReducedMotion();

  const philosophies: AboutPhilosophy[] = [
    {
      number: "01",
      title: t.philosophies.philosophy.title,
      description: t.philosophies.philosophy.description,
      image: "/house2.jpeg",
    },
    {
      number: "02",
      title: t.philosophies.craftsmanship.title,
      description: t.philosophies.craftsmanship.description,
      image: "/house3.jpeg",
    },
    {
      number: "03",
      title: t.philosophies.longTermVision.title,
      description: t.philosophies.longTermVision.description,
      image: "/house1.jpeg",
    },
  ];

  return (
    <>
      <AboutHero reducedMotion={reducedMotion} />
      <AboutVisualBand reducedMotion={reducedMotion} />
      <AboutPrestigeBridge reducedMotion={reducedMotion} />
      <AboutPhilosophyMobile
        philosophies={philosophies}
        reducedMotion={reducedMotion}
      />
      <AboutPhilosophyDesktop
        philosophies={philosophies}
        reducedMotion={reducedMotion}
      />
    </>
  );
}
