"use client"

import Link from "next/link"
import React from "react"
import { ResumeButton } from "@/components/ui/ResumeButton"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0B0F19]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
        <Link href="#hero" className="text-white font-bold text-lg">
          Aishruth
        </Link>
        <nav className="flex items-center space-x-6">
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
            Experience
          </a>
          <a href="#education" className="text-gray-300 hover:text-white transition-colors">
            Education
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </a>
          <ResumeButton />
        </nav>
      </div>
    </header>
  )
}
