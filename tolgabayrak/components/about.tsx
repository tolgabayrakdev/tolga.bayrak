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
          <p className="text-lg text-muted-foreground">Full-Stack Yazılım Mühendisi</p>
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
              Merhaba! Ben Tolga Bayrak. Yazılım geliştirmeye tutkuyla bağlı, full-stack odaklı bir yazılım
              mühendisiyim. Temiz, okunabilir ve sürdürülebilir kod yazmayı her şeyden önce tutuyorum.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Backend tarafında Node.js, TypeScript, Express.js ve PostgreSQL ile sağlam API'ler ve servisler inşa
              ediyorum. Java ekosisteminde Spring Boot, Python tarafında ise Flask ve FastAPI ile de aktif çalışıyorum.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Frontend'de React.js ve Next.js kullanarak modern, performanslı kullanıcı arayüzleri oluşturuyorum.
              Kendi projelerimi sıfırdan tasarlayıp geliştiriyorum; her katmanda söz sahibi olmayı seviyorum.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-accent">İlgi Alanları</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Full-Stack Web Geliştirme
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  RESTful API & Microservices Tasarımı
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Veritabanı Modelleme (PostgreSQL)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Sistem Mimarisi & Ölçeklenebilirlik
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Docker & Bulut Altyapısı (AWS)
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-accent">Teknoloji Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js", "TypeScript", "Express.js", "PostgreSQL",
                  "React.js", "Next.js",
                  "Java", "Spring Boot",
                  "Python", "Flask", "FastAPI",
                  "Docker", "AWS",
                ].map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
