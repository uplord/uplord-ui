import clsx from 'clsx'
import React from 'react'

import styles from './navbar.module.scss'

export type NavbarProps = {
  children: React.ReactNode
  className?: string
}

export const Navbar = ({ children, className }: NavbarProps) => {
  return <div className={clsx(styles.nav, className)}>{children}</div>
}
