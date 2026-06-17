import { LinkCard } from "@/components/link-card"
import type { LinkItem } from "@/lib/types"

interface LinksListProps {
  links: LinkItem[]
}

export function LinksList({ links }: LinksListProps) {
  if (!links || links.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-sm">No links available</p>
      </div>
    )
  }

  const featuredLinks = links.filter((link) => link.type === "featured")
  const standardLinks = links.filter((link) => link.type === "standard")
  const compactLinks = links.filter((link) => link.type === "compact")

  return (
    <div className="space-y-5">
      {/* Featured Links */}
      {featuredLinks.length > 0 && (
        <div className="space-y-4">
          {featuredLinks.map((link) => (
            <LinkCard key={link.id} link={link} variant="featured" />
          ))}
        </div>
      )}

      {/* Standard Links */}
      {standardLinks.length > 0 && (
        <div className="space-y-3">
          {standardLinks.map((link) => (
            <LinkCard key={link.id} link={link} variant="standard" />
          ))}
        </div>
      )}

      {/* Compact Links Grid */}
      {compactLinks.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {compactLinks.map((link) => (
            <LinkCard key={link.id} link={link} variant="compact" />
          ))}
        </div>
      )}
    </div>
  )
}
