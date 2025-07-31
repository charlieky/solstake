import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react"
import GlowEffect from "./glow-effect"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <GlowEffect className="top-20 left-10" color="bg-blue-500/20" size="w-64 h-64" />
        <GlowEffect className="bottom-10 right-10" color="bg-indigo-500/20" size="w-80 h-80" />
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/40 border border-blue-500/30 text-blue-400 text-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Solana Staking Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Grow Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 relative">
                Assets
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 blur-xl animate-pulse"></span>
              </span>{" "}
              with Sustainable Staking
            </h1>

            <p className="text-lg text-blue-100 max-w-xl">
              Put your assets to work and maximize your returns. Our platform makes growing your investments easy and
              secure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-indigo-900/20 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Staking
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></span>
              </Button>

              <Button
                variant="outline"
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-xl"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-3 rounded-lg bg-indigo-900/20 border border-blue-500/10">
                <p className="text-2xl font-bold text-blue-400">40%</p>
                <p className="text-xs text-blue-200">Max APY</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-indigo-900/20 border border-blue-500/10">
                <p className="text-2xl font-bold text-blue-400">24/7</p>
                <p className="text-xs text-blue-200">Staking</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-indigo-900/20 border border-blue-500/10">
                <p className="text-2xl font-bold text-blue-400">0%</p>
                <p className="text-xs text-blue-200">Platform Fee</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-indigo-900/80 to-blue-900/80 border border-blue-500/30 rounded-3xl p-6 backdrop-blur-sm shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">Solana Staking</h3>
                </div>
                <Badge className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">Live</Badge>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-300">Total Staked</span>
                    <span className="text-white font-medium">15,750,000</span>
                  </div>
                  <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 w-[65%]"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-800/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-blue-300">Current APY</span>
                    </div>
                    <p className="text-2xl font-bold text-white">30%</p>
                  </div>
                  <div className="bg-indigo-800/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-blue-300">Rewards</span>
                    </div>
                    <p className="text-2xl font-bold text-white">4.5M</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-5 rounded-xl relative group overflow-hidden">
                  <span className="relative z-10">Stake Now</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Badge } from "@/components/ui/badge"
