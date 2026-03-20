import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service | Urban Estate",
  description:
    "Terms governing use of the Urban Estate website and contact services for property enquiries in Sitges and Barcelona, Spain.",
  robots: { index: true, follow: true },
};

export default function TermsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
