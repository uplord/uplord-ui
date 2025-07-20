import { clsx } from 'clsx'
import React from 'react'

import styles from './card.module.scss'

export type CardProps = {
  children: React.ReactNode
  className?: string
  border?: boolean
}

export const Card = ({ children, className = '', border = false }: CardProps) => {
  return (
    <div className={clsx(styles.container, border && styles.border, className)}>{children}</div>
  )
}
