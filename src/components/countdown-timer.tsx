"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function CountdownTimer({ eventTime }: { eventTime: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = eventTime.getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Countdown to Grand Opening</h2>
        <p className="text-lg text-muted-foreground mb-12 text-pretty">
          {"The excitement is building! Don't miss out on this special day."}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <Card key={index} className="bg-card border-2 border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
          <p className="font-semibold mb-2 text-green-700">⏰ Mark Your Calendar!</p>
          <p className="text-sm text-muted-foreground">
            {"Set a reminder so you don't miss our grand opening celebration"}
          </p>
        </div>
      </div>
    </section>
  )
}
