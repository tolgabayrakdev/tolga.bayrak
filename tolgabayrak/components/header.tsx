"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "Hakkında", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Projeler", href: "#projects" },
  { label: "İletişim", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-bold text-lg md:text-xl gradient-text truncate"
        >
          Tolga Bayrak
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            href="#contact"
            className="bg-primary text-white px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-primary-dark transition-colors whitespace-nowrap"
          >
            Proje Başlatın
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border bg-background/90 backdrop-blur-sm"
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}
