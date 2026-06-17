"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, TrendingUp, Clock, Star } from "lucide-react"

interface AnalyticsDashboardProps {
  links: Array<{
    id: number
    title: string
    clicks: number
    category: string
  }>
  profileData: {
    totalClicks: number
    monthlyViews: number
  }
  onClose: () => void
}

export function AnalyticsDashboard({ links, profileData, onClose }: AnalyticsDashboardProps) {
  const topLinks = [...links].sort((a, b) => b.clicks - a.clicks).slice(0, 3)
  const totalClicks = links.reduce((sum, link) => sum + link.clicks, 0)

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Analytics Dashboard
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalClicks.toLocaleString()}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Total Clicks</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {profileData.monthlyViews.toLocaleString()}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Monthly Views</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{links.length}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Active Links</div>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">94%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Click Rate</div>
            </div>
          </div>

          {/* Top Performing Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Top Performing Links
            </h3>
            <div className="space-y-3">
              {topLinks.map((link, index) => (
                <div
                  key={link.id}
                  className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="w-6 h-6 rounded-full p-0 flex items-center justify-center">
                      {index + 1}
                    </Badge>
                    <div>
                      <div className="font-medium">{link.title}</div>
                      <div className="text-sm text-slate-500 capitalize">{link.category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{link.clicks.toLocaleString()}</div>
                    <div className="text-sm text-slate-500">clicks</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Activity
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                <span>Portfolio link clicked</span>
                <span className="text-slate-500">2 minutes ago</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                <span>New visitor from Twitter</span>
                <span className="text-slate-500">5 minutes ago</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
                <span>GitHub link shared</span>
                <span className="text-slate-500">1 hour ago</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
