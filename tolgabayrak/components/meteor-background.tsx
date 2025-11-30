"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Meteor {
  id: number
  left: number
  delay: number
  duration: number
}

export function MeteorBackground() {
  const [meteors, setMeteors] = useState<Meteor[]>([])

  useEffect(() => {
    const meteorArray = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 5 + Math.random() * 3,
    }))
    setMeteors(meteorArray)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          initial={{
            top: "-100px",
            opacity: 1,
            x: Math.random() * 100 - 50,
          }}
          animate={{
            top: "120vh",
            opacity: [1, 1, 0],
            x: Math.random() * 300 - 150,
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
            ease: "linear",
            opacity: { duration: meteor.duration, ease: "easeOut" },
          }}
          className="absolute w-1 h-1"
          style={{
            left: `${meteor.left}%`,
          }}
        >
          <div className="relative w-full h-full">
            {/* Outer glow */}
            <div className="absolute -top-2 -left-2 w-5 h-5 bg-cyan-400/20 rounded-full blur-xl" />
            {/* Middle glow */}
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-cyan-400/40 rounded-full blur-lg" />
            {/* Core light */}
            <div className="w-1 h-1 bg-cyan-300 rounded-full shadow-lg shadow-cyan-400" />
            {/* Trail effect */}
            <div className="absolute -top-3 left-0 w-0.5 h-12 bg-gradient-to-b from-cyan-400 via-cyan-300 to-transparent blur-sm opacity-80" />
            {/* Secondary trail */}
            <div className="absolute -top-2 left-0.5 w-0.5 h-20 bg-gradient-to-b from-cyan-500/50 to-transparent blur opacity-40" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
