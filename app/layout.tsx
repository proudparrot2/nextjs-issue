import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CommandMenu from '@/components/CommandPanel'
import Script from 'next/script'
import { Toaster } from 'sonner'

import './globals.css'
import store from 'store2'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Art Class',
  description: 'The next generation of unblocked games sites.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className={`${inter.className} text-white pt-14`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CommandMenu />
          <Toaster position="top-center" theme="dark" richColors />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
