import clsx from 'clsx'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { ButtonProps } from '@/components/Button'
import styles from '@/components/modal.module.scss'

export type ModalHeaderProps = {
  title: string
  subtext?: string
  leading?: React.ReactNode
  trailing?: React.ReactNode
  hasBorder?: boolean
  sheet?: boolean
}

const isAnchorButton = (node: React.ReactNode): node is React.ReactElement<ButtonProps> => {
  return React.isValidElement<ButtonProps>(node) && node.props?.variant === 'text'
}

export const ModalHeader = ({
  title = '',
  subtext = '',
  leading,
  trailing,
  hasBorder = false,
  sheet = false,
}: ModalHeaderProps) => {
  const isMobile = useMediaQuery({ maxWidth: 743 })
  const hasAnchorLeading = isAnchorButton(leading)
  const hasAnchorTrailing = isAnchorButton(trailing)

  return (
    <div
      className={clsx(
        styles.header,
        hasBorder && styles.border,
        sheet && !isMobile && styles.sheet,
      )}>
      {leading && (
        <div className={clsx(styles.left, hasAnchorLeading && styles.anchor)}>{leading}</div>
      )}

      <div className={styles.top}>
        <div className={clsx(styles.title, !subtext && styles.large)}>{title}</div>
        {subtext && <div className={styles.subtext}>{subtext}</div>}
      </div>

      {trailing && (
        <div className={clsx(styles.right, hasAnchorTrailing && styles.anchor)}>{trailing}</div>
      )}
    </div>
  )
}
