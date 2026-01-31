import clsx from 'clsx'
import React from 'react'

import styles from '@/components/Checkbox/checkbox.module.scss'

export type RadioProps = {
  children?: React.ReactNode
  name: string
  id?: string
  value: string | boolean
  checked?: boolean
  helper?: string
  className?: string

  label?: string

  isDisabled?: boolean
  isSkeleton?: boolean
  isError?: boolean

  hasHover?: boolean
  hasFocus?: boolean

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio = ({
  children,
  name,
  id,
  value,
  checked,
  helper,
  className = '',

  label,

  isDisabled = false,
  isSkeleton = false,
  isError = false,

  hasHover = true,
  hasFocus = true,

  onChange,
}: RadioProps) => {
  return (
    <div className={styles.field}>
      <div
        className={clsx(
          styles.radio,
          (isDisabled || isSkeleton) && styles['is-disabled'],
          isSkeleton && styles['is-skeleton'],
          isError && styles['is-error'],
          hasHover && styles['has-hover'],
          hasFocus && styles['has-focus'],
        )}>
        <input
          type="radio"
          id={id || name}
          name={name}
          value={String(value)}
          onChange={onChange}
          className={clsx(styles.input, className)}
          checked={checked}
          aria-label={name}
          disabled={isDisabled || isSkeleton}></input>
        <label htmlFor={id || name}>
          {children
            ? children
            : label && (
                <div className={styles.title}>
                  <div className={styles.label}>{label}</div>
                </div>
              )}
        </label>
      </div>

      {helper && <div className={styles.helper}>{helper}</div>}
    </div>
  )
}
