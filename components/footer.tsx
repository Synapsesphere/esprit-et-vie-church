import Link from "next/link"
import { Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ministère Esprit et Vie</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Un lieu de foi vivante, d'engagement spirituel et humain depuis 2016.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/a-propos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Programmes
                </Link>
              </li>
              <li>
                <Link
                  href="/evenements"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Événements
                </Link>
              </li>
              <li>
                <Link
                  href="/sermons"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sermons
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horaires des Cultes</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Dimanche</div>
                  <div className="text-primary-foreground/80">Culte à 10h00</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Mardi</div>
                  <div className="text-primary-foreground/80">Étude biblique à 19h00</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Jeudi</div>
                  <div className="text-primary-foreground/80">Prière à 00h00</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Tokan, Abomey-Calavi</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+229 01 52 87 98 98</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">ministereespritetvie2016@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Ministère Esprit et Vie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
