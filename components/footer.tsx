"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <span className="text-xl font-bold tracking-tight">[URBAN]</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  {t.nav.listings}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">{t.footer.properties}</h4>
            <ul className="space-y-4">
              {["Luxury Houses", "Penthouses", "Estates", "Private Islands", "Investment"].map((type) => (
                <li key={type}>
                  <Link
                    href="/listings"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>123 Luxury Avenue</li>
              <li>Monaco, MC 98000</li>
              <li className="pt-2">
                <a href="mailto:contact@urbanestate.com" className="hover:text-primary transition-colors duration-300">
                  contact@urbanestate.com
                </a>
              </li>
              <li>
                <a href="tel:+377123456789" className="hover:text-primary transition-colors duration-300">
                  +377 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Urban Estate. {t.footer.rightsReserved}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
