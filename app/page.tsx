'use client'
import GameCard from '@/components/GameCard'
import Obfuscated from '@/components/Obfuscated'
import PreviewCard from '@/components/PreviewCard'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { fetcher } from '@/lib/utils'
import { useStore } from '@nanostores/react'
import Link from 'next/link'
import useSWR from 'swr'
import { Game } from './api/games/all/route'
import { Skeleton } from '@/components/ui/skeleton'
import { useEffect } from 'react'

export default function Home() {
  const { data: games, error, isLoading } = useSWR<Game[]>('/api/games/all', fetcher)
  const { data: favorites, error: favoriteError, isLoading: favoriteLoading } = useSWR<Game[]>('/api/games/favorites', fetcher)

  if (error) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">Something went wrong.</h1>
        <p className="text-muted-foreground mt-3">
          Please report this in our{' '}
          <Link href="https://github.com" className="underline underline-offset-4">
            GitHub repository
          </Link>
          .
        </p>
      </div>
    )
  }

  return (
    <section className="w-full">
      <div className="container px-12">
        <div className="flex flex-col items-center space-y-6 text-center mt-32">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">Art Class</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The next generation of <Obfuscated text="unblocked game sites" />
            </p>
          </div>
          <div className="space-x-4 flex">
            <Button asChild>
              <Link href="/games">Start playing</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/search">Browse the web</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col mt-16">
          <h1 className="font-semibold text-2xl mb-4">Featured Games</h1>
          {/* <div className="flex overflow-x-scroll gap-4 items-center w-full">
            {games.map((game) => {
              if (game.tags?.includes('featured')) return <PreviewCard key={game.id} game={game} />
              else return null
            })}
          </div> */}
          <ScrollArea className="mb-4 whitespace-nowrap w-full border-border">
            <div className="flex w-max gap-4 pb-4">
              {!isLoading
                ? games?.map((game) => {
                    if (game.tags?.includes('featured')) return <PreviewCard key={game.id} game={game} />
                    else return null
                  })
                : new Array(5).fill(0).map((_, index) => {
                    return <Skeleton key={index} className="aspect-[3/2] h-36 rounded-lg" />
                  })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <h1 className="font-semibold text-2xl mb-4">Favorited Games</h1>
          {!favoriteLoading && !favorites![0] && <p className="-mt-2 font-light">Favorite a game when playing to add it here!</p>}

          <ScrollArea className="mb-4 whitespace-nowrap w-full border-border">
            <div className="flex w-max gap-4 pb-4">
              {!favoriteLoading
                ? favorites?.map((game) => {
                    return <PreviewCard key={game.id} game={game} />
                  })
                : new Array(5).fill(0).map((_, index) => {
                    return <Skeleton key={index} className="aspect-[3/2] h-36 rounded-lg" />
                  })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </section>
  )
}
