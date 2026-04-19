"use client"
import { useState, useEffect } from "react"

export default function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 23, minutes: 59, seconds: 59 })

  useEffect(() => {
    // Set target: 7 days from now stored in localStorage
    const key = "mnhd-offer-end"
    let end = localStorage.getItem(key)
    if (!end) {
      const target = Date.now() + 7 * 24 * 60 * 60 * 1000
      localStorage.setItem(key, String(target))
      end = String(target)
    }

    const tick = () => {
      const diff = Math.max(0, Number(end) - Date.now())
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-primary text-primary-foreground text-center py-2 px-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
      <span className="text-xs font-bold tracking-wide">🔥 عرض لفترة محدودة — طرح جديد بأسعار تبدأ من ٨ مليون جنيه</span>
      <div className="flex items-center gap-1 text-xs font-black" dir="ltr">
        <span className="bg-primary-foreground/20 px-2 py-0.5 rounded">{pad(timeLeft.days)}<span className="font-normal opacity-60">d</span></span>
        <span className="opacity-60">:</span>
        <span className="bg-primary-foreground/20 px-2 py-0.5 rounded">{pad(timeLeft.hours)}<span className="font-normal opacity-60">h</span></span>
        <span className="opacity-60">:</span>
        <span className="bg-primary-foreground/20 px-2 py-0.5 rounded">{pad(timeLeft.minutes)}<span className="font-normal opacity-60">m</span></span>
        <span className="opacity-60">:</span>
        <span className="bg-primary-foreground/20 px-2 py-0.5 rounded">{pad(timeLeft.seconds)}<span className="font-normal opacity-60">s</span></span>
      </div>
    </div>
  )
}
