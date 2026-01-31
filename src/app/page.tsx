'use client'

import styles from './page.module.scss'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <h1>Home</h1>
            <Button
              variant="custom"
              color="#1064cb">
              <Icon name="User" />
              Example button
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
