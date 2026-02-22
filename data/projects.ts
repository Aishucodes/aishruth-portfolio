export interface Project {
  id: string
  title: string
  category: string
  period?: string
  problem: string
  architecture: string
  techStack: string[]
  differentiation: string
  impact: string
  ctaText: string
  featured?: boolean
  githubUrl?: string
  demoUrl?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: "cardiac-digital-twins",
    title: "Cardiac Digital Twins using CVAE",
    category: "Healthcare AI / Research",
    problem: "Need for research-grade cardiac modeling combining physics-informed neural networks with generative models for digital twin simulation.",
    architecture: "CVAE (Conditional VAE) for cardiac modeling combined with Physics-Informed Neural Networks (PINNs). Google Gemini API integration for research workflows. End-to-end pipeline for synthetic cardiac data and simulation.",
    techStack: ["TensorFlow", "PyTorch", "PINNs", "CVAE", "Google Gemini API"],
    differentiation: "Research-grade healthcare AI at the intersection of generative models and physics-informed learning.",
    impact: "Enables reproducible cardiac digital twin experiments and collaboration-ready research outputs.",
    ctaText: "Contact for paper/demo",
    featured: true,
  },
  {
    id: "ai-stock-predictor",
    title: "AI Stock Predictor Dashboard",
    category: "Finance / ML",
    period: "Oct–Dec 2024",
    problem: "Unified view of market data, sentiment, and ML-based predictions with risk metrics for informed decisions.",
    architecture: "Yahoo Finance data pipeline, VADER sentiment analysis, ML prediction models. Interactive Plotly charts. SMA/RSI/MACD technical indicators plus Sharpe ratio, beta, and VaR for risk.",
    techStack: ["Python", "Flask", "Plotly", "ML", "VADER", "Yahoo Finance API"],
    differentiation: "Sentiment-aware ML predictions with full risk metrics (Sharpe, beta, VaR) and interactive visualization.",
    impact: "Single dashboard for data, sentiment, predictions, and risk—suitable for portfolio and research use.",
    ctaText: "Contact for demo",
  },
  {
    id: "discord-emotion-bot",
    title: "Discord Emotion Bot",
    category: "NLP / Bots",
    period: "May–Jul 2024",
    problem: "Context-aware emotional tone detection and media responses in Discord for better engagement.",
    architecture: "VADER and Transformers-based emotion detection pipeline. Context-aware response selection and media (images/gifs) triggered by detected emotion. Discord API integration with rate limiting and error handling.",
    techStack: ["Python", "Discord API", "NLP", "VADER", "Transformers"],
    differentiation: "Dual sentiment (VADER + Transformers) with context-aware media responses.",
    impact: "Improved server engagement through emotionally relevant, automated replies.",
    ctaText: "Contact for bot",
  },
  {
    id: "sentiment-discord-bot",
    title: "Sentiment Analysis Discord Bot",
    category: "NLP / Bots",
    problem: "Real-time user sentiment analysis in Discord for moderation and community insights.",
    architecture: "NLP/ML pipeline for text sentiment classification. Discord bot with commands and optional reporting. Modular design for different model backends.",
    techStack: ["Python", "Discord API", "NLP", "ML"],
    differentiation: "Focused sentiment analysis with clean, extensible bot architecture.",
    impact: "Enables moderation and community managers to gauge channel sentiment at a glance.",
    ctaText: "Contact for code",
  },
]
