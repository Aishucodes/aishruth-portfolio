import { Hero } from "@/components/sections/hero"
import { SystemMap } from "@/components/three/system-map"
import { Projects } from "@/components/sections/projects"
import { Timeline } from "@/components/sections/timeline"
import { EducationTimeline } from "@/components/sections/education-timeline"

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <SystemMap />
      <Timeline />
      <EducationTimeline />
      <Projects />
    </main>
  )
}
