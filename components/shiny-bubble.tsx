"use client"

import { useEffect, useState } from "react"

interface ShinyBubbleProps {
  size?: number
  position?: string
  delay?: number
  duration?: number
}

export default function ShinyBubble({
  size = 300,
  position = "top-20 right-20",
  delay = 0,
  duration = 8,
}: ShinyBubbleProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay setting visibility to reduce initial load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`absolute ${position} pointer-events-none transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className="rounded-full bg-gradient-to-br from-blue-400/30 to-indigo-500/30 animate-float animate-shine"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          filter: "blur(40px)",
        }}
      />
      {/* Removed extra divs to reduce complexity */}
    </div>
  )
}
