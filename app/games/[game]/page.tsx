'use client'
import { Skeleton } from '@/components/ui/skeleton'
import ErrorMessage from '@/components/ErrorMessage'
import { Star, Maximize } from 'lucide-react'

import { Game } from '@/app/api/games/all/route'
import { encodeXor, fetcher } from '@/lib/utils'
import { useState, useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { notFound } from 'next/navigation'
import useSWR from 'swr'

export default function GameFrame({ params }: { params: { game: string } }) {
  const [favorited, setFavorited] = useState<boolean>(false)

  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker
  //       .register('/uv/sw.js', {
  //         scope: '/uv/service'
  //       })
  //       .then(() => {
  //         if (frameRef.current && game) {
  //           frameRef.current.src = '/uv/service/' + encodeXor(game.url)
  //         }
  //       })
  //   } else {
  //     toast.error('Service workers are not supported on this device. Art Class will not function correctly.')
  //   }
  // })

  const { data: game, error, isLoading } = useSWR<Game>(`/api/games/all?game=${params.game}`, fetcher)

  const frameRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (game) {
      ;(async () => {
        const res = await fetch('/api/games/favorites')
        const favorites = (await res.json()) as Game[]

        if (favorites.some((item) => item.id == game.id)) {
          setFavorited(true)
        }
      })()
    }
  }, [game])

  if (error) return <ErrorMessage />

  if (isLoading) {
    return (
      <div className="flex flex-col h-[90vh] p-12 px-20 rounded-md border-border border">
        <Skeleton className="h-full rounded-md" />
      </div>
    )
  }

  if (game == undefined || !game.id) return notFound()

  async function handleFavorite() {
    const res = await fetch(`/api/games/favorites?id=${game!.id}`, {
      method: 'POST'
    })
    const favorites = (await res.json()) as string[]
    setFavorited(favorites.includes(game!.id))
  }

  return (
    <div className="flex flex-col h-[90vh] p-12 px-20 rounded-md border-border border">
      <iframe ref={frameRef} src='https://assets.3kh0.net/2048/' className="bg-white h-full rounded-t-md"></iframe>
      <div className="p-4 bg-gray-800 flex justify-between rounded-b-md">
        <span>
          <span className="flex gap-3 mb-2 items-center">
            <img src={game.image} className="h-8 w-8 rounded-md" />
            <h1 className="text-xl font-bold">{game.title}</h1>
          </span>
          <p className="text-md text-gray-400 font-medium">{game.author}</p>
          <p className="text-md text-gray-400 font-medium mt-2">{game.description}</p>
        </span>
        <div className="flex gap-4 my-auto mx-4 items-center [&>*]:cursor-pointer">
          <Star onClick={handleFavorite} fill={favorited ? '#FFD900' : '#FFFFFF'} className={favorited ? 'text-[#FFD900]' : ''} />
          <Maximize
            strokeWidth={2}
            onClick={() => {
              if (!(frameRef.current && frameRef.current.contentWindow)) return

              frameRef.current.requestFullscreen()
            }}
          />
        </div>
      </div>
    </div>
  )
}
