import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Award, Users, Heart, Clock } from "lucide-react"

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="mt-16 md:mt-20 bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Über Uns</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-pretty leading-relaxed opacity-90">
            Eine Berliner Erfolgsgeschichte seit dem Fall der Mauer
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src="/berlin-street-food-currywurst-authentic-owner.jpg"
                  alt="Reina Lehmann - Inhaber der Curry Baude"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">
                  Tradition & Handwerk seit 1989
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Die traditionelle Curry Baude wird seit dem Fall der Mauer 1989 von Reina Lehmann geführt. Der
                    gelernte Fleischer mit etablierter Fleischerei bringt jahrzehntelange Erfahrung und Leidenschaft für
                    sein Handwerk mit.
                  </p>
                  <p>
                    Was als kleiner Imbiss im denkmalgeschützten Eingangsbereich des U-Bahnhofs Gesundbrunnen begann,
                    hat sich zu einer Berliner Institution entwickelt. Hier treffen sich Menschen aus allen
                    Gesellschaftsschichten, um die beste Currywurst der Stadt zu genießen.
                  </p>
                  <p className="font-medium text-foreground">
                    Unsere Philosophie ist einfach: Qualität, Tradition und Authentizität. Keine Kompromisse, kein
                    Schnickschnack – nur ehrliches Handwerk.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <Card className="p-8">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Eigene Rezeptur</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Als gelernter Fleischer entwickelt Reina Lehmann alle Wurstwaren nach eigenen Rezepturen. Jede Wurst
                  wird mit Sorgfalt und nach traditionellen Methoden hergestellt.
                </p>
              </Card>

              <Card className="p-8">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Familiengeheimnis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unsere Ketchupsauce ist ein selbst kreiertes Familiengeheimnis – eine perfekte Balance aus fruchtiger
                  Süße und würziger Schärfe, die von Generation zu Generation weitergegeben wird.
                </p>
              </Card>

              <Card className="p-8">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Berliner Tradition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Die Curry Baude ist mehr als ein Imbiss – sie ist ein Treffpunkt, ein Stück Berliner Kultur und ein
                  lebendiges Beispiel für die Vielfalt unserer Stadt.
                </p>
              </Card>

              <Card className="p-8">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">Über 30 Jahre</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seit über drei Jahrzehnten steht die Curry Baude für konstante Qualität und Zuverlässigkeit. Viele
                  unserer Gäste kommen seit Jahren regelmäßig zu uns.
                </p>
              </Card>
            </div>

            {/* Historical Location */}
            <Card className="p-8 md:p-12 bg-muted/50">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-balance">Ein historischer Standort</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Der denkmalgeschützte Eingangsbereich des U-Bahnhofs Gesundbrunnen ist nicht nur unser Zuhause,
                  sondern auch ein wichtiger Teil der Berliner Geschichte. Der U-Bahnhof wurde 1930 eröffnet und hat die
                  wechselvolle Geschichte Berlins miterlebt.
                </p>
                <p>
                  Heute verbinden wir die historische Atmosphäre dieses besonderen Ortes mit der lebendigen Gegenwart
                  Berlins. Wo einst die Mauer die Stadt teilte, kommen heute Menschen aus aller Welt zusammen, um
                  authentische Berliner Currywurst zu genießen.
                </p>
                <p className="font-medium text-foreground">
                  Die Curry Baude ist ein Symbol für das wiedervereinte Berlin – traditionsbewusst und weltoffen
                  zugleich.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
