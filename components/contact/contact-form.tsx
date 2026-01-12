"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary-foreground rounded-full">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-serif font-medium mb-4">Message Sent</h3>
        <p className="text-primary-foreground/80">
          Thank you for reaching out. A member of our team will be in touch with you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          required
          placeholder="First Name"
          className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-xl focus:border-primary-foreground/50 focus:outline-none transition-colors duration-300"
        />
        <input
          type="text"
          name="lastName"
          required
          placeholder="Last Name"
          className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-xl focus:border-primary-foreground/50 focus:outline-none transition-colors duration-300"
        />
      </div>

      <input
        type="email"
        name="email"
        required
        placeholder="Email Address"
        className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-xl focus:border-primary-foreground/50 focus:outline-none transition-colors duration-300"
      />

      <textarea
        name="message"
        rows={4}
        required
        placeholder="Your Message"
        className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-xl focus:border-primary-foreground/50 focus:outline-none transition-colors duration-300 resize-none"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary-foreground text-primary font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-primary-foreground/90 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Submit
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  )
}
