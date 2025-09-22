import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/grand-opening-celebration-storefront-with-balloons.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-orange-500/90 text-primary-foreground rounded-full text-sm font-medium mb-4 animate-bounce">
            🎉 Grand Opening Event
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
          Join Us for Our
          <span className="block text-primary drop-shadow-lg">Grand Opening!</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto opacity-90">
          {
            "Experience something extraordinary as we open our doors for the first time. Exclusive deals, special guests, and unforgettable moments await!"
          }
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg bg-transparent"
          >
            View Event Details
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>December 15, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>10:00 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Downtown Plaza</span>
          </div>
        </div>
      </div>
    </section>
  )
}
