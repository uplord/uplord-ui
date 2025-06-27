'use client'

import { clsx } from 'clsx'
import { useState } from 'react'

import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { Toggle } from './Toggle'
import styles from './header.module.scss'
import { useScroll } from '@/lib/scrollUtils'
import { useMounted } from '@/lib/useMounted'

export type HeaderProps = {
  id?: string
  isHome?: boolean
  theme?: 'dark' | 'light'
  onToggleTheme?: (newTheme: 'dark' | 'light') => void
}

export const Header = ({ id, isHome = false, theme, onToggleTheme }: HeaderProps) => {
  const [darkMode, setDarkMode] = useState(theme === 'dark')
  const mounted = useMounted()
  const isScrolled = useScroll()

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
                const theme = isChecked ? 'dark' : 'light'
                if (onToggleTheme) {
                  onToggleTheme(theme)
                }
                setDarkMode(theme === 'dark' ? true : false)
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
