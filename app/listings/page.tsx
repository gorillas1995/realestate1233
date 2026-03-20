import { Suspense } from "react";
import { ListingsContent } from "@/components/listings/listings-content";

export const metadata = {
  title: "Listings | Urban Estate",
  description:
    "Explore our exclusive collection of luxury properties worldwide.",
};

function ListingsLoading() {
  return (
    <div className="overflow-x-clip pt-24 lg:pt-28">
      <div className="border-b border-border/60 bg-linear-to-b from-secondary/50 to-background pb-10">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="h-3 w-40 animate-pulse rounded-full bg-secondary/60" />
          <div className="mt-6 h-12 max-w-sm animate-pulse rounded-lg bg-secondary/50" />
          <div className="mt-4 h-20 max-w-xl animate-pulse rounded-lg bg-secondary/40" />
        </div>
      </div>
      <div className="sticky top-24 z-30 border-b border-border/60 bg-background/90 backdrop-blur-md lg:top-28">
        <div className="flex gap-2 overflow-hidden px-4 py-4 lg:justify-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-12 w-28 shrink-0 animate-pulse rounded-full bg-secondary/50"
            />
          ))}
        </div>
      </div>
      <div className="py-10 sm:py-14">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card"
              >
                <div className="aspect-3/4 animate-pulse bg-secondary/50 sm:aspect-5/6" />
                <div className="h-16 animate-pulse bg-secondary/30" />
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
    <div className="overflow-x-clip pt-24 lg:pt-28">
      <Suspense fallback={<ListingsLoading />}>
        <ListingsContent />
      </Suspense>
    </div>
  );
}
