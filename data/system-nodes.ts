export interface SystemNode {
  id: string
  title: string
  description: string
  position: [number, number, number]
  color: string
  projects: string[]
  connections: string[]
}

export const systemNodes: SystemNode[] = [
  {
    id: "ai-ml",
    title: "AI/ML",
    description: "Cardiac Digital Twins (CVAE) and other ML systems. TensorFlow, PyTorch, generative/agentic AI, Copilot/Gemini tools.",
    position: [0, 2, 0],
    color: "#3B82F6",
    projects: ["cardiac-digital-twins", "ai-stock-predictor", "discord-emotion-bot", "sentiment-discord-bot"],
    connections: ["backend", "fullstack"],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Namespace Management Dashboard, Kubernetes, GKE, Docker, CI/CD, and cloud-native tooling.",
    position: [-2, 0, -1],
    color: "#06B6D4",
    projects: ["cardiac-digital-twins"],
    connections: ["backend", "fullstack"],
  },
  {
    id: "backend",
    title: "Backend",
    description: "FastAPI, Flask, Java. APIs, data pipelines, RabbitMQ, MongoDB/SQL, observability (Prometheus/Grafana).",
    position: [0, 0, 0],
    color: "#8B5CF6",
    projects: ["ai-stock-predictor", "discord-emotion-bot", "sentiment-discord-bot"],
    connections: ["ai-ml", "devops", "fullstack"],
  },
  {
    id: "fullstack",
    title: "Full-Stack",
    description: "React, Java, Docker. Dashboards, web apps with version control (GitHub).",
    position: [2, 0, 1],
    color: "#10B981",
    projects: ["ai-stock-predictor"],
    connections: ["ai-ml", "backend"],
  },
  {
    id: "gen-ai",
    title: "Generative AI",
    description: "CVAE/PINNs/Transformers powered generative models. Gemini API and creative AI tools.",
    position: [0, -2, 0],
    color: "#F59E0B",
    projects: ["cardiac-digital-twins"],
    connections: ["ai-ml", "backend"],
  },
  {
    id: "data-viz",
    title: "Data Viz",
    description: "PowerBI/Tableau visualizations, GitHub/version control workflows.",
    position: [0, -2, 0],
    color: "#EF4444",
    projects: [],
    connections: ["backend", "fullstack"],
  },
]
