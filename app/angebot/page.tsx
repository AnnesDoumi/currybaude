import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Flame, Leaf } from "lucide-react"

export default function AngebotPage() {
  const menuItems = [
    {
      category: "Currywurst Spezialitäten",
      items: [
        { name: "Currywurst klassisch", description: "Mit hausgemachter Currysauce und Pommes frites" },
        { name: "Currywurst scharf", description: "Extra würzig mit unserer speziellen scharfen Sauce", spicy: true },
        { name: "Currywurst XXL", description: "Doppelte Portion für großen Hunger" },
        { name: "Bio-Currywurst", description: "Mit Bio-Wurst und Bio-Sauce", organic: true },
      ],
    },
    {
      category: "Weitere Wurstwaren",
      items: [
        { name: "Bratwurst", description: "Frisch vom Grill mit Brötchen" },
        { name: "Bockwurst", description: "Klassisch im Wasser gezogen" },
        { name: "Thüringer Rostbratwurst", description: "Original Thüringer Art" },
      ],
    },
    {
      category: "Beilagen",
      items: [
        { name: "Pommes frites", description: "Knusprig goldbraun" },
        { name: "Brötchen", description: "Frisch gebacken" },
        { name: "Kartoffelsalat", description: "Hausgemacht nach Familienrezept" },
      ],
    },
    {
      category: "Getränke",
      items: [
        { name: "Softdrinks", description: "Cola, Fanta, Sprite" },
        { name: "Wasser", description: "Still oder sprudelnd" },
        { name: "Berliner Kindl", description: "Lokales Bier" },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="mt-16 md:mt-20 bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Unser Angebot</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-pretty leading-relaxed opacity-90">
            Entdecken Sie unsere hausgemachten Spezialitäten – von der klassischen Currywurst bis zu weiteren Berliner
            Imbiss-Favoriten.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {menuItems.map((section) => (
              <div key={section.category}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-balance">{section.category}</h2>
                <div className="grid gap-4">
                  {section.items.map((item) => (
                    <Card key={item.name} className="p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            {item.spicy && <Flame className="h-4 w-4 text-primary" title="Scharf" />}
                            {item.organic && <Leaf className="h-4 w-4 text-green-600" title="Bio" />}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card className="p-8 bg-muted/50">
              <h3 className="font-serif text-xl font-bold mb-4">Besondere Hinweise</h3>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Alle Wurstwaren werden nach eigener Rezeptur hergestellt</li>
                <li>• Unsere Currysauce ist ein Familiengeheimnis seit 1989</li>
                <li>• Großzügige Portionen garantiert</li>
                <li>• Vegetarische Alternativen auf Anfrage</li>
                <li>• Fragen Sie nach unseren Tagesangeboten</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
