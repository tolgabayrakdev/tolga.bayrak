"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import { MeteorBackground } from "./meteor-background"
import { TerminalCard } from "./terminal-card"

export function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6 relative overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <MeteorBackground />
      </div>

      {/* dot grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.65 0.162 205 / 0.25) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              <span className="gradient-text">Merhaba, Ben Tolga</span>
              <br />
              <span className="text-foreground">Yazılım Mühendisi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Full-stack yazılım geliştirme tutkunu. Node.js, TypeScript, React, Next.js,
              Java ve Python ile ölçeklenebilir, temiz ve sürdürülebilir uygulamalar inşa ediyorum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-3"
            >
              <div className="flex gap-3 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="bg-primary text-white px-7 py-3 rounded-lg font-medium hover:bg-primary/80 transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
                >
                  Projelerime Bak <ArrowRight size={17} />
                </a>
                <a
                  href="#contact"
                  className="border border-border text-foreground px-7 py-3 rounded-lg font-medium hover:bg-muted transition-all"
                >
                  İletişime Geç
                </a>
              </div>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://github.com/tolgabayrakdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <Github size={16} />
                  github.com/tolgabayrakdev
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — Terminal */}
          <TerminalCard />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="text-2xl text-muted-foreground">↓</div>
      </motion.div>
    </section>
  )
}
