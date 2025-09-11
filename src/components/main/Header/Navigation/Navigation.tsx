'use client'

import clsx from 'clsx'
import Link from 'next/link'

import styles from './navigation.module.scss'
import { useMounted } from '@/lib/useMounted'

type NavigationProps = {
  activeSection?: string | null
  className?: string
}

export const Navigation = ({ activeSection, className }: NavigationProps) => {
  const mounted = useMounted()

  return (
    <div className={clsx(styles.nav, !mounted && styles.skeleton, className)}>
      <ul>
        <li>
          <Link
            href="/"
            className={clsx(activeSection === 'banner' && styles.active)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#about-me"
            className={clsx(activeSection === 'about-me' && styles.active)}>
            About me
          </Link>
        </li>
        <li>
          <Link
            href="/#projects"
            className={clsx(activeSection === 'projects' && styles.active)}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/#timeline"
            className={clsx(activeSection === 'timeline' && styles.active)}>
            Timeline
          </Link>
        </li>
        <li>
          <Link
            href="mailto:michael@uplord.co.uk"
            className={clsx(activeSection === 'stack' && styles.active)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}
