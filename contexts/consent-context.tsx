"use client";

/**
 * Cookie / marketing / analytics consent for GDPR & ePrivacy-aligned UX.
 * Persists choices in localStorage; re-prompts when CONSENT_POLICY_VERSION changes.
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CONSENT_POLICY_VERSION,
  CONSENT_STORAGE_KEY,
} from "@/lib/site-legal";

export type ConsentPreferences = {
  /** Always true — required for site operation */
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = {
  version: string;
  preferences: ConsentPreferences;
  answeredAt: string;
};

const defaultPreferences = (): ConsentPreferences => ({
  necessary: true,
  analytics: false,
  marketing: false,
});

function parseStored(raw: string | null): StoredConsent | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as StoredConsent;
    if (
      data &&
      typeof data.version === "string" &&
      data.preferences &&
      typeof data.preferences.analytics === "boolean" &&
      typeof data.preferences.marketing === "boolean"
    ) {
      return {
        ...data,
        preferences: {
          necessary: true,
          analytics: data.preferences.analytics,
          marketing: data.preferences.marketing,
        },
      };
    }
  } catch {
    /* ignore */
  }
  return null;
}

function isConsentCurrent(stored: StoredConsent | null): boolean {
  return (
    stored !== null && stored.version === CONSENT_POLICY_VERSION
  );
}

interface ConsentContextValue {
  /** User has saved choices for the current policy version */
  hasAnswered: boolean;
  preferences: ConsentPreferences;
  isAnalyticsEnabled: boolean;
  isMarketingEnabled: boolean;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  /** Footer / settings link — opens drawer even after consent was given */
  openPreferences: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePartial: (prefs: Pick<ConsentPreferences, "analytics" | "marketing">) => void;
}

const ConsentContext = createContext<ConsentContextValue | undefined>(
  undefined,
);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [stored, setStored] = useState<StoredConsent | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Read localStorage only on client after mount (avoids hydration mismatch)
  useEffect(() => {
    setMounted(true);
    const parsed = parseStored(
      typeof window !== "undefined"
        ? localStorage.getItem(CONSENT_STORAGE_KEY)
        : null,
    );
    setStored(parsed);
    if (!isConsentCurrent(parsed)) {
      setDrawerOpen(true);
    }
  }, []);

  const persist = useCallback((preferences: ConsentPreferences) => {
    const payload: StoredConsent = {
      version: CONSENT_POLICY_VERSION,
      preferences,
      answeredAt: new Date().toISOString(),
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
    setStored(payload);
  }, []);

  const hasAnswered = mounted && isConsentCurrent(stored);

  const preferences: ConsentPreferences = useMemo(() => {
    if (stored && isConsentCurrent(stored)) {
      return stored.preferences;
    }
    return defaultPreferences();
  }, [stored]);

  const acceptAll = useCallback(() => {
    persist({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    setDrawerOpen(false);
  }, [persist]);

  const rejectNonEssential = useCallback(() => {
    persist({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    setDrawerOpen(false);
  }, [persist]);

  const savePartial = useCallback(
    (prefs: Pick<ConsentPreferences, "analytics" | "marketing">) => {
      persist({
        necessary: true,
        analytics: prefs.analytics,
        marketing: prefs.marketing,
      });
      setDrawerOpen(false);
    },
    [persist],
  );

  const openPreferences = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      hasAnswered,
      preferences,
      isAnalyticsEnabled: hasAnswered && preferences.analytics,
      isMarketingEnabled: hasAnswered && preferences.marketing,
      drawerOpen,
      setDrawerOpen,
      openPreferences,
      acceptAll,
      rejectNonEssential,
      savePartial,
    }),
    [
      hasAnswered,
      preferences,
      drawerOpen,
      openPreferences,
      acceptAll,
      rejectNonEssential,
      savePartial,
    ],
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (ctx === undefined) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return ctx;
}
