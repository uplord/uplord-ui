import clsx from 'clsx'

import styles from './alert.module.scss'

type AlertProps = {
  type: 'default' | 'primary' | 'error' | 'warning' | 'info' | 'success'
  title: string
  icon?: React.ReactNode
  button?: React.ReactNode
  className?: string
}

export const Alert = ({ type = 'default', title, icon, button, className = '' }: AlertProps) => {
  return (
    <div className={clsx(styles.alert, styles[type], className)}>
      <div className={styles.left}>
        {icon}
        {title}
      </div>
      {button && <div className={styles.right}>{button}</div>}
    </div>
  )
}
