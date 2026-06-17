export default function Loading() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <div className="mx-auto max-w-[680px] px-4 py-8">
        {/* Profile skeleton */}
        <div className="text-center mb-8">
          <div className="mx-auto h-24 w-24 rounded-full bg-white/10 animate-pulse mb-4" />
          <div className="h-6 bg-white/10 rounded animate-pulse mb-2 max-w-32 mx-auto" />
          <div className="h-4 bg-white/10 rounded animate-pulse max-w-64 mx-auto mb-4" />
          <div className="flex items-center justify-center gap-6">
            <div className="h-4 bg-white/10 rounded animate-pulse w-16" />
            <div className="h-4 bg-white/10 rounded animate-pulse w-24" />
          </div>
        </div>

        {/* Links skeleton */}
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-16 bg-white/5 rounded-full animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
