import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, Share2, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const events = [
  {
    id: 1,
    title: "Campagne d'Évangélisation 2025",
    date: "10 Janvier 2025",
    time: "10h00 - 18h00",
    location: "Cotonou, Bénin",
    fullLocation: "Place publique centrale, Cotonou, Bénin",
    description:
      "Rejoignez-nous pour notre campagne annuelle d'évangélisation. Un moment puissant de partage de la Parole de Dieu et de témoignages transformateurs.",
    fullDescription:
      "Notre campagne d'évangélisation annuelle est un événement majeur qui rassemble des centaines de personnes venues chercher la face de Dieu. Cette journée sera marquée par des prédications puissantes, des témoignages inspirants, et des moments de prière collective. Nous aurons également des stands d'information, de la distribution de littérature chrétienne, et des activités pour les enfants. C'est une occasion unique de partager l'amour de Christ avec notre communauté et de voir des vies transformées par la puissance de l'Évangile.",
    image: "/evangelization-campaign-outdoor-event.jpg",
    gallery: [
      "/evangelization-campaign-outdoor-event.jpg",
      "/outdoor-evangelization-event-with-crowd.jpg",
      "/special-church-event-celebration.jpg",
    ],
    category: "Évangélisation",
    attendees: "500+",
    program: [
      { time: "10h00", activity: "Accueil et louange" },
      { time: "11h00", activity: "Prédication d'ouverture" },
      { time: "12h30", activity: "Pause déjeuner" },
      { time: "14h00", activity: "Témoignages" },
      { time: "15h30", activity: "Prière collective" },
      { time: "17h00", activity: "Message de clôture" },
    ],
    organizer: "Supérieur Évangélique Joachim KPOMAHO",
    contact: "contact@espritetvie.org",
  },
  {
    id: 2,
    title: "Pèlerinage à Imeko",
    date: "15 Août 2025",
    time: "06h00 - Retour le lendemain",
    location: "Imeko, Nigeria",
    fullLocation: "Site de pèlerinage d'Imeko, République Fédérale du Nigeria",
    description:
      "Pèlerinage spirituel annuel à Imeko en République Fédérale du Nigeria. Un temps de recueillement, de prière et de communion avec Dieu.",
    fullDescription:
      "Le pèlerinage à Imeko est une tradition spirituelle profonde de notre paroisse. Ce voyage de deux jours nous emmène vers un lieu saint où nous pouvons nous recueillir, prier et chercher la face de Dieu dans un environnement propice à la méditation. Le pèlerinage comprend des moments de prière collective, des enseignements spirituels, et des temps de communion fraternelle. C'est une expérience transformatrice qui renforce notre foi et notre engagement envers le Seigneur. Le transport et l'hébergement sont organisés par la paroisse.",
    image: "/pilgrimage-to-imeko-nigeria.jpg",
    gallery: ["/pilgrimage-to-imeko-nigeria.jpg", "/pilgrimage-journey-with-people-walking.jpg"],
    category: "Pèlerinage",
    attendees: "200+",
    program: [
      { time: "06h00", activity: "Départ de Cotonou" },
      { time: "12h00", activity: "Arrivée et installation" },
      { time: "14h00", activity: "Première session de prière" },
      { time: "18h00", activity: "Culte du soir" },
      { time: "Lendemain 06h00", activity: "Prière matinale" },
      { time: "10h00", activity: "Culte de clôture" },
      { time: "14h00", activity: "Retour à Cotonou" },
    ],
    organizer: "Ministère Esprit et Vie",
    contact: "contact@espritetvie.org",
    requirements: ["Passeport valide", "Contribution pour le transport", "Vêtements appropriés"],
  },
]

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === Number.parseInt(params.id))

  if (!event) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="relative h-[500px]">
          <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <div className="max-w-4xl">
                <Link
                  href="/evenements"
                  className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors mb-6"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Retour aux événements
                </Link>
                <div className="mb-4">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {event.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">{event.title}</h1>
                <p className="text-xl text-white/90">{event.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 -mt-20 relative z-10">
              <Card className="p-6 border-border shadow-xl bg-card">
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Date</h3>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </Card>
              <Card className="p-6 border-border shadow-xl bg-card">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Horaire</h3>
                <p className="text-sm text-muted-foreground">{event.time}</p>
              </Card>
              <Card className="p-6 border-border shadow-xl bg-card">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Lieu</h3>
                <p className="text-sm text-muted-foreground">{event.location}</p>
              </Card>
              <Card className="p-6 border-border shadow-xl bg-card">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Participants</h3>
                <p className="text-sm text-muted-foreground">{event.attendees} attendus</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="p-8 border-border shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">À propos de cet événement</h2>
                  <p className="text-foreground leading-relaxed whitespace-pre-line">{event.fullDescription}</p>
                </Card>

                <Card className="p-8 border-border shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Programme</h2>
                  <div className="space-y-4">
                    {event.program.map((item, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="w-20 flex-shrink-0">
                          <span className="text-primary font-semibold">{item.time}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{item.activity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {event.requirements && (
                  <Card className="p-8 border-border shadow-lg bg-primary/5">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Prérequis</h2>
                    <ul className="space-y-3">
                      {event.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {event.gallery && event.gallery.length > 1 && (
                  <Card className="p-8 border-border shadow-lg">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Galerie</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {event.gallery.map((img, index) => (
                        <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                          <img
                            src={img || "/placeholder.svg"}
                            alt={`${event.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                <Card className="p-6 border-border shadow-lg sticky top-24">
                  <h3 className="text-xl font-bold text-foreground mb-6">Informations</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Organisateur</h4>
                      <p className="text-muted-foreground text-sm">{event.organizer}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Lieu complet</h4>
                      <p className="text-muted-foreground text-sm">{event.fullLocation}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                      <p className="text-muted-foreground text-sm">{event.contact}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/contact">S'inscrire</Link>
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Share2 className="w-4 h-4 mr-2" />
                      Partager
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
