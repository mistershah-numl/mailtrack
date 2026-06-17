'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function AuthForm({ mode = 'sign-in' }: { mode: 'sign-in' | 'sign-up' }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (mode === 'sign-up') {
        await authClient.signUp.email({
          email,
          password,
          name,
        })
      } else {
        await authClient.signIn.email({
          email,
          password,
        })
      }
      router.push('/dashboard')
      router.refresh()
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{mode === 'sign-in' ? 'Sign In' : 'Create Account'}</CardTitle>
        <CardDescription>
          {mode === 'sign-in'
            ? 'Enter your email and password to sign in'
            : 'Create an account to start tracking emails'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'sign-up' && (
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Loading...' : mode === 'sign-in' ? 'Sign In' : 'Create Account'}
          </Button>
          {mode === 'sign-in' ? (
            <p className="text-sm text-center">
              Don&apos;t have an account?{' '}
              <a href="/sign-up" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          ) : (
            <p className="text-sm text-center">
              Already have an account?{' '}
              <a href="/sign-in" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
