'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

const icons = ['📘', '📷', '🎵', '🎬', '🐦']

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll('.floating-icon')

    anime({
      targets: elements,
      translateY: [
        { value: -20, duration: 1000, easing: 'easeInOutSine' },
        { value: 0, duration: 1000, easing: 'easeInOutSine' },
      ],
      translateX: () => anime.random(-10, 10),
      rotate: () => anime.random(-5, 5),
      scale: [
        { value: 1.1, duration: 1000 },
        { value: 1, duration: 1000 },
      ],
      opacity: [
        { value: 0.6, duration: 1000 },
        { value: 0.3, duration: 1000 },
      ],
      delay: anime.stagger(200),
      loop: true,
    })
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="floating-icon absolute text-6xl opacity-20"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 90}%`,
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  )
}
