"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const announcements = [
  {
    id: 1,
    title: "Campagne d'Évangélisation",
    description: "Rejoignez-nous pour notre campagne annuelle d'évangélisation. Un moment de partage et de témoignage.",
    date: "10 Janvier 2025",
    time: "10h00",
    location: "Cotonou, Bénin",
    image: "/outdoor-evangelization-event-with-crowd.jpg",
    type: "Événement Spécial",
  },
  {
    id: 2,
    title: "Pèlerinage à Imeko",
    description: "Pèlerinage annuel à Imeko, République Fédérale du Nigeria. Inscriptions ouvertes.",
    date: "15 Août 2025",
    time: "06h00",
    location: "Imeko, Nigeria",
    image: "/pilgrimage-journey-with-people-walking.jpg",
    type: "Pèlerinage",
  },
  {
    id: 3,
    title: "Moisson Spirituelle",
    description: "Célébration de la moisson avec actions de grâce, louanges et partage communautaire.",
    date: "À venir",
    time: "09h00",
    location: "Paroisse Esprit et Vie",
    image: "/harvest-celebration-in-church-with-decorations.jpg",
    type: "Célébration",
  },
]

export function AnnouncementsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % announcements.length)
  }

  const currentAnnouncement = announcements[currentIndex]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Annonces & Événements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">Restez informés de nos prochains événements et activités</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Card className="overflow-hidden border-border shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={currentAnnouncement.image || "/placeholder.svg"}
                  alt={currentAnnouncement.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {currentAnnouncement.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-between bg-card">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    {currentAnnouncement.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {currentAnnouncement.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{currentAnnouncement.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>{currentAnnouncement.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{currentAnnouncement.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/evenements">En savoir plus</Link>
                  </Button>

                  {/* Navigation Dots */}
                  <div className="flex gap-2">
                    {announcements.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index)
                          setIsAutoPlaying(false)
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
