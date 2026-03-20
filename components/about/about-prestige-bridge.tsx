"use client";

/**
 * Narrow dark prestige band — aligns with property “related” premium language, single CTA.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useAboutReveal } from "@/components/about/use-about-reveal";
import { cn } from "@/lib/utils";

export function AboutPrestigeBridge({ reducedMotion }: { reducedMotion: boolean }) {
  const { t } = useLanguage();
  const { ref, visible } = useAboutReveal(reducedMotion);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 lg:py-24"
      aria-labelledby="about-bridge-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0c1829] to-[#0f2847]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#428BC7]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.03)_50%,transparent_60%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#428BC7]/50 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2
          id="about-bridge-heading"
          className={cn(
            "text-xl font-semibold leading-snug tracking-tight text-white md:text-2xl motion-safe:transition-all motion-safe:duration-700",
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          {t.about.bridgeTitle}
        </h2>
        <div
          className={cn(
            "mt-8 motion-safe:transition-all motion-safe:duration-700 motion-safe:delay-150",
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <Link
            href="/listings"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-[#428BC7]/50 hover:bg-white/15 hover:shadow-lg hover:shadow-[#428BC7]/20"
          >
            {t.about.bridgeCta}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
