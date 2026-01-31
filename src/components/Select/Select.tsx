'use client'

import clsx from 'clsx'
import React, { useRef } from 'react'

import { Icon } from '@/components/Icon'
import styles from '@/components/Input/input.module.scss'

type Option = { value: string | number; label: string }

export type SelectProps = {
  label?: string
  placeholder?: string
  options: Option[]
  name: string
  id?: string
  value: string | number
  size?: 'sm' | 'md'
  helper?: string
  className?: string

  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  isError?: boolean

  hasHover?: boolean
  hasFocus?: boolean

  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({
  label = '',
  placeholder = '',
  options,
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
}: SelectProps) => {
  const selectRef = useRef<HTMLSelectElement>(null)

  return (
    <div className={clsx(styles.field, styles['no-placeholder'])}>
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
        )}>
        {isLoading && !isSkeleton && <div className={styles.loading}></div>}

        <div className={styles.inner}>
          <select
            ref={selectRef}
            id={id || name}
            name={name}
            value={value}
            onChange={onChange}
            className={styles.input}
            aria-label={!label ? id || name : ''}
            disabled={isDisabled || isLoading || isSkeleton}>
            {placeholder && <option value="">{placeholder}</option>}
            {options?.map((option) => (
              <option
                key={option.value}
                value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles['icon-wrap']}>
          <Icon
            name="ChevronDown"
            size="md"
            className={styles.icon}
          />
        </div>
      </div>

      {helper && <div className={styles.helper}>{helper}</div>}
    </div>
  )
}
