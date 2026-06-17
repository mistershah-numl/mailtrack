'use server'

import { db } from '@/lib/db'
import { emails, emailOpens } from '@/lib/db/schema'
import { getUserId } from '@/lib/server-utils'
import { generateTrackingId } from '@/lib/tracking'
import { eq, desc } from 'drizzle-orm'

export async function createTrackedEmail(data: {
  subject: string
  recipient: string
}) {
  const userId = await getUserId()
  const trackingId = generateTrackingId()

  const result = await db
    .insert(emails)
    .values({
      id: `email_${Date.now()}`,
      userId,
      subject: data.subject,
      recipient: data.recipient,
      trackingId,
      status: 'sent',
    })
    .returning()

  return result[0]
}

export async function getUserEmails() {
  const userId = await getUserId()

  return db
    .select()
    .from(emails)
    .where(eq(emails.userId, userId))
    .orderBy(desc(emails.createdAt))
}

export async function getEmailWithStats(emailId: string) {
  const userId = await getUserId()

  const email = await db
    .select()
    .from(emails)
    .where(eq(emails.id, emailId))

  if (!email || email[0].userId !== userId) {
    throw new Error('Unauthorized')
  }

  const opens = await db
    .select()
    .from(emailOpens)
    .where(eq(emailOpens.emailId, emailId))

  return {
    email: email[0],
    opens,
    totalOpens: opens.length,
    uniqueOpens: new Set(opens.map((o) => o.ipAddress)).size,
  }
}

export async function trackEmailOpen(
  trackingId: string,
  data: {
    userAgent: string
    ipAddress: string
  }
) {
  const email = await db
    .select()
    .from(emails)
    .where(eq(emails.trackingId, trackingId))

  if (!email || email.length === 0) {
    return null
  }

  const deviceType = /mobile/i.test(data.userAgent) ? 'mobile' : 'desktop'

  await db.insert(emailOpens).values({
    id: `open_${Date.now()}_${Math.random()}`,
    emailId: email[0].id,
    userAgent: data.userAgent,
    ipAddress: data.ipAddress,
    deviceType,
  })

  return email[0]
}
