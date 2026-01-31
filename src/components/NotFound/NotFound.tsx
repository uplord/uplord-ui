import styles from './not-found.module.scss'
import { Button } from '@/components/Button'

export const NotFound = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h2>Page not found</h2>
        <p>Sorry, we couldn’t find the page you’re looking for.</p>
        <Button
          label="Return home"
          href="/"
          size="sm"
          variant="default"
        />
      </div>
    </div>
  )
}
