"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/background1.png" alt="Église Esprit et Vie" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div
          className={cn(
            "max-w-4xl mx-auto text-center transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 animate-in fade-in slide-in-from-top-3 duration-700">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">Bienvenue dans notre communauté</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-top-5 duration-1000 text-balance">
            Ministère Esprit et Vie
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 animate-in fade-in slide-in-from-top-7 duration-1000 delay-200">
            Église Chrétienne Céleste
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-top-9 duration-1000 delay-300">
            Rejoignez le Ministère Esprit et Vie et expérimentez la puissance de la prière, l’enseignement de la Parole et la communion fraternelle pour une vie transformée en Christ.          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
            >
              <Link href="/a-propos">
                Découvrir notre mission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              <Link href="/evenements">Nos événements</Link>
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-700">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all hover:scale-105">
              <Calendar className="w-8 h-8 text-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-black mb-2">Culte du Dimanche</h3>
              <p className="text-black/80 text-sm">Tous les dimanches à 10h</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all hover:scale-105">
              <Calendar className="w-8 h-8 text-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-black mb-2">Étude Biblique</h3>
              <p className="text-black/80 text-sm">Tous les mardis à 19h</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all hover:scale-105">
              <MapPin className="w-8 h-8 text-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-black mb-2">Notre Adresse</h3>
              <p className="text-black/80 text-sm">Tokan, Abomey-Calavi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
