"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

type LineType = "command" | "output" | "json" | "accent" | "empty"

interface Line {
  text: string
  type: LineType
  cumulativeDelay: number
}

const lines: Line[] = [
  { text: "$ whoami", type: "command", cumulativeDelay: 200 },
  { text: "Tolga Bayrak — Software Engineer", type: "output", cumulativeDelay: 550 },
  { text: "", type: "empty", cumulativeDelay: 750 },
  { text: "$ cat stack.json", type: "command", cumulativeDelay: 1050 },
  { text: "  backend  → Node.js  TypeScript  Java  Python", type: "json", cumulativeDelay: 1350 },
  { text: "  frontend → React.js  Next.js", type: "json", cumulativeDelay: 1600 },
  { text: "  database → PostgreSQL", type: "json", cumulativeDelay: 1850 },
  { text: "", type: "empty", cumulativeDelay: 2000 },
  { text: "$ echo $STATUS", type: "command", cumulativeDelay: 2300 },
  { text: "Building cool things...", type: "accent", cumulativeDelay: 2700 },
]

function LineContent({ line }: { line: Line }) {
  if (line.type === "empty") return <div className="h-3" />

  const base = "font-mono text-sm leading-relaxed"
  if (line.type === "command")
    return <p className={`${base} text-green-400`}>{line.text}</p>
  if (line.type === "json")
    return <p className={`${base} text-sky-300/90`}>{line.text}</p>
  if (line.type === "accent")
    return <p className={`${base} text-violet-400 font-semibold`}>{line.text}</p>
  return <p className={`${base} text-muted-foreground`}>{line.text}</p>
}

export function TerminalCard() {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setShown(i + 1), line.cumulativeDelay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const done = shown >= lines.length

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full"
    >
      <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
        {/* glow ring */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />

        {/* title bar */}
        <div className="relative bg-[#0d1117] border-b border-border px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground font-mono mx-auto pr-8">
            tolga@portfolio ~ zsh
          </span>
        </div>

        {/* body */}
        <div className="relative bg-[#0d1117]/95 backdrop-blur-sm p-5 min-h-[220px] space-y-0.5">
          {lines.slice(0, shown).map((line, i) => (
            <div key={i} className="flex items-center gap-1">
              <LineContent line={line} />
              {i === shown - 1 && !done && (
                <span className="font-mono text-green-400 text-sm animate-pulse">▋</span>
              )}
            </div>
          ))}
          {done && (
            <div className="flex items-center gap-1 mt-1">
              <span className="font-mono text-sm text-green-400">$</span>
              <span className="font-mono text-green-400 text-sm animate-pulse">▋</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
