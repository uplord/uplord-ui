import React from 'react'

import styles from './colors.module.scss'

export type ColorsProps = {
  name: string
  color?: string | string[]
  border?: string | string[]
  focus?: string | string[]
}

export const Colors = ({ name = '', color = '', border = '', focus = '' }: ColorsProps) => {
  const background = Array.isArray(color) ? color[0] : color
  const borderColor = Array.isArray(border) ? border[0] : border
  const outlineColor = Array.isArray(focus) ? focus[0] : focus

  return (
    <div className={styles.color}>
      <div
        className={styles.background}
        style={{ background, borderColor, outlineColor }}
      />
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  )
}
