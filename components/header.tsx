"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/listings", label: "LISTINGS" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="container mx-auto px-4 lg:px-8 pt-4 lg:pt-6">
        <nav className="flex items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 group z-10">
            <span className="text-lg font-bold tracking-tight text-foreground">[URBAN]</span>
          </Link>

          {/* Desktop Navigation - Centered compact pill */}
          <div
            className={`hidden lg:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 ${
              isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-secondary/80 backdrop-blur-sm"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 text-xs font-medium tracking-wider transition-all duration-300 rounded-full ${
                  pathname === link.href
                    ? "bg-foreground text-white"
                    : "text-foreground/70 hover:text-foreground hover:bg-black/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side spacer for balance */}
          <div className="hidden lg:block w-[80px]" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground flex items-center gap-2 z-10"
            aria-label="Toggle menu"
          >
            <span className="text-sm font-medium">MENU</span>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 pt-24 pb-8">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-3xl font-medium transition-all duration-500 flex items-center justify-between group ${
                  pathname === link.href ? "text-primary" : "text-foreground"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : "0ms",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {link.label}
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
