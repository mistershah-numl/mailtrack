"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Heart } from "lucide-react"

const recentVisitors = [
  {
    id: 1,
    name: "Sarah M.",
    avatar: "https://placehold.co/32x32/f59e0b/ffffff?text=S",
    action: "visited",
    time: "2m ago",
  },
  {
    id: 2,
    name: "Alex K.",
    avatar: "https://placehold.co/32x32/10b981/ffffff?text=A",
    action: "clicked Portfolio",
    time: "5m ago",
  },
  {
    id: 3,
    name: "Maria L.",
    avatar: "https://placehold.co/32x32/8b5cf6/ffffff?text=M",
    action: "shared profile",
    time: "12m ago",
  },
]

export function SocialProof() {
  return (
    <Card className="mt-8 backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-0 shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Users className="w-4 h-4" />
            Recent Activity
          </h3>
          <Badge variant="secondary" className="text-xs">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
            Live
          </Badge>
        </div>

        <div className="space-y-3">
          {recentVisitors.map((visitor) => (
            <div key={visitor.id} className="flex items-center gap-3 text-sm">
              <Avatar className="w-8 h-8">
                <AvatarImage src={visitor.avatar || "/placeholder.svg"} alt={visitor.name} />
                <AvatarFallback className="text-xs">{visitor.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <span className="font-medium">{visitor.name}</span>
                <span className="text-slate-500 dark:text-slate-400 ml-1">{visitor.action}</span>
              </div>
              <span className="text-xs text-slate-400">{visitor.time}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <Heart className="w-4 h-4 text-red-500" />
            <span>47 likes today</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <MessageCircle className="w-4 h-4 text-blue-500" />
            <span>12 shares</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
