import { Suspense } from "react";
import { ListingsContent } from "@/components/listings/listings-content";

export const metadata = {
  title: "Listings | Urban Estate",
  description:
    "Explore our exclusive collection of luxury properties worldwide.",
};

// Loading fallback component for Suspense boundary
function ListingsLoading() {
  return (
    <div className="pt-24 lg:pt-28">
      <div className="container mx-auto px-4 lg:px-8 pb-12">
        <div className="h-16 bg-secondary/30 rounded-lg animate-pulse mb-4" />
        <div className="h-6 w-2/3 bg-secondary/30 rounded-lg animate-pulse" />
      </div>
      <div className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex justify-center gap-4 flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-12 w-[170px] bg-secondary/30 rounded-xl animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-12 lg:py-20">
        <div className="w-full px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="rounded-md overflow-hidden border border-border bg-white shadow-sm"
              >
                <div className="relative aspect-6/7 bg-secondary/40 animate-pulse rounded-md" />
                <div className="mt-2 mb-2 px-4 py-2 bg-[#F1F3F4] h-10 rounded-t" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ListingsPage() {
  return (
    <div className="pt-24 lg:pt-28">
      <Suspense fallback={<ListingsLoading />}>
        <ListingsContent />
      </Suspense>
    </div>
  );
}
