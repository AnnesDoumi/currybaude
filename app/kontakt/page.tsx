import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, MessageCircle, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function KontaktPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="mt-16 md:mt-20 bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Kontakt</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-pretty leading-relaxed opacity-90">
            Wir freuen uns, von Ihnen zu hören
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Visit Us */}
              <Card className="p-8">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-bold mb-4">Besuchen Sie uns</h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <div>
                    <p className="font-medium text-foreground mb-1">Adresse:</p>
                    <p>Curry Baude</p>
                    <p>Badstraße 1-5</p>
                    <p>13357 Berlin-Wedding</p>
                    <p className="text-sm mt-2">U-Bahnhof Gesundbrunnen</p>
                  </div>
                  <Button asChild variant="outline" className="mt-4 bg-transparent">
                    <Link href="/standort">Anfahrt ansehen</Link>
                  </Button>
                </div>
              </Card>

              {/* Opening Hours */}
              <Card className="p-8">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-bold mb-4">Öffnungszeiten</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Montag - Freitag</span>
                    <span className="text-muted-foreground">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Samstag</span>
                    <span className="text-muted-foreground">11:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sonntag</span>
                    <span className="text-muted-foreground">Geschlossen</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Message */}
            <Card className="p-8 md:p-12 text-center bg-muted/30">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-balance">
                Am besten persönlich vorbeikommen
              </h2>
              <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Die Curry Baude ist ein traditioneller Imbiss – wir freuen uns am meisten, wenn Sie uns persönlich
                  besuchen und unsere hausgemachte Currywurst vor Ort genießen.
                </p>
                <p>
                  Kommen Sie vorbei, lassen Sie sich von der authentischen Atmosphäre im denkmalgeschützten U-Bahnhof
                  Gesundbrunnen begeistern und erleben Sie echte Berliner Imbisskultur.
                </p>
                <p className="font-medium text-foreground pt-4">
                  Für größere Bestellungen oder spezielle Anfragen sprechen Sie uns einfach direkt vor Ort an.
                </p>
              </div>
            </Card>

            {/* Guestbook Link */}
            <div className="mt-12 text-center">
              <Card className="p-8 inline-block">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Gästebuch</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Teilen Sie Ihre Erfahrungen und lesen Sie, was andere Gäste über uns sagen.
                </p>
                <Button asChild variant="outline">
                  <a href="http://www.flf-book.de/Benutzer/currybaude.htm" target="_blank" rel="noopener noreferrer">
                    Zum Gästebuch
                  </a>
                </Button>
              </Card>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center">Häufige Fragen</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Bieten Sie auch vegetarische Optionen an?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ja, wir haben auf Anfrage auch vegetarische Alternativen. Sprechen Sie uns einfach vor Ort an.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Kann ich telefonisch vorbestellen?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Für größere Bestellungen können Sie uns gerne vor Ort ansprechen. Einzelbestellungen werden frisch
                    zubereitet, wenn Sie da sind.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Gibt es Sitzplätze?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir sind ein klassischer Imbiss im U-Bahnhof. Es gibt einige Stehmöglichkeiten in der Nähe.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Welche Zahlungsmethoden akzeptieren Sie?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir akzeptieren Barzahlung und gängige EC-Karten.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
