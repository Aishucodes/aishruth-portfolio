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
  title: "Aishruth Pradeep Tavane | AI Systems Engineer",
  description: "AI Systems Engineer. Final-year BNM Institute of Technology CS (GPA 8.95). Digital twins, generative AI, agentic AI, ML, full-stack. FastAPI, AWS, Java, React, Docker/K8s, Prometheus/Grafana. Bengaluru.",
  keywords: ["Aishruth Tavane", "AI", "Automation", "Digital Twins", "ML", "Full-Stack", "DevOps", "K8s", "Bengaluru"],
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
