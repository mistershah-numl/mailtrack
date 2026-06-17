'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'

interface Email {
  id: string
  subject: string
  recipient: string
  sentAt: Date
  trackingId: string
  totalOpens?: number
  uniqueOpens?: number
}

export function EmailList({ emails }: { emails: Email[] }) {
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null)

  if (emails.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">No tracked emails yet. Send your first tracked email!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {emails.map((email) => (
        <Card key={email.id} className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{email.subject}</h3>
                <p className="text-sm text-gray-600 mt-1">To: {email.recipient}</p>
                <div className="flex gap-4 mt-4">
                  <div>
                    <p className="text-xs text-gray-500">Total Opens</p>
                    <p className="text-2xl font-bold">{email.totalOpens || 0}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Unique Opens</p>
                    <p className="text-2xl font-bold">{email.uniqueOpens || 0}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Sent</p>
                    <p className="text-sm">{format(new Date(email.sentAt), 'MMM dd, HH:mm')}</p>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedEmail(email.id)}
              >
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
