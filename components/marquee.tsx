"use client"

import type { ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  className?: string
}

export function Marquee({ children, direction = "left", speed = "normal", className = "" }: MarqueeProps) {
  const speedClass = {
    slow: "[--duration:60s]",
    normal: "[--duration:30s]",
    fast: "[--duration:15s]",
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex gap-6 ${speedClass[speed]}`}
        style={{
          animation: `${direction === "left" ? "marquee" : "marquee-reverse"} var(--duration) linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
