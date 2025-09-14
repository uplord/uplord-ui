'use client'

import clsx from 'clsx'
import Link from 'next/link'

import styles from './logo.module.scss'
import { useMounted } from '@/lib/useMounted'

type LogoProps = {
  type?: 'light' | 'dark' | 'default'
  hasTitle?: boolean
  className?: string
}

export const Logo = ({ type = 'default', hasTitle = true, className = '' }: LogoProps) => {
  const mounted = useMounted()

  return (
    <Link
      href="/"
      className={clsx(styles.logo, type && styles[type], className)}>
      <span className={clsx(styles.icon, !mounted && styles.skeleton)}>M</span>
      {hasTitle && (
        <span className={clsx(styles.title, !mounted && styles.skeleton)}>TheMichael</span>
      )}
    </Link>
  )
}
