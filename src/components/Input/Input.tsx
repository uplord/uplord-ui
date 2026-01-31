import clsx from 'clsx'
import React, { useRef, useState } from 'react'

import styles from './input.module.scss'
import { Button, ButtonProps } from '@/components/Button'
import { Icon, IconProps } from '@/components/Icon'

export type InputProps = {
  ref?: React.Ref<HTMLInputElement>
  type?: 'text' | 'email' | 'password' | 'number'
  label?: string
  placeholder?: string
  name: string
  id?: string
  value: string | number
  size?: 'sm' | 'md'
  helper?: string
  className?: string

  leadingIcon?: IconProps['name']
  leadingFunction?: () => void
  leadingText?: string
  trailingIcon?: IconProps['name']
  trailingFunction?: () => void
  trailingText?: string
  button?: Omit<ButtonProps, 'size'> & { size?: 'sm' }

  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  isError?: boolean

  hasHover?: boolean
  hasFocus?: boolean

  autoComplete?: string
  maxlength?: number

  readOnly?: boolean

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const Input = ({
  ref,
  type = 'text',
  label = '',
  placeholder = '',
  name,
  id,
  value,
  size = 'md',
  helper,
  className = '',

  leadingIcon,
  leadingFunction,
  leadingText = '',
  trailingIcon,
  trailingFunction,
  trailingText = '',
  button,

  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  isError = false,

  hasHover = true,
  hasFocus = true,

  onChange,

  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const combinedRef = (node: HTMLInputElement | null) => {
    if (typeof ref === 'function') {
      ref(node)
    } else if (ref && typeof ref === 'object') {
      ref.current = node
    }
    inputRef.current = node
  }

  const handleFocus = () => {
    if (ref && typeof ref === 'object' && 'current' in ref && ref.current) {
      ref.current.focus()
    } else if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const clearField = () => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: '',
        },
      } as React.ChangeEvent<HTMLInputElement>)
    }
  }

  const togglePasswordVisibility = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsPasswordVisible((prev) => !prev)
  }

  const handleLeadingClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    leadingFunction?.()
  }

  const handleTrailingClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (trailingIcon === 'X') clearField()
    trailingFunction?.()
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    button?.onClick?.(event)
  }

  return (
    <div className={clsx(styles.field, !placeholder && styles['no-placeholder'])}>
      {label && <label htmlFor={id || name}>{label}</label>}
      <div
        className={clsx(
          'outer',
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

        {leadingIcon && (
          <div
            onClick={leadingFunction && handleLeadingClick}
            className={clsx(styles['icon-wrap'], leadingFunction && styles.click)}>
            <Icon
              name={leadingIcon}
              size="md"
              className={clsx('icon', styles.icon)}
            />
          </div>
        )}

        {leadingText && <div className={styles.text}>{leadingText}</div>}

        <div className={clsx('inner', styles.inner)}>
          <input
            ref={combinedRef}
            type={type === 'password' && isPasswordVisible ? 'text' : type}
            id={id || name}
            name={name}
            value={value}
            onChange={onChange}
            className={clsx('input', styles.input)}
            placeholder=" "
            required
            aria-label={!label ? placeholder : ''}
            disabled={isDisabled || isLoading || isSkeleton}
            {...props}
          />
          <span className={clsx('placeholder', styles.placeholder)}>{placeholder}</span>
        </div>

        {trailingText && <div className={styles.text}>{trailingText}</div>}

        {type === 'password' && (
          <div
            onClick={togglePasswordVisibility}
            className={clsx(styles['icon-wrap'], styles.click)}>
            <Icon
              name={!isPasswordVisible ? 'EyeOff' : 'Eye'}
              size="md"
              className={clsx('icon', styles.icon)}
            />
          </div>
        )}

        {trailingIcon && !(trailingIcon === 'X' && (!value || isDisabled)) && (
          <div
            onClick={handleTrailingClick}
            className={clsx(
              styles['icon-wrap'],
              trailingFunction || trailingIcon === 'X' ? styles.click : '',
            )}>
            <Icon
              name={trailingIcon}
              size="md"
              className={clsx('icon', styles.icon)}
            />
          </div>
        )}

        {button && (
          <Button
            {...button}
            size="sm"
            variant={button.variant || 'primary'}
            className={styles.button}
            isDisabled={isDisabled || isLoading || isSkeleton}
            onClick={handleButtonClick}
          />
        )}
      </div>

      {helper && <div className={styles.helper}>{helper}</div>}
    </div>
  )
}
