import { Clock, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">123 Downtown Plaza</p>
                  <p className="text-sm opacity-80">City Center, State 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p>info@grandopening.com</p>
              </div>
            </div>
          </div>

          {/* Event Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Grand Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">December 15, 2024</p>
                  <p className="text-sm opacity-80">10:00 AM - 8:00 PM</p>
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
              <a href="#" className="block hover:text-primary transition-colors">
                Event Details
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Special Offers
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Directions
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                RSVP
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Grand Opening Event. All rights reserved. |
            <span className="text-primary font-medium"> See you on December 15th!</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
