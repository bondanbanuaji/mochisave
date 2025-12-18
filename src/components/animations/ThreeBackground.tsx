'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Create animated gradient mesh
    const geometry = new THREE.PlaneGeometry(20, 20, 32, 32)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x3B82F6) },
        color2: { value: new THREE.Color(0x8B5CF6) },
        color3: { value: new THREE.Color(0xF59E0B) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vElevation;
        uniform float time;
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          float elevation = sin(pos.x * 2.0 + time) * 0.5 + sin(pos.y * 2.0 + time * 0.5) * 0.5;
          pos.z = elevation;
          vElevation = elevation;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vElevation;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        
        void main() {
          vec3 color = mix(color1, color2, vUv.x);
          color = mix(color, color3, vUv.y);
          float alpha = 0.3 + vElevation * 0.2;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = -Math.PI / 4
    scene.add(mesh)

    camera.position.z = 5

    // Add floating particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 100
    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x3B82F6,
      transparent: true,
      opacity: 0.6,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Animation
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      material.uniforms.time.value += 0.01
      particles.rotation.y += 0.001
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      containerRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  )
}
