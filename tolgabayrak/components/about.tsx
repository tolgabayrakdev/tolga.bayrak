"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} id="about" className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hakkımda</h2>
          <p className="text-lg text-muted-foreground">Yazılım Geliştirme Uzmanı & Girişimci</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Merhaba! Ben Tolga Bayrak. Giresun'dan yazılım geliştirme dünyasına katkı sunmak ve işletmeleri dijital
              dönüşüme yardımcı olmak konusunda tutkulu bir yazılım uzmanıyım.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Web uygulamaları, mobil uygulamalar, ve SaaS platformları geliştirmede uzmanlaşmışım. Modern teknolojiler
              (Node.js, React, Next.js, PostgreSQL) kullanarak ölçeklenebilir ve güvenli yazılım çözümleri sunuyorum.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              KOBİ'ler, işletmeler ve girişimcilere yönelik danışmanlık hizmetleri veriyorum. Teknoloji sadece kod
              değil, işletmeye gerçek değer katmak için stratejik çözümler geliştiriyorum.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-accent">Uzmanlık Alanları</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Full-Stack Web Uygulamaları
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Mobil Uygulama Geliştirme
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  SaaS Platform Tasarımı
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  API & Microservices Mimarisi
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Bulut Tabanlı Çözümler (AWS, Docker)
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-accent">Teknoloji Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "Next.js", "React.js", "PostgreSQL", "Redis", "Docker", "AWS"].map(
                  (tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
