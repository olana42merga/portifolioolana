import { useEffect, useRef } from 'react'
export default function ParticleBackground() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let animationId
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init() }
    const init = () => {
      particles = []
      const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 15000))
      for (let i = 0; i < count; i++) {
        particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, size: Math.random() * 2.5 + 1, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6, hue: Math.random() * 60 + 260 })
      }
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, 0.5)`; ctx.shadowBlur = 8; ctx.shadowColor = ctx.fillStyle; ctx.fill(); ctx.shadowBlur = 0
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]; const dx = p.x - q.x; const dy = p.y - q.y; const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath(); ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - dist / 120) * 0.15})`; ctx.lineWidth = 0.8
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke()
          }
        }
      })
      animationId = requestAnimationFrame(animate)
    }
    resize(); animate()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} id="particleCanvas" />
}
