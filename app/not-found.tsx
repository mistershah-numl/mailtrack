import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-xl text-gray-300">Page not found</h2>
          <p className="text-gray-400">The page you're looking for doesn't exist.</p>
        </div>

        <Button asChild className="rounded-full">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Home className="h-4 w-4" />
            <span>Go home</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
