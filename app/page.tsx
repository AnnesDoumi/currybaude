import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, Award, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative mt-16 md:mt-20 min-h-[80vh] flex items-center justify-center bg-surface-light overflow-hidden">
        {/* Hintergrund-Bild */}
        <div className="absolute inset-0 w-full h-full">
          <img
              src="/images/curry-baude-gemalde.jpg"
              alt="Curry Baude Berlin"
              className="w-full h-full object-cover"
          />
        </div>

        {/* Semi-transparente Overlay für bessere Text-Lesbarkeit - OPTIMIERT */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-light/85 via-surface-light/75 to-surface-light/85"></div>

        {/* Alternative: Wenn das Gradient nicht gut funktioniert, nutze dieses Overlay */}
        {/* <div className="absolute inset-0 bg-white/70"></div> */}

        {/* Inhalt */}
        <div className="container mx-auto px-4 py-20 md:py-32 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold text-balance leading-tight text-primary drop-shadow-lg">
              Authentische Berliner Currywurst seit 1989
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto text-pretty leading-relaxed font-medium drop-shadow-md">
              Erleben Sie echte Berliner Tradition im denkmalgeschützten Eingangsbereich des U-Bahnhofs Gesundbrunnen.
              Hausgemachte Wurstwaren nach eigener Rezeptur und Ketchupsauce nach Familiengeheimnis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                  asChild
                  size="lg"
                  className="text-lg font-extrabold bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 focus-visible:ring-4 focus-visible:ring-accent transition-all shadow-lg px-8 py-6 h-auto"
              >
                <Link href="/angebot">Unser Angebot</Link>
              </Button>
              <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg font-bold border-[3px] border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 focus-visible:ring-4 focus-visible:ring-primary transition-all shadow-md px-8 py-6 h-auto bg-white"
              >
                <Link href="/standort">So finden Sie uns</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Highlights Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-balance text-primary">
              Was uns besonders macht
            </h2>
            <p className="text-foreground/80 text-xl max-w-2xl mx-auto text-pretty leading-relaxed font-medium">
              Seit über 30 Jahren steht die Curry Baude für Qualität, Tradition und echten Berliner Geschmack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            <Card className="p-8 text-center border-[3px] border-primary/20 hover:border-primary hover:shadow-xl transition-all bg-white">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Award className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-primary">Eigene Rezeptur</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Als gelernter Fleischer bietet Reina Lehmann Wurstwaren nach eigener Rezeptur an – ein echtes Handwerk.
              </p>
            </Card>

            <Card className="p-8 text-center border-[3px] border-primary/20 hover:border-primary hover:shadow-xl transition-all bg-white">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Heart className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-primary">Familiengeheimnis</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Unsere Ketchupsauce ist ein selbst kreiertes Familiengeheimnis – fruchtig und würzig zugleich.
              </p>
            </Card>

            <Card className="p-8 text-center border-[3px] border-primary/20 hover:border-primary hover:shadow-xl transition-all bg-white">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <MapPin className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-primary">Historischer Standort</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Im denkmalgeschützten Eingangsbereich des U-Bahnhofs Gesundbrunnen – ein Stück Berliner Geschichte.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-surface-neutral">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-balance text-primary">
                  Tradition seit dem Fall der Mauer
                </h2>
                <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                  <p>
                    Die traditionelle Curry Baude wird seit dem Fall der Mauer 1989 von Reina Lehmann geführt. Als
                    gelernter Fleischer mit etablierter Fleischerei bietet er Wurstwaren nach eigener Rezeptur an.
                  </p>
                  <p>
                    Die Ketchupsauce ist ein selbst kreiertes Familiengeheimnis, das von Generation zu Generation
                    weitergegeben wird – eine perfekte Balance aus fruchtiger Süße und würziger Schärfe.
                  </p>
                  <p className="font-bold text-foreground text-xl">
                    Wenn Sie also eine echte Berliner Currywurst essen möchten, besuchen Sie die Curry Baude.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 font-extrabold text-lg bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 focus-visible:ring-4 focus-visible:ring-accent transition-all shadow-lg px-8 py-6 h-auto"
                >
                  <Link href="/ueber-uns">Mehr über uns</Link>
                </Button>
              </div>

              <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden shadow-xl border-4 border-primary/10">
                <img
                  src="/berlin-currywurst-food-stand-authentic.jpg"
                  alt="Curry Baude Imbiss"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="py-20 md:py-32 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
              <Clock className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-balance text-primary">Besuchen Sie uns</h2>
            <p className="text-xl text-foreground/80 mb-8 text-pretty leading-relaxed font-medium">
              Wir freuen uns auf Ihren Besuch im U-Bahnhof Gesundbrunnen
            </p>
            <div className="space-y-3 mb-10">
              <p className="text-2xl font-extrabold text-primary">Badstraße 1-5, 13357 Berlin-Wedding</p>
              <p className="text-xl text-foreground/80 font-semibold">Montag bis Freitag: 10:00 - 20:00 Uhr</p>
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-bold text-lg border-[3px] border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 focus-visible:ring-4 focus-visible:ring-primary transition-all shadow-md px-8 py-6 h-auto bg-white"
            >
              <Link href="/standort">Anfahrt & Details</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
