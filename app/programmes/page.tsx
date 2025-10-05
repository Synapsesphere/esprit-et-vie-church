import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProgramsSlideshow } from "@/components/programs-slideshow"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"


export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Nos Programmes</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Rejoignez-nous pour nos cultes, études bibliques et moments de prière
            </p>
          </div>
        </div>
      </section>

      {/* Programs Slideshow */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ProgramsSlideshow />
        </div>

      </section>

      {/* Quick Schedule Overview */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Calendrier Hebdomadaire</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-border shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Dimanche</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>10h00 - 12h30</span>
                  </div>
                  <p className="font-semibold text-foreground">Culte Dominical</p>
                  <p className="text-sm">Louange, prédication et communion</p>
                </div>
              </Card>

              <Card className="p-6 border-border shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Mardi</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>19h00 - 21h00</span>
                  </div>
                  <p className="font-semibold text-foreground">Étude Biblique</p>
                  <p className="text-sm">Enseignement en français et langue locale</p>
                </div>
              </Card>

              <Card className="p-6 border-border shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Jeudi</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>00h00 - 02h00</span>
                  </div>
                  <p className="font-semibold text-foreground">Prière de Délivrance</p>
                  <p className="text-sm">Intercession et rehaussement spirituel</p>
                </div>
              </Card>
            </div>

            <Card className="mt-8 p-6 bg-primary text-primary-foreground border-0 shadow-xl">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Lieu de Culte</h3>
                  <p className="text-primary-foreground/90">Paroisse Esprit et Vie, Calavi, Bénin</p>
                  <p className="text-sm text-primary-foreground/80 mt-2">
                    Tous nos programmes se déroulent à notre paroisse. Venez comme vous êtes, vous serez les bienvenus !
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
