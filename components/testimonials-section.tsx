import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-transparent via-indigo-950/70 to-transparent backdrop-blur-sm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stakers Who Are <span className="text-blue-400">Profitable</span>
          </h2>
          <p className="text-blue-200">Join thousands of satisfied users who are growing their assets with SolStake.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="I was a complete beginner when I started, but SolStake made it so easy to understand staking and start earning rewards."
            name="Alex Johnson"
            role="Staking since 2022"
            avatar="/avatar-1.png"
          />

          <TestimonialCard
            quote="My portfolio is definitely profitable since I started using SolStake. The APY rates are unmatched anywhere else."
            name="Sarah Williams"
            role="Crypto Investor"
            avatar="/avatar-2.png"
          />

          <TestimonialCard
            quote="I've always had a knack for investments, but SolStake has exceeded my expectations with their secure platform."
            name="Michael Chen"
            role="Financial Advisor"
            avatar="/avatar-3.png"
          />
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, name, role, avatar }: { quote: string; name: string; role: string; avatar: string }) {
  return (
    <Card className="bg-indigo-900/40 border-blue-500/20 backdrop-blur-sm h-full rounded-3xl border-[24px] border-indigo-900/40">
      <CardContent className="pt-6 pb-6 h-full flex flex-col">
        <QuoteIcon className="h-8 w-8 text-blue-500/40 mb-4" />
        <p className="text-blue-100 mb-6 flex-grow">{quote}</p>
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20 border-4 border-blue-500/20">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} className="object-cover" />
            <AvatarFallback className="bg-indigo-700 text-white text-lg">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-white text-lg">{name}</p>
            <p className="text-sm text-blue-300">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
