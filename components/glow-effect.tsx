interface GlowEffectProps {
  className?: string
  color?: string
  size?: string
  blur?: string
}

export default function GlowEffect({
  className = "",
  color = "bg-indigo-400/20",
  size = "w-40 h-40",
  blur = "blur-3xl",
}: GlowEffectProps) {
  return <div className={`absolute rounded-full ${color} ${size} ${blur} animate-pulse ${className}`} />
}
