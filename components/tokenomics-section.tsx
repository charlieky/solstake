"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Info } from "lucide-react"
import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function TokenomicsSection() {
  const [chartType, setChartType] = useState<string>("distribution")

  // Token distribution data
  const distributionData = [
    { name: "Public Sale", percentage: 30, color: "bg-blue-500" },
    { name: "Team", percentage: 20, color: "bg-indigo-500" },
    { name: "Ecosystem", percentage: 25, color: "bg-violet-500" },
    { name: "Treasury", percentage: 15, color: "bg-purple-500" },
    { name: "Advisors", percentage: 10, color: "bg-fuchsia-500" },
  ]

  // Token utility data
  const utilityData = [
    { name: "Staking Rewards", description: "Earn passive income by staking tokens" },
    { name: "Governance", description: "Vote on protocol decisions and proposals" },
    { name: "Fee Discounts", description: "Reduced transaction fees for token holders" },
    { name: "Platform Access", description: "Access to premium features and services" },
  ]

  // Token metrics data
  const metricsData = {
    totalSupply: "100,000,000",
    circulatingSupply: "45,000,000",
    initialPrice: "$0.10",
    currentPrice: "$0.85",
    marketCap: "$38,250,000",
    fullyDilutedValue: "$85,000,000",
  }

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
            <span className="text-blue-400">Tokenomics</span>
          </h2>
          <p className="text-blue-200 text-lg">
            Understanding the <span className="text-indigo-400">SOL</span> token economics and distribution
          </p>
        </div>

        <Tabs defaultValue="distribution" value={chartType} onValueChange={setChartType} className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="utility">Utility</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="distribution">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Card className="bg-indigo-900/40 border-blue-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-blue-300" />
                    Token Distribution
                  </CardTitle>
                  <CardDescription className="text-blue-200">Allocation of the total token supply</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {distributionData.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`h-4 w-4 rounded-full ${item.color}`}></div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="text-white">{item.name}</span>
                            <span className="text-blue-300">{item.percentage}%</span>
                          </div>
                          <div className="h-2 bg-indigo-800/50 rounded-full mt-1 overflow-hidden">
                            <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Circular chart */}
                  <div className="absolute inset-0 rounded-full border-8 border-indigo-800/30"></div>

                  {/* Pie chart segments */}
                  {distributionData.map((item, index) => {
                    // Calculate the segment position
                    const previousPercentages = distributionData
                      .slice(0, index)
                      .reduce((sum, item) => sum + item.percentage, 0)

                    const startAngle = (previousPercentages / 100) * 360
                    const endAngle = ((previousPercentages + item.percentage) / 100) * 360

                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 ${item.color}`}
                        style={{
                          clipPath: `path('M 128 128 L 128 0 A 128 128 0 ${endAngle - startAngle > 180 ? 1 : 0} 1 ${
                            128 + 128 * Math.sin((endAngle * Math.PI) / 180)
                          } ${128 - 128 * Math.cos((endAngle * Math.PI) / 180)} Z')`,
                          transform: `rotate(${startAngle}deg)`,
                          borderRadius: "50%",
                        }}
                      ></div>
                    )
                  })}

                  {/* Center circle */}
                  <div className="absolute inset-0 m-auto w-32 h-32 md:w-40 md:h-40 bg-indigo-900/80 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-blue-300 text-sm">Total Supply</p>
                      <p className="text-white font-bold text-xl">100M</p>
                      <p className="text-blue-400 text-xs">SOL Tokens</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="utility">
            <Card className="bg-indigo-900/40 border-blue-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-300" />
                  Token Utility
                </CardTitle>
                <CardDescription className="text-blue-200">
                  How the SOL token is used within the ecosystem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {utilityData.map((item, index) => (
                    <div key={index} className="bg-indigo-800/30 rounded-xl p-4 border border-blue-500/20">
                      <h3 className="text-white font-medium text-lg mb-2">{item.name}</h3>
                      <p className="text-blue-200">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metrics">
            <Card className="bg-indigo-900/40 border-blue-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-300" />
                  Token Metrics
                </CardTitle>
                <CardDescription className="text-blue-200">Key statistics about the SOL token</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <MetricCard
                    title="Total Supply"
                    value={metricsData.totalSupply}
                    tooltip="The maximum number of tokens that will ever exist"
                  />
                  <MetricCard
                    title="Circulating Supply"
                    value={metricsData.circulatingSupply}
                    tooltip="The number of tokens currently in circulation"
                  />
                  <MetricCard
                    title="Initial Price"
                    value={metricsData.initialPrice}
                    tooltip="The price during the initial token offering"
                  />
                  <MetricCard
                    title="Current Price"
                    value={metricsData.currentPrice}
                    tooltip="The current market price of the token"
                  />
                  <MetricCard
                    title="Market Cap"
                    value={metricsData.marketCap}
                    tooltip="Current price × circulating supply"
                  />
                  <MetricCard
                    title="Fully Diluted Value"
                    value={metricsData.fullyDilutedValue}
                    tooltip="Current price × total supply"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function MetricCard({ title, value, tooltip }: { title: string; value: string; tooltip: string }) {
  return (
    <TooltipProvider>
      <div className="bg-indigo-800/30 rounded-xl p-4 border border-blue-500/20">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-blue-200 text-sm">{title}</h3>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-blue-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-white font-bold text-xl">{value}</p>
      </div>
    </TooltipProvider>
  )
}
