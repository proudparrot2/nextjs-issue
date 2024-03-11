'use client'
import { Game } from '@/app/api/games/all/route'
import { useRouter } from 'next/navigation'

export default function PreviewCard({ game, className, ...props }: { game: Game; className?: string }) {
  const router = useRouter()
  return (
    <div
      className="aspect-[3/2] h-36 bg-card border rounded-lg relative group cursor-pointer"
      onClick={() => {
        router.push(`/games/${game.id}`)
      }}
    >
      <img src={game.image} className="h-full w-full object-cover rounded-lg" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-200">
        <p className="absolute top-1/2 -translate-y-1/2 w-full text-center font-semibold text-base">{game.title}</p>
      </div>
    </div>
  )
}
