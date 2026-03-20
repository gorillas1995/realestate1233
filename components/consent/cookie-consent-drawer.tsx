"use client";

/**
 * Bottom drawer for cookie consent: equal-weight Accept / Reject, plus customise toggles.
 * Uses ConsentContext for persistence and Vaul Drawer for mobile-first UX.
 */

import Link from "next/link";
import { useEffect, useState } from "react";
import { useConsent } from "@/contexts/consent-context";
import { useLanguage } from "@/contexts/language-context";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export function CookieConsentDrawer() {
  const { t } = useLanguage();
  const {
    drawerOpen,
    setDrawerOpen,
    acceptAll,
    rejectNonEssential,
    savePartial,
    preferences,
  } = useConsent();

  const [panel, setPanel] = useState<"main" | "customize">("main");
  const [draftAnalytics, setDraftAnalytics] = useState(preferences.analytics);
  const [draftMarketing, setDraftMarketing] = useState(preferences.marketing);

  // Keep draft in sync when opening customise from current saved prefs
  useEffect(() => {
    if (drawerOpen && panel === "customize") {
      setDraftAnalytics(preferences.analytics);
      setDraftMarketing(preferences.marketing);
    }
  }, [drawerOpen, panel, preferences.analytics, preferences.marketing]);

  useEffect(() => {
    if (drawerOpen) {
      setPanel("main");
    }
  }, [drawerOpen]);

  const goCustomize = () => {
    setDraftAnalytics(preferences.analytics);
    setDraftMarketing(preferences.marketing);
    setPanel("customize");
  };

  const primaryButtonClass =
    "min-h-12 w-full rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-1";

  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="bottom">
      <DrawerContent className="max-h-[85vh] border-t-2 border-border bg-background px-4 pb-6 pt-2 md:mx-auto md:max-w-lg">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-lg font-bold tracking-tight">
            {t.cookies.title}
          </DrawerTitle>
          <DrawerDescription className="text-left text-sm leading-relaxed">
            {t.cookies.description}{" "}
            <Link
              href="/privacy"
              className="font-semibold text-primary underline-offset-4 hover:underline"
              onClick={() => setDrawerOpen(false)}
            >
              {t.cookies.privacyLink}
            </Link>
            .
          </DrawerDescription>
        </DrawerHeader>

        {panel === "main" ? (
          <>
            {/* Equal visual weight: Accept and Reject as full-width stacked on xs, row on sm+ */}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-3">
              <button
                type="button"
                className={cn(
                  primaryButtonClass,
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
                onClick={acceptAll}
              >
                {t.cookies.acceptAll}
              </button>
              <button
                type="button"
                className={cn(
                  primaryButtonClass,
                  "border-2 border-foreground/20 bg-background text-foreground hover:bg-muted",
                )}
                onClick={rejectNonEssential}
              >
                {t.cookies.rejectNonEssential}
              </button>
            </div>
            <div className="mt-3">
              <button
                type="button"
                className="w-full min-h-11 rounded-xl border border-border bg-muted/50 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                onClick={goCustomize}
              >
                {t.cookies.customize}
              </button>
            </div>
          </>
        ) : (
          <div className="mt-2 space-y-5 pb-2">
            <CategoryRow
              title={t.cookies.necessaryTitle}
              description={t.cookies.necessaryDesc}
              lockedLabel={t.cookies.necessaryLocked}
            />
            <CategoryRow
              title={t.cookies.analyticsTitle}
              description={t.cookies.analyticsDesc}
              checked={draftAnalytics}
              onCheckedChange={setDraftAnalytics}
            />
            <CategoryRow
              title={t.cookies.marketingTitle}
              description={t.cookies.marketingDesc}
              checked={draftMarketing}
              onCheckedChange={setDraftMarketing}
            />
            <DrawerFooter className="flex-col gap-2 p-0 sm:flex-col">
              <button
                type="button"
                className={cn(primaryButtonClass, "bg-primary text-primary-foreground")}
                onClick={() =>
                  savePartial({
                    analytics: draftAnalytics,
                    marketing: draftMarketing,
                  })
                }
              >
                {t.cookies.savePreferences}
              </button>
              <button
                type="button"
                className="w-full min-h-11 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setPanel("main")}
              >
                {t.cookies.back}
              </button>
            </DrawerFooter>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  onCheckedChange,
  lockedLabel,
}: {
  title: string;
  description: string;
  checked?: boolean;
  onCheckedChange?: (v: boolean) => void;
  lockedLabel?: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-border/80 bg-muted/30 p-4">
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
          {description}
        </p>
      </div>
      <div className="flex shrink-0 items-center">
        {lockedLabel ? (
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {lockedLabel}
          </span>
        ) : (
          <Switch
            checked={checked}
            onCheckedChange={onCheckedChange}
            aria-label={title}
          />
        )}
      </div>
    </div>
  );
}
