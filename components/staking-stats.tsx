"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { LockIcon } from "lucide-react"

export default function StakingStats() {
  // Mock data - in a real app, this would come from the blockchain
  const [activeStakes, setActiveStakes] = useState([
    {
      id: "stake-1",
      amount: 2500000,
      startDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
      endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
      apy: 20,
      claimed: false,
    },
  ])

  const [isUnstaking, setIsUnstaking] = useState<boolean>(false)

  const handleUnstake = async (stakeId: string) => {
    setIsUnstaking(true)
    // Simulate unstaking process
    setTimeout(() => {
      setActiveStakes(activeStakes.filter((stake) => stake.id !== stakeId))
      setIsUnstaking(false)
    }, 2000)
  }

  const calculateProgress = (start: Date, end: Date) => {
    const total = end.getTime() - start.getTime()
    const elapsed = Date.now() - start.getTime()
    return Math.min(Math.max(Math.floor((elapsed / total) * 100), 0), 100)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const calculateRewards = (stake: any) => {
    const totalDays = (stake.endDate.getTime() - stake.startDate.getTime()) / (24 * 60 * 60 * 1000)
    const elapsedDays = Math.min((Date.now() - stake.startDate.getTime()) / (24 * 60 * 60 * 1000), totalDays)
    return (stake.amount * stake.apy * elapsedDays) / (100 * 365)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="md:col-span-2 bg-white/10 backdrop-blur-lg border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-white">Active Stakes</CardTitle>
          <CardDescription className="text-blue-200">Manage your staked tokens</CardDescription>
        </CardHeader>
        <CardContent>
          {activeStakes.length > 0 ? (
            <div className="space-y-6">
              {activeStakes.map((stake) => (
                <div key={stake.id} className="p-4 rounded-lg bg-indigo-800/30 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-medium">{stake.amount.toLocaleString()} Tokens</h3>
                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500">{stake.apy}% APY</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-200">Progress</span>
                      <span className="text-white">{calculateProgress(stake.startDate, stake.endDate)}%</span>
                    </div>
                    <Progress value={calculateProgress(stake.startDate, stake.endDate)} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-blue-200">Start Date</p>
                      <p className="text-white">{formatDate(stake.startDate)}</p>
                    </div>
                    <div>
                      <p className="text-blue-200">End Date</p>
                      <p className="text-white">{formatDate(stake.endDate)}</p>
                    </div>
                    <div>
                      <p className="text-blue-200">Earned Rewards</p>
                      <p className="text-white">
                        {calculateRewards(stake).toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-200">Status</p>
                      <p className="text-white flex items-center gap-1">
                        <LockIcon className="h-3 w-3" />
                        Locked
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      disabled={calculateProgress(stake.startDate, stake.endDate) < 100 || isUnstaking}
                    >
                      Claim Rewards
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-blue-500/30 text-blue-200 hover:bg-blue-500/20"
                      disabled={calculateProgress(stake.startDate, stake.endDate) < 100 || isUnstaking}
                      onClick={() => handleUnstake(stake.id)}
                    >
                      {isUnstaking ? "Unstaking..." : "Unstake"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-blue-200">No active stakes found</p>
              <Button
                variant="link"
                className="text-blue-400 hover:text-blue-300 mt-2"
                onClick={() => (window.location.hash = "#stake")}
              >
                Stake your tokens now
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-white/10 backdrop-blur-lg border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-white">Staking Summary</CardTitle>
          <CardDescription className="text-blue-200">Overview of your staking activity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 rounded-lg bg-indigo-800/30 space-y-2">
            <p className="text-blue-200">Total Staked</p>
            <p className="text-2xl font-bold text-white">
              {activeStakes.reduce((sum, stake) => sum + stake.amount, 0).toLocaleString()}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-indigo-800/30 space-y-2">
            <p className="text-blue-200">Total Rewards</p>
            <p className="text-2xl font-bold text-white">
              {activeStakes
                .reduce((sum, stake) => sum + calculateRewards(stake), 0)
                .toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-indigo-800/30 space-y-2">
            <p className="text-blue-200">Token Address</p>
            <p className="text-sm text-white break-all">6wwcmirjfpdndfmtgvq8ey1zxmzlkglryuutry4izmye</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
