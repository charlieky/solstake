"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import WalletConnect from "@/components/wallet-connect"
import { useWallet } from "@/hooks/use-wallet"
import { useState, useEffect } from "react"
import { Menu, Sparkles } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const { connected } = useWallet()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 flex items-center justify-center bg-indigo-800 rounded-md overflow-hidden">
              <Sparkles className="h-5 w-5 text-blue-300" />
            </div>
            <span className="text-xl font-bold text-blue-500 group-hover:text-blue-400 transition-colors">
              SolStake
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-blue-300 hover:text-blue-400 font-medium transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-blue-300 hover:text-blue-400 font-medium transition-colors">
              Features
            </Link>
            <Link href="#stake" className="text-blue-300 hover:text-blue-400 font-medium transition-colors">
              Stake
            </Link>
            <Link href="#dashboard" className="text-blue-300 hover:text-blue-400 font-medium transition-colors">
              Dashboard
            </Link>
            <Link href="#" className="text-blue-300 hover:text-blue-400 font-medium transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {!connected && (
              <Button
                variant="outline"
                className="hidden md:flex border-blue-600/30 text-blue-400 hover:bg-blue-500/10"
              >
                Learn More
              </Button>
            )}
            <WalletConnect />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-blue-400">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-slate-950/95 border-indigo-800/30">
                <div className="flex flex-col gap-6 mt-10">
                  <Link href="/" className="text-blue-300 hover:text-blue-400 font-medium text-lg">
                    Home
                  </Link>
                  <Link href="#features" className="text-blue-300 hover:text-blue-400 font-medium text-lg">
                    Features
                  </Link>
                  <Link href="#stake" className="text-blue-300 hover:text-blue-400 font-medium text-lg">
                    Stake
                  </Link>
                  <Link href="#dashboard" className="text-blue-300 hover:text-blue-400 font-medium text-lg">
                    Dashboard
                  </Link>
                  <Link href="#" className="text-blue-300 hover:text-blue-400 font-medium text-lg">
                    About
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
