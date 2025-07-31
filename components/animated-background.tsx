"use client"

import { useEffect, useState } from "react"

interface Bubble {
  id: number
  size: number
  x: number
  y: number
  speed: number
  opacity: number
  delay: number
  color: string
}

export default function AnimatedBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    // Generate fewer bubbles to reduce load
    const colors = [
      "from-blue-400/20 to-indigo-500/20",
      "from-indigo-400/20 to-purple-500/20",
      "from-purple-400/20 to-blue-500/20",
    ]

    const newBubbles: Bubble[] = []

    // Reduced from 15 to 8 bubbles
    for (let i = 0; i < 8; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 150 + 50, // Smaller size range
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 40 + 20, // Slightly slower
        opacity: Math.random() * 0.3 + 0.1, // Lower opacity
        delay: Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    setBubbles(newBubbles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full bg-gradient-to-br ${bubble.color} blur-xl animate-float`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            opacity: bubble.opacity,
            animationDuration: `${bubble.speed}s`,
            animationDelay: `${bubble.delay}s`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  )
}
