"use client";

import { LegalDocument } from "@/components/legal/legal-document";
import { getTermsSections } from "@/lib/legal-documents";
import { useLanguage } from "@/contexts/language-context";

export default function TermsPage() {
  const { language, t } = useLanguage();
  const sections = getTermsSections(language);

  return (
    <LegalDocument
      documentTitle={t.legal.termsTitle}
      lastUpdatedLabel={t.legal.lastUpdated}
      sections={sections}
    />
  );
}
