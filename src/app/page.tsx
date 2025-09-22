import { CountdownTimer } from "@/components/countdown-timer"
import { EventDetails } from "@/components/event-details"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SocialShare } from "@/components/social-share"
import { SpecialOffers } from "@/components/special-offers"

export default function GrandOpeningPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <EventDetails />
      <CountdownTimer />
      <SpecialOffers />
      <SocialShare />
      <Footer />
    </main>
  )
}
