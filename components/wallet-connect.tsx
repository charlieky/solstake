"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Wallet, ExternalLink, Copy, Check } from "lucide-react"
import { useWallet } from "@/hooks/use-wallet"

interface WalletConnectProps {
  large?: boolean
}

export default function WalletConnect({ large = false }: WalletConnectProps) {
  const { connected, publicKey, connect, disconnect } = useWallet()
  const [copied, setCopied] = useState(false)

  const copyAddress = () => {
    if (!publicKey) return
    navigator.clipboard.writeText(publicKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  if (connected && publicKey) {
    return (
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="bg-indigo-800/30 border-blue-500/30 text-white hover:bg-indigo-700/40"
          onClick={copyAddress}
        >
          <span className="mr-2">{truncateAddress(publicKey)}</span>
          {copied ? <Check className="h-4 w-4 text-blue-400" /> : <Copy className="h-4 w-4" />}
        </Button>
        <Button
          variant="outline"
          className="border-blue-500/30 text-blue-200 hover:bg-blue-500/20"
          onClick={disconnect}
        >
          Disconnect
        </Button>
      </div>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 ${large ? "px-8 py-6 text-lg" : ""}`}
        >
          <Wallet className="mr-2 h-5 w-5" />
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-b from-indigo-900 to-blue-900 border-blue-500/30">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">Connect Wallet</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 py-4">
          <Button
            className="bg-indigo-800/30 hover:bg-indigo-700/40 text-white justify-between border border-blue-600/20"
            onClick={connect}
          >
            <div className="flex items-center">
              <img src="/phantom-wallet-logo.png" alt="Phantom" className="h-6 w-6 mr-2" />
              Phantom
            </div>
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button
            className="bg-indigo-800/30 hover:bg-indigo-700/40 text-white justify-between border border-blue-600/20"
            onClick={connect}
          >
            <div className="flex items-center">
              <img src="/solflare-wallet-logo-inspired-design.png" alt="Solflare" className="h-6 w-6 mr-2" />
              Solflare
            </div>
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button
            className="bg-indigo-800/30 hover:bg-indigo-700/40 text-white justify-between border border-blue-600/20"
            onClick={connect}
          >
            <div className="flex items-center">
              <img src="/everyday-carry-essentials.png" alt="Backpack" className="h-6 w-6 mr-2" />
              Backpack
            </div>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
