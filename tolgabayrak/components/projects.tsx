"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "DiyetKa",
    subtitle: "SaaS - Diyetisyen & Danışan Yönetim Platformu",
    description:
      "Diyetisyenler için uzman danışan yönetim sistemi. Beslenme planları, takip metrikleri, raporlama ve otomatik bildirimler sunan tamamen yönetilen SaaS platformu.",
    longDescription:
      "DiyetKa, modern diyetisyenlerin yazılım ihtiyaçlarını karşılamak için sıfırdan geliştirdim. Danışanların beslenme verilerini takip etme, özelleştirilmiş diyetler hazırlama, ilerleme raporlaması ve ödeme yönetimini tek platformda sağlıyor. Yüzlerce diyetisyen başarıyla kullanıyor.",
    stats: [
      { label: "Aktif Kullanıcı", value: "500+" },
      { label: "Proje Türü", value: "SaaS" },
      { label: "İş Etkisi", value: "Yüksek" },
    ],
    url: "https://diyetka.com",
    technologies: ["Next.js", "React", "PostgreSQL", "Stripe", "AWS", "Redis"],
    keywords: "SaaS yazılım geliştirme, sağlık teknolojisi, diyetisyen yazılımı",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 2,
    title: "RandevuHazır",
    subtitle: "Profesyonel Randevu Yönetim Yazılımı",
    description:
      "Profesyonel randevu yönetim yazılımı. Hizmet işletmeleri için kapsamlı randevu takibi, müşteri yönetimi, çalışan planlama ve ödeme entegrasyonu sunan modern platform.",
    longDescription:
      "RandevuHazır, profesyonel randevu yönetim yazılımı olarak binlerce hizmet işletmesini dijitalleştirmek için tasarladığım web platformu. Otomatik randevu hatırlatmaları, gelişmiş müşteri CRM, çalışan yönetimi, SMS/Email entegrasyonu ve Stripe ödeme sistemi sunuyor. Profesyonel randevu yönetimi ile işletmeler operasyonel verimliliği %40 artırıyor.",
    stats: [
      { label: "İşletme Müşterisi", value: "1000+" },
      { label: "Ay Kurulumu", value: "<5 dak" },
      { label: "Uptime", value: "99.9%" },
    ],
    url: "https://randevuhazir.com",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Twilio", "Stripe"],
    keywords: "Profesyonel randevu yönetim yazılımı, randevu takip sistemi, işletme yazılımı, hizmet sektörü",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "VunSpace",
    subtitle: "Dijital Varlık, CRM & Kampanya Yönetim Platformu",
    description:
      "Pazarlama ve satış ekipleri için integrated CRM ve kampanya yönetim platformu. Müşteri takibi, satış pipeline'ı, email kampanyaları ve analitik bir arada.",
    longDescription:
      "VunSpace, işletmelerin müşteri ilişkileri ve pazarlama kampanyalarını profesyonel şekilde yönetebilmesini sağlayan modern CRM platformu. Gelişmiş segmentasyon, otomatik kampanya yürütme, detaylı raporlama ve API entegrasyonları sunar. Ajanslar ve B2B şirketleri tarafından yoğun şekilde kullanılıyor.",
    stats: [
      { label: "Kurumsal Müşteri", value: "100+" },
      { label: "İşlenen Veri", value: "10M+" },
      { label: "ROI Artışı", value: "3.5x" },
    ],
    url: "https://vunspace.com",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "AWS"],
    keywords: "CRM yazılımı, pazarlama otomasyonu, dijital varlık yönetimi",
    color: "from-violet-500 to-purple-500",
  },
]

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="projects" className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Başarı Projeleri</h2>
          <p className="text-lg text-muted-foreground">
            5 yıllık deneyimim boyunca gerçek müşteriler için geliştirdiğim SaaS ve işletme yazılımları
          </p>
        </motion.div>

        <div ref={ref} className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-4">
                  <div className={`h-1 w-12 bg-gradient-to-r ${project.color}`}></div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-primary font-medium">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>

                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-lg font-bold text-accent">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 py-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground border-t border-border pt-4">SEO: {project.keywords}</p>

                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
                    >
                      Projeyi Ziyaret Et
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className={`w-full h-64 bg-gradient-to-br ${project.color} rounded-lg opacity-20 group-hover:opacity-30 transition-opacity`}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
