'use client'

import clsx from 'clsx'
import Link from 'next/link'

import styles from './button.module.scss'
import { getContrastOklch, getHoverOklch, hexToOklch } from '@/lib/color'
import { RoundedCornersStyle } from '@/types/block'

export type VariantType = 'default' | 'primary' | 'text' | 'custom'

export enum Variant {
  Default = 'default',
  Primary = 'primary',
  Custom = 'custom',
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode
  label?: string
  href?: string
  target?: '_self' | '_blank'
  size?: 'sm' | 'md'
  variant?: VariantType
  color?: string
  hasIcon?: boolean
  outline?: boolean
  rounded?: RoundedCornersStyle
  hasPadding?: boolean
  hasHover?: boolean
  hasActive?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean
  className?: string
}

export const Button = ({
  children,
  label,
  href,
  target = '_self',
  size = 'md',
  variant = 'default',
  color,
  outline = false,
  rounded = 'sm',
  hasIcon = false,
  hasPadding = true,
  hasHover = true,
  hasActive = true,
  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  className = '',
  ...restProps
}: ButtonProps) => {
  const content = <>{children ? children : label}</>
  const currentVariant = variant === 'primary' ? 'custom' : variant
  const currentColor = variant === 'primary' ? '#e61919' : color

  const classes = clsx(
    styles.main,
    styles[`size-${size}`],
    styles[`variant-${currentVariant}`],
    outline && styles.outline,
    rounded && styles[`rounded-${rounded}`],
    hasIcon && styles.icon,
    hasPadding && styles.padding,
    hasHover && styles.hover,
    hasActive && styles.active,
    (isDisabled || isLoading || isSkeleton) && styles['is-disabled'],
    isLoading && styles['is-loading'],
    isSkeleton && styles['is-skeleton'],
    className,
  )

  const style = currentColor
    ? ({
        '--btn-color': (() => {
          const { l, c, h } = hexToOklch(currentColor)
          return `oklch(${l}% ${c} ${h})`
        })(),
        '--btn-hover-color': getHoverOklch(currentColor),
        '--btn-text': getContrastOklch(currentColor),
      } as React.CSSProperties)
    : undefined

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
      style={style}
      type="button"
      onClick={(e) => {
        if (isLoading) return
        if (restProps.onClick) restProps.onClick(e)
      }}>
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
