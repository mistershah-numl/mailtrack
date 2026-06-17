import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getAdminStats, getAllUsers, getAllEmails } from '@/app/actions/admin'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'

export default async function AdminPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user || session.user.role !== 'admin') {
    redirect('/dashboard')
  }

  try {
    const stats = await getAdminStats()
    const users = await getAllUsers()
    const allEmails = await getAllEmails()

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">Manage all users and email tracking data</p>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stats.totalUsers}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Emails</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stats.totalEmails}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Opens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stats.totalOpens}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Avg Open Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stats.avgOpenRate}%</p>
              </CardContent>
            </Card>
          </div>

          {/* Users Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>All Users</CardTitle>
              <CardDescription>Manage all registered users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Role</th>
                      <th className="text-left py-3 px-4">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{u.name || 'N/A'}</td>
                        <td className="py-3 px-4">{u.email}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {u.role}
                          </span>
                        </td>
                        <td className="py-3 px-4">{format(new Date(u.createdAt), 'MMM dd, yyyy')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Emails Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Tracked Emails</CardTitle>
              <CardDescription>Monitor all email tracking data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Subject</th>
                      <th className="text-left py-3 px-4">Recipient</th>
                      <th className="text-left py-3 px-4">Opens</th>
                      <th className="text-left py-3 px-4">Unique</th>
                      <th className="text-left py-3 px-4">Sent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allEmails.map((email: any) => (
                      <tr key={email.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{email.subject}</td>
                        <td className="py-3 px-4">{email.recipient}</td>
                        <td className="py-3 px-4">
                          <span className="font-semibold">{email.totalOpens}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-semibold">{email.uniqueOpens}</span>
                        </td>
                        <td className="py-3 px-4">{format(new Date(email.sentAt), 'MMM dd, HH:mm')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Admin error:', error)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You don&apos;t have permission to view this page.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <a href="/dashboard">Go to Dashboard</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }
}
