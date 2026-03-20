"use client";

/**
 * Shared typography for Privacy Policy and Terms of Service pages.
 */

import type { LegalSection } from "@/lib/legal-documents";
import { LEGAL_LAST_UPDATED } from "@/lib/legal-documents";

interface LegalDocumentProps {
  documentTitle: string;
  lastUpdatedLabel: string;
  sections: LegalSection[];
}

export function LegalDocument({
  documentTitle,
  lastUpdatedLabel,
  sections,
}: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 pt-28 lg:px-8 lg:pt-32">
      <header className="mb-10 border-b border-border pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {documentTitle}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {lastUpdatedLabel}: {LEGAL_LAST_UPDATED}
        </p>
      </header>

      <div className="space-y-10 text-foreground">
        {sections.map((section) => (
          <section key={section.id} className="scroll-mt-28">
            <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
