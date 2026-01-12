"use client"

import { ContactForm } from "@/components/contact/contact-form"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen pt-24 pb-16 lg:pt-28 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 ${
            isVisible ? "animate-pop-in" : "opacity-0"
          }`}
        >
          {/* Left - Image with rounded corners */}
          <div className="relative aspect-[4/5] lg:aspect-auto rounded-3xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=900&width=700"
              alt="Contact Urban Estate"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Form and Info - Blue Card */}
          <div className="flex flex-col">
            <div className="bg-primary text-white rounded-3xl p-8 lg:p-12 flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">CONTACT</h1>

              <ContactForm />

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-white/20 space-y-3">
                <p className="text-white/80">+132306565656</p>
                <p className="text-white/80">Street 6 Underground, NYC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
