'use client'
import { Button } from '@/components/ui/button'
import { Power, Search, Slash, SlidersHorizontal } from 'lucide-react'
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import Image from 'next/image'
import Obfuscated from './Obfuscated'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function Component() {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <div className="flex flex-col fixed top-0 left-0 z-40 w-screen bg-background/80 backdrop-blur-lg">
      <nav className="flex items-center justify-between p-2 border-b border px-6">
        <div className="flex items-center gap-1">
          <Link href="/" className="mx-2">
            {/* <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: 360 }}> */}
              <Image src="/icon.png" alt="Logo" height="512" width="512" className="h-9 w-9 hover:rotate-[360deg] duration-1000 transition-all" />
            {/* </motion.div> */}
          </Link>
          <Slash className="text-gray-700 -rotate-[25deg]" />

          <Button variant="ghost" asChild className={`text-sm ${pathname?.includes('/games') ? 'underline underline-offset-[22px] decoration-2' : ''}`}>
            <Link href="/games">
              <Obfuscated text="Games" />
            </Link>
          </Button>

          <Button variant="ghost" asChild className={`text-sm ${pathname?.includes('/apps') ? 'underline underline-offset-[22px] decoration-2' : ''}`}>
            <Link href="/apps">
              <Obfuscated text="Apps" />
            </Link>
          </Button>

          <Button variant="ghost" asChild className={`text-sm ${pathname?.includes('/movies') ? 'underline underline-offset-[22px] decoration-2' : ''}`}>
            <Link href="/movies">Movies</Link>
          </Button>

          <Button variant="ghost" asChild className={`text-sm ${pathname?.includes('/emulator') ? 'underline underline-offset-[22px] decoration-2' : ''}`}>
            <Link href="/emulator">Emulator</Link>
          </Button>

          <Button variant="ghost" asChild className={`text-sm ${pathname?.includes('/ai') ? 'underline underline-offset-[22px] decoration-2' : ''}`}>
            <Link href="/ai">AI</Link>
          </Button>

          <Button variant="ghost" asChild className={`text-sm ${pathname?.includes('/search') ? 'underline underline-offset-[22px] decoration-2' : ''}`}>
            <Link href="/search">
              <Obfuscated text="Proxy" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center space-x-1">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Power strokeWidth={2.5} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Panic Button</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={pathname.includes('/settings') ? 'secondary' : 'ghost'} size="icon">
                  <Link href="/settings">
                    <SlidersHorizontal strokeWidth={2.5} />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="mr-4">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </nav>
    </div>
  )
}
