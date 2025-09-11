'use client'

import clsx from 'clsx'

import styles from './alert.module.scss'

type AlertProps = {
  type: 'default' | 'error' | 'warning' | 'info' | 'success'
  title: string
  icon?: React.ReactNode
  button?: React.ReactNode
}

export const Alert = ({ type = 'default', title, icon, button }: AlertProps) => {
  return (
    <div className={clsx(styles.alert, styles[type])}>
      <div className={styles.left}>
        {icon}
        {title}
      </div>
      <div className={styles.right}>{button}</div>
    </div>
  )
}
