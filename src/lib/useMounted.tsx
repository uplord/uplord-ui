'use client'

// import { useEffect, useState } from 'react'

export const useMounted = (delay = 300) => {
  // const [mounted, setMounted] = useState(false)
  const mounted = false

  console.log(delay)

  // useEffect(() => {
  //   const timer = setTimeout(() => setMounted(true), delay)
  //   return () => clearTimeout(timer)
  // }, [delay])

  return mounted
}
