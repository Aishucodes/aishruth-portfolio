'use client'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ResumeButton() {
  const [pdfUrl, setPdfUrl] = useState('')

  useEffect(() => {
    // Next.js 14: create reliable public URL
    setPdfUrl('/resume/Aishruth-Pradeep-Tavane-Resume.pdf')
  }, [])

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Aishruth-Pradeep-Tavane-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button 
      onClick={handleDownload}
      className="group bg-gradient-to-r from-blue-600/90 to-cyan-500/90 hover:from-blue-700 hover:to-cyan-600 shadow-xl hover:shadow-2xl transition-all duration-300 glow-hover"
      size="lg"
    >
      <Download className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 transition-transform" />
      Download Resume (PDF)
    </Button>
  )
}
