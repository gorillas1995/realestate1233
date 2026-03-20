"use client";

/**
 * Four-step journey: discover → concept → coordinate → handover.
 */

import { useLanguage } from "@/contexts/language-context";

export function InteriorProcess() {
  const { t } = useLanguage();
  const { process } = t.interiorDesignPage;

  return (
    <section
      id="interior-process"
      className="bg-secondary/60 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="interior-process-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          id="interior-process-heading"
          className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl"
        >
          {process.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
          {process.intro}
        </p>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border/80 bg-background/80 p-6 shadow-sm backdrop-blur-sm"
            >
              <span className="text-xs font-bold tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
