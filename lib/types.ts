import type { LucideIcon } from "lucide-react"

export interface Profile {
  name: string
  username: string
  bio?: string
  avatar: string
}

export interface SocialLink {
  id: number
  platform: string
  url: string
  icon: string
}

export interface LinkItem {
  id: number
  title: string
  description?: string
  url: string
  icon: LucideIcon
  type: "featured" | "standard" | "compact"
  color: string
  image?: string
}
