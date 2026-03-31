import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { FeaturedListings } from "@/components/home/featured-listings";
import { CategoriesSection } from "@/components/home/categories-section";
import { SitgesTownSection } from "@/components/home/sitges-town-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedListings />
      <CategoriesSection />
      <SitgesTownSection />
      <CTASection />
    </>
  );
}
