import clsx from 'clsx'
import React from 'react'

import styles from '@/components/ui/Checkbox/checkbox.module.scss'

export type RadioProps = {
  name: string
  id?: string
  value: string
  checked?: boolean
  helper?: string
  className?: string

  label?: string
  total?: string
  content?: string

  isDisabled?: boolean
  isSkeleton?: boolean
  isError?: boolean

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio = ({
  name,
  id,
  value,
  checked,
  helper,
  className = '',

  label,
  total,
  content,

  isDisabled = false,
  isSkeleton = false,
  isError = false,

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
        )}>
        <input
          type="radio"
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          className={clsx(styles.input, className)}
          checked={checked}
          aria-label={name}
          disabled={isDisabled || isSkeleton}
        />
        <label htmlFor={id || name}>
          <div className={styles.title}>
            {label !== undefined && <div className={styles.label}>{!isSkeleton && label}</div>}
            {total !== undefined && <div className={styles.total}>{!isSkeleton && total}</div>}
          </div>
          {content !== undefined && <div className={styles.content}>{!isSkeleton && content}</div>}
        </label>
      </div>

      {helper && <div className={styles.helper}>{helper}</div>}
    </div>
  )
}
