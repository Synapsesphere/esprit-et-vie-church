import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function WelcomeMessage() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Pastor's Welcome */}
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Message du Pasteur</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>

          <Card className="p-8 md:p-12 bg-background border-border shadow-lg animate-in fade-in slide-in-from-bottom-7 duration-700 delay-200">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Pastor Image */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                  <img
                    src="/african-pastor-in-white-robe-smiling-warmly.jpg"
                    alt="Supérieur Évangélique Joachim KPOMAHO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Message Content */}
              <div className="flex-1">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Chers frères et sœurs, bienvenue au Ministère Esprit et Vie. Nous sommes un lieu où l'âme retrouve
                  sens à la vie et réconfort. Animés par la foi, soutenus par l'amour, et guidés par la prière, nous
                  œuvrons à restaurer les cœurs, élever les consciences et transformer les vies.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Notre engagement est d'accompagner chacun, quel que soit son chemin, dans une démarche sincère de
                  croissance spirituelle et personnelle. Que Dieu vous bénisse.
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">Supérieur Évangélique Joachim KPOMAHO</p>
                  <p className="text-sm text-muted-foreground">Fondateur et Pasteur Principal</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
