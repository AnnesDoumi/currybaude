import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="mt-16 md:mt-20 bg-secondary text-secondary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Impressum</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
                  <div className="space-y-1 text-muted-foreground">
                    <p className="font-medium text-foreground">Curry Baude</p>
                    <p>Inhaber: Reina Lehmann</p>
                    <p>Badstraße 1-5</p>
                    <p>13357 Berlin-Wedding</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Kontakt</h2>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Adresse: Badstraße 1-5, 13357 Berlin</p>
                    <p>Standort: U-Bahnhof Gesundbrunnen</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Umsatzsteuer-ID</h2>
                  <p className="text-muted-foreground">
                    Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: Auf Anfrage
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Verantwortlich für den Inhalt</h2>
                  <p className="text-muted-foreground">Reina Lehmann (Anschrift wie oben)</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">EU-Streitschlichtung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline ml-1"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                    <br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Verbraucherstreitbeilegung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Haftungsausschluss</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Haftung für Inhalte</h3>
                      <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                        allgemeinen Gesetzen verantwortlich. Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                        erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                        keine Gewähr übernehmen.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Haftung für Links</h3>
                      <p>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                        haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                        Seiten verantwortlich.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Urheberrecht</h3>
                      <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                        jeweiligen Autors bzw. Erstellers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
