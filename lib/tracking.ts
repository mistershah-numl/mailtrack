import crypto from 'crypto'
import CryptoJS from 'crypto-js'

export function generateTrackingId(): string {
  return crypto.randomUUID()
}

export function generatePixelUrl(trackingId: string, baseUrl: string): string {
  return `${baseUrl}/api/track/${trackingId}`
}

export function parseUserAgent(userAgent: string): {
  deviceType: string
  browser: string
} {
  const deviceType = /mobile/i.test(userAgent) ? 'mobile' : 'desktop'
  const browser = userAgent.match(/Chrome|Firefox|Safari|Edge/)?.[0] || 'unknown'
  return { deviceType, browser }
}

export function encryptTrackingId(trackingId: string, secret: string): string {
  return CryptoJS.AES.encrypt(trackingId, secret).toString()
}

export function decryptTrackingId(encrypted: string, secret: string): string {
  const bytes = CryptoJS.AES.decrypt(encrypted, secret)
  return bytes.toString(CryptoJS.enc.Utf8)
}
