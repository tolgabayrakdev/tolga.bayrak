"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Meteor {
  id: number
  left: number
  delay: number
  duration: number
  xOffset: number
  finalX: number
}

export function MeteorBackground() {
  const [meteors, setMeteors] = useState<Meteor[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
      
      // Reduce meteor count on mobile for better performance
      const meteorCount = isMobileDevice ? 15 : 60
      
      const meteorArray = Array.from({ length: meteorCount }, (_, i) => {
        const xOffset = Math.random() * 100 - 50
        const finalX = Math.random() * 300 - 150
        return {
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 4,
          duration: isMobileDevice ? 4 + Math.random() * 2 : 5 + Math.random() * 3,
          xOffset,
          finalX,
        }
      })
      setMeteors(meteorArray)
    }

    checkMobile()
    
    // Handle resize
    const handleResize = () => {
      checkMobile()
    }
    
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          initial={{
            top: "-100px",
            opacity: 1,
            x: meteor.xOffset,
          }}
          animate={{
            top: "120vh",
            opacity: [1, 1, 0],
            x: meteor.finalX,
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
            willChange: "transform, opacity",
            transform: "translateZ(0)", // GPU acceleration
          }}
        >
          <div className="relative w-full h-full">
            {isMobile ? (
              // Simplified version for mobile - fewer blur effects
              <>
                {/* Simplified glow for mobile */}
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-cyan-400/30 rounded-full blur-md" />
                {/* Core light */}
                <div className="w-1 h-1 bg-cyan-300 rounded-full shadow-md shadow-cyan-400" />
                {/* Simplified trail */}
                <div className="absolute -top-2 left-0 w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent blur-sm opacity-60" />
              </>
            ) : (
              // Full version for desktop
              <>
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
              </>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
