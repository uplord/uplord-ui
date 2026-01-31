import React from 'react'

import styles from './colors.module.scss'

export type ColorsProps = {
  name: string
  color?: string | string[]
  border?: string | string[]
}

export const Colors = ({ name = '', color = '', border = '' }: ColorsProps) => {
  const background = Array.isArray(color) ? color[0] : color
  const borderColor = Array.isArray(border) ? border[0] : border

  return (
    <div className={styles.color}>
      <div
        className={styles.background}
        style={{ background, borderColor }}
      />
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  )
}
