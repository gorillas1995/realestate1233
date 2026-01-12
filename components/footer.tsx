import Link from "next/link"

export function Footer() {
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
              Curating exceptional properties for discerning clients since 1998. Experience luxury real estate
              redefined.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Listings", "About", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">Properties</h4>
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
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-foreground">Contact</h4>
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
            © {new Date().getFullYear()} Urban Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
