import Link from "next/link"
import { MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t-2 border-secondary/80">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">Curry Baude</h3>
            <p className="text-sm leading-relaxed text-secondary-foreground/90">
              Authentische Berliner Currywurst seit 1989. Hausgemachte Wurstwaren nach eigener Rezeptur und Ketchupsauce
              nach Familiengeheimnis.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary-foreground">Kontakt</h4>
            <div className="space-y-3 text-secondary-foreground/90">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="text-sm leading-relaxed">
                  <p>Badstraße 1-5</p>
                  <p>13357 Berlin-Wedding</p>
                  <p className="mt-1">U-Bahnhof Gesundbrunnen</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm">Mo-Fr 10:00-20:00 Uhr</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary-foreground">Navigation</h4>
            <ul className="space-y-2" role="list">
              <li>
                <Link
                  href="/angebot"
                  className="text-sm text-secondary-foreground/90 hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors inline-block py-1"
                >
                  Angebot
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-sm text-secondary-foreground/90 hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors inline-block py-1"
                >
                  Über Uns
                </Link>
              </li>
              <li>
                <Link
                  href="/standort"
                  className="text-sm text-secondary-foreground/90 hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors inline-block py-1"
                >
                  Standort
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-secondary-foreground/90 hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors inline-block py-1"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-secondary-foreground/90 hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors inline-block py-1"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/75">
          <p>&copy; {new Date().getFullYear()} Curry Baude. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
