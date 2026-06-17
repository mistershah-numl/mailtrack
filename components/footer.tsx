"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

export function Footer() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "John Doe's Links",
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="mt-16 text-center">
      {/* Share Button */}
      <Button
        onClick={handleShare}
        variant="ghost"
        className="mb-8 h-12 rounded-full bg-white/[0.03] text-white hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.12] transition-all duration-200 hover:scale-105"
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share this page
      </Button>

      {/* Linktree Branding */}
      <div className="space-y-3">
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-white"></div>
          </div>
        </div>
        <p className="text-[13px] text-gray-500 font-medium">Create your Linktree</p>
      </div>
    </div>
  )
}
