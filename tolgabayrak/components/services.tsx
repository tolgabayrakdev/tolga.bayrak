"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Smartphone, Zap, Users, Cloud, Workflow } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Özel Yazılım Geliştirme",
    description:
      "Sizin iş ihtiyaçlarınıza göre özel yazılım çözümleri geliştiriyorum. Web, mobil veya masaüstü uygulamalar.",
    keywords: "Web yazılım geliştirme, özel yazılım çözümleri",
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama Geliştirme",
    description: "iOS ve Android platformları için native ve cross-platform mobil uygulamalar geliştiriyorum.",
    keywords: "Mobil uygulama geliştirme, iOS, Android",
  },
  {
    icon: Zap,
    title: "SaaS Platformları",
    description: "Ölçeklenebilir ve güvenilir SaaS platformları tasarlamak ve geliştirmek konusunda uzmanım.",
    keywords: "SaaS yazılım geliştirme, SaaS platformları",
  },
  {
    icon: Users,
    title: "Kurumsal Dijital Çözümler",
    description: "İşletmenizi modernize etmek için tam kapsamlı dijital dönüşüm hizmetleri sunuyorum.",
    keywords: "Kurumsal dijital çözümler, işletme yazılımı",
  },
  {
    icon: Cloud,
    title: "Bulut Mimarisi & DevOps",
    description: "AWS, Docker ve Kubernetes gibi bulut teknolojileriyle scalable sistemler kuruyorum.",
    keywords: "Bulut tabanlı sistemler, DevOps, AWS",
  },
  {
    icon: Workflow,
    title: "Entegrasyon & API Geliştirme",
    description:
      "Mevcut sistemlerinizi modern uygulamalarla entegre ediyorum. RESTful ve GraphQL API'ler geliştiriyorum.",
    keywords: "API geliştirme, entegrasyon",
  },
]

export function Services() {
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
    <section id="services" className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hizmetlerim</h2>
          <p className="text-lg text-muted-foreground">
            KOBİ'ler ve işletmeler için tam kapsamlı yazılım geliştirme hizmetleri
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:bg-muted transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground opacity-70">{service.keywords}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 bg-muted border border-border rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Sloganlar</h3>
          <div className="space-y-2 text-muted-foreground">
            <p className="text-lg">"Teknoloji, işletmeniz için bir yatırım değil, bir stratejidir."</p>
            <p className="text-lg">"Modern yazılımla, sınırsız başarı."</p>
            <p className="text-lg">"Giresun'dan dünya standartlarında yazılım çözümleri."</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
