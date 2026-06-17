import { NextRequest, NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { email, secret } = await request.json()

    // Security check - use environment variable
    const setupSecret = process.env.ADMIN_SETUP_SECRET
    if (!setupSecret || secret !== setupSecret) {
      return NextResponse.json({ error: 'Invalid or missing secret' }, { status: 401 })
    }

    // Update user role to admin
    const result = await pool.query(
      `UPDATE "user" SET role = $1 WHERE email = $2 RETURNING id, email, role`,
      ['admin', email]
    )

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: `User ${email} is now admin`,
      user: result.rows[0],
    })
  } catch (error) {
    console.error('Admin setup error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
