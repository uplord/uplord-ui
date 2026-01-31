import clsx from 'clsx'

import styles from './card.module.scss'

export interface CardProps {
  children: React.ReactNode
  padding?: boolean
  border?: boolean
  className?: string
}

export function Card({ children, padding = true, border, className = '' }: CardProps) {
  return (
    <div
      className={clsx(styles.main, padding && styles.padding, border && styles.border, className)}>
      {children}
    </div>
  )
}
