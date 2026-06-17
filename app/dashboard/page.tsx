import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserEmails } from '@/app/actions/emails'
import { EmailList } from '@/components/email-list'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) {
    redirect('/sign-in')
  }

  const emails = await getUserEmails()

  const totalEmails = emails.length
  const totalOpens = emails.reduce((sum, email: any) => sum + (email.totalOpens || 0), 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">EmailTracker</h1>
            <p className="text-sm text-gray-600 mt-1">Welcome, {session.user.name}</p>
          </div>
          <form action={async () => {
            'use server'
            await auth.api.signOut({ headers: await headers() })
            redirect('/sign-in')
          }}>
            <Button variant="outline">Sign Out</Button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Emails Sent</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{totalEmails}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Opens</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{totalOpens}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Open Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {totalEmails > 0 ? Math.round((totalOpens / totalEmails) * 100) : 0}%
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Extension Setup */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle>Install Browser Extension</CardTitle>
            <CardDescription>Track your Gmail and Outlook emails automatically</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Download and install the EmailTracker extension to start tracking emails in your inbox.
              </p>
              <Link href="/extension/download">
                <Button>Download Extension</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Emails List */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Tracked Emails</h2>
          <EmailList emails={emails as any} />
        </div>
      </div>
    </div>
  )
}
