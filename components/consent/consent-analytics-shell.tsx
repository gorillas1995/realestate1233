"use client";

/**
 * Client bundle: consent state, cookie UI, and analytics gated behind user choice.
 */

import type { ReactNode } from "react";
import { ConsentProvider } from "@/contexts/consent-context";
import { CookieConsentDrawer } from "@/components/consent/cookie-consent-drawer";
import { ConditionalAnalytics } from "@/components/consent/conditional-analytics";

export function ConsentAnalyticsShell({ children }: { children: ReactNode }) {
  return (
    <ConsentProvider>
      {children}
      <CookieConsentDrawer />
      <ConditionalAnalytics />
    </ConsentProvider>
  );
}
