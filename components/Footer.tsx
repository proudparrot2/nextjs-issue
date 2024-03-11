import { Github, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import Obfuscated from './Obfuscated'
import moment from 'moment'

import { BsDiscord } from 'react-icons/bs'
import Image from 'next/image'

export default function Footer() {
  const menus = [
    {
      children: [
        { name: 'Games', href: '/games' },
        { name: 'Apps', href: '/apps' },
        { name: 'Movies', href: '/movies' },
        { name: 'Emulator', href: '/emulator' },
        { name: 'Proxy', href: '/search' }
      ]
    },
    {
      children: [
        { name: 'Settings', href: '/settings' },
        { name: 'Game request', href: '#' },
        { name: 'Privacy policy', href: '#' },
        { name: 'DMCA', href: '#' }
      ]
    }
  ]

  return (
    <div className="flex flex-col md:flex-row w-screen gap-8 md:gap-16 px-8 py-8 text-sm border-border border-t">
      <div className="flex-1 space-y-1.5">
        <div className="flex items-center space-x-2">
          <Image src="/icon.png" height="512" width="512" alt="Icon" className="h-7 w-7" />
          <div className="font-bold text-2xl">Art Class</div>
        </div>
        <div className="text-gray-500">Today is {moment().format('dddd, MMMM Do')}</div>
      </div>

      {menus.map((item, index) => (
        <div className="mb-4" key={index}>
          <div className="font-bold"></div>
          <ul className="mt-2">
            {item.children.map((child) => (
              <li className="mt-2" key={child.name}>
                <Link className="text-gray-500 hover:underline underline-offset-3" href={child.href}>
                  <Obfuscated text={child.name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="text-gray-500 space-y-2">
        <div className="text-xs">
          Copyright © 2023 proudparrot2
          <br />
          All right reserved.
        </div>

        <span className="flex items-center gap-2">
          <a href="https://github.com/art-class/v4" className="inline-block text-2xl" aria-label="GitHub">
            <Github aria-hidden="true" />
          </a>
          <a href="https://discord.gg/desmos" className="inline-block text-2xl hover:text-gray-400 transition-all duration-300" aria-label="GitHub">
            <BsDiscord aria-hidden="true" />
          </a>
        </span>
      </div>
    </div>
  )
}
