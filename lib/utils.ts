import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to validate URLs
export function isValidUrl(string: string): boolean {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}

// Utility function to safely open external links
export function openExternalLink(url: string): void {
  if (isValidUrl(url)) {
    window.open(url, "_blank", "noopener,noreferrer")
  } else {
    console.error("Invalid URL:", url)
  }
}
