import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Music, BookOpen, HelpCircle } from "lucide-react"

const resources = {
  books: [
    {
      id: 1,
      title: "Guide du Nouveau Converti",
      description: "Un guide complet pour les nouveaux chrétiens",
      pages: 45,
    },
    { id: 2, title: "La Vie de Prière", description: "Développer une vie de prière puissante", pages: 68 },
    { id: 3, title: "Les Fondements de la Foi", description: "Les doctrines essentielles du christianisme", pages: 92 },
  ],
  brochures: [
    { id: 1, title: "Le Baptême d'Eau", description: "Comprendre l'importance du baptême", pages: 12 },
    { id: 2, title: "La Sainte Cène", description: "Signification et pratique de la communion", pages: 8 },
    { id: 3, title: "Le Jeûne Biblique", description: "Comment jeûner selon la Bible", pages: 15 },
  ],
  songs: [
    { id: 1, title: "Cantique 1 - Gloire à Dieu", artist: "Chorale Esprit et Vie" },
    { id: 2, title: "Cantique 2 - Jésus est Seigneur", artist: "Chorale Esprit et Vie" },
    { id: 3, title: "Cantique 3 - Alléluia", artist: "Chorale Esprit et Vie" },
  ],
  faqs: [
    {
      question: "Comment devenir membre de la paroisse ?",
      answer:
        "Pour devenir membre, assistez régulièrement aux cultes pendant quelques semaines, puis contactez le secrétariat pour remplir un formulaire d'adhésion. Un entretien avec le pasteur sera organisé.",
    },
    {
      question: "Quels sont les horaires des cultes ?",
      answer:
        "Culte du dimanche à 10h00, Étude biblique du mardi à 19h00, Prière de délivrance du jeudi à 00h00. Tous les programmes se déroulent à la paroisse.",
    },
    {
      question: "Comment puis-je servir dans l'église ?",
      answer:
        "Il existe plusieurs départements : louange, intercession, accueil, jeunesse, etc. Contactez le secrétariat pour exprimer votre désir de servir et découvrir où vos dons peuvent être utilisés.",
    },
    {
      question: "Organisez-vous des mariages ?",
      answer:
        "Oui, nous célébrons des mariages. Les couples doivent suivre un séminaire de préparation au mariage et rencontrer le pasteur avant la cérémonie.",
    },
    {
      question: "Comment faire un don à l'église ?",
      answer:
        "Vous pouvez faire vos dons en ligne via notre page de dons, par virement bancaire, ou directement lors des cultes. Tous les dons sont utilisés pour l'œuvre de Dieu.",
    },
  ],
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Ressources</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Livres, brochures, chants et réponses à vos questions
            </p>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
                <BookOpen className="w-10 h-10 text-primary" />
                Livres
              </h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {resources.books.map((book, index) => (
                <Card
                  key={book.id}
                  className="p-6 border-border shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-5 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{book.title}</h3>
                  <p className="text-muted-foreground mb-4">{book.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{book.pages} pages</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger PDF
                  </Button>
                </Card>
              ))}
            </div>

            {/* Brochures Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
                <FileText className="w-10 h-10 text-primary" />
                Brochures
              </h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {resources.brochures.map((brochure, index) => (
                <Card
                  key={brochure.id}
                  className="p-6 border-border shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-5 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{brochure.title}</h3>
                  <p className="text-muted-foreground mb-4">{brochure.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{brochure.pages} pages</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                </Card>
              ))}
            </div>

            {/* Songs Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Music className="w-10 h-10 text-primary" />
                Chants & Partitions
              </h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {resources.songs.map((song, index) => (
                <Card
                  key={song.id}
                  className="p-6 border-border shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-5 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Music className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{song.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{song.artist}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <Download className="w-3 h-3 mr-1" />
                      Audio
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Download className="w-3 h-3 mr-1" />
                      Partition
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                <HelpCircle className="w-10 h-10 text-primary" />
                Questions Fréquentes
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>

            <div className="space-y-6">
              {resources.faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="p-6 border-border shadow-lg animate-in fade-in slide-in-from-bottom-5 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
