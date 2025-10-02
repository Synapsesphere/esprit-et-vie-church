import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WelcomeMessage } from "@/components/welcome-message"
import { DailyVerse } from "@/components/daily-verse"
import { AnnouncementsSlider } from "@/components/announcements-slider"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WelcomeMessage />
      <DailyVerse />
      <AnnouncementsSlider />
      <Footer />
    </main>
  )
}
