import clsx from 'clsx'

import styles from './rating.module.scss'

export interface RatingProps {
  rating: number
  className?: string
}

export function Rating({ rating, className }: RatingProps) {
  const safeRating = Math.max(0, Math.min(rating, 5))

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.list}>
        {Array.from({ length: 5 }, (_, i) => {
          const value = 5 - i
          return (
            <div
              key={value}
              className={clsx(styles.item, safeRating === value && styles.active)}
            />
          )
        })}
      </div>
    </div>
  )
}
