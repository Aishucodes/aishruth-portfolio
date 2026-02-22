"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ResumeButton } from "@/components/ui/ResumeButton"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, Mail, Github, CheckCircle2, MapPin, Phone } from "lucide-react"
import { education } from "@/data/education"

const techStack = [
  "AI/ML",
  "DevOps",
  "FastAPI",
  "Flask",
  "Java",
  "React",
  "JavaScript",
  "AWS",
  "RabbitMQ",
  "MongoDB",
  "SQL",
  "Docker",
  "Kubernetes",
  "Prometheus",
  "Grafana",
  "Generative AI",
  "Agentic AI",
  "Digital Twins",
  "TensorFlow",
  "PyTorch",
  "GitHub",
  "Version Control",
  "PowerBI",
  "Tableau",
  "Copilot",
  "Gemini",
]

const metrics = [
  { label: "B.E. CS GPA", value: "8.95/10" },
  { label: "Class 10 (ICSE)", value: "95%" },
  { label: "Class 12 (CBSE)", value: "84%" },
  { label: "Graduation", value: "Jul 2026" },
]

export default function RecruiterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative h-24 w-24 md:h-32 md:w-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-75 blur-xl"></div>
              <div className="relative h-full w-full overflow-hidden rounded-full border-3 border-blue-500/50 ring-2 ring-blue-500/20">
                <Image
                  src="/profile-photo.png"
                  alt="Aishruth Pradeep Tavane"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
            </div>
          </motion.div>
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Aishruth Pradeep Tavane
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-1">AI Systems Engineer</p>
          <p className="text-sm text-gray-500 mb-4">Bengaluru | B.E. CS (GPA 8.95)</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <a href="mailto:aishruthx@gmail.com" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              <Mail className="h-4 w-4" /> aishruthx@gmail.com
            </a>
            <a href="tel:+918050054808" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              <Phone className="h-4 w-4" /> +91-8050054808
            </a>
            <a href="https://github.com/Aishucodes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              <Github className="h-4 w-4" /> github.com/Aishucodes
            </a>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Bengaluru, Karnataka, India
            </span>
          </div>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Card className="glass border-blue-500/30">
            <CardHeader>
              <CardTitle>Resume</CardTitle>
              <CardDescription>Download the latest resume</CardDescription>
            </CardHeader>
            <CardContent>
              <ResumeButton />
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Metrics (GPA / Marks) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="glass border-blue-500/30">
            <CardHeader>
              <CardTitle>Key Metrics</CardTitle>
              <CardDescription>Academic highlights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-400">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-8"
        >
          <Card className="glass border-blue-500/30">
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Academic background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((entry) => (
                <div key={entry.id} className="border-b border-gray-700/50 pb-4 last:border-0 last:pb-0">
                  <div className="font-semibold text-gray-200">{entry.degree}</div>
                  <div className="text-sm text-blue-400">{entry.institution} · {entry.location}{entry.board ? ` (${entry.board})` : ""}</div>
                  <div className="text-sm text-gray-400">{entry.score} · {entry.period}</div>
                  <ul className="mt-1 list-disc list-inside text-sm text-gray-500">
                    {entry.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <Card className="glass border-blue-500/30">
            <CardHeader>
              <CardTitle>Tech Stack</CardTitle>
              <CardDescription>Technologies and tools I work with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <Card className="glass border-blue-500/30">
            <CardHeader>
              <CardTitle>Availability</CardTitle>
              <CardDescription>Final-year B.E. CS · Full-time ready</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-gray-300">Open to full-time roles (from Jul 2026)</span>
              </div>
              <div className="text-sm text-gray-400">
                <p>• Final-year BNM Institute of Technology (VTU Autonomous) — expected July 2026</p>
                <p>• Interested in: AI/ML, full-stack, backend, DevOps, digital twins, generative & agentic AI</p>
                <p>• Bengaluru preferred; open to remote/hybrid</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="glass border-blue-500/30">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>aishruthx@gmail.com · +91-8050054808</CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <CheckCircle2 className="mb-4 h-12 w-12 text-green-400" />
                  <p className="text-lg text-gray-300">Message sent! I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                  <Textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB]"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}

              <div className="mt-6 flex justify-center gap-4 border-t border-gray-700 pt-6">
                <a
                  href="mailto:aishruthx@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/Aishucodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
