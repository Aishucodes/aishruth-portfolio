export interface Experience {
  id: string
  role: string
  company: string
  period: string
  responsibilities: string[]
  systems: string[]
  automationImpact: string
}

export const experiences: Experience[] = [
  {
    id: "koch-capabilities",
    role: "Software Development Intern",
    company: "Koch Capabilities India LLC",
    period: "Current",
    responsibilities: [
      "Algorithm team: achieved 23% faster processing via multithreading",
      "Namespace Management Portal: automated K8s/GKE lifecycle management",
      "Full-stack feature development and deployment",
    ],
    systems: [
      "Namespace Management Portal (K8s/GKE)",
      "Multithreaded processing pipelines",
      "Web applications (Flask, HTML/CSS/JS)",
    ],
    automationImpact: "Automated Kubernetes/GKE namespace lifecycle and improved throughput with multithreading.",
  },
  {
    id: "neewee-analytics",
    role: "Data Science Intern",
    company: "Neewee Analytics Pvt Ltd",
    period: "Jul 2025 – Jan 2026",
    responsibilities: [
      "Resume analytics and data pipelines",
      "ML and data tooling for analytics workflows",
    ],
    systems: [
      "Data pipelines and analytics",
      "ML models and data tools",
    ],
    automationImpact: "Data-driven analytics and ML tooling to support resume and talent analytics.",
  },
]
