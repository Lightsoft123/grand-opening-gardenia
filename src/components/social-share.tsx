import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Share2, Twitter } from "lucide-react"

export function SocialShare() {
  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "hover:bg-blue-600",
      href: "#",
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "hover:bg-sky-500",
      href: "#",
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "hover:bg-pink-600",
      href: "#",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Spread the Word!</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {"Help us celebrate by sharing our grand opening with your friends and family"}
          </p>
        </div>

        <Card className="bg-card mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Share2 className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Share Our Grand Opening</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              {socialPlatforms.map((platform, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className={`flex items-center gap-2 transition-colors ${platform.color} hover:text-white`}
                >
                  <platform.icon className="w-5 h-5" />
                  Share on {platform.name}
                </Button>
              ))}
            </div>

            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Share this message:</p>
              <p className="text-sm font-medium">
                {
                  "🎉 Join us for our Grand Opening on December 15th! Exclusive deals, live entertainment, and so much more. See you there! #GrandOpening #NewBusiness"
                }
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">500+</div>
            <p className="text-sm text-muted-foreground">People Already Excited</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Exclusive Deals</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">1</div>
            <p className="text-sm text-muted-foreground">Unforgettable Day</p>
          </div>
        </div>
      </div>
    </section>
  )
}
