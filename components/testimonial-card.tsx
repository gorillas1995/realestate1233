import Image from "next/image"
import type { Testimonial } from "@/lib/data"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[350px] md:w-[400px] p-8 bg-card border border-border">
      <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.content}"</p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <div className="font-medium">{testimonial.name}</div>
          <div className="text-muted text-sm">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}
