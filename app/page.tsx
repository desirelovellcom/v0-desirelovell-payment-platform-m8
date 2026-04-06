import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />

      <footer className="border-t border-gray-800 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="cosmic-text text-2xl font-bold">DesireLovell Payment Platform</h2>
              <p className="mt-2 text-gray-400">Elevating payments to cosmic heights</p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2023 DesireLovell. All rights reserved.</p>
              <p className="mt-2 text-sm text-gray-500">
                Navigating the universe of payments, one transaction at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

