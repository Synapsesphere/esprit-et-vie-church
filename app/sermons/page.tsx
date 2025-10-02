import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Download, Calendar, User, Video, Headphones, FileText } from "lucide-react"
import Link from "next/link"

const sermons = [
  {
    id: 1,
    title: "La Puissance de la Foi",
    preacher: "Supérieur Évangélique Joachim KPOMAHO",
    date: "3 Décembre 2024",
    duration: "45 min",
    type: "video",
    thumbnail: "/sermon-faith-power-preaching.jpg",
    description:
      "Une prédication puissante sur la foi qui déplace les montagnes. Découvrez comment activer votre foi pour voir des miracles dans votre vie.",
    scripture: "Matthieu 17:20",
    views: "1.2k",
    featured: true,
  },
  {
    id: 2,
    title: "Marcher dans la Sainteté",
    preacher: "Supérieur Évangélique Joachim KPOMAHO",
    date: "26 Novembre 2024",
    duration: "52 min",
    type: "video",
    thumbnail: "/sermon-holiness-walk-teaching.jpg",
    description:
      "Un enseignement profond sur l'importance de la sainteté dans la vie du croyant. Comment vivre une vie qui plaît à Dieu au quotidien.",
    scripture: "1 Pierre 1:15-16",
    views: "980",
    featured: true,
  },
  {
    id: 3,
    title: "Le Jeûne et la Prière",
    preacher: "Supérieur Évangélique Joachim KPOMAHO",
    date: "19 Novembre 2024",
    duration: "38 min",
    type: "audio",
    thumbnail: "/sermon-fasting-prayer-topic.jpg",
    description:
      "Les clés bibliques du jeûne et de la prière. Comment utiliser ces armes spirituelles pour obtenir des percées dans votre vie.",
    scripture: "Matthieu 6:16-18",
    views: "756",
    featured: false,
  },
  {
    id: 4,
    title: "L'Amour de Dieu",
    preacher: "Supérieur Évangélique Joachim KPOMAHO",
    date: "12 Novembre 2024",
    duration: "41 min",
    type: "video",
    thumbnail: "/sermon-gods-love-message.jpg",
    description:
      "Une méditation sur l'amour inconditionnel de Dieu pour l'humanité. Comprenez la profondeur de l'amour divin manifesté en Jésus-Christ.",
    scripture: "Jean 3:16",
    views: "1.5k",
    featured: false,
  },
  {
    id: 5,
    title: "La Victoire sur le Péché",
    preacher: "Supérieur Évangélique Joachim KPOMAHO",
    date: "5 Novembre 2024",
    duration: "47 min",
    type: "audio",
    thumbnail: "/sermon-victory-over-sin.jpg",
    description:
      "Comment vivre dans la victoire que Christ nous a acquise. Des stratégies bibliques pour vaincre le péché et marcher dans la liberté.",
    scripture: "Romains 6:14",
    views: "892",
    featured: false,
  },
  {
    id: 6,
    title: "Le Saint-Esprit, Notre Consolateur",
    preacher: "Supérieur Évangélique Joachim KPOMAHO",
    date: "29 Octobre 2024",
    duration: "55 min",
    type: "video",
    thumbnail: "/sermon-holy-spirit-comforter.jpg",
    description:
      "Découvrez le rôle du Saint-Esprit dans la vie du croyant. Comment être rempli et guidé par l'Esprit de Dieu au quotidien.",
    scripture: "Jean 14:26",
    views: "1.1k",
    featured: false,
  },
]

const articles = [
  {
    id: 1,
    title: "Les Fondements de la Foi Chrétienne",
    author: "Supérieur Évangélique Joachim KPOMAHO",
    date: "1 Décembre 2024",
    excerpt:
      "Un article approfondi sur les piliers essentiels de la foi chrétienne et comment les appliquer dans notre vie quotidienne.",
    readTime: "8 min",
  },
  {
    id: 2,
    title: "La Prière Efficace",
    author: "Ministère Esprit et Vie",
    date: "25 Novembre 2024",
    excerpt: "Des principes bibliques pour une vie de prière puissante et efficace qui produit des résultats.",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "Vivre dans la Présence de Dieu",
    author: "Supérieur Évangélique Joachim KPOMAHO",
    date: "18 Novembre 2024",
    excerpt: "Comment cultiver une relation intime avec Dieu et demeurer constamment dans Sa présence.",
    readTime: "10 min",
  },
]

export default function SermonsPage() {
  const featuredSermons = sermons.filter((s) => s.featured)
  const regularSermons = sermons.filter((s) => !s.featured)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Sermons & Enseignements
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Accédez à notre bibliothèque de prédications, enseignements et ressources spirituelles
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sermons */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sermons Récents</h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {featuredSermons.map((sermon, index) => (
                <Card
                  key={sermon.id}
                  className="overflow-hidden border-border shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-5 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={sermon.thumbnail || "/placeholder.svg"}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        {sermon.type === "video" ? (
                          <>
                            <Video className="w-3 h-3" />
                            Vidéo
                          </>
                        ) : (
                          <>
                            <Headphones className="w-3 h-3" />
                            Audio
                          </>
                        )}
                      </span>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                        {sermon.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{sermon.title}</h3>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        <span>{sermon.preacher}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{sermon.date}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{sermon.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">{sermon.scripture}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          <Play className="w-4 h-4 mr-1" />
                          Écouter
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* All Sermons Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Tous les Sermons</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularSermons.map((sermon, index) => (
                  <Card
                    key={sermon.id}
                    className="overflow-hidden border-border shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-5 duration-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden group">
                      <img
                        src={sermon.thumbnail || "/placeholder.svg"}
                        alt={sermon.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                          {sermon.type === "video" ? <Video className="w-3 h-3" /> : <Headphones className="w-3 h-3" />}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3">
                        <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">{sermon.duration}</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{sermon.title}</h3>

                      <div className="flex flex-col gap-2 mb-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 text-primary" />
                          <span>{sermon.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-3 h-3 text-primary" />
                          <span>{sermon.scripture}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                        {sermon.description}
                      </p>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                          <Play className="w-3 h-3 mr-1" />
                          Lire
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Articles Spirituels</h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card
                  key={article.id}
                  className="p-6 border-border shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-5 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{article.readTime} de lecture</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{article.title}</h3>

                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <User className="w-4 h-4 text-primary" />
                    <span>{article.author}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{article.date}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>

                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={`/blog/${article.id}`}>Lire l'article</Link>
                  </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Restez Connectés</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Abonnez-vous pour recevoir nos derniers sermons et enseignements directement dans votre boîte mail
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">S'abonner</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
