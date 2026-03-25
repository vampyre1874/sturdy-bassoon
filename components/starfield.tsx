"use client"

import { useEffect, useRef } from "react"

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Stars
    const stars: { x: number; y: number; size: number; opacity: number; twinkleSpeed: number }[] = []
    const numStars = 150

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      })
    }

    // Shooting stars
    const shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; active: boolean }[] = []

    const createShootingStar = () => {
      if (Math.random() < 0.003) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          opacity: 1,
          active: true,
        })
      }
    }

    let animationId: number
    let time = 0

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      // Draw stars with twinkling
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 100) * 0.3 + 0.7
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
        ctx.fill()
      })

      // Create and draw shooting stars
      createShootingStar()

      shootingStars.forEach((star, index) => {
        if (!star.active) return

        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - star.length * 0.7,
          star.y - star.length * 0.3
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(star.x - star.length * 0.7, star.y - star.length * 0.3)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.stroke()

        star.x += star.speed
        star.y += star.speed * 0.4
        star.opacity -= 0.008

        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          shootingStars.splice(index, 1)
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
