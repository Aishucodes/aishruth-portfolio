"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Points, PointMaterial } from "@react-three/drei"

interface ParticleSystemProps {
  count?: number
  mouse?: { x: number; y: number }
}

export function NeuralParticles({ count = 2000, mouse = { x: 0, y: 0 } }: ParticleSystemProps) {
  const meshRef = useRef<THREE.Points>(null)
  const lightRef = useRef<THREE.PointLight>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Random positions in a sphere
      const radius = 5 + Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02
    }

    return { positions, velocities }
  }, [count])

  useFrame((state, delta) => {
    if (!meshRef.current) return

    const positions = meshRef.current.geometry.attributes.position.array as Float32Array
    const time = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Mouse influence
      const dx = positions[i3] - mouse.x * 3
      const dy = positions[i3 + 1] - mouse.y * 3
      const distance = Math.sqrt(dx * dx + dy * dy)
      const influence = Math.max(0, 1 - distance / 5)

      // Update positions with mouse influence and drift
      positions[i3] += (Math.sin(time + i) * 0.001 + mouse.x * influence * 0.1) * delta * 10
      positions[i3 + 1] += (Math.cos(time + i) * 0.001 + mouse.y * influence * 0.1) * delta * 10
      positions[i3 + 2] += Math.sin(time * 0.5 + i) * 0.001 * delta * 10
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <>
      <pointLight ref={lightRef} position={[0, 0, 0]} intensity={0.5} color="#3B82F6" />
      <Points ref={meshRef} positions={particles.positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3B82F6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </>
  )
}

// Connection lines between nearby particles
export function NeuralConnections({ particles, mouse }: { particles: Float32Array; mouse: { x: number; y: number } }) {
  const lineRef = useRef<THREE.LineSegments>(null)

  useFrame(() => {
    if (!lineRef.current) return

    const positions = particles
    const connections: number[] = []
    const maxDistance = 2

    for (let i = 0; i < particles.length / 3 - 1; i++) {
      const i3 = i * 3
      const x1 = positions[i3]
      const y1 = positions[i3 + 1]
      const z1 = positions[i3 + 2]

      for (let j = i + 1; j < particles.length / 3; j++) {
        const j3 = j * 3
        const x2 = positions[j3]
        const y2 = positions[j3 + 1]
        const z2 = positions[j3 + 2]

        const distance = Math.sqrt(
          (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2
        )

        if (distance < maxDistance) {
          connections.push(x1, y1, z1, x2, y2, z2)
        }
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(connections, 3))
    lineRef.current.geometry = geometry
  })

  return (
    <lineSegments ref={lineRef}>
      <lineBasicMaterial color="#3B82F6" opacity={0.2} transparent />
    </lineSegments>
  )
}
