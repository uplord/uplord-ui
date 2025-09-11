'use client'

import clsx from 'clsx'
import Link from 'next/link'

import styles from './logo.module.scss'
import { useMounted } from '@/lib/useMounted'

type LogoProps = {
  type?: 'light' | 'dark' | 'default'
  hasTitle?: boolean
}

export const Logo = ({ type = 'default', hasTitle = true }: LogoProps) => {
  const mounted = useMounted()

  return (
    <Link
      href="/"
      className={clsx(styles.logo, type && styles[type])}>
      <span className={clsx(styles.icon, !mounted && styles.skeleton)}>M</span>
      {hasTitle && (
        <span className={clsx(styles.title, !mounted && styles.skeleton)}>TheMichael</span>
      )}
    </Link>
  )
}
