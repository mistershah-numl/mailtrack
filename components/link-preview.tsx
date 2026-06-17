"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, TrendingUp } from "lucide-react"

interface LinkPreviewProps {
  link: {
    id: number
    title: string
    clicks: number
    preview: {
      title: string
      description: string
      image: string
    }
  }
}

export function LinkPreview({ link }: LinkPreviewProps) {
  return (
    <div className="absolute -top-32 left-0 right-0 z-50 animate-in slide-in-from-bottom-2 duration-200">
      <Card className="backdrop-blur-xl bg-white/95 dark:bg-slate-800/95 border-slate-200/50 dark:border-slate-600/50 shadow-2xl">
        <CardContent className="p-4">
          <div className="flex gap-3">
            <img
              src={link.preview.image || "/placeholder.svg"}
              alt={link.preview.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-slate-900 dark:text-white truncate">{link.preview.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-1">{link.preview.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="text-xs">
                  <Eye className="w-3 h-3 mr-1" />
                  {link.clicks.toLocaleString()} clicks
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
