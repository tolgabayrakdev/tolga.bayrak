"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Server, Globe, Database, Coffee, Cpu, Layers } from "lucide-react"

const skillGroups = [
  {
    icon: Server,
    title: "Backend",
    techs: ["Node.js", "TypeScript", "Express.js", "Java", "Spring Boot", "Python", "Flask", "FastAPI"],
    topBar: "from-green-500 to-emerald-400",
    iconBg: "bg-green-500/10 group-hover:bg-green-500/20",
    iconColor: "text-green-400",
    badgeClass: "bg-green-500/10 text-green-300 border-green-500/20",
  },
  {
    icon: Globe,
    title: "Frontend",
    techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    topBar: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-400",
    badgeClass: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
  {
    icon: Database,
    title: "Veritabanı",
    techs: ["PostgreSQL", "Redis", "SQL"],
    topBar: "from-orange-500 to-amber-400",
    iconBg: "bg-orange-500/10 group-hover:bg-orange-500/20",
    iconColor: "text-orange-400",
    badgeClass: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  },
  {
    icon: Layers,
    title: "Mimari & Tasarım",
    techs: ["REST API", "Microservices", "MVC", "Clean Architecture", "JWT", "OAuth"],
    topBar: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    iconColor: "text-violet-400",
    badgeClass: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  {
    icon: Cpu,
    title: "DevOps & Altyapı",
    techs: ["Docker", "AWS", "Linux", "Nginx", "CI/CD"],
    topBar: "from-cyan-500 to-sky-400",
    iconBg: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    iconColor: "text-cyan-400",
    badgeClass: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  {
    icon: Coffee,
    title: "Araçlar & Diğer",
    techs: ["Git", "Postman", "VS Code", "IntelliJ IDEA", "Cloudinary", "Nodemailer"],
    topBar: "from-slate-400 to-zinc-400",
    iconBg: "bg-slate-500/10 group-hover:bg-slate-500/20",
    iconColor: "text-slate-400",
    badgeClass: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  },
]

export function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
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
          <p className="text-lg text-muted-foreground">Aktif olarak kullandığım teknoloji yığını</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map((group, idx) => {
            const Icon = group.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-border/80 hover:shadow-lg transition-all duration-300"
              >
                {/* colored top bar */}
                <div className={`h-0.5 w-full bg-gradient-to-r ${group.topBar}`} />

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-lg transition-colors ${group.iconBg}`}>
                      <Icon size={20} className={group.iconColor} />
                    </div>
                    <h3 className="text-lg font-bold">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.techs.map((tech) => (
                      <span
                        key={tech}
                        className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium border ${group.badgeClass}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
