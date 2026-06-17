import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SocialIcons } from "@/components/social-icons"
import type { Profile, SocialLink } from "@/lib/types"

interface ProfileSectionProps {
  profile: Profile
  socialLinks: SocialLink[]
}

export function ProfileSection({ profile, socialLinks }: ProfileSectionProps) {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div className="text-center">
      {/* Avatar */}
      <div className="mb-6">
        <Avatar className="mx-auto h-28 w-28 ring-2 ring-white/10">
          <AvatarImage
            src={profile.avatar || "/placeholder.svg"}
            alt={`${profile.name}'s profile picture`}
            className="object-cover"
          />
          <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl font-semibold text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Name */}
      <h1 className="mb-3 text-2xl font-semibold text-white tracking-tight">@{profile.username}</h1>

      {/* Bio */}
      {profile.bio && (
        <p className="mb-8 text-[15px] text-gray-400 leading-relaxed max-w-sm mx-auto font-normal">{profile.bio}</p>
      )}

      {/* Social Icons */}
      <SocialIcons links={socialLinks} />
    </div>
  )
}
