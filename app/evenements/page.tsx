import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Campagne d'Évangélisation 2025",
    date: "10 Janvier 2025",
    time: "10h00 - 18h00",
    location: "Calavi, Bénin",
    description:
      "Rejoignez-nous pour notre campagne annuelle d'évangélisation. Un moment puissant de partage de la Parole de Dieu et de témoignages transformateurs.",
    image: "/evangelization-campaign-outdoor-event.jpg",
    category: "Évangélisation",
    attendees: "500+",
    featured: true,
  },
  {
    id: 2,
    title: "Pèlerinage à Imeko",
    date: "23 Août 2025",
    time: "06h00 - Retour le 25 décembre",
    location: "Imeko, Nigeria",
    description:
      "Pèlerinage spirituel annuel à Imeko en République Fédérale du Nigeria. Un temps de recueillement, de prière et de communion avec Dieu.",
    image: "/pilgrimage-to-imeko-nigeria.jpg",
    category: "Pèlerinage",
    attendees: "200+",
    featured: true,
  },
  {
    id: 3,
    title: "Moisson Spirituelle",
    date: "À venir",
    time: "09h00 - 16h00",
    location: "Paroisse Esprit et Vie",
    description:
      "Célébration de la moisson avec actions de grâce, louanges, partage communautaire et témoignages de bénédictions reçues.",
    image: "/spiritual-harvest-celebration.jpg",
    category: "Célébration",
    attendees: "300+",
    featured: false,
  },
  {
    id: 4,
    title: "Retraite Spirituelle des Jeunes",
    date: "À venir",
    time: "Vendredi 18h - Dimanche 16h",
    location: "Centre de retraite",
    description:
      "Trois jours de retraite spirituelle dédiés aux jeunes pour approfondir leur foi, créer des liens et recevoir une vision pour leur avenir.",
    image: "/youth-spiritual-retreat.jpg",
    category: "Retraite",
    attendees: "100+",
    featured: false,
  },
  {
    id: 5,
    title: "Séminaire de Mariage",
    date: "À venir",
    time: "09h00 - 17h00",
    location: "Paroisse Esprit et Vie",
    description:
      "Séminaire pour couples et futurs mariés sur les fondements bibliques du mariage et les clés d'une union réussie.",
    image: "/marriage-seminar-couples.jpg",
    category: "Formation",
    attendees: "50+",
    featured: false,
  },
  {
    id: 6,
    title: "Concert de Louange",
    date: "À venir",
    time: "18h00 - 22h00",
    location: "Paroisse Esprit et Vie",
    description:
      "Soirée de louange et d'adoration avec des artistes chrétiens locaux et internationaux. Venez célébrer la bonté de Dieu en musique.",
    image: "/praise-concert-worship-event.jpg",
    category: "Louange",
    attendees: "400+",
    featured: false,
  },
]

export default function EventsPage() {
  const featuredEvents = upcomingEvents.filter((event) => event.featured)
  const regularEvents = upcomingEvents.filter((event) => !event.featured)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Nos Événements</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez nos prochains événements et rejoignez-nous pour des moments de foi et de communion
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Événements à la Une</h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <Card
                  key={event.id}
                  className="overflow-hidden border-border shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-5 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Users className="w-5 h-5 text-primary" />
                        <span>{event.attendees} participants attendus</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90 group">
                      <Link href={`/evenements/${event.id}`}>
                        En savoir plus
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tous les Événements</h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularEvents.map((event, index) => (
                <Card
                  key={event.id}
                  className="overflow-hidden border-border shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-5 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{event.title}</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/evenements/${event.id}`}>Détails</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ne Manquez Aucun Événement</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Inscrivez-vous à notre newsletter pour recevoir les dernières informations sur nos événements et activités
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
