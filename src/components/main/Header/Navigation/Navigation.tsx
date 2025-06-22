'use client'

import { clsx } from 'clsx'
import Link from 'next/link'

import styles from './navigation.module.scss'
import { useMounted } from '@/lib/useMounted'

type NavigationProps = {
  className?: string
}

export const Navigation = ({ className }: NavigationProps) => {
  const mounted = useMounted()

  return (
    <div className={clsx(styles.nav, !mounted && styles.skeleton, className)}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#about-me">About me</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/#timeline">Timeline</Link>
        </li>
        <li>
          <Link href="mailto:michael@uplord.co.uk">Contact</Link>
        </li>
      </ul>
    </div>
  )
}
