import { Clock, MapPin } from "lucide-react"

export function Footer({ eventTime, street, streetDetails }: { eventTime: Date, street: string, streetDetails: string }) {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <div>
                  <p className="font-medium">{street}</p>
                  <p className="text-sm opacity-80">{streetDetails}</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400" />
                <p>info@grandopening.com</p>
              </div> */}
            </div>
          </div>

          {/* Event Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Grand Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-400" />
                <div>
                  <p className="font-medium">
                    {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "long",
                  }).format(eventTime)}
                  </p>
                  <p className="text-sm opacity-80">
                    {new Intl.DateTimeFormat("en-US", {
                        timeStyle: "short",
                    }).format(eventTime).toString() + " - Onwards"
                    }
                  </p>
                </div>
              </div>
              <p className="text-sm opacity-80 mt-4">
                {"Regular hours will be announced after the grand opening event."}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-green-700 transition-colors">
                Home
              </a>
              <a href="#eventDetails" className="block hover:text-green-700 transition-colors">
                Event Details
              </a>
              {/* <a href="#" className="block hover:text-primary transition-colors">
                Directions
              </a> */}
              {/* <a href="#" className="block hover:text-primary transition-colors">
                RSVP
              </a> */}
              {/* <a href="#" className="block hover:text-primary transition-colors">
                Contact Us
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Grand Opening Event. All rights reserved.
            <span className="text-green-400 font-medium ml-2"> 
                See you on 
            <span className="text-green-400 font-medium ml-1">
                {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "long",
                  }).format(eventTime)} </span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
