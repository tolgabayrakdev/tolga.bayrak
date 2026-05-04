"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Zap, Github } from "lucide-react"
import { MeteorBackground } from "./meteor-background"

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MeteorBackground />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-6 relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          <span className="gradient-text">Merhaba, Ben Tolga</span>
          <br />
          <span className="text-foreground">Yazılım Mühendisi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Full-stack yazılım geliştirme tutkunu. Node.js, TypeScript, React, Next.js, Java ve Python ile
          ölçeklenebilir, temiz ve sürdürülebilir uygulamalar inşa ediyorum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
        >
          <a
            href="#projects"
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center gap-2"
          >
            Projelerime Bak <ArrowRight size={18} />
          </a>
          <a
            href="https://github.com/tolgabayrakdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted hover:border-primary/50 transition-colors"
          >
            <Github size={20} />
            github.com/tolgabayrakdev
          </a>
          <a
            href="#contact"
            className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
          >
            İletişime Geç
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-8 pt-10 text-sm text-muted-foreground flex-wrap"
        >
          <div className="flex items-center gap-2">
            <Code2 size={18} className="text-accent" />
            <span>Full-Stack Geliştirme</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-accent" />
            <span>Backend & Frontend</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
        className="mt-20 relative z-10"
      >
        <div className="text-3xl text-muted-foreground">↓</div>
      </motion.div>
    </section>
  )
}
