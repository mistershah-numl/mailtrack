import { auth } from '@/lib/auth'

export const { POST, GET } = auth.handler

// Enable CORS for auth endpoints
export async function OPTIONS(request: Request) {
  const origin = request.headers.get('origin') || '*'
  
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '86400',
    },
  })
}
