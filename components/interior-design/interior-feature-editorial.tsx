"use client";

/**
 * Signature systems: alternating editorial layout; full-bleed media on small screens.
 */

import { useLanguage } from "@/contexts/language-context";
import { INTERIOR_FEATURE_MEDIA } from "@/lib/interior-design-features-media";
import { InteriorMedia } from "@/components/interior-design/interior-media";

export function InteriorFeatureEditorial() {
  const { t } = useLanguage();
  const { featuresIntro, features, media: mediaLabels } = t.interiorDesignPage;

  const count = Math.min(features.length, INTERIOR_FEATURE_MEDIA.length);

  return (
    <section
      id="interior-systems"
      className="bg-background px-0 py-16 sm:px-6 sm:py-20 lg:py-28"
      aria-labelledby="interior-features-heading"
    >
      <div className="container mx-auto mb-12 max-w-6xl px-4 sm:mb-16 sm:px-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
          {featuresIntro.label}
        </p>
        <h2
          id="interior-features-heading"
          className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl"
        >
          {featuresIntro.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {featuresIntro.subtitle}
        </p>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 sm:space-y-24 lg:px-0">
        {Array.from({ length: count }, (_, index) => {
          const feature = features[index]!;
          const m = INTERIOR_FEATURE_MEDIA[index]!;
          const mediaOnLeft = index % 2 === 0;

          return (
            <article
              key={feature.title}
              className="grid items-stretch gap-0 lg:grid-cols-2 lg:gap-12 lg:px-6"
              aria-labelledby={`interior-feature-title-${index}`}
            >
              <div
                className={
                  mediaOnLeft
                    ? "lg:order-1"
                    : "lg:order-2"
                }
              >
                {/* w-full only: negative margins + calc(100%+2rem) caused horizontal document scroll on mobile when the grid was already viewport-wide */}
                <div className="w-full max-w-full overflow-hidden lg:rounded-2xl lg:shadow-lg lg:shadow-black/10">
                  <InteriorMedia
                    media={m}
                    label={feature.title}
                    playVideoAria={mediaLabels.playVideoAria}
                    videoPreviewAlt={mediaLabels.videoPreviewAlt}
                  />
                </div>
              </div>
              <div
                className={`px-4 pb-2 pt-8 sm:px-0 lg:flex lg:flex-col lg:justify-center ${
                  mediaOnLeft ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h3
                  id={`interior-feature-title-${index}`}
                  className="text-xl font-semibold tracking-tight text-primary md:text-2xl lg:text-3xl"
                >
                  {feature.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {feature.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
