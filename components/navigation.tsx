"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Angebot", href: "/angebot" },
    { name: "Über Uns", href: "/ueber-uns" },
    { name: "Standort", href: "/standort" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-primary/20 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-extrabold text-primary hover:opacity-80 focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 rounded transition-opacity"
          >
            Curry Baude
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-bold text-foreground hover:text-primary hover:scale-105 focus-visible:text-primary focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all rounded px-3 py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10 focus-visible:ring-4 focus-visible:ring-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-primary/20 bg-white" role="menu">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-bold text-foreground hover:text-primary hover:bg-primary/5 focus-visible:text-primary focus-visible:bg-primary/10 focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all py-4 px-4 rounded"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
