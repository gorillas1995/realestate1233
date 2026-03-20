"use client";

/**
 * lg+ only: three distinct editorial layouts (sticky image, asymmetric grid, typographic band + wide image).
 */

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import type { AboutPhilosophy } from "@/components/about/types";
import { useAboutReveal } from "@/components/about/use-about-reveal";
import { cn } from "@/lib/utils";

interface AboutPhilosophyDesktopProps {
  philosophies: AboutPhilosophy[];
  reducedMotion: boolean;
}

export function AboutPhilosophyDesktop({
  philosophies,
  reducedMotion,
}: AboutPhilosophyDesktopProps) {
  return (
    <div className="hidden lg:block">
      {philosophies.map((item, index) => (
        <PhilosophyBlock
          key={item.number}
          item={item}
          index={index}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  );
}

function PhilosophyBlock({
  item,
  index,
  reducedMotion,
}: {
  item: AboutPhilosophy;
  index: number;
  reducedMotion: boolean;
}) {
  const { t } = useLanguage();
  const { ref, visible } = useAboutReveal(reducedMotion);

  if (index === 0) {
    return (
      <section ref={ref} className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-12 gap-10 lg:gap-14">
            <div className="col-span-12 lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div
                  className={cn(
                    "relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_28px_80px_-28px_rgba(0,0,0,0.2)] ring-1 ring-black/5 motion-safe:transition-all motion-safe:duration-1000",
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0",
                  )}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="40vw"
                    className="object-cover"
                    loading="lazy"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 flex flex-col justify-center py-6 lg:col-span-7 lg:min-h-[min(135vh,1100px)] lg:py-16">
              <PillarCopy
                item={item}
                chapterLabel={t.about.chapterLabel}
                visible={visible}
                delay=""
              />
              <div
                className={cn(
                  "mt-12 h-px w-20 bg-primary/35 motion-safe:transition-all motion-safe:duration-700 motion-safe:delay-200",
                  visible ? "opacity-100" : "opacity-0",
                )}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (index === 1) {
    return (
      <section ref={ref} className="border-y border-border/50 bg-muted/15 py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-12 items-center gap-12 lg:gap-16">
            <div
              className={cn(
                "order-2 col-span-12 lg:order-1 lg:col-span-6 motion-safe:transition-all motion-safe:duration-1000",
                visible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-6 opacity-0",
              )}
            >
              <PillarCopy
                item={item}
                chapterLabel={t.about.chapterLabel}
                visible={visible}
                delay="motion-safe:delay-75"
              />
            </div>
            <div className="order-1 col-span-12 lg:order-2 lg:col-span-6">
              <div
                className={cn(
                  "relative ml-auto aspect-[4/5] max-w-lg translate-x-0 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 lg:translate-x-6 motion-safe:transition-all motion-safe:duration-1000",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0",
                )}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="45vw"
                  className="object-cover"
                  loading="lazy"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // index === 2 — typographic band + cinematic wide image
  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="container mx-auto max-w-3xl px-8 text-center">
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.35em] text-primary motion-safe:transition-all motion-safe:duration-700",
            visible ? "opacity-100" : "opacity-0",
          )}
        >
          {t.about.chapterLabel} {item.number}
        </p>
        <h2
          className={cn(
            "mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-foreground lg:text-5xl motion-safe:transition-all motion-safe:duration-700 motion-safe:delay-100",
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          {item.title}
        </h2>
        <div
          className={cn(
            "mx-auto my-10 h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent motion-safe:transition-opacity motion-safe:duration-700 motion-safe:delay-150",
            visible ? "opacity-100" : "opacity-0",
          )}
        />
        <p
          className={cn(
            "text-lg leading-relaxed text-muted-foreground motion-safe:transition-all motion-safe:duration-700 motion-safe:delay-200",
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {item.description}
        </p>
      </div>
      <div
        className={cn(
          "container mx-auto mt-16 max-w-6xl px-8 motion-safe:transition-all motion-safe:duration-1000 motion-safe:delay-300",
          visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
        )}
      >
        <div className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-[0_32px_80px_-32px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="85vw"
            className="object-cover"
            loading="lazy"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

function PillarCopy({
  item,
  chapterLabel,
  visible,
  delay,
}: {
  item: AboutPhilosophy;
  chapterLabel: string;
  visible: boolean;
  delay: string;
}) {
  return (
    <>
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.35em] text-primary motion-safe:transition-all motion-safe:duration-700",
          delay,
          visible ? "opacity-100" : "opacity-0",
        )}
      >
        {chapterLabel} {item.number}
      </p>
      <h2
        className={cn(
          "mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl motion-safe:transition-all motion-safe:duration-700 motion-safe:delay-75",
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        {item.title}
      </h2>
      <p
        className={cn(
          "mt-6 text-lg leading-relaxed text-muted-foreground motion-safe:transition-all motion-safe:duration-700 motion-safe:delay-150",
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
      >
        {item.description}
      </p>
    </>
  );
}
