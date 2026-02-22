"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { projects, type Project } from "@/data/projects"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="glass h-full border-blue-500/20 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
        <CardHeader>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-400">{project.category}{project.period ? ` · ${project.period}` : ""}</span>
            {project.featured && (
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400">Featured</span>
            )}
          </div>
          <CardTitle className="text-2xl">{project.title}</CardTitle>
          <CardDescription className="text-gray-300">{project.problem}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-500/10 px-2 py-1 text-xs text-blue-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="rounded-full bg-gray-500/10 px-2 py-1 text-xs text-gray-400">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full group-hover:border-blue-500">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="glass max-w-3xl max-h-[90vh] overflow-y-auto border-blue-500/30">
              <DialogHeader>
                <DialogTitle className="text-3xl">{project.title}</DialogTitle>
                <DialogDescription className="text-lg">{project.category}</DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-blue-400">Problem</h3>
                  <p className="text-gray-300">{project.problem}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-blue-400">Architecture</h3>
                  <p className="text-gray-300">{project.architecture}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-blue-400">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-blue-400">Differentiation</h3>
                  <p className="text-gray-300">{project.differentiation}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-blue-400">Impact</h3>
                  <p className="text-gray-300">{project.impact}</p>
                </div>
                <div className="flex gap-4">
                  <Button asChild>
                    <a
                      href="/recruiter"
                      className="flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      {project.ctaText}
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll(".project-card")
    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="projects" ref={containerRef} className="relative min-h-screen w-full py-24 px-4">
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
              Project Architecture
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Systems built with scalability, performance, and automation in mind
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
