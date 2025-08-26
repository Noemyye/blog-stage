"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ParticleBackgroundProps {
  children?: ReactNode
  className?: string
  particleCount?: number
  particleSize?: number
  particleSpeed?: number
  particleColor?: string
}

export default function ParticleAnimation({
  children,
  className,
  particleCount = 50,
  particleSize = 5,
  particleSpeed = 1,
  particleColor = "rgb(255, 205, 215)",
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const parent = canvas.parentElement
    if (parent) {
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
    } else {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const particles: Particle[] = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * particleSize + 0.1
        this.speedX = Math.random() * particleSpeed - particleSpeed / 2
        this.speedY = Math.random() * particleSpeed - particleSpeed / 2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    let animationFrameId: number
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      const parent = canvasRef.current.parentElement
      if (parent) {
        canvasRef.current.width = parent.offsetWidth
        canvasRef.current.height = parent.offsetHeight
      } else {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [particleCount, particleSize, particleSpeed, particleColor])

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
