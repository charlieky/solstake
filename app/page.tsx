import type { Metadata } from "next"
import StakingDashboard from "@/components/staking-dashboard"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import ShinyBubble from "@/components/shiny-bubble"
import TokenomicsSection from "@/components/tokenomics-section"

export const metadata: Metadata = {
  title: "GreenStake - Grow Your Green with Solana Staking",
  description:
    "Stay in the green with GreenStake - the premier platform for staking your tokens and earning rewards on Solana",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Reduced number of shiny bubbles */}
      <ShinyBubble size={400} position="top-20 right-[10%]" delay={0} duration={15} />
      <ShinyBubble size={300} position="bottom-[30%] left-[20%]" delay={1} duration={10} />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <TokenomicsSection />
        <TestimonialsSection />
        <CTASection />
        <div className="container mx-auto px-8 md:px-16 py-16">
          <StakingDashboard />
        </div>
        <Footer />
      </div>
    </main>
  )
}
