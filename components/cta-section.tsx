import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="bg-gradient-to-br from-indigo-900/80 to-blue-900/80 border border-blue-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-400/10 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-800/40 border border-blue-500/30 text-blue-400 text-sm mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                <span>Start Today</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Ready to Grow Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  Assets
                </span>{" "}
                into Thriving Investments?
              </h2>

              <p className="text-blue-100 text-lg mb-8">
                Don't miss out on potential returns. Join thousands of stakers who are putting their assets to work in
                the crypto world.
              </p>

              <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-indigo-900/20 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Staking Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></span>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
              <div className="relative bg-indigo-800/30 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">Staking Benefits</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-blue-300" />
                      </div>
                      <p className="text-blue-100">Earn up to 40% APY on your tokens</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-blue-300" />
                      </div>
                      <p className="text-blue-100">Secure, transparent staking platform</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-blue-300" />
                      </div>
                      <p className="text-blue-100">Flexible staking periods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
