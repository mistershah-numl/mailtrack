import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "EmailTracker | Email Tracking & Analytics",
  description:
    "Track email opens, clicks, and engagement with advanced analytics. Monitor who opened your emails, when they opened them, and detailed device information.",
  keywords: ["email tracking", "email analytics", "open tracking", "email extension", "Gmail", "Outlook"],
  authors: [{ name: "EmailTracker" }],
  creator: "EmailTracker",
  openGraph: {
    type: "website",
    title: "EmailTracker | Email Tracking & Analytics",
    description:
      "Track email opens, clicks, and engagement with advanced analytics.",
    url: "https://emailtracker.app",
    siteName: "EmailTracker",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
