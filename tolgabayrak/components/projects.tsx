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
      "DiyetKa, modern diyetisyenlerin yazılım ihtiyaçlarını karşılamak için sıfırdan geliştirdim. Danışanların beslenme verilerini takip etme, özelleştirilmiş diyetler hazırlama, ilerleme raporlaması ve ödeme yönetimini tek platformda sağlıyor. Ölçeklenebilir mimari ve modern teknolojilerle diyetisyenlerin iş akışlarını optimize etmek için tasarlandı.",
    stats: [
      { label: "Proje Türü", value: "SaaS" },
      { label: "Mimari", value: "Ölçeklenebilir" },
      { label: "Durum", value: "Geliştirme" },
    ],
    url: "https://diyetka.com",
    technologies: ["Next.js", "React", "PostgreSQL", "iyzico", "AWS", "Express.js", "Cloudinary"],
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
      "RandevuHazır, profesyonel randevu yönetim yazılımı olarak hizmet işletmelerini dijitalleştirmek için tasarladığım web platformu. Otomatik randevu hatırlatmaları, gelişmiş müşteri CRM, çalışan yönetimi, SMS/Email entegrasyonu ve iyzico ödeme sistemi sunuyor. Hızlı kurulum ve kullanıcı dostu arayüzü ile işletmelerin operasyonel verimliliğini artırmayı hedefliyor.",
    stats: [
      { label: "Kurulum Süresi", value: "<5 dak" },
      { label: "Hedef Kitle", value: "Hizmet Sektörü" },
      { label: "Durum", value: "Geliştirme" },
    ],
    url: "https://randevuhazir.com",
    technologies: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "NetGSM", "iyzico", "Cloudinary"],
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
      "VunSpace, işletmelerin müşteri ilişkileri ve pazarlama kampanyalarını profesyonel şekilde yönetebilmesini sağlayan modern CRM platformu. Gelişmiş segmentasyon, otomatik kampanya yürütme, detaylı raporlama ve API entegrasyonları sunar. Ölçeklenebilir altyapı ile ajanslar ve B2B şirketlerinin pazarlama operasyonlarını optimize etmek için tasarlandı.",
    stats: [
      { label: "Hedef Kitle", value: "B2B & Ajanslar" },
      { label: "Mimari", value: "Ölçeklenebilir" },
      { label: "Durum", value: "Geliştirme" },
    ],
    url: "https://vunspace.com",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "AWS", "Cloudinary"],
    keywords: "CRM yazılımı, pazarlama otomasyonu, dijital varlık yönetimi",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    title: "Teslim Onay",
    subtitle: "Resmi İş Teslim Onayı SaaS Platformu",
    description:
      "Freelancer'lar, ajanslar ve hizmet sağlayıcılar için müşterilerinden resmi iş teslim onayı almalarını sağlayan SaaS platformu. Madde bazlı onay sistemi, otomatik bildirimler ve kayıt altında tutma.",
    longDescription:
      "Teslim Onay, freelancer'lar ve ajansların iş teslimlerinde yaşadığı 'almadım', 'öyle demedim' gibi sorunları çözmek için geliştirdiğim SaaS platformu. Kullanıcılar işlerini madde madde tanımlayıp müşteriye özel link gönderir, müşteri her maddeyi tek tek işaretleyip onaylar. Tüm süreç kayıt altında tutulur - tarih, saat, IP adresi dahil. Snapshot sistemi ile teslim anı dondurulur, güvenli token ile tek kullanımlık onay linkleri oluşturulur. Email ve SMS bildirimleri, PDF sertifika export, yanıt geçmişi takibi ve tekrar gönderim özellikleri sunar.",
    stats: [
      { label: "Hedef Kitle", value: "Freelancer & Ajanslar" },
      { label: "Proje Türü", value: "SaaS" },
      { label: "Durum", value: "Geliştirme" },
    ],
    url: "https://onayteslim.com",
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express.js", "PostgreSQL", "JWT", "Nodemailer", "NetGSM", "Tailwind CSS", "shadcn/ui"],
    keywords: "iş teslim onayı, freelancer yazılımı, teslim onay platformu, resmi onay kaydı, müşteri onay sistemi",
    color: "from-orange-500 to-red-500",
  },
]

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
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
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
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
                  <div className="w-full relative">
                    {/* Browser Mockup */}
                    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                      {/* Browser Header */}
                      <div className="bg-muted border-b border-border px-4 py-2 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="flex-1 bg-background border border-border rounded px-3 py-1 text-xs text-muted-foreground truncate ml-2">
                          {project.url}
                        </div>
                      </div>
                      {/* Site Preview */}
                      <div className="relative h-64 bg-background overflow-hidden">
                        <iframe
                          src={project.url}
                          className="w-full h-full border-0 scale-[0.35] origin-top-left"
                          style={{ width: '285.7%', height: '285.7%' }}
                          title={`${project.title} Preview`}
                          loading="lazy"
                          sandbox="allow-same-origin allow-scripts"
                        />
                        {/* Fallback gradient overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-5 transition-opacity pointer-events-none`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
