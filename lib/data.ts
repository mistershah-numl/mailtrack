import { Globe, Mail, Github, Music, ShoppingBag, BookOpen, Video, Briefcase } from "lucide-react"
import type { Profile, LinkItem, SocialLink } from "./types"

export const profileData: Profile = {
  name: "John Doe",
  username: "johndoe",
  bio: "Creative developer, designer, and content creator. Building digital experiences that inspire and connect people around the world. 🚀",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: "instagram",
    url: "https://instagram.com/johndoe",
    icon: "instagram",
  },
  {
    id: 2,
    platform: "twitter",
    url: "https://twitter.com/johndoe",
    icon: "twitter",
  },
  {
    id: 3,
    platform: "youtube",
    url: "https://youtube.com/@johndoe",
    icon: "youtube",
  },
  {
    id: 4,
    platform: "linkedin",
    url: "https://linkedin.com/in/johndoe",
    icon: "linkedin",
  },
  {
    id: 5,
    platform: "github",
    url: "https://github.com/johndoe",
    icon: "github",
  },
]

export const linksData: LinkItem[] = [
  {
    id: 1,
    title: "My Portfolio Website",
    description: "Latest projects & case studies",
    url: "https://johndoe.com",
    icon: Globe,
    type: "featured",
    color: "from-blue-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    title: "New Course: React Mastery",
    description: "Learn React from zero to hero",
    url: "https://course.johndoe.com",
    icon: BookOpen,
    type: "featured",
    color: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Latest YouTube Video",
    description: "Building a SaaS in 30 days",
    url: "https://youtube.com/watch?v=example",
    icon: Video,
    type: "standard",
    color: "from-red-500 to-pink-600",
  },
  {
    id: 4,
    title: "Freelance Services",
    description: "Web development & design",
    url: "https://services.johndoe.com",
    icon: Briefcase,
    type: "standard",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 5,
    title: "Coding Playlist",
    description: "My favorite coding music",
    url: "https://open.spotify.com/playlist/johndoe",
    icon: Music,
    type: "compact",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 6,
    title: "Merch Store",
    description: "Hoodies, stickers & more",
    url: "https://shop.johndoe.com",
    icon: ShoppingBag,
    type: "compact",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 7,
    title: "GitHub",
    description: "Open source projects",
    url: "https://github.com/johndoe",
    icon: Github,
    type: "compact",
    color: "from-gray-600 to-gray-800",
  },
  {
    id: 8,
    title: "Contact Me",
    description: "Let's work together",
    url: "mailto:hello@johndoe.com",
    icon: Mail,
    type: "standard",
    color: "from-indigo-500 to-blue-600",
  },
]
