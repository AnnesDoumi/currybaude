'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Train, Clock, NavigationIcon, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function StandortPage() {
  const [mapConsent, setMapConsent] = useState<boolean | null>(null)
  const [showConsentBanner, setShowConsentBanner] = useState(false)

  useEffect(() => {
    // Prüfe ob der Nutzer bereits eine Entscheidung getroffen hat
    const savedConsent = localStorage.getItem('maps-consent')
    if (savedConsent !== null) {
      setMapConsent(JSON.parse(savedConsent))
    } else {
      // Zeige Banner nur wenn noch keine Entscheidung getroffen wurde
      setShowConsentBanner(true)
    }
  }, [])

  const handleMapConsent = (consent: boolean) => {
    setMapConsent(consent)
    localStorage.setItem('maps-consent', JSON.stringify(consent))
    setShowConsentBanner(false)
  }

  const resetConsent = () => {
    localStorage.removeItem('maps-consent')
    setMapConsent(null)
    setShowConsentBanner(true)
  }

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

              {/* Map Section mit Consent */}
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                {mapConsent === true ? (
                    <>
                      {/* Google Maps Embed - DSGVO-konform */}
                      <iframe
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.794476241857!2d13.389717!3d52.548333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d0b5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sU-Bahnhof%20Gesundbrunnen!5e0!3m2!1sde!2sde!4v1234567890"
                      />
                      {/* Datenschutz-Hinweis über der Karte */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-3 flex justify-between items-center">
                    <span>
                      Diese Karte verwendet Google Maps. Daten werden an Google übertragen.{' '}
                      <a href="/datenschutz" className="underline hover:opacity-80">
                        Datenschutz
                      </a>
                    </span>
                        <button
                            onClick={resetConsent}
                            className="ml-4 px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-xs transition-colors"
                        >
                          Einstellungen
                        </button>
                      </div>
                    </>
                ) : (
                    /* Placeholder wenn kein Consent */
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                      <div className="text-center space-y-6 px-6">
                        <NavigationIcon className="h-16 w-16 text-muted-foreground mx-auto" />
                        <div>
                          <p className="font-medium text-lg mb-2">Karte verfügbar</p>
                          <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                            Um diese Karte anzuzeigen, müssen externe Inhalte von Google Maps geladen werden.
                            Dies führt zu Datentransfers. Bitte stimmen Sie dem zu.
                          </p>
                        </div>
                        <Button
                            onClick={() => handleMapConsent(true)}
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          Karte aktivieren
                        </Button>
                      </div>
                    </div>
                )}
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

              {/* Datenschutz-Info Box */}
              <Card className="p-6 mt-8 border-l-4 border-primary bg-primary/5">
                <h3 className="font-semibold text-sm text-primary mb-2">🔒 Datenschutz</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir respektieren Ihre Privatsphäre. Die Karte wird nur geladen, wenn Sie dem zustimmen.
                  Weitere Informationen finden Sie in unserer{' '}
                  <a href="/datenschutz" className="underline hover:opacity-80">
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Consent Banner - nur wenn noch keine Entscheidung */}
        {showConsentBanner && mapConsent === null && (
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl animate-in slide-in-from-bottom">
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Google Maps aktivieren?</h3>
                    <p className="text-sm text-muted-foreground">
                      Diese Website nutzt Google Maps um Ihnen die Anfahrt zu zeigen.
                      Dabei werden Daten an Google übertragen. Sie können dem jederzeit widersprechen.
                    </p>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <Button
                        onClick={() => handleMapConsent(false)}
                        variant="outline"
                        className="flex-1 sm:flex-initial"
                    >
                      Ablehnen
                    </Button>
                    <Button
                        onClick={() => handleMapConsent(true)}
                        className="flex-1 sm:flex-initial bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Akzeptieren
                    </Button>
                  </div>
                </div>
              </div>
            </div>
        )}

        <Footer />
      </div>
  )
}