"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Zap } from "lucide-react"
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
          <span className="gradient-text">Modern Yazılım Çözümleri</span>
          <br />
          <span className="text-foreground">Giresun'dan Dünyaya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Web, mobil ve SaaS uygulamaları geliştirerek işletmeleri dijitalleştiriyorum. Node.js, React, Next.js ve
          modern mimarilerle kurumsal çözümler sunuyorum.
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
            Projelerime Bakın <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
          >
            İletişime Geçin
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
            <span>5+ Yıl Deneyim</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-accent" />
            <span>50+ Başarılı Proje</span>
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
