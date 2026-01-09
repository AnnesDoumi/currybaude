import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { MapPin, Train, Clock, NavigationIcon } from "lucide-react"

export default function StandortPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="mt-16 md:mt-20 bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Standort & Anfahrt</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-pretty leading-relaxed opacity-90">
            Besuchen Sie uns im Herzen von Berlin-Wedding
          </p>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Address Card */}
              <Card className="p-8">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-bold mb-4">Adresse</h2>
                <div className="space-y-2 text-muted-foreground leading-relaxed">
                  <p className="text-lg font-medium text-foreground">Curry Baude</p>
                  <p>Badstraße 1-5</p>
                  <p>13357 Berlin-Wedding</p>
                  <p className="pt-2">Im denkmalgeschützten Eingangsbereich des U-Bahnhofs Gesundbrunnen</p>
                </div>
              </Card>

              {/* Opening Hours Card */}
              <Card className="p-8">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-bold mb-4">Öffnungszeiten</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Montag - Freitag</span>
                    <span className="text-muted-foreground">10:00 - 20:00 Uhr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Samstag</span>
                    <span className="text-muted-foreground">11:00 - 19:00 Uhr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sonntag</span>
                    <span className="text-muted-foreground">Geschlossen</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    An Feiertagen können abweichende Öffnungszeiten gelten.
                  </p>
                </div>
              </Card>
            </div>

            {/* Transport */}
            <Card className="p-8 md:p-12 mb-12">
              <Train className="h-10 w-10 text-primary mb-6" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Anfahrt mit ÖPNV</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">U-Bahn</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">U8</span> - Gesundbrunnen
                    </p>
                    <p className="text-sm">Direkt am Ausgang im denkmalgeschützten Eingangsbereich</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">S-Bahn</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">S1, S2, S25, S26</span> - Gesundbrunnen
                    </p>
                    <p className="text-sm">Ca. 2 Minuten Fußweg vom S-Bahnhof</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Tram</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">M10, 12</span> - Gesundbrunnen/Badstraße
                    </p>
                    <p className="text-sm">Haltestelle direkt vor dem Eingang</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Bus</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">120, 142, 247, N40</span>
                    </p>
                    <p className="text-sm">Verschiedene Buslinien in der Nähe</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <NavigationIcon className="h-16 w-16 text-muted-foreground mx-auto" />
                  <div>
                    <p className="font-medium text-lg mb-2">Interaktive Karte</p>
                    <p className="text-sm text-muted-foreground">
                      U-Bahnhof Gesundbrunnen, Badstraße 1-5, 13357 Berlin
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <Card className="p-8 mt-12 bg-muted/50">
              <h3 className="font-serif text-xl font-bold mb-4">Gut zu wissen</h3>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Der U-Bahnhof Gesundbrunnen ist ein wichtiger Verkehrsknotenpunkt in Berlin-Wedding</li>
                <li>• Barrierearmer Zugang über den U-Bahnhof</li>
                <li>• Parkplätze in der Umgebung begrenzt verfügbar</li>
                <li>• Wir empfehlen die Anreise mit öffentlichen Verkehrsmitteln</li>
                <li>• Fahrradständer in der Nähe vorhanden</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
