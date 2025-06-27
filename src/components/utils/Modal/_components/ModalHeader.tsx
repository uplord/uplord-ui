import clsx from 'clsx'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from '../modal.module.scss'
import { ButtonProps } from '@/components/ui/Button'

export type ModalHeaderProps = {
  title?: string
  subtext?: string
  trailing?: React.ReactNode
  sheet?: boolean
}

const isAnchorButton = (node: React.ReactNode): node is React.ReactElement<ButtonProps> => {
  return React.isValidElement<ButtonProps>(node) && node.props?.variant === 'anchor'
}

export const ModalHeader = ({
  title = '',
  subtext = '',
  trailing,
  sheet = false,
}: ModalHeaderProps) => {
  const isMobile = useMediaQuery({ maxWidth: 743 })
  const hasAnchorTrailing = isAnchorButton(trailing)

  return (
    <div className={clsx(styles.header, sheet && !isMobile && styles.sheet)}>
      {(title || subtext) && (
        <div className={styles.top}>
          <div className={clsx(styles.title, !subtext && styles.large)}>{title}</div>
          {subtext && <div className={styles.subtext}>{subtext}</div>}
        </div>
      )}

      {trailing && (
        <div className={clsx(styles.right, hasAnchorTrailing && styles.anchor)}>{trailing}</div>
      )}
    </div>
  )
}
