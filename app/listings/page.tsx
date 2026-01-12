import { ListingsContent } from "@/components/listings/listings-content"

export const metadata = {
  title: "Listings | Urban Estate",
  description: "Explore our exclusive collection of luxury properties worldwide.",
}

export default function ListingsPage() {
  return (
    <div className="pt-24 lg:pt-28">
      <ListingsContent />
    </div>
  )
}
