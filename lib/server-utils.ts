'use server'

import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getSession() {
  const headersList = await headers()
  return auth.api.getSession({ headers: headersList })
}
