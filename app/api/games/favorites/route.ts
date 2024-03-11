import { cookies } from 'next/headers'
import { games } from '../all/route'
import { NextRequest } from 'next/server'

export async function GET(request: Request) {
  const cookieStore = cookies()
  if (!cookieStore.get('favorites')) {
    return Response.json([])
  }
  const favorites = cookieStore.get('favorites')?.value.split(',')

  if (!favorites) {
    return Response.json([])
  }

  return new Response(JSON.stringify(games.filter((game) => favorites.includes(game.id))), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// export async function POST(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams
//   const id = searchParams.get('id')
//   if (!id) {
//     return new Response(JSON.stringify({ error: 'Game ID not provided' }), {
//       status: 400
//     })
//   }

//   const cookieStore = cookies()

//   const favorites = cookieStore.get('favorites')?.value.split(',') || []

//   if (favorites.includes(id)) {
//     favorites.filter((item: any) => {
//       return item !== id
//     })
//   } else {
//     favorites.push(id)
//   }

//   cookieStore.set('favorites', favorites.join(','))
//   return new Response(
//     JSON.stringify({
//       favorites: favorites
//     }),
//     {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       status: 200
//     }
//   )
// }
export async function POST(request: NextRequest) {
  const cookieStore = cookies()
  const searchParams = request.nextUrl.searchParams
  const gameId = searchParams.get('id')
  if (!gameId) {
    return new Response(
      JSON.stringify({
        error: 'Game ID not provided'
      }),
      { headers: { 'Content-Type': 'application/json' }, status: 400 }
    )
  }

  let favorites = cookieStore.get('favorites')?.value.split(',')
  if (!favorites) {
    favorites = []
  }

  if (favorites.includes(gameId)) {
    favorites = favorites.filter((id) => id !== gameId)
  } else {
    favorites.push(gameId)
  }

  cookieStore.set('favorites', favorites.join(','))

  return new Response(JSON.stringify(favorites), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
