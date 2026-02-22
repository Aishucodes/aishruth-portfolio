"use client"

import { motion } from "framer-motion"
import { education, type EducationEntry } from "@/data/education"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Award } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  "be-cs": <GraduationCap className="h-6 w-6 text-cyan-400" />,
  "class-12": <BookOpen className="h-6 w-6 text-cyan-400" />,
  "class-10": <Award className="h-6 w-6 text-cyan-400" />,
}

export function EducationTimeline() {
  return (
    <section id="education" className="relative w-full py-24 px-4">
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
              Education
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Academic journey from school to engineering degree
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          {/* BE card centered */}
          {education.filter(e => e.id === "be-cs").map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md"
            >
              <Card className="glass border-cyan-500/20 transition-all duration-300 hover:border-cyan-500/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {iconMap[entry.id]}
                    <CardTitle className="text-xl">
                      {entry.degree}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm text-gray-400">
                    {entry.institution} | GPA {entry.score.split(": ")[1]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-center text-sm text-gray-300">
                    {entry.period}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* two smaller cards side by side */}
          <div className="flex w-full flex-col gap-6 md:flex-row md:justify-center md:gap-12">
            {education
              .filter(e => e.id !== "be-cs")
              .map((entry) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-xs"
                >
                  <Card className="glass border-cyan-500/20 transition-all duration-300 hover:border-cyan-500/50">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        {iconMap[entry.id]}
                        <CardTitle className="text-lg">
                          {entry.degree}{entry.board ? ` (${entry.board})` : ""}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-1">
                      <div className="text-sm text-gray-300">
                        {entry.institution}
                      </div>
                      <div className="text-sm text-gray-300">
                        {entry.score}
                      </div>
                      <div className="text-sm text-gray-300">
                        {entry.period}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
