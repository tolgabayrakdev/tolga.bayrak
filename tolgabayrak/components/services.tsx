"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Server, Globe, Database, Coffee, Cpu, Layers } from "lucide-react"

const skillGroups = [
  {
    icon: Server,
    title: "Backend",
    techs: ["Node.js", "TypeScript", "Express.js", "Java", "Spring Boot", "Python", "Flask", "FastAPI"],
  },
  {
    icon: Globe,
    title: "Frontend",
    techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    icon: Database,
    title: "Veritabanı",
    techs: ["PostgreSQL", "Redis", "SQL"],
  },
  {
    icon: Layers,
    title: "Mimari & Tasarım",
    techs: ["REST API", "Microservices", "MVC", "Clean Architecture", "JWT", "OAuth"],
  },
  {
    icon: Cpu,
    title: "DevOps & Altyapı",
    techs: ["Docker", "AWS", "Linux", "Nginx", "CI/CD"],
  },
  {
    icon: Coffee,
    title: "Araçlar & Diğer",
    techs: ["Git", "Postman", "VS Code", "IntelliJ IDEA", "Cloudinary", "Nodemailer"],
  },
]

export function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

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
    <section id="skills" className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Beceriler & Teknolojiler</h2>
          <p className="text-lg text-muted-foreground">
            Aktif olarak kullandığım teknoloji yığını
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, idx) => {
            const Icon = group.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:bg-muted transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
