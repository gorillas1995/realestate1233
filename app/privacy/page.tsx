"use client";

import { LegalDocument } from "@/components/legal/legal-document";
import { getPrivacySections } from "@/lib/legal-documents";
import { useLanguage } from "@/contexts/language-context";

export default function PrivacyPage() {
  const { language, t } = useLanguage();
  const sections = getPrivacySections(language);

  return (
    <LegalDocument
      documentTitle={t.legal.privacyTitle}
      lastUpdatedLabel={t.legal.lastUpdated}
      sections={sections}
    />
  );
}
