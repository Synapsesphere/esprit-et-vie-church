"use client"

import { Card } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

export function DailyVerse() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("daily-verse")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="daily-verse" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card
            className={`p-8 md:p-12 bg-primary text-primary-foreground border-0 shadow-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Verset du Jour</h3>
                <p className="text-primary-foreground/80 text-sm">Méditation quotidienne</p>
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl font-serif leading-relaxed mb-6 text-balance">
              "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse
              point, mais qu'il ait la vie éternelle."
            </blockquote>

            <p className="text-right text-primary-foreground/90 font-semibold">— Jean 3:16</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
