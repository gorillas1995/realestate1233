"use client";

/**
 * Loads Vercel Web Analytics only after the user opts into the Analytics category.
 * Add Google Analytics / GTM the same way when env IDs are set.
 */

import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { useConsent } from "@/contexts/consent-context";

export function ConditionalAnalytics() {
  const { isAnalyticsEnabled } = useConsent();

  if (!isAnalyticsEnabled) {
    return null;
  }

  return (
    <>
      <Analytics />
      <ConditionalGoogleTags />
    </>
  );
}

/**
 * Optional third-party tags — only fire when analytics consent is true.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID and/or NEXT_PUBLIC_GTM_ID in .env when ready.
 */
function ConditionalGoogleTags() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  if (!gaId && !gtmId) {
    return null;
  }

  return (
    <>
      {gtmId ? (
        <Script
          id="gtm-consent"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
            `.trim(),
          }}
        />
      ) : null}
      {gaId && !gtmId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-consent"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });
              `.trim(),
            }}
          />
        </>
      ) : null}
    </>
  );
}
