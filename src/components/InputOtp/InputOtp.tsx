import clsx from 'clsx'
import { useState, useRef } from 'react'

import styles from './input-otp.module.scss'
import { Input } from '@/components/Input'

export type InputOtpProps = {
  name: string
  id?: string
  value: string

  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  isError?: boolean

  onChange: (value: string) => void
}

export const InputOtp = ({
  name,
  id,
  value,
  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  isError = false,
  onChange,
}: InputOtpProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const numericValue = rawValue.replace(/\D/g, '')

    if (numericValue.length <= 6) {
      onChange(numericValue)
    } else {
      onChange(value.slice(0, 5) + numericValue.slice(-1))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (['e', 'E', '+', '-'].includes(e.key)) {
      e.preventDefault()
    }
  }

  const handleActiveIndex = () => {
    inputRef.current?.focus()
  }

  const activeIndex = value.length < 6 ? value.length : 5

  return (
    <div
      className={clsx(
        styles.group,
        (isDisabled || isLoading || isSkeleton) && styles['is-disabled'],
        isLoading && !isSkeleton && styles['is-loading'],
        isSkeleton && styles['is-skeleton'],
        isError && styles['is-error'],
      )}>
      {isLoading && !isSkeleton && <div className={styles.loading}></div>}
      <div className={styles.list}>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={clsx(styles.item, {
              [styles.active]: isFocused && index === activeIndex,
            })}
            onClick={handleActiveIndex}>
            {value[index] || ''}
          </div>
        ))}
      </div>
      <div className={styles.list}>
        {[3, 4, 5].map((index) => (
          <div
            key={index}
            className={clsx(styles.item, {
              [styles.active]: isFocused && index === activeIndex,
            })}
            onClick={handleActiveIndex}>
            {value[index] || ''}
          </div>
        ))}
      </div>
      <div className={styles.input}>
        <Input
          ref={inputRef}
          type="number"
          id={id || name}
          name={name}
          value={value}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isSkeleton={isSkeleton}
          isError={isError}
          autoComplete="off"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  )
}
