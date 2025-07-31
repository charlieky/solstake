import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, Clock, Zap, BarChart3, Sparkles } from "lucide-react"

export default function FeaturesSection() {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Be a <span className="text-blue-400">Beginner</span> in Crypto
          </h2>
          <p className="text-blue-200 text-lg">
            Our platform provides <span className="text-indigo-400">sustainable solutions</span> to your portfolio with
            staking solutions that keep you <span className="text-blue-400">profitable</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<TrendingUp className="h-6 w-6 text-blue-400" />}
            title="High Yield Returns"
            description="Stay profitable with our competitive APY rates up to 40% on your staked tokens."
          />

          <FeatureCard
            icon={<Shield className="h-6 w-6 text-blue-400" />}
            title="Secure Staking"
            description="No need to worry. Your assets are protected with enterprise-grade security."
          />

          <FeatureCard
            icon={<Clock className="h-6 w-6 text-blue-400" />}
            title="Flexible Periods"
            description="Choose staking periods that work for you, from 30 to 90 days with increasing rewards."
          />

          <FeatureCard
            icon={<Sparkles className="h-6 w-6 text-blue-400" />}
            title="Sustainable"
            description="Our energy-efficient staking protocol minimizes environmental impact."
          />

          <FeatureCard
            icon={<Zap className="h-6 w-6 text-blue-400" />}
            title="Instant Rewards"
            description="Watch your assets grow with real-time reward calculations and instant claiming."
          />

          <FeatureCard
            icon={<BarChart3 className="h-6 w-6 text-blue-400" />}
            title="Analytics Dashboard"
            description="Track your portfolio growth with our comprehensive analytics dashboard."
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-indigo-900/40 border-blue-500/20 backdrop-blur-sm hover:bg-indigo-800/40 transition-colors group rounded-3xl border-[24px] border-indigo-900/40">
      <CardHeader>
        <div className="h-12 w-12 rounded-full bg-indigo-800/50 flex items-center justify-center mb-4 group-hover:bg-indigo-700/50 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-white group-hover:text-blue-300 transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-blue-200">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
