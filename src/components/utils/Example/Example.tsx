import { clsx } from 'clsx'

import styles from './example.module.scss'

type ExampleProps = {
  isSkeleton?: boolean
}

export const Example = ({ isSkeleton = false }: ExampleProps) => {
  return (
    <div className={clsx(styles.example, isSkeleton && styles['is-skeleton'])}>
      <div className={styles.content}>Example</div>
    </div>
  )
}
