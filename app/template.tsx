'use client'

import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import store from 'store2'
import { usePathname, useRouter } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   store.set(
  //     'tab',
  //     {
  //       name: '',
  //       icon: ''
  //     },
  //     false
  //   )

  //   var tabData = store('tab')
  //   var originalTitle = document.title
  //   document.title = tabData.name || 'Art Class'
  //   populateFavorites()
  // }, [])
  const pathname = usePathname()

  return (
    // <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={pathname}>
    //   {children}
    // </motion.div>
    <AnimatePresence mode="wait">
        {children}
    </AnimatePresence>
  )
}
