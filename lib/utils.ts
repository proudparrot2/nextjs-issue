import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import store from 'store2'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function aboutBlank() {
  'use client'
  const tab = window.open('about:blank', '_blank')
  if (!tab) return
  const iframe = tab.document.createElement('iframe')
  const stl = iframe.style
  stl.border = stl.outline = 'none'
  stl.width = '100vw'
  stl.height = '100vh'
  stl.position = 'fixed'
  stl.left = stl.right = stl.top = stl.bottom = '0'
  iframe.src = self.location.href
  tab.document.body.appendChild(iframe)
  // window.parent.window.location.replace(localStorage.getItem("panicurl") || 'https://classroom.google.com/h')
}
export const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function encodeXor(str: string) {
  if (!str) return str
  return encodeURIComponent(
    str
      .toString()
      .split('')
      .map((char, ind) => (ind % 2 ? String.fromCharCode(char.charCodeAt(NaN) ^ 2) : char))
      .join('')
  )
}

export function formatSearch(input: string): string {
  try {
    return new URL(input).toString()
  } catch (e) {}

  try {
    const url = new URL(`http://${input}`)
    if (url.hostname.includes('.')) return url.toString()
  } catch (e) {}

  return new URL(`https://google.com/search?q=${input}`).toString()
}