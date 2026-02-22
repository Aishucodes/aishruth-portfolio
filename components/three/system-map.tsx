"use client"

import { useRef, useState, Suspense, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Text, Html } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"
import { systemNodes, type SystemNode } from "@/data/system-nodes"
import { Brain, Box, Server, Code, Zap, BarChart } from "lucide-react"
import { projects as projectsData } from "@/data/projects"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function Node({
  node,
  isSelected,
  onClick,
}: {
  node: SystemNode
  isSelected: boolean
  onClick: () => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!meshRef.current) return
    // slow rotation only, no vertical jitter
    const t = state.clock.elapsedTime
    meshRef.current.rotation.y = t * 0.2
    // smooth scale interpolation
    const targetScale = hovered || isSelected ? 1.3 : 1
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
  })

  const intensity = hovered || isSelected ? 1.5 : 1

  // icon mapping
  const IconComponent = useMemo(() => {
    switch (node.id) {
      case "ai-ml":
        return <Brain className="h-8 w-8 text-white" />
      case "devops":
        return <Box className="h-8 w-8 text-white" />
      case "backend":
        return <Server className="h-8 w-8 text-white" />
      case "fullstack":
        return <Code className="h-8 w-8 text-white" />
      case "gen-ai":
        return <Zap className="h-8 w-8 text-white" />
      case "data-viz":
        return <BarChart className="h-8 w-8 text-white" />
      default:
        return null
    }
  }, [node.id])

  return (
    <group position={node.position}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[0.75, 1]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={intensity * 0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={intensity} color={node.color} distance={3} />
      {IconComponent && (
        <Html center position={[0, 0.5, 0]} style={{ pointerEvents: "none" }}>
          {IconComponent}
        </Html>
      )}
      <Text
        position={[0, -1, 0]}
        fontSize={0.25}
        color={node.color}
        anchorX="center"
        anchorY="middle"
      >
        {node.title}
      </Text>
    </group>
  )
}

function Connection({ from, to }: { from: SystemNode; to: SystemNode }) {
  const points = useMemo(() => {
    return [
      [from.position[0], from.position[1], from.position[2]],
      [to.position[0], to.position[1], to.position[2]],
    ] as [number, number, number][]
  }, [from.position, to.position])

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array(points.flat())}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#0AF" transparent opacity={0.5} linewidth={1} />
    </lineSegments>
  )
}

function Scene3D({
  selectedNode,
  onNodeSelect,
}: {
  selectedNode: SystemNode | null
  onNodeSelect: (node: SystemNode) => void
}) {
  const { camera } = useThree()

  // Animate camera when node is selected
  useFrame(() => {
    if (selectedNode) {
      const targetPosition = new THREE.Vector3(
        selectedNode.position[0],
        selectedNode.position[1] + 1,
        selectedNode.position[2] + 3
      )
      camera.position.lerp(targetPosition, 0.05)
      camera.lookAt(...selectedNode.position)
    } else {
      camera.position.lerp(new THREE.Vector3(0, 0, 8), 0.05)
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {systemNodes.map((node, index) => {
        const radius = 3
        const angle = (index / systemNodes.length) * Math.PI * 2
        const position: [number, number, number] = [
          radius * Math.cos(angle),
          0,
          radius * Math.sin(angle),
        ]
        return (
          <Node
            key={node.id}
            node={{ ...node, position }}
            isSelected={selectedNode?.id === node.id}
            onClick={() => onNodeSelect(node)}
          />
        )
      })}

      {systemNodes.map((node) =>
        node.connections.map((connId) => {
          const connectedNode = systemNodes.find((n) => n.id === connId)
          if (!connectedNode) return null
          return <Connection key={`${node.id}-${connId}`} from={node} to={connectedNode} />
        })
      )}

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minDistance={5}
        maxDistance={15}
        enabled={!selectedNode}
      />
    </>
  )
}

export function SystemMap() {
  const [selectedNode, setSelectedNode] = useState<SystemNode | null>(null)

  return (
    <section id="system" className="relative min-h-screen w-full py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              System Architecture
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Explore the interconnected systems and technologies I work with
          </p>
        </motion.div>

        <div className="relative h-[600px] w-full rounded-lg border border-blue-500/20 bg-black/50 backdrop-blur-sm">
          <Canvas>
            <Suspense fallback={null}>
              <Scene3D selectedNode={selectedNode} onNodeSelect={setSelectedNode} />
            </Suspense>
          </Canvas>

          {selectedNode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute right-4 top-4 z-10 w-full max-w-xs"
            >
              <Card className="glass border-blue-500/30">
                <CardHeader>
                  <div className="flex items-center gap-2">
                {(() => {
                  switch (selectedNode.id) {
                    case "ai-ml":
                      return <Brain className="h-6 w-6 text-cyan-400" />
                    case "devops":
                      return <Box className="h-6 w-6 text-cyan-400" />
                    case "backend":
                      return <Server className="h-6 w-6 text-cyan-400" />
                    case "fullstack":
                      return <Code className="h-6 w-6 text-cyan-400" />
                    case "gen-ai":
                      return <Zap className="h-6 w-6 text-cyan-400" />
                    default:
                      return null
                  }
                })()}
                <CardTitle className="text-2xl">{selectedNode.title}</CardTitle>
              </div>
                  <CardDescription className="text-gray-300">
                    {selectedNode.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-400">Related Projects:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                      {selectedNode.projects.map((projectId) => {
                        const p = projectsData.find((x) => x.id === projectId)
                        return <li key={projectId}>{p ? p.title : projectId}</li>
                      })}
                    </ul>
                  </div>
                  <Button
                    onClick={() => setSelectedNode(null)}
                    variant="outline"
                    className="mt-4 w-full"
                  >
                    Close
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
