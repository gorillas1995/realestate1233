/**
 * Single source of truth for legal / privacy identity fields.
 * Replace placeholders with your registered entity details before production.
 * Have a Spanish-qualified lawyer review all legal pages.
 */

export const SITE_LEGAL = {
  /** Legal name of the data controller */
  controllerName: "Urban Estate (update with registered legal name)",
  /** Registered or principal business address */
  registeredAddress: "Sitges, Garraf, Barcelona, Spain (update with full address)",
  /** General & privacy inquiries (must match site contact points) */
  privacyContactEmail: "contact@sigets-capital.com",
  /** Optional: Spanish company tax ID */
  taxId: "— (update if applicable)",
  /** Website domain for policy references */
  siteDomain: "urbanestate.com",
} as const;

/** Bump when cookie/analytics policy changes materially — users will see the consent drawer again */
export const CONSENT_POLICY_VERSION = "2025-03-16";

/** localStorage key for consent JSON */
export const CONSENT_STORAGE_KEY = "urban-estate-consent-v1";

/** Shown on legal pages as “Last updated” */
export const LEGAL_LAST_UPDATED = "2025-03-16";
