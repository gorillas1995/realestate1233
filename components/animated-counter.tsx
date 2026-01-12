"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  value: string
  label: string
}

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const numericMatch = value.match(/[\d.]+/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const targetNum = Number.parseFloat(numericMatch[0])
    const prefix = value.slice(0, value.indexOf(numericMatch[0]))
    const suffix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length)
    const duration = 2000
    const steps = 60
    const increment = targetNum / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(current + increment, targetNum)

      const formatted =
        current >= 1000
          ? current.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          : current >= 10
            ? Math.round(current).toString()
            : current.toFixed(1)

      setDisplayValue(`${prefix}${formatted}${suffix}`)

      if (step >= steps) {
        setDisplayValue(value)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-accent mb-2">{displayValue}</div>
      <div className="text-muted text-sm tracking-wider uppercase">{label}</div>
    </div>
  )
}
