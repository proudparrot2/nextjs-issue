import { Badge } from '@/components/ui/badge'
import { CardContent, Card, CardTitle, CardDescription } from '@/components/ui/card'
import { Game } from '../app/api/games/all/route'
import { cn } from '@/lib/utils'
import { ServerInsertedHTMLContext, useRouter } from 'next/navigation'
import { Sparkles } from 'lucide-react'
import { Skeleton } from './ui/skeleton'

export default function GameCard({ game, className, ...props }: { game: Game; className?: string }) {
  const router = useRouter()
  return (
    <Card
      className={cn('w-48 rounded-lg shadow-lg text-white cursor-pointer hover:scale-[1.025] duration-200', className)}
      onClick={() => {
        router.push(`/games/${game.id}`)
      }}
    >
      <img alt="Game Image" className="w-full aspect-square object-cover rounded-t-lg" src={game.image} />
      <CardContent className="p-4">
        <CardTitle className="text-lg font-bold text-center">{game.title}</CardTitle>
        <div className="flex flex-wrap justify-center w-full gap-2 mt-2">
          {game.tags?.map((tag) => {
            return (
              <Badge variant="secondary" className="flex items-center">
                {tag == 'featured' && <Sparkles className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />}
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </Badge>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export function GameCardSkeleton() {
  return (
    <div className="mx-4 my-8 flex flex-wrap justify-center gap-6">
      {new Array(10).fill(0).map((_, index) => {
        return (
          <Card key={index} className={cn('w-48 rounded-lg shadow-lg text-white cursor-pointer hover:scale-[1.025] duration-200 border-none')}>
            <Skeleton className="w-full aspect-square object-cover rounded-t-lg" />
            <CardContent className="p-4">
              <CardTitle className="text-lg font-bold">
                <Skeleton className="w-full h-4" />
              </CardTitle>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
