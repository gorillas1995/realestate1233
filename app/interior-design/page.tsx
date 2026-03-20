import type { Metadata } from "next";
import { InteriorDesignPageContent } from "@/components/interior-design/interior-design-page-content";

export const metadata: Metadata = {
  title: "Interior Design | Urban Estate",
  description:
    "Architect-led interior design by the same team behind Urban Estate residences—craft, material discipline, and engineered systems from concept to handover.",
};

export default function InteriorDesignPage() {
  return <InteriorDesignPageContent />;
}
