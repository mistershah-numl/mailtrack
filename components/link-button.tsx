"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { LinkItem } from "@/lib/types"

interface LinkButtonProps {
  link: LinkItem
}

export function LinkButton({ link }: LinkButtonProps) {
  const IconComponent = link.icon

  return (
    <Button
      asChild
      className="group relative h-16 w-full justify-start rounded-full border-0 bg-white/5 p-0 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white/20"
    >
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center px-6 py-4"
        aria-label={`${link.title} - ${link.description} (opens in new tab)`}
      >
        {/* Icon */}
        <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center">
          <IconComponent className="h-5 w-5" />
        </div>

        {/* Content */}
        <div className="flex-1 text-left">
          <div className="font-medium">{link.title}</div>
          {link.description && <div className="text-sm text-gray-400">{link.description}</div>}
        </div>

        {/* Arrow */}
        <ExternalLink className="ml-4 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    </Button>
  )
}
