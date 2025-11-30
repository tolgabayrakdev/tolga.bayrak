"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const socials = [
    { icon: Mail, label: "Email", value: "tolga@tolgabayrak.dev", href: "mailto:tolga@tolgabayrak.dev" },
    { icon: Phone, label: "Telefon", value: "+90 (554) XXX-XXXX", href: "tel:+905541234567" },
    { icon: MapPin, label: "Konum", value: "Giresun, Türkiye", href: "#" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tolgabayrak",
      href: "https://linkedin.com/in/tolgabayrak",
    },
    { icon: Github, label: "GitHub", value: "github.com/tolgabayrak", href: "https://github.com/tolgabayrak" },
    { icon: Twitter, label: "Twitter", value: "@tolgabayrak", href: "https://twitter.com/tolgabayrak" },
  ]

  return (
    <section ref={ref} id="contact" className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proje Başlatmak İçin Hazır Mısınız?</h2>
          <p className="text-lg text-muted-foreground">
            Yeni bir proje, danışmanlık veya işbirliği için benimle iletişime geçin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {socials.map((social, idx) => {
            const Icon = social.icon
            return (
              <motion.a
                key={idx}
                href={social.href}
                target={
                  social.href.startsWith("http") && !social.href.startsWith("mailto") && !social.href.startsWith("tel")
                    ? "_blank"
                    : "_self"
                }
                rel={
                  social.href.startsWith("http") && !social.href.startsWith("mailto") && !social.href.startsWith("tel")
                    ? "noopener noreferrer"
                    : ""
                }
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
              >
                <div className="mb-3 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold mb-1">{social.label}</h3>
                <p className="text-sm text-muted-foreground">{social.value}</p>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-12 border-t border-border"
        >
          <p className="text-muted-foreground mb-6">© 2025 Tolga Bayrak. Tüm hakları saklıdır. | Giresun, Türkiye</p>
          <p className="text-sm text-muted-foreground">
            Yazılım Geliştirme Uzmanı | SaaS Mimarı | Full-Stack Developer
          </p>
        </motion.div>
      </div>
    </section>
  )
}
