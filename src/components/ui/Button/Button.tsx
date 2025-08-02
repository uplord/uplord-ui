'use client'

import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

import { Icon, IconProps } from '../../utils/Icon'
import styles from './button.module.scss'
import { VariantType } from '@/types/system'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode
  label?: string
  href?: string
  target?: '_blank' | '_self'
  size: 'sm' | 'md'
  variant: VariantType
  leadingIcon?: IconProps['name']
  trailingIcon?: IconProps['name']
  block?: boolean
  className?: string
  hasPadding?: boolean
  isIcon?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  hasHover?: boolean
  ariaLabel?: string
}

export const Button = ({
  children,
  label,
  href,
  target,
  size = 'md',
  variant = 'default',
  leadingIcon,
  trailingIcon,
  block = false,
  className = '',
  hasPadding = true,
  isIcon = false,
  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  hasHover = true,
  ariaLabel,
  ...restProps
}: ButtonProps) => {
  const content = (
    <>
      {children ? (
        <>{children}</>
      ) : (
        <span className={styles.content}>
          {leadingIcon && (
            <Icon
              name={leadingIcon}
              size="md"
              className={styles.icon}
            />
          )}
          {label}
          {trailingIcon && (
            <Icon
              name={trailingIcon}
              size="md"
              className={styles.icon}
            />
          )}
        </span>
      )}
    </>
  )

  const classes = clsx(
    styles.button,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    block && styles.block,
    className,
    hasPadding && styles.padding,
    (isDisabled || isLoading || isSkeleton) && styles['is-disabled'],
    isLoading && styles['is-loading'],
    isSkeleton && styles['is-skeleton'],
    hasHover && styles['has-hover'],
    (((leadingIcon || trailingIcon) && !label) || isIcon) && styles['has-icon'],
  )

  if (href) {
    return isSkeleton ? (
      <div
        className={classes}
        role="button"
        aria-disabled="true">
        {content}
      </div>
    ) : target === '_blank' ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}>
        {content}
      </a>
    ) : (
      <Link
        href={href}
        className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button
      className={classes}
      type="button"
      disabled={isDisabled || isLoading || isSkeleton}
      aria-label={ariaLabel ?? (!label && leadingIcon === 'X' ? 'Close' : undefined)}
      onClick={(e) => {
        if (isLoading) return
        if (restProps.onClick) restProps.onClick(e)
      }}
      {...restProps}>
      {content}
    </button>
  )
}

export type ButtonGroupProps = {
  children: React.ReactNode
  className?: string
  justify?: 'center' | 'start' | 'end'
}

export const ButtonGroup = ({ children, className, justify }: ButtonGroupProps) => {
  return (
    <div className={clsx(styles.group, className, justify && styles[`justify-${justify}`])}>
      {children}
    </div>
  )
}
