import { betterAuth } from 'better-auth'
import { pool } from '@/lib/db'

export const auth = betterAuth({
  database: {
    db: pool,
    type: 'postgres',
  },
  secret: process.env.BETTER_AUTH_SECRET || 'default-secret-change-in-production',
  basePath: '/api/auth',
  baseURL: process.env.NEXT_PUBLIC_APP_URL || process.env.BETTER_AUTH_URL || 'http://localhost:3000',
  trustedOrigins: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://192.168.84.1:3000',
    'http://192.168.84.1:3001',
    process.env.NEXT_PUBLIC_APP_URL || 'https://mailtrack-indol.vercel.app',
  ].filter(Boolean),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    minPasswordLength: 6,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
})
