import { CountdownTimer } from "@/components/countdown-timer";
import { EventDetails } from "@/components/event-details";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";

export default function GrandOpeningPage() {
    const eventTime = new Date("2025-10-03T07:00:00");
    const street = "Jl. Rajawali, Sukajadi, Pekanbaru";
    const streetDetails = "Di samping Jl. Nusa Indah";
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <EventDetails eventTime={eventTime} street={street} streetDetails={streetDetails} />
      <CountdownTimer eventTime={eventTime} />
      {/* <SpecialOffers /> */}
      {/* <SocialShare /> */}
      <Footer eventTime={eventTime} street={street} streetDetails={streetDetails} />
    </main>
  )
}
