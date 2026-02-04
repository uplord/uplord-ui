import Image from 'next/image'
import Link from 'next/link'

import styles from './text.module.scss'

export function Test() {
  return (
    <div className={styles.main}>
      <Link href="/">Link</Link>
      <Image
        src="https://placehold.co/800x400/png"
        alt=""
        width="800"
        height="400"
      />
    </div>
  )
}
