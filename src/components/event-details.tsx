import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Gift, MapPin, Music, Users } from "lucide-react"

export function EventDetails() {
  const eventHighlights = [
    {
      icon: Gift,
      title: "Exclusive Offers",
      description: "Up to 50% off on grand opening specials",
      badge: "Limited Time",
    },
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Local bands and performers throughout the day",
      badge: "All Day",
    },
    {
      icon: Users,
      title: "Meet & Greet",
      description: "Meet our team and special guest speakers",
      badge: "2:00 PM",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Event Details & Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Everything you need to know about our grand opening celebration"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Main Event Info */}
          <Card className="bg-card border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Calendar className="w-5 h-5" />
                Event Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold">Date</p>
                  <p className="text-muted-foreground">Saturday, December 15, 2024</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold">Time</p>
                  <p className="text-muted-foreground">10:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">
                    123 Downtown Plaza
                    <br />
                    City Center, State 12345
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What to Expect */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Users className="w-5 h-5" />
                What to Expect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Free refreshments and snacks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Product demonstrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Exclusive grand opening discounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Prize giveaways every hour</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Photo opportunities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Event Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {eventHighlights.map((highlight, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {highlight.badge}
                  </Badge>
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
