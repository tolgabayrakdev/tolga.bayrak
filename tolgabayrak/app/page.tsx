import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Tolga Bayrak - Yazılım Geliştirme Uzmanı | SaaS ve Web Uygulamaları",
  description:
    "Tolga Bayrak - Giresun'da Web, Mobil, SaaS yazılım geliştirme. Next.js, React, Node.js, PostgreSQL. Kurumsal dijital çözümler ve özel yazılım geliştirme hizmetleri.",
  keywords: [
    "Giresun yazılım geliştirme",
    "yazılım uzmanı Giresun",
    "web yazılım geliştirme hizmeti",
    "mobil uygulama geliştirme",
    "SaaS yazılım geliştirme",
    "özel yazılım çözümleri",
    "Giresun freelance yazılım uzmanı",
    "Next.js developer",
    "React developer",
    "Node.js geliştirme",
  ].join(", "),
  openGraph: {
    title: "Tolga Bayrak - Yazılım Geliştirme Uzmanı",
    description: "Kurumsal dijital çözümler, SaaS platformları ve modern web uygulamaları geliştiriyorum.",
    type: "website",
    url: "https://tolgabayrak.dev",
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
