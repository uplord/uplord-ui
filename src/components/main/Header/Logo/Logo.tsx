'use client'

import { clsx } from 'clsx'
import Link from 'next/link'

import styles from './logo.module.scss'
import { useMounted } from '@/lib/useMounted'

export const Logo = () => {
  const mounted = useMounted()

  return (
    <Link
      href="/"
      className={clsx(styles.logo)}>
      <span className={clsx(styles.icon, !mounted && styles.skeleton)}>M</span>
      <span className={clsx(styles.title, !mounted && styles.skeleton)}>TheMichael</span>
    </Link>
  )
}
