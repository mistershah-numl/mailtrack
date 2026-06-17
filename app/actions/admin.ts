'use server'

import { db } from '@/lib/db'
import { user, emails, emailOpens } from '@/lib/db/schema'
import { getUserId, getSession } from '@/lib/server-utils'
import { desc } from 'drizzle-orm'

export async function getAllUsers() {
  const userId = await getUserId()
  const session = await getSession()

  // Check if user is admin
  if (session?.user?.role !== 'admin') {
    throw new Error('Unauthorized: Admin access required')
  }

  return db.select().from(user).orderBy(desc(user.createdAt))
}

export async function getAllEmails() {
  const session = await getSession()

  if (session?.user?.role !== 'admin') {
    throw new Error('Unauthorized: Admin access required')
  }

  const allEmails = await db.select().from(emails).orderBy(desc(emails.createdAt))

  const emailsWithStats = await Promise.all(
    allEmails.map(async (email) => {
      const opens = await db
        .select()
        .from(emailOpens)
        .where((t) => t.emailId === email.id)

      return {
        ...email,
        totalOpens: opens.length,
        uniqueOpens: new Set(opens.map((o) => o.ipAddress)).size,
      }
    })
  )

  return emailsWithStats
}

export async function getAdminStats() {
  const session = await getSession()

  if (session?.user?.role !== 'admin') {
    throw new Error('Unauthorized: Admin access required')
  }

  const users = await db.select().from(user)
  const allEmails = await db.select().from(emails)
  const allOpens = await db.select().from(emailOpens)

  return {
    totalUsers: users.length,
    totalEmails: allEmails.length,
    totalOpens: allOpens.length,
    avgOpenRate: allEmails.length > 0 ? Math.round((allOpens.length / allEmails.length) * 100) : 0,
  }
}
