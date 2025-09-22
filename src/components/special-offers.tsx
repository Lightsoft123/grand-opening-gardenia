import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift as Gift2, Percent, Star, Zap } from "lucide-react"

export function SpecialOffers() {
  const offers = [
    {
      icon: Percent,
      title: "50% Off Everything",
      description: "Massive discounts on all items for grand opening day only",
      badge: "Grand Opening Special",
      color: "bg-primary",
    },
    {
      icon: Gift2,
      title: "Free Gift with Purchase",
      description: "Receive a complimentary gift bag with any purchase over $50",
      badge: "While Supplies Last",
      color: "bg-secondary",
    },
    {
      icon: Star,
      title: "VIP Early Access",
      description: "First 100 customers get exclusive early access to new arrivals",
      badge: "Limited Spots",
      color: "bg-accent",
    },
    {
      icon: Zap,
      title: "Flash Hourly Deals",
      description: "Special surprise deals revealed every hour throughout the day",
      badge: "Every Hour",
      color: "bg-primary",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Exclusive Grand Opening Offers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Take advantage of these incredible deals available only during our grand opening celebration"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {offers.map((offer, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${offer.color} rounded-full flex items-center justify-center mb-3`}>
                  <offer.icon className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="w-fit">
                  {offer.badge}
                </Badge>
                <CardTitle className="text-lg">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-pretty">{offer.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">{"Don't Miss Out!"}</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
            {
              "These exclusive offers are only available during our grand opening event. Join us for a day of incredible savings and celebration!"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Directions
            </Button>
            <Button variant="outline" size="lg">
              Share with Friends
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
