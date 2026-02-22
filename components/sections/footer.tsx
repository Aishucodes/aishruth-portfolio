"use client"

import React from "react"
import { ResumeButton } from "@/components/ui/ResumeButton"
import { Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0B0F19] py-8">
      <div className="mx-auto max-w-7xl px-4 text-center text-gray-400 space-y-4">
        <ResumeButton />
        <div className="flex justify-center gap-6">
          <a href="mailto:aishruthx@gmail.com" className="hover:text-white">
            <Mail className="inline h-5 w-5" />
          </a>
          <a href="https://github.com/Aishucodes" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Github className="inline h-5 w-5" />
          </a>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} Aishruth Pradeep Tavane</div>
      </div>
    </footer>
  )
}
