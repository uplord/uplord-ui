import clsx from 'clsx'
import React from 'react'

import styles from './card.module.scss'

export type CardProps = {
  children: React.ReactNode
  title?: React.ReactNode
  className?: string
  border?: boolean
  padding?: boolean
}

export const Card = ({
  children,
  title,
  border = false,
  padding = true,
  className = '',
}: CardProps) => {
  return (
    <div
      className={clsx(
        styles.container,
        border && styles.border,
        padding && styles.padding,
        className,
      )}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
