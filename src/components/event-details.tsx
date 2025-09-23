import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

export function EventDetails() {

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-green-700">Event Details</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Everything you need to know about our grand opening celebration"}
          </p>
        </div>

        <div className="grid mb-12">
          {/* Main Event Info */}
          <Card className="bg-card border-2 border-green-300 shadow-xl shadow-green-600">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-3xl font-bold drop-shadow-[1px_1px_0px_rgb(255,255,255),2px_2px_0px_rgb(0,0,0)]">
                <Calendar className="size-10 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 text-transparent bg-clip-text" />
                <span className="text-3xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text">
                    Event Information
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 sm:grid-cols-2 justify-between">
              <div className="grid items-center justify-center">
                <div className="flex items-center justify-center gap-2">
                    <Calendar className="size-7 text-green-700" />
                    <p className="text-xl font-semibold">Date</p>
                </div>
                <p className="text-muted-foreground">Saturday, December 15, 2024</p>
              </div>
              <div className="grid items-center justify-center">
                <div className="flex items-center justify-center gap-2">
                    <Clock className="size-7 text-green-700" />
                    <p className="text-xl font-semibold">Time</p>
                </div>
                <p className="text-muted-foreground">10:00 AM - 8:00 PM</p>
              </div>
              <div className="grid items-center justify-center">
                <div className="flex items-center justify-center gap-2">
                    <MapPin className="size-7 text-green-700" />
                    <p className="text-xl font-semibold">Location</p>
                </div>
                <p className="text-muted-foreground text-center">
                    123 Downtown Plaza
                    <br />
                    City Center, State 12345
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
