import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, CreditCard, Building, Smartphone, CheckCircle } from "lucide-react"

export default function DonationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Faire un Don</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Soutenez l'œuvre de Dieu et participez à l'avancement du la mission
            </p>
          </div>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-border shadow-xl mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Pourquoi Donner ?</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Vos dons permettent au Ministère Esprit et Vie de poursuivre sa mission spirituelle, humanitaire et
                sociale. Chaque contribution, quelle que soit sa taille, fait une différence dans la vie de nombreuses
                personnes.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Mission Spirituelle</h3>
                  <p className="text-sm text-muted-foreground">Évangélisation et enseignement de la Parole</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Action Humanitaire</h3>
                  <p className="text-sm text-muted-foreground">Aide aux enfants de rue et personnes âgées</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Développement Social</h3>
                  <p className="text-sm text-muted-foreground">Formation et insertion professionnelle</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Moyens de Don</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Online Donation */}
              <Card className="p-8 border-border shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">Don en Ligne</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Faites votre don de manière sécurisée par carte bancaire
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">Donner en ligne</Button>
              </Card>

              {/* Bank Transfer */}
              <Card className="p-8 border-border shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">Virement Bancaire</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Effectuez un virement directement sur notre compte
                </p>
                <div className="bg-muted p-4 rounded-lg text-sm mb-4">
                  <p className="font-semibold text-foreground mb-2">Coordonnées bancaires :</p>
                  <p className="text-muted-foreground">Banque : [Nom de la banque]</p>
                  <p className="text-muted-foreground">IBAN : [Numéro IBAN]</p>
                  <p className="text-muted-foreground">BIC : [Code BIC]</p>
                </div>
              </Card>

              {/* Mobile Money */}
              <Card className="p-8 border-border shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">Mobile Money</h3>
                <p className="text-muted-foreground text-center mb-6">Utilisez votre service de paiement mobile</p>
                <div className="bg-muted p-4 rounded-lg text-sm mb-4">
                  <p className="font-semibold text-foreground mb-2">Numéros :</p>
                  <p className="text-muted-foreground">MTN : +229 XX XX XX XX</p>
                  <p className="text-muted-foreground">Moov : +229 XX XX XX XX</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projets à Soutenir</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-border shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Construction de l'Église</h3>
                <p className="text-muted-foreground mb-6">
                  Participez à la construction d'un nouveau bâtiment pour accueillir notre communauté grandissante.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">Soutenir ce projet</Button>
              </Card>

              <Card className="p-8 border-border shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Aide aux Orphelins</h3>
                <p className="text-muted-foreground mb-6">
                  Soutenez notre programme d'aide aux orphelins et enfants de rue avec éducation et encadrement.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">Soutenir ce projet</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verse */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed mb-6 text-balance">
              "Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte; car Dieu aime celui qui
              donne avec joie."
            </blockquote>
            <p className="text-xl text-primary-foreground/90">— 2 Corinthiens 9:7</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
