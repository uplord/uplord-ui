'use client'

import { clsx } from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { Toggle } from './Toggle'
import styles from './header.module.scss'
import { useScroll } from '@/lib/scrollUtils'
import { useMounted } from '@/lib/useMounted'

export type HeaderProps = {
  id?: string
  isHome?: boolean
}

export const Header = ({ id, isHome = false }: HeaderProps) => {
  const { resolvedTheme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(false)
  const mounted = useMounted()
  const isScrolled = useScroll()

  useEffect(() => {
    if (resolvedTheme) {
      setDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  return (
    <div
      id={id}
      className={clsx(styles.header, isHome && styles['is-home'], isScrolled && styles.scrolled)}>
      <div className={styles.container}>
        <div className={clsx(styles.top)}>
          <Logo />
          <Navigation />
          <div className={styles.right}>
            <Toggle
              name="toggle"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const isChecked = event.target.checked
                const newTheme = isChecked ? 'dark' : 'light'
                setDarkMode(isChecked)
                setTheme(newTheme)
              }}
              checked={darkMode}
              isSkeleton={!mounted}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
