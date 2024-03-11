'use client'

import GameCard, { GameCardSkeleton } from '@/components/GameCard'
import Obfuscated from '@/components/Obfuscated'
import { Input } from '@/components/ui/input'
import { Game } from '@/app/api/games/all/route'
import { Search } from 'lucide-react'

import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import ErrorMessage from '@/components/ErrorMessage'

export default function Games() {
  const { data: games, error, isLoading } = useSWR<Game[]>('/api/games/all', fetcher)
  const [searchTerm, setSearchTerm] = useState('')

  if (error) {
    return <ErrorMessage />
  }

  // if (isLoading) {
  //   return <Loading />
  // }

  const searchedGames = games?.filter((game) => game.title.toLowerCase().includes(searchTerm.toLowerCase()))!
  return (
    <div className="flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold">
        <Obfuscated text="Games" />
      </h1>
      <div className="relative">
        <Search className="absolute top-1/2 -translate-y-1/2 left-3 h-4 w-4 text-muted-foreground" />
        <Input className="my-4 w-96 pl-8" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      {!isLoading && !(searchedGames.length > 0) && (
        <div className="py-4">
          <h1 className="text-2xl font-bold">No results for "{searchTerm}"</h1>
        </div>
      )}
      {!isLoading ? (
        <div className="mx-4 my-8 flex flex-wrap justify-center gap-6">
          {searchedGames?.map((game, i) => {
            return <GameCard key={i} game={game} />
          })}
        </div>
      ) : (
        <GameCardSkeleton />
      )}
    </div>
  )
}
