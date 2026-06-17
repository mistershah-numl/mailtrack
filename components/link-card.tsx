"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import type { LinkItem } from "@/lib/types"

interface LinkCardProps {
  link: LinkItem
  variant: "featured" | "standard" | "compact"
}

export function LinkCard({ link, variant }: LinkCardProps) {
  const IconComponent = link.icon

  if (variant === "featured") {
    return (
      <Button
        asChild
        className="group relative h-[120px] w-full justify-start rounded-2xl border-0 bg-white/[0.03] p-0 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-white/20 overflow-hidden border border-white/[0.08] hover:border-white/[0.12]"
      >
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center p-6"
          aria-label={`${link.title} - ${link.description} (opens in new tab)`}
        >
          {/* Background Image */}
          {link.image && (
            <div className="absolute inset-0 opacity-[0.15]">
              <img src={link.image || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="relative flex w-full items-center">
            {/* Icon */}
            <div className="mr-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.12]">
              <IconComponent className="h-6 w-6 text-white" />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-left">
              <div className="text-[17px] font-semibold mb-1 text-white leading-tight">{link.title}</div>
              {link.description && <div className="text-[14px] text-gray-400 leading-tight">{link.description}</div>}
            </div>

            {/* Arrow */}
            <ArrowUpRight className="ml-4 h-5 w-5 text-gray-400 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>
      </Button>
    )
  }

  if (variant === "standard") {
    return (
      <Button
        asChild
        className="group relative h-[72px] w-full justify-start rounded-xl border-0 bg-white/[0.03] p-0 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.06] hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-white/20 border border-white/[0.08] hover:border-white/[0.12]"
      >
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center px-5 py-4"
          aria-label={`${link.title} - ${link.description} (opens in new tab)`}
        >
          {/* Content */}
          <div className="flex w-full items-center">
            {/* Icon */}
            <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.08]">
              <IconComponent className="h-5 w-5 text-white" />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-left">
              <div className="font-medium text-[15px] text-white leading-tight">{link.title}</div>
              {link.description && (
                <div className="text-[13px] text-gray-400 leading-tight mt-0.5">{link.description}</div>
              )}
            </div>

            {/* Arrow */}
            <ArrowUpRight className="ml-4 h-4 w-4 text-gray-400 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>
      </Button>
    )
  }

  // Compact variant
  return (
    <Button
      asChild
      className="group relative h-[88px] w-full justify-center rounded-xl border-0 bg-white/[0.03] p-0 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.06] hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white/20 border border-white/[0.08] hover:border-white/[0.12]"
    >
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full flex-col items-center justify-center p-4 text-center"
        aria-label={`${link.title} (opens in new tab)`}
      >
        {/* Content */}
        <div className="relative">
          {/* Icon */}
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] mx-auto border border-white/[0.08]">
            <IconComponent className="h-4 w-4 text-white" />
          </div>

          {/* Title */}
          <div className="text-[13px] font-medium leading-tight text-white">{link.title}</div>
        </div>
      </a>
    </Button>
  )
}
