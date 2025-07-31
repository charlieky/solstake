import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function ApyTiers() {
  const tiers = [
    { amount: "1M", apy: 10, color: "from-blue-500 to-blue-400" },
    { amount: "5M", apy: 20, color: "from-blue-400 to-indigo-500" },
    { amount: "10M", apy: 30, color: "from-indigo-500 to-indigo-400" },
    { amount: ">10M", apy: 40, color: "from-indigo-400 to-violet-500" },
  ]

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-blue-500/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-300" />
          APY Tiers
        </CardTitle>
        <CardDescription className="text-blue-200">Higher staking amounts earn better rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tiers.map((tier, index) => (
            <div key={index} className="p-4 rounded-lg bg-indigo-800/30 flex justify-between items-center">
              <div>
                <h3 className="text-white font-medium">{tier.amount} Tokens</h3>
                <p className="text-sm text-blue-200">Stake {tier.amount} tokens or more</p>
              </div>
              <Badge className={`bg-gradient-to-r ${tier.color} text-white px-3 py-1 text-sm`}>{tier.apy}% APY</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
