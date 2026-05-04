import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Tolga Bayrak - Yazılım Mühendisi | Full-Stack Developer",
  description:
    "Tolga Bayrak — Node.js, TypeScript, React, Next.js, Java Spring Boot ve Python FastAPI ile full-stack web uygulamaları geliştiren yazılım mühendisi.",
  keywords: [
    "Tolga Bayrak",
    "yazılım mühendisi",
    "full-stack developer",
    "Node.js TypeScript developer",
    "React Next.js developer",
    "Java Spring Boot",
    "Python FastAPI Flask",
    "PostgreSQL geliştirici",
    "backend developer Türkiye",
    "full-stack geliştirici",
  ].join(", "),
  openGraph: {
    title: "Tolga Bayrak - Yazılım Mühendisi | Full-Stack Developer",
    description:
      "Node.js, TypeScript, React, Next.js, Java Spring Boot ve Python FastAPI ile ölçeklenebilir full-stack uygulamalar geliştiriyorum.",
    type: "website",
    url: "https://tolgabayrak.vercel.app",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  )
}
