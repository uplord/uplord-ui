import { clsx } from 'clsx'
import React from 'react'

import styles from './navbar.module.scss'

export type NavbarProps = {
  children: React.ReactNode
  position: 'top' | 'bottom'
  className?: string
}

export const Navbar = ({ children, position = 'bottom', className }: NavbarProps) => {
  return <div className={clsx(styles.nav, position && styles[position], className)}>{children}</div>
}
