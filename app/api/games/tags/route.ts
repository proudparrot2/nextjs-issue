import { type NextRequest } from 'next/server'
import { Game } from '../all/route'
import { games } from '../all/route'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const tag = searchParams.get('tag')
  if (!tag) {
    return new Response(JSON.stringify({ error: 'Tag not provided' }), {
      status: 402
    })
  }

  const filtered = games.filter((game) => game.tags?.includes(tag))

  return Response.json(filtered)
}
