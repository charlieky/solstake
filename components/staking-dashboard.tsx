"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import ApyTiers from "@/components/apy-tiers"
import StakingStats from "@/components/staking-stats"
import { useWallet } from "@/hooks/use-wallet"

export default function StakingDashboard() {
  const { connected, publicKey, balance } = useWallet()
  const [stakeAmount, setStakeAmount] = useState<number>(0)
  const [stakingPeriod, setStakingPeriod] = useState<number>(30) // days
  const [isStaking, setIsStaking] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<string>("stake")

  const maxAmount = balance || 0

  const handleStakeAmountChange = (value: number) => {
    setStakeAmount(Math.min(value, maxAmount))
  }

  const handleStake = async () => {
    if (!connected || stakeAmount <= 0) return

    setIsStaking(true)
    // Simulate staking process
    setTimeout(() => {
      setIsStaking(false)
      setActiveTab("dashboard")
    }, 2000)
  }

  const calculateApy = (amount: number): number => {
    if (amount >= 10_000_000) return 40
    if (amount >= 5_000_000) return 30
    if (amount >= 1_000_000) return 20
    return 10
  }

  const currentApy = calculateApy(stakeAmount)

  return (
    <div className="flex flex-col gap-8 px-8 md:px-16">
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
        <div>
          <h1 className="text-4xl font-bold text-white">Solana Staking</h1>
          <p className="text-blue-200 mt-2">Stake your tokens and earn rewards</p>
        </div>
      </header>

      <Tabs defaultValue="stake" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
          <TabsTrigger value="stake">Stake</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value="stake">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-indigo-900/40 backdrop-blur-lg border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-300" />
                  Stake Tokens
                </CardTitle>
                <CardDescription className="text-blue-200">Stake your tokens to earn rewards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm text-blue-200">Amount to Stake</label>
                    <span className="text-sm text-blue-200">Balance: {balance?.toLocaleString() || 0}</span>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      value={stakeAmount}
                      onChange={(e) => handleStakeAmountChange(Number(e.target.value))}
                      className="bg-indigo-800/30 border-blue-500/30 text-white"
                      placeholder="Enter amount"
                    />
                    <Button
                      variant="outline"
                      className="border-blue-500/30 text-blue-200 hover:bg-blue-500/20"
                      onClick={() => setStakeAmount(maxAmount)}
                    >
                      Max
                    </Button>
                  </div>
                  <Slider
                    value={[stakeAmount]}
                    max={maxAmount}
                    step={1000}
                    onValueChange={(values) => setStakeAmount(values[0])}
                    className="py-4"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-blue-200">Staking Period</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[30, 60, 90].map((days) => (
                      <Button
                        key={days}
                        type="button"
                        variant={stakingPeriod === days ? "default" : "outline"}
                        className={
                          stakingPeriod === days
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "border-blue-500/30 text-blue-200 hover:bg-blue-500/20"
                        }
                        onClick={() => setStakingPeriod(days)}
                      >
                        {days} Days
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-indigo-800/30 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Current APY</span>
                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500">{currentApy}%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Estimated Rewards</span>
                    <span className="text-white font-medium">
                      {((stakeAmount * currentApy * stakingPeriod) / (100 * 365)).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  disabled={!connected || stakeAmount <= 0 || isStaking}
                  onClick={handleStake}
                >
                  {isStaking ? "Staking..." : "Stake Tokens"}
                </Button>
              </CardFooter>
            </Card>

            <ApyTiers />
          </div>
        </TabsContent>

        <TabsContent value="dashboard">
          <StakingStats />
        </TabsContent>
      </Tabs>
    </div>
  )
}
