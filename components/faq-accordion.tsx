"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import type { FAQ } from "@/lib/data"

interface FAQAccordionProps {
  faqs: FAQ[]
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null)

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="bg-background border border-border rounded-2xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="text-base font-medium pr-8 text-foreground uppercase tracking-wide">{faq.question}</span>
            <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-full flex-shrink-0">
              {openId === faq.id ? (
                <Minus className="w-4 h-4 text-primary-foreground" />
              ) : (
                <Plus className="w-4 h-4 text-primary-foreground" />
              )}
            </div>
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openId === faq.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
