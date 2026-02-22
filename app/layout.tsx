import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aishruth Pradeep Tavane - AI Systems Engineer",
  description: "B.E. CS (GPA 8.95) | Cardiac Digital Twins (CVAE), Kubernetes Dashboards, AI Stock Predictor | FastAPI - React - Docker - ML",
  keywords: ["Aishruth Tavane", "AI", "Automation", "Digital Twins", "ML", "Full-Stack", "DevOps", "K8s", "Bengaluru"],

  openGraph: {
    title: "Aishruth Pradeep Tavane - AI Systems Portfolio",
    description: "Production systems: cardiac digital twins, K8s automation portals, generative AI, full-stack development.",
    url: "https://aishruth-portfolio.vercel.app",
    siteName: "AishruthX Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aishruth Pradeep Tavane - AI Systems Engineer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aishruth Pradeep Tavane - AI Systems Engineer",
    description: "Cardiac digital twins - K8s automation - AI stock prediction - FastAPI/React/Docker.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <Header />
          <div className="pt-20">{/* offset for fixed header */}
            {children}
          </div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
