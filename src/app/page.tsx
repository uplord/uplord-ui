'use client'

import styles from './page.module.css'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <Button label="Test" />
    </div>
  )
}
