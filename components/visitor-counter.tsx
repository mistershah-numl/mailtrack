"use client"

import { useState, useEffect } from "react"
import { Eye } from "lucide-react"

export function VisitorCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Simulate real-time visitor count
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-1 text-xs text-slate-500">
      <Eye className="w-3 h-3" />
      <span>{count + 1247} visitors today</span>
    </div>
  )
}
