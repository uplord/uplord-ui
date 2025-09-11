import clsx from 'clsx'
import React from 'react'

import styles from './card.module.scss'

export type CardProps = {
  children: React.ReactNode
  title?: React.ReactNode
  className?: string
  border?: boolean
}

export const Card = ({ children, title, className = '', border = false }: CardProps) => {
  return (
    <div className={clsx(styles.container, border && styles.border, className)}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
