import clsx from 'clsx'
import React from 'react'

import { ButtonProps } from '@/components/Button'
import styles from '@/components/modal.module.scss'

export type ModalFooterProps = {
  title?: string
  subtext?: string
  leading?: React.ReactNode
  trailing?: React.ReactNode
  fullWidth?: boolean
  hasBorder?: boolean
  hasShadow?: boolean
}

const isAnchorButton = (node: React.ReactNode): node is React.ReactElement<ButtonProps> => {
  return React.isValidElement<ButtonProps>(node) && node.props?.variant === 'text'
}

export const ModalFooter = ({
  title = '',
  subtext = '',
  leading,
  trailing,
  hasBorder = false,
  fullWidth = false,
}: ModalFooterProps) => {
  const hasAnchorLeading = isAnchorButton(leading)
  const hasAnchorTrailing = isAnchorButton(trailing)

  return (
    <div className={clsx(styles.footer, hasBorder && styles.border, fullWidth && styles.full)}>
      {(title || subtext || leading) && (
        <div className={clsx(styles.left, hasAnchorLeading && !title && !subtext && styles.anchor)}>
          {title || subtext ? (
            <div className={styles.text}>
              {title && <div className={styles.title}>{title}</div>}
              {subtext && <div className={styles.subtext}>{subtext}</div>}
            </div>
          ) : (
            <>{leading}</>
          )}
        </div>
      )}

      {trailing && (
        <div className={clsx(styles.right, hasAnchorTrailing && styles.anchor)}>{trailing}</div>
      )}
    </div>
  )
}
