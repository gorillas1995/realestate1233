import type { Metadata } from "next";
import type { ReactNode } from "react";

/** SEO metadata for the privacy policy (static; page content follows user language in UI). */
export const metadata: Metadata = {
  title: "Privacy Policy | Urban Estate",
  description:
    "How Urban Estate collects and uses personal data, cookies, and analytics for visitors interested in properties in Sitges and Barcelona, Spain.",
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
