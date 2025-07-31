"use client"

import type React from "react"

import { useState, createContext, useContext } from "react"

interface WalletContextType {
  connected: boolean
  publicKey: string | null
  balance: number | null
  connect: () => void
  disconnect: () => void
}

const WalletContext = createContext<WalletContextType>({
  connected: false,
  publicKey: null,
  balance: null,
  connect: () => {},
  disconnect: () => {},
})

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [connected, setConnected] = useState(false)
  const [publicKey, setPublicKey] = useState<string | null>(null)
  const [balance, setBalance] = useState<number | null>(null)

  // Simulate wallet connection
  const connect = () => {
    // In a real app, this would connect to a Solana wallet
    setConnected(true)
    setPublicKey("8xn5sKPrxnwNKPmcfEfnF7Vw5Fbx6wAWQCgP1HJQVHC9")
    setBalance(3500000) // Mock balance
  }

  const disconnect = () => {
    setConnected(false)
    setPublicKey(null)
    setBalance(null)
  }

  return (
    <WalletContext.Provider value={{ connected, publicKey, balance, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  return useContext(WalletContext)
}
