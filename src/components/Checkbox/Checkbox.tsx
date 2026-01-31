import clsx from 'clsx'
import React from 'react'

import styles from './checkbox.module.scss'

export type CheckboxProps = {
  children?: React.ReactNode
  name: string
  id?: string
  value: string
  checked?: boolean
  helper?: string
  className?: string

  label?: string

  isToggle?: boolean

  isDisabled?: boolean
  isSkeleton?: boolean
  isError?: boolean

  hasHover?: boolean
  hasFocus?: boolean

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({
  children,
  name,
  id,
  value,
  checked,
  helper,
  className = '',

  label,

  isToggle = false,

  isDisabled = false,
  isSkeleton = false,
  isError = false,

  hasHover = true,
  hasFocus = true,

  onChange,
}: CheckboxProps) => {
  return (
    <div className={styles.field}>
      <div
        className={clsx(
          styles.checkbox,
          isToggle && styles['toggle'],
          (isDisabled || isSkeleton) && styles['is-disabled'],
          isSkeleton && styles['is-skeleton'],
          isError && styles['is-error'],
          hasHover && styles['has-hover'],
          hasFocus && styles['has-focus'],
          !children && !label && styles['no-placeholder'],
        )}>
        <input
          type="checkbox"
          id={id || name}
          name={name}
          value={value}
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
