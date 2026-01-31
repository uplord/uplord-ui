'use client'

import clsx from 'clsx'
import React, { useRef } from 'react'

import styles from '@/components/Input/input.module.scss'

export type TextareaProps = {
  label?: string
  placeholder?: string
  name: string
  id?: string
  value: string
  size?: 'sm' | 'md'
  helper?: string
  className?: string

  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  isError?: boolean

  hasHover?: boolean
  hasFocus?: boolean

  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea = ({
  label = '',
  placeholder = '',
  name,
  id,
  value,
  size = 'md',
  helper,
  className = '',

  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  isError = false,

  hasHover = true,
  hasFocus = true,

  onChange,
}: TextareaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleFocus = () => inputRef.current?.focus()

  return (
    <div className={clsx(styles.field, !placeholder && styles['no-placeholder'])}>
      {label && <label htmlFor={id || name}>{label}</label>}
      <div
        className={clsx(
          styles.outer,
          size && styles[size],
          className,
          (isDisabled || isLoading || isSkeleton) && styles['is-disabled'],
          isLoading && !isSkeleton && styles['is-loading'],
          isSkeleton && styles['is-skeleton'],
          isError && styles['is-error'],
          hasHover && styles['has-hover'],
          hasFocus && styles['has-focus'],
        )}
        onClick={handleFocus}>
        {isLoading && !isSkeleton && <div className={styles.loading}></div>}

        <div className={clsx(styles.inner)}>
          <textarea
            ref={inputRef}
            id={id || name}
            name={name}
            value={value}
            onChange={onChange}
            className={styles.input}
            placeholder=" "
            required
            aria-label={!label ? placeholder : ''}
            disabled={isDisabled || isLoading || isSkeleton}
          />

          <span className={styles.placeholder}>{placeholder}</span>
        </div>
      </div>

      {helper && <div className={styles.helper}>{helper}</div>}
    </div>
  )
}
