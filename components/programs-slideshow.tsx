"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, Clock, Users, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

const programs = [
  {
    id: 1,
    title: "Culte du Dimanche",
    time: "10h00",
    day: "Dimanche",
    description:
      "Rejoignez-nous chaque dimanche pour un moment de louange, d'adoration et d'enseignement de la Parole de Dieu. Un temps de communion fraternelle où nous célébrons ensemble la bonté du Seigneur.",
    image: "/sunday-worship-service-with-congregation.jpg",
    icon: Users,
    color: "bg-blue-500",
    highlights: ["Louange et adoration", "Prédication inspirante", "Prière collective", "Communion fraternelle"],
  },
  {
    id: 2,
    title: "Étude Biblique",
    time: "19h00",
    day: "Mardi",
    description:
      "Approfondissez votre connaissance de la Parole de Dieu à travers nos études bibliques interactives. Enseignement en français avec traduction en langue locale pour une meilleure compréhension.",
    image: "/bible-study-group-discussion.jpg",
    icon: Calendar,
    color: "bg-green-500",
    highlights: [
      "Enseignement approfondi",
      "Discussion interactive",
      "Traduction en langue locale",
      "Questions et réponses",
    ],
  },
  {
    id: 3,
    title: "Prière de Délivrance",
    time: "00h00",
    day: "Jeudi",
    description:
      "Un moment puissant d'intercession et de prière pour la délivrance et le rehaussement spirituel. Venez chercher la face de Dieu dans un temps de prière intense et transformateur.",
    image: "/night-prayer-meeting-with-candles.jpg",
    icon: Sparkles,
    color: "bg-purple-500",
    highlights: [
      "Intercession puissante",
      "Délivrance spirituelle",
      "Rehaussement personnel",
      "Miracles et témoignages",
    ],
  },
  {
    id: 4,
    title: "Programmes Spéciaux",
    time: "Variable",
    day: "Selon calendrier",
    description:
      "Tout au long de l'année, nous organisons des programmes spéciaux incluant des moissons spirituelles, des croisades d'évangélisation, et des célébrations communautaires pour glorifier Dieu.",
    image: "/special-church-event-celebration.jpg",
    icon: Sparkles,
    color: "bg-orange-500",
    highlights: [
      "Moissons spirituelles",
      "Croisades d'évangélisation",
      "Célébrations spéciales",
      "Événements communautaires",
    ],
  },
]

export function ProgramsSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState<"left" | "right">("right")

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection("right")
      setCurrentIndex((prev) => (prev + 1) % programs.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setDirection("left")
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setDirection("right")
    setCurrentIndex((prev) => (prev + 1) % programs.length)
  }

  const currentProgram = programs[currentIndex]
  const Icon = currentProgram.icon

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        <Card className="overflow-hidden border-border shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <img
                key={`image-${currentIndex}`}
                src={currentProgram.image || "/placeholder.svg"}
                alt={currentProgram.title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  direction === "right" ? "animate-in slide-in-from-right-10" : "animate-in slide-in-from-left-10"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Day Badge */}
              <div className="absolute top-6 left-6">
                <div
                  className={`${currentProgram.color} text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg`}
                >
                  {currentProgram.day}
                </div>
              </div>

              {/* Time Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-bold text-foreground">{currentProgram.time}</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div
              key={`content-${currentIndex}`}
              className={`p-8 lg:p-12 flex flex-col justify-between bg-card transition-all duration-700 ${
                direction === "right" ? "animate-in slide-in-from-right-5" : "animate-in slide-in-from-left-5"
              }`}
            >
              <div>
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 ${currentProgram.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{currentProgram.title}</h3>
                    <p className="text-muted-foreground">Programme régulier</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground text-lg leading-relaxed mb-8">{currentProgram.description}</p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-foreground mb-4">Points forts :</h4>
                  {currentProgram.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex gap-2">
                  {programs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? "right" : "left")
                        setCurrentIndex(index)
                        setIsAutoPlaying(false)
                      }}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex ? "bg-primary w-12" : "bg-border w-2 hover:bg-primary/50"
                      }`}
                      aria-label={`Go to program ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPrevious}
                    className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNext}
                    className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Large Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-background border-2 border-border rounded-full items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all shadow-xl"
          aria-label="Previous program"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={goToNext}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-background border-2 border-border rounded-full items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all shadow-xl"
          aria-label="Next program"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Program Counter */}
      <div className="text-center mt-8">
        <p className="text-muted-foreground">
          Programme <span className="font-bold text-primary">{currentIndex + 1}</span> sur{" "}
          <span className="font-bold text-primary">{programs.length}</span>
        </p>
      </div>
    </div>
  )
}
